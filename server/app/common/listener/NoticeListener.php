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

namespace app\common\listener;

use app\common\logic\NoticeLogic;
use Exception;
use think\facade\Log;

/**
 * 通知事件监听
 * Class NoticeListener
 * @package app\listener
 */
class NoticeListener
{
    public function handle($params): bool|string
    {
        try {
            if (empty($params['scene_id'])) {
                throw new Exception('场景ID不能为空');
            }
            // 根据不同的场景发送通知
            $result = NoticeLogic::noticeByScene($params);
            if (false === $result) {
                throw new Exception(NoticeLogic::getError());
            }
            return true;
        } catch (Exception $e) {
            Log::write('通知发送失败:'.$e->getMessage());
            return $e->getMessage();
        }
    }
}