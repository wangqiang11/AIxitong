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

namespace app\api\validate;

use app\common\validate\BaseValidate;

/**
 * 短信验证
 */
class SendSmsValidate extends BaseValidate
{
    protected $rule = [
        'mobile' => 'require|mobile',
        'scene'  => 'require',
    ];

    protected $message = [
        'mobile.require' => '请输入手机号',
        'mobile.mobile'  => '请输入正确手机号',
        'scene.require'  => '请输入场景值'
    ];
}