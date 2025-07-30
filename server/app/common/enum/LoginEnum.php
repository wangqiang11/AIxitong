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

namespace app\common\enum;

/**
 * 登录枚举
 * Class LoginEnum
 * @package app\common\enum
 */
class LoginEnum
{
    /**
     * 支持的登录方式
     * MOBILE_PASSWORD 手机号密码登录
     * EMAIL_PASSWORD  邮箱密码的登录
     * MOBILE_CAPTCHA  手机验证码登录
     * EMAIL_CAPTCHA  邮箱验证码登录
     */
    const MOBILE_PASSWORD = 1;
    const EMAIL_PASSWORD  = 2;
    const MOBILE_CAPTCHA  = 3;

    const EMAIL_CAPTCHA   = 4;
}