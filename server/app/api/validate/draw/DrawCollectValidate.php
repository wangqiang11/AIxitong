<?php
// +----------------------------------------------------------------------
// | AI系统开源商城系统
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | gitee下载：https://gitee.com/AI系统_gitee
// | github下载：https://github.com/AI系统-github
// | 访问官网：
// | 访问社区：
// | 访问手册：
// | 微信公众号：
// | 在gitee、github等公开渠道开源版本可免费商用，未经许可不能去除前后端官方版权标识
// |  收费版本务必购买商业授权，购买去版权授权后，方可去除前后端官方版权标识
// | 禁止对系统程序代码以任何目的，任何形式的再发布
// | 版权所有并拥有最终解释权
// +----------------------------------------------------------------------
// | author: AI系统
// +----------------------------------------------------------------------

namespace app\api\validate\draw;

use app\common\validate\BaseValidate;

/**
 * 绘画收藏校验
 * Class DrawCollectValidate
 * @package app\api\validate
 */
class DrawCollectValidate extends BaseValidate
{
    protected $rule = [
        'status' => 'require|in:0,1',
        'records_id' => 'require',
    ];

    protected $message = [
        'status.require' => '参数缺失',
        'status.in' => '参数错误',
        'records_id.require' => '参数缺失',
    ];


    public function sceneCollect()
    {
        return $this->only(['status', 'records_id']);
    }

}