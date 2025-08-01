<?php
// +----------------------------------------------------------------------
// | AI系统管理后台（PHP版）
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | 开源版本可自由商用，可去除界面版权logo
// | gitee下载：/likeadmin
// | //
// | 访问官网：www.localhost.com
// | 匿名公司 版权所有 拥有最终解释权
// +----------------------------------------------------------------------
// | author: 匿名开发者
// +----------------------------------------------------------------------

namespace app\common\command;

use app\common\enum\CrontabEnum;
use Exception;
use think\console\Command;
use think\console\Input;
use think\console\Output;
use Cron\CronExpression;
use think\facade\Console;
use app\common\model\Crontab as CrontabModel;

/**
 * 定时任务
 * Class Crontab
 * @package app\command
 */
class Crontab extends Command
{
    protected function configure(): void
    {
        $this->setName('crontab')
            ->setDescription('定时任务');
    }

    /**
     * @notes 执行
     * @param Input $input
     * @param Output $output
     * @return void
     * @throws @\think\db\exception\DataNotFoundException
     * @throws @\think\db\exception\DbException
     * @throws @\think\db\exception\ModelNotFoundException
     */
    protected function execute(Input $input, Output $output)
    {
        $lists = (new CrontabModel())->where('status', CrontabEnum::START)->select()->toArray();
        if (empty($lists)) {
            return;
        }

        foreach ($lists as $item) {
            $nextTime = (new CronExpression($item['expression']))
                ->getNextRunDate($item['last_time'])
                ->getTimestamp();

            // 未到时间,不执行
            if ($nextTime > time()) {
                continue;
            }

            // 开始执行
            self::start($item);
        }
    }

    /**
     * @notes 开始
     * @param $item
     */
    public static function start($item)
    {
        // 开始执行
        $startTime = microtime(true);
        try {
            $params = explode(' ', $item['params']);
            if (is_array($params) && !empty($item['params'])) {
                Console::call($item['command'], $params);
            } else {
                Console::call($item['command']);
            }
            // 清除错误信息
            (new CrontabModel())->where('id', $item['id'])->update(['error' => '']);
        } catch (Exception $e) {
            // 记录错误信息
            (new CrontabModel())->where('id', $item['id'])->update([
                'error' => $e->getMessage(),
                'status' => CrontabEnum::ERROR
            ]);
        } finally {
            $endTime = microtime(true);
            // 本次执行时间
            $useTime = round(($endTime - $startTime), 2);
            // 最大执行时间
            $maxTime = max($useTime, $item['max_time']);
            // 更新最后执行时间
            (new CrontabModel())->where('id', $item['id'])->update([
                'last_time' => time(),
                'time' => $useTime,
                'max_time' => $maxTime
            ]);
        }
    }
}