<?php
// +----------------------------------------------------------------------
// | AI系统管理后台（PHP版）
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | 开源版本可自由商用，可去除界面版权logo
// | gitee下载：/likeadmin
// | github下载：/likeadmin
// | 访问官网：www.localhost.com
// | 匿名公司 版权所有 拥有最终解释权
// +----------------------------------------------------------------------
// | author: 匿名开发者
// +----------------------------------------------------------------------

namespace app\api\validate\kb;

use app\common\validate\BaseValidate;

/**
 * 对话数据参数验证器
 */
class KbDataValidate extends BaseValidate
{
    protected $rule = [
        'ids'       => 'require|array',
        'robot_id'  => 'require|number',
        'record_id' => 'require|number',
        'content'   => 'require|max:95535',
    ];

    protected $message = [
        'ids.require'       => '请选择数据',
        'robot_id.require'  => '请选择机器人',
        'record_id.require' => '请选择对话记录',
        'content.require'   => '请填写内容',
        'content.max'       => '内容不能超出95535个字符',
    ];

    protected $scene = [
        'delete'  => ['ids', 'robot_id'],
        'robotId' => ['robot_id'],
        'feedback' => ['robot_id', 'record_id', 'content'],
    ];
}