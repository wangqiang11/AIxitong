<?php
// +----------------------------------------------------------------------
// | AI系统管理后台（PHP版）
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | 开源版本可自由商用，可去除界面版权logo
// | //
// | //
// | 访问官网：www.localhost.com
// | 匿名公司 版权所有 拥有最终解释权
// +----------------------------------------------------------------------
// | author: 匿名开发者
// +----------------------------------------------------------------------

namespace app\common\command;

use app\api\logic\draw\DrawLogic;
use app\common\enum\draw\DrawEnum;
use app\common\model\draw\DrawRecords;
use app\common\service\ConfigService;
use app\common\service\draw\engine\DrawAceData;
use app\common\service\draw\engine\DrawDoubao;
use app\common\service\draw\engine\DrawMj;
use app\common\service\FileService;
use think\console\Command;
use think\console\Input;
use think\console\Output;
use think\facade\Cache;
use think\facade\Log;

/**
 * 绘画失败处理
 * Class DrawFail
 * @package app\common\command
 */
class DrawFail extends Command
{
    protected function configure()
    {
        $this->setName('draw_fail')
            ->setDescription('处理生成超时的绘画记录');
    }

    protected function execute(Input $input, Output $output): bool
    {
        $recordModel = new DrawRecords();
        $records     = $recordModel->where(['status' => DrawEnum::STATUS_IN_PROGRESS])
            ->limit(10)
            ->select()
            ->toArray();

        if (empty($records)) {
            return true;
        }

        $nowTime = time();
        foreach ($records as $record) {
            $defaultConfig = DrawEnum::getDrawDefaultConfig($record['model']);
            $drawConfig    = ConfigService::get('draw_config', $record['model'], $defaultConfig);
            $expireTime    = ($drawConfig['time_out'] ?? 10) * 60;

            $createTime = strtotime($record['create_time']);
            if ($nowTime < $createTime + $expireTime) {
                continue;
            }

            $failReason = '任务响应失败';

            if (str_contains($record['model'], DrawEnum::API_MJ)) {
                $flag = $this->mjCheck($record);
                if ($flag === true) {
                    continue;
                }
                if (!empty($flag)) {
                    $failReason .= '(' . $flag . ')';
                }
            }

            if ($record['model'] == DrawEnum::API_DOUBAO) {
                $flag = $this->doubaoCheck($record);
                if ($flag === true) {
                    continue;
                }
                if (!empty($flag)) {
                    $failReason .= '(' . $flag . ')';
                }
            }

            $drawLogic = new DrawLogic($record['user_id'], ['draw_api' => $record['model']]);
            $drawLogic->failRecordHandle($record, ['fail_reason' => $failReason]);
        }

        return true;
    }


    /**
     * @notes mj任务查询
     * @param $record
     * @return bool|string
     * @author mjf
     * @date 2024/8/15 15:17
     */
    private function mjCheck($record): bool|string
    {
        try {
            if (empty($record['task_id'])) {
                return false;
            }

            if ($record['model'] == DrawEnum::API_MJ_GOAPI) {
                $service   = new DrawMj();
                $response  = $service->fetch($record['task_id']);
                $drawLogic = new DrawLogic($record['user_id'], ['draw_api' => DrawEnum::API_MJ]);
                return $drawLogic->notifyMj($response);
            } else {
                $service   = new DrawAceData();
                $response  = $service->fetch($record['task_id']);
                $drawLogic = new DrawLogic($record['user_id'], ['draw_api' =>  DrawEnum::API_MJ]);
                return $drawLogic->notifyMjAceData($response['response']);
            }

        } catch (\Exception $e) {
            Log::write('mj查询任务失败' . $e->getMessage());
            return $e->getMessage();
        }
    }

    /**
     * @notes 豆包绘画处理
     * @param $record
     * @return bool|string
     * @author mjf
     */
    private function doubaoCheck($record): bool|string
    {
        try {
            $lockKey = 'draw_handle_' . $record['id'];
            $lockData = Cache::get($lockKey);
            if (!empty($lockData)) {
                return false;
            }
            Cache::set($lockKey, $record['id'], 180);

            // 图生图
            if ($record['engine'] == 'i2i_xl_sft') {
                $service       = new DrawDoubao();
                $reqData       = [
                    'prompt'     => $record['prompt'],
                    'image_base' => FileService::getFileUrl($record['image_base']),
                ];
                $complexParams = json_decode($record['complex_params'], true);
                if (!empty($complexParams['seed'])) {
                    $reqData['seed'] = $complexParams['seed'];
                }
                if (!empty($complexParams['ddim_steps'])) {
                    $reqData['ddim_steps'] = $complexParams['ddim_steps'];
                }

                $response  = $service->imageToImage($reqData);
                $drawLogic = new DrawLogic($record['user_id'], ['draw_api' => $record['model']]);
                return $drawLogic->notifyDoubao($record['id'], $response);
            } else {
                if (empty($record['task_id'])) {
                    return false;
                }

                $service  = new DrawDoubao();
                $response = $service->fetch($record['engine'], $record['task_id']);

                if ($response['status'] == 'done') {
                    $drawLogic = new DrawLogic($record['user_id'], ['draw_api' => $record['model']]);
                    return $drawLogic->notifyDoubao($record['id'], $response);
                }
            }

            return false;

        } catch (\Exception $e) {
            Log::write('豆包查询任务失败' . $e->getMessage());
            return $e->getMessage();
        } finally {
            Cache::delete($lockKey);
        }
    }

}