<?php

namespace app\api\logic;

use app\api\service\PPTService;
use app\common\enum\member\MemberPackageEnum;
use app\common\enum\PayEnum;
use app\common\enum\PPTEnum;
use app\common\logic\BaseLogic;
use app\common\logic\UserMemberLogic;
use app\common\model\ppt\PptRecord;
use app\common\model\user\User;
use app\common\service\ai\ppt\ChatPPTService;
use app\common\service\ConfigService;
use app\common\service\FileService;
use Exception;

/**
 * AI-PPT逻辑类
 */
class PptLogic extends BaseLogic
{
    /**
     * @notes 配置
     * @param int $userId
     * @return array
     */
    public static function config(int $userId): array
    {
        $isVipFree = false;
        $vips      = UserMemberLogic::getUserPackageApply($userId, MemberPackageEnum::APPLY_PPT);
        foreach ($vips as $item) {
            if (!$item['is_limit'] || $item['surplus_num']) {
                $isVipFree = true; // VIP免费, true表示本次免费
                break;
            }
        }

        $config  = ConfigService::get('ai_ppt');
        $default = PPTEnum::getChannelDefaultConfig(PPTEnum::CHAT_PPT);
        return [
            'status'    => $config['status'] ?? 0,
            'price'     => $config['price'] ?? $default['price'],
            'isVipFree' => $isVipFree
        ];
    }

    /**
     * @notes 示例
     * @return array
     * @author mjf
     * @date 2024/9/29 13:48
     */
    public static function example(): array
    {
        $config        = ConfigService::get('ai_ppt');
        $exampleStatus = intval($config['example_status'] ?? 0);
        if ($exampleStatus) {
            $content = $config['example_content'] ?? '';
            $arr     = explode('#', trim($content));
            $data    = [];
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

    /**
     * @notes 提交任务
     * @param $userId
     * @param $params
     * @return bool|array
     * @author mjf
     * @date 2024/10/8 15:17
     */
    public static function submitTask($userId, $params): bool|array
    {
        try {
            $pptService = new PPTService($userId, $params);
            $pptService->submit();
            $recordId = $pptService->getTaskRecordId();
            return ['record_id' => $recordId];
        } catch (Exception $e) {
            self::$error = $e->getMessage();
            return false;
        }
    }

    /**
     * @notes 获取模版封面
     * @param $userId
     * @param $params
     * @return bool|array
     * @author mjf
     * @date 2024/10/8 17:28
     */
    public static function getCoverLists($userId, $params): bool|array
    {
        try {
            if (empty($params['prompt'])) {
                throw new Exception('主题描述参数缺失');
            }

            $user = (new User())->findOrEmpty($userId);

            $pptService = new ChatPPTService($userId);
            $response   = $pptService->cover([
                'title'     => $params['prompt'],
                'user_name' => $user['nickname'] ?? '',
                'color'     => $params['color'] ?? '',
                'style'     => $params['style'] ?? '',
            ]);

            foreach ($response as $key => $value) {
                unset($response[$key]['color_list']);
            }

            return $response;

        } catch (Exception $e) {
            self::$error = $e->getMessage();
            return false;
        }
    }

    /**
     * @notes 获取大纲及标题
     * @param $userId
     * @param $params
     * @return bool|array
     * @author mjf
     * @date 2024/10/8 17:45
     */
    public static function getStructure($userId, $params): bool|array
    {
        try {
            if (empty($params['prompt'])) {
                throw new Exception('主题描述参数缺失');
            }

            $pptService = new ChatPPTService($userId);
            return $pptService->structure([
                'text' => $params['prompt'],
            ]);

        } catch (Exception $e) {
            self::$error = $e->getMessage();
            return false;
        }
    }

    /**
     * @notes 详情
     * @param $userId
     * @param $params
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @author mjf
     * @date 2024/10/10 11:44
     */
    public static function detail($userId, $params): array
    {
        if (empty($params['id'])) {
            return [];
        }
        $model = new PptRecord();
        $lists = $model
            ->where(['user_id' => $userId])
            ->whereIn('id', $params['id'])
            ->hidden(['response', 'cover_id', 'catalog', 'price', 'update_time', 'delete_time'])
            ->select()
            ->toArray();

        foreach ($lists as &$item) {
            if (!empty($item['file_url'])) {
                $item['pay_status'] = PayEnum::ISPAID;
            }
        }

        return $lists;
    }

    /**
     * @notes 删除
     * @param int|array $params
     * @param $userId
     * @return bool
     * @author mjf
     * @date 2024/10/29 19:55
     */
    public static function del(int|array $params, $userId): bool
    {
        return PptRecord::destroy(['user_id' => $userId, 'id' => $params['id'] ?? 0]);
    }

    /**
     * @notes 扣费，下载
     * @param int $userId
     * @param int $id
     * @return bool|array
     * @author mjf
     */
    public static function download(int $userId, int $id): bool|array
    {
        $recordModel = new PptRecord();
        $recordModel->startTrans();
        try {
            $record = $recordModel->where(['id' => $id, 'user_id' => $userId])->findOrEmpty();
            if ($record->isEmpty()) {
                throw new Exception('记录不存在');
            }

            if (!empty($record['file_url'])) {
                return ['file_url' => FileService::getFileUrl($record['file_url'])];
            }

            $pptService = new PPTService($userId);
            // 扣除用户余额
            $pptService->checkUser();
            $pptService->decBalance();

            // 下载PPT文件
            $fileUrl = $pptService->downloadPPT($id);
            if (empty($fileUrl)) {
                throw new Exception('下载失败');
            }

            $price = $pptService->getPrice();
            $recordModel->where('id', $id)->update([
                'file_url'   => $fileUrl,
                'price'      => $price,
                'pay_status' => PayEnum::ISPAID
            ]);

            $recordModel->commit();

            return ['file_url' => FileService::getFileUrl($fileUrl)];

        } catch (Exception $e) {
            $recordModel->rollback();
            self::$error = $e->getMessage();
            return false;
        }
    }
}