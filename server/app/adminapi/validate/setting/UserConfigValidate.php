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
namespace app\adminapi\validate\setting;

use app\common\validate\BaseValidate;

/**
 * 用户设置验证
 */
class UserConfigValidate extends BaseValidate
{
    protected $rule = [
        'login_way'       => 'requireIf:scene,register|array',
        'coerce_mobile'   => 'requireIf:scene,register|in:0,1',
        'login_agreement' => 'in:0,1',
        'third_auth'      => 'in:0,1',
        'wechat_auth'     => 'in:0,1',
        'default_avatar'  => 'require'
    ];

    protected $message = [
        'default_avatar.require'  => '请上传用户默认头像',
        'login_way.requireIf'     => '请选择登录方式',
        'login_way.array'         => '登录方式值错误',
        'coerce_mobile.requireIf' => '请选择注册强制绑定手机',
        'coerce_mobile.in'        => '注册强制绑定手机值错误',
        'wechat_auth.in'          => '公众号微信授权登录值错误',
        'third_auth.in'           => '第三方登录值错误',
        'login_agreement.in'      => '政策协议值错误'
    ];

    // 用户设置验证
    public function sceneUser(): UserConfigValidate
    {
        return $this->only(['default_avatar']);
    }

    // 注册验证
    public function sceneRegister(): UserConfigValidate
    {
        return $this->only(['login_way', 'coerce_mobile', 'login_agreement', 'third_auth', 'wechat_auth']);
    }
}