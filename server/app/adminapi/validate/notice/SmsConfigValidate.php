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

namespace app\adminapi\validate\notice;

use app\common\validate\BaseValidate;

/**
 * 短信配置验证
 */
class SmsConfigValidate extends BaseValidate
{
    protected $rule = [
        'type'       => 'require',
        'sign'       => 'require',
        'app_id'     => 'requireIf:type,tencent',
        'app_key'    => 'requireIf:type,ali',
        'secret_id'  => 'requireIf:type,tencent',
        'secret_key' => 'require',
        'status'     => 'require'
    ];

    protected $message = [
        'type.require'        => '请选择类型',
        'sign.require'        => '请输入签名',
        'app_id.requireIf'    => '请输入app_id',
        'app_key.requireIf'   => '请输入app_key',
        'secret_id.requireIf' => '请输入secret_id',
        'secret_key.require'  => '请输入secret_key',
        'status.require'      => '请选择状态'
    ];

    protected function sceneDetail(): SmsConfigValidate
    {
        return $this->only(['type']);
    }
}