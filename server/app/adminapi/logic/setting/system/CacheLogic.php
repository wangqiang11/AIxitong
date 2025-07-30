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

namespace app\adminapi\logic\setting\system;

use app\common\logic\BaseLogic;
use think\facade\Cache;

/**
 * 系统缓存逻辑
 */
class CacheLogic extends BaseLogic
{
    /**
     * @notes 清楚系统缓存
     * @author 段誉
     * @date 2022/4/8 16:29
     */
    public static function clear()
    {
       Cache::clear();
       del_target_dir(app()->getRootPath().'runtime/file',true);
    }
}