<?php
// +----------------------------------------------------------------------
// | AI系统管理后台（PHP版）
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | 开源版本可自由商用，可去除界面版权logo
// | //
// | github下载：/likeadmin
// | 访问官网：www.localhost.com
// | 匿名公司 版权所有 拥有最终解释权
// +----------------------------------------------------------------------
// | author: 匿名开发者
// +----------------------------------------------------------------------

namespace app\common\command;

use app\api\service\PPTService;
use app\common\enum\PPTEnum;
use app\common\enum\user\AccountLogEnum;
use app\common\model\ppt\PptRecord;
use app\common\model\user\User;
use app\common\model\user\UserAccountLog;
use app\common\service\ai\ppt\ChatPPTService;
use app\common\service\ConfigService;
use app\common\service\storage\Driver as StorageDriver;
use Exception;
use think\console\Command;
use think\console\Input;
use think\console\Output;
use think\facade\Cache;
use think\facade\Log;

class QueryPPT extends Command
{
    protected function configure(): void
    {
        $this->setName('query_ppt')
            ->setDescription('AI-PPT查询处理');
    }

    protected function execute(Input $input, Output $output): bool
    {
        try {
            $recordModel = new PptRecord();
            $records     = $recordModel
                ->where(['status' => PPTEnum::STATUS_IN_PROGRESS])
                ->limit(5)
                ->select()
                ->toArray();

            if (empty($records)) {
                return false;
            }

            foreach ($records as $record) {
                match ($record['channel']) {
                    PPTEnum::CHAT_PPT => $this->queryChatPPT($record),
                };
            }

            return true;
        } catch (Exception $e) {
            Log::write('AI-PPT任务查询失败:' . $e->getMessage());
            return false;
        }
    }

    /**
     * @notes ppt处理
     * @param $record
     * @throws Exception
     * @author mjf
     * @date 2024/10/9 16:42
     */
    protected function queryChatPPT($record): void
    {
        try {
            $lockKey  = "ppt_task_" . $record['id'];
            $lockData = Cache::get($lockKey);
            if (!empty($lockData)) {
                return;
            }

            Cache::set($lockKey, json_encode($record, JSON_UNESCAPED_UNICODE), 180);

            // 查询ppt任务
            $chatPPTService = new ChatPPTService($record['user_id']);
            $response       = $chatPPTService->result($record['task_id']);

            if (!isset($response['status'])) {
                throw new Exception('响应信息异常');
            }

            switch ($response['status']) {
                case PPTEnum::STATUS_IN_PROGRESS:
                    PptRecord::update([
                        'progress' => $response['progress'] ?? 0,
                        'title'    => $response['ppt_title'] ?? $record['title'],
                    ], ['id' => $record['id']]);

                    $this->checkTaskOvertime($record, $response);
                    break;
                case PPTEnum::STATUS_SUCCESS:
                    $previewSavePath = 'uploads/ppt/' . date('Ymd') . '/' . $record['id'] . '/';

                    // 预览图
                    $preview = [];
                    if (!empty($response['images_url'])) {
                        foreach ($response['images_url'] as $imageItem) {
                            $pptService = new PPTService($record['user_id']);
                            $imageUrl   = $pptService->downloadFile($imageItem['url'], $previewSavePath);
                            if (!empty($imageUrl)) {
                                $preview[] = $imageUrl;
                            }
                        }
                    }

                    PptRecord::update([
                        'progress' => 100,
                        'preview'  => $preview,
                        'response' => $response,
                        'status'   => PPTEnum::STATUS_SUCCESS,
                    ], ['id' => $record['id']]);

                    break;
                case PPTEnum::STATUS_FAIL:
                    PptRecord::update([
                        'status'      => PPTEnum::STATUS_FAIL,
                        'fail_reason' => $response['state_description'] ?? '',
                        'response'    => $response,
                    ], ['id' => $record['id']]);
                    break;
            }

        } catch (Exception $e) {
            $this->checkTaskOvertime($record, [], $e->getMessage());
            throw new Exception($e->getMessage());
        } finally {
            Cache::delete($lockKey);
        }
    }


    /**
     * @notes 任务失败
     * @param $task
     * @param $response
     * @param string $error
     * @author mjf
     * @date 2024/5/30 14:22
     */
    protected function checkTaskOvertime($task, $response, string $error = '超时响应'): void
    {
        $timeout = 10 * 60;

        $task['create_time'] = is_string($task['create_time'])
            ? strtotime($task['create_time'])
            : $task['create_time'];

        if (time() - $timeout > $task['create_time']) {
            $this->failHandle($task, $response, $error);
        }
    }

    /**
     * @notes 错误处理
     * @param $record
     * @param $response
     * @param string $error
     * @author mjf
     * @date 2024/6/11 18:24
     */
    protected function failHandle($record, $response, string $error = '超时响应'): void
    {
        PptRecord::update([
            'fail_reason' => $error,
            'response'    => json_encode($response, JSON_UNESCAPED_UNICODE),
            'status'      => PPTEnum::STATUS_FAIL,
            'update_time' => time()
        ], ['id' => $record['id']]);

        // 回退用户金额
        $this->backBalance($record['user_id'], $record['tokens']);
    }

    /**
     * @notes 回退余额
     * @param $price
     * @param $userId
     * @author mjf
     * @date 2024/5/30 11:50
     */
    protected function backBalance($userId, $price): void
    {
        $user = (new User())->where('id', $userId)->findOrEmpty();

        if ($price <= 0) {
            return;
        }

        $user->balance = $user['balance'] + $price;
        $user->save();

        // 钱包变动
        $changeType   = AccountLogEnum::UM_INC_PPT;
        $changeAction = AccountLogEnum::INC;
        UserAccountLog::add($userId, $changeType, $changeAction, $price);
    }


}