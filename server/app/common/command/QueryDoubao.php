<?php
// +----------------------------------------------------------------------
// | AI系统管理后台（PHP版）
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | 开源版本可自由商用，可去除界面版权logo
// | gitee下载：https://gitee.com/AI系统_gitee/likeadmin
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
use app\common\service\draw\engine\DrawDoubao;
use app\common\service\FileService;
use think\console\Command;
use think\console\Input;
use think\console\Output;
use think\facade\Cache;
use think\facade\Log;

/**
 * Class QueryDoubao
 * @package app\common\command
 */
class QueryDoubao extends Command
{
    protected function configure()
    {
        $this->setName('query_doubao')
            ->setDescription('豆包绘画处理');
    }

    protected function execute(Input $input, Output $output): bool
    {
        $recordModel = new DrawRecords();
        $records     = $recordModel->where(['status' => DrawEnum::STATUS_IN_PROGRESS])
            ->where('model', DrawEnum::API_DOUBAO)
            ->limit(10)
            ->select()
            ->toArray();

        if (empty($records)) {
            return true;
        }

        $nowTime = time();
        foreach ($records as $record) {
            $defaultConfig = DrawEnum::getDrawDefaultConfig(DrawEnum::API_DOUBAO);
            $drawConfig    = ConfigService::get('draw_config', DrawEnum::API_DOUBAO, $defaultConfig);
            $expireTime    = ($drawConfig['time_out'] ?? 10) * 60;

            // 超时任务由draw_fail处理
            $createTime = strtotime($record['create_time']);
            if ($nowTime > $createTime + $expireTime) {
                continue;
            }

            $this->doubaoCheck($record);
        }

        return true;
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
            $lockKey  = 'draw_handle_' . $record['id'];
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