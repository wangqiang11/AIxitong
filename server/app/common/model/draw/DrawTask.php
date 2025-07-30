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

namespace app\common\model\draw;

use app\common\model\BaseModel;
use think\model\concern\SoftDelete;

/**
 * 绘画任务
 * Class DrawTask
 * @package app\common\model\draw
 */
class DrawTask extends BaseModel
{
    use SoftDelete;
    protected $deleteTime = 'delete_time';


}