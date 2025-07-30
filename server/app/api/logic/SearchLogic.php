<?php

namespace app\api\logic;

use app\common\enum\member\MemberPackageEnum;
use app\common\enum\user\AccountLogEnum;
use app\common\logic\BaseLogic;
use app\common\logic\UserMemberLogic;
use app\common\model\search\AiSearchRecord;
use app\common\model\user\User;
use app\common\model\user\UserAccountLog;
use app\common\service\ai\ChatService;
use app\common\service\ai\search\TiangongService;
use app\common\service\ConfigService;
use app\common\service\WordsService;
use Exception;
use think\facade\Log;

/**
 * AI搜索逻辑类
 */
class SearchLogic extends BaseLogic
{

    /**
     * @notes 搜索记录列表
     * @param array $get
     * @param int $userId
     * @return array
     * @throws @\think\db\exception\DbException
     */
    public static function lists(array $get, int $userId): array
    {
        $pageNo   = intval($get['page_no']   ?? 1);
        $pageSize = intval($get['page_size'] ?? 25);

        $lists = (new AiSearchRecord())
            ->field(['id,model,type,ask,price,create_time'])
            ->where(['user_id'=>$userId])
            ->order('id desc')
            ->paginate([
                'page'      => $pageNo,
                'list_rows' => $pageSize,
                'var_page'  => 'page'
            ])
            ->toArray();

        return [
            'page_no'   => $pageNo,
            'page_size' => $pageSize,
            'count'     => $lists['total'] ?? 0,
            'lists'     => $lists['data'] ?? []
        ] ?? [];
    }

    /**
     * @notes AI搜索记录详情
     * @param int $id
     * @param int $userId
     * @return array
     */
    public static function detail(int $id, int $userId): array
    {
        $detail = (new AiSearchRecord())
            ->withoutField('user_id,markdown,ip,delete_time')
            ->where(['id'=>$id])
            ->where(['user_id'=>$userId])
            ->findOrEmpty()
            ->toArray();

        if ($detail) {
            $detail['results'] = json_decode($detail['results'], true);
        }

        return $detail;
    }

    /**
     * @notes AI搜索配置
     * @param int $userId
     * @return array
     */
    public static function config(int $userId): array
    {
        $isVipFree = false;
        $vips = UserMemberLogic::getUserPackageApply($userId, MemberPackageEnum::APPLY_AISEARCH);
        foreach ($vips as $item) {
            if ($item['channel'] == 'aisearch') {
                if (!$item['is_limit'] || $item['surplus_num']) {
                    $isVipFree = true; // VIP免费, true表示本次免费
                    break;
                }
            }
        }

        $config = ConfigService::get('ai_search');
        return [
            'status' => $config['status'] ?? 0,
            'price'  => $config['price']  ?? 0,
            'isVipFree' => $isVipFree
        ];
    }

    /**
     * @notes 查询
     * @param int $userId
     * @param int $probe
     * @param string $model
     * @param string $type
     * @param string $ask
     * @return void
     * @author fzr
     */
    public static function query(int $userId, int $probe, string $model, string $type, string $ask): void
    {
        header('Access-Control-Allow-Origin: *');
        header('Connection: keep-alive');
        header('Content-Type: text/event-stream');
        header('Cache-Control: no-cache');
        header('X-Accel-Buffering: no');

        $config = ConfigService::get('ai_search');
        $status = $config['status'] ?? 0;
        $price  = $config['price']  ?? 0;
        $isVipFree = false;

        $charging = false;
        try {
            // 服务状态验证
            if (!$status) {
                throw new Exception('AI搜索功能已关闭');
            }

            // 用户身份验证
            $userModel = new User();
            $user = $userModel->where(['id'=>$userId])->findOrEmpty();
            if (!$user || $user['is_blacklist']) {
                $error = !$user ? '账号异常请重新登录' : '您的账号已被禁用,请联系管理员';
                throw new Exception($error);
            }

            $vips = UserMemberLogic::getUserPackageApply($userId, MemberPackageEnum::APPLY_AISEARCH);
            foreach ($vips as $item) {
                if ($item['channel'] == 'aisearch') {
                    if (!$item['is_limit'] || $item['surplus_num']) {
                        $isVipFree = true; // VIP免费, true表示本次免费
                        $price = 0;
                        break;
                    }
                }
            }

            // 敏感词验证(自定)
            WordsService::sensitive($ask);

            // 问题审核(百度)
            WordsService::askCensor($ask);

            // 先进行余额扣费
            if ($price and !$isVipFree) {
                $unit = ConfigService::get('chat', 'price_unit', '算力');
                $usePrice = $user['balance'] - $price;
                if ($usePrice < 0) {
                    throw new Exception('抱歉您'.$unit.'不足,请先充值!', 1100);
                }
                try {
                    User::update(['balance' => ['dec', $price]], ['id' => $userId]);
                    UserAccountLog::add($userId, AccountLogEnum::UM_DEC_SEARCH, AccountLogEnum::DEC, $price);
                } catch (Exception) {
                    throw new Exception('抱歉你'.$unit.'不足,请先充值!', 1100);
                }
                $charging = true; // 已进行扣费
            }

            // 调用搜索模型
            $aiServer = new TiangongService($userId);
            $aiServer->query($model, $type, $ask, (bool)$probe);
            $content = $aiServer->getContent();
            $context = $aiServer->getContext();


            $dataList = [];
            $markdown = '';
            foreach ($content as &$item) {
                if ($item['type'] == 'markdown') {
                    $markdown .= $item['content'];
                    if ($item['target'] == 'finish') {
                        $item['content'] = $markdown;
                        $dataList[] = $item;
                    }
                } else {
                    $dataList[] = $item;
                }
            }

            // 记录搜索结果
            $record = AiSearchRecord::create([
                'user_id'     => $userId,
                'channel'     => 'tiangong',
                'model'       => $model,
                'type'        => $type,
                'ask'         => $ask,
                'markdown'    => $markdown,
                'context'     => json_encode($context, JSON_UNESCAPED_UNICODE|JSON_UNESCAPED_SLASHES),
                'results'     => json_encode($dataList, JSON_UNESCAPED_UNICODE|JSON_UNESCAPED_SLASHES),
                'price'       => $price,
                'ip'          => request()->ip(),
                'create_time' => time(),
                'update_time' => time()
            ]);

            ChatService::AiSearchOutput('finish', 'stop', 'primary', ['id'=>$record['id']]);
        } catch (Exception $e) {
            if ($price and $charging and !$isVipFree) {
                User::update(['balance' => ['inc', $price]], ['id' => $userId]);
                UserAccountLog::add($userId, AccountLogEnum::UM_INC_SEARCH, AccountLogEnum::INC, $price);
            }
            Log::write('AI天工搜索错误: ' . $e->getFile() . ' : ' . $e->getLine() . ' : ' .$e->getMessage());
            ChatService::AiSearchOutput('error', $e->getCode(), 'end', $e->getMessage());
        }
    }

    /**
     * @notes 搜索示例
     * @return array
     * @author fzr
     */
    public static function example(): array
    {
        $config = ConfigService::get('ai_search');
        $example_status = intval($config['example_status']??0);
        if ($example_status) {
            $content = $config['example_content']??'';
            $arr = explode('#', trim($content));
            $data = [];
            foreach ($arr as $text) {
               $s = trim($text);
               if ($s) {
                   $data[] = $s;
               }
            }
            return $data;
        }
        return [];
    }
}