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
namespace app\api\validate;

use app\common\enum\LoginEnum;
use app\common\validate\BaseValidate;

/**
 * 密码校验
 */
class PasswordValidate extends BaseValidate
{
    protected $regex = [
        'password' => '/^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)]|[\(\)])+$)([^(0-9a-zA-Z)]|[\(\)]|[a-z]|[A-Z]|[0-9]){6,20}$/'
    ];

    protected $rule = [
        'scene'    => 'require|in:'.LoginEnum::MOBILE_CAPTCHA.','.LoginEnum::EMAIL_PASSWORD.'',
        'mobile'   => 'requireIf:scene,'.LoginEnum::MOBILE_CAPTCHA.'|mobile',
        'email'    => 'requireIf:scene,'.LoginEnum::EMAIL_PASSWORD.'|email',
        'password' => 'require|length:6,20|regex:password',
        'password_confirm' => 'require|confirm',
        'code'             => 'require',
    ];

    protected $message = [
        'scene.require'            => '场景值缺失',
        'scene.in'                 => '场景值错误',
        'mobile.requireIf'         => '请输入手机号',
        'mobile.mobile'            => '手机号错误',
        'email.requireIf'          => '请输入邮箱',
        'email.email'              => '邮箱错误',
        'password.require'         => '请输入密码',
        'password.length'          => '密码须在6-20位之间',
        'password.regex'           => '密码须为数字,字母或符号组合',
        'password_confirm.require' => '请确认密码',
        'password_confirm.confirm' => '两次输入的密码不一致',
        'code.require'             => '请输入验证码',
    ];

    /**
     * @notes 重置登录密码
     * @return PasswordValidate
     * @author 段誉
     * @date 2022/9/16 18:11
     */
    public function sceneResetPassword(): PasswordValidate
    {
        return $this->only(['mobile', 'code', 'password', 'password_confirm']);
    }

    /**
     * @notes 修改密码场景
     * @return PasswordValidate
     * @author 段誉
     * @date 2022/9/20 19:14
     */
    public function sceneChangePassword(): PasswordValidate
    {
        return $this->only(['password', 'password_confirm']);
    }
}