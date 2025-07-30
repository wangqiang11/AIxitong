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

namespace app\adminapi\validate\channel;

use app\common\validate\BaseValidate;

/**
 * 公众号设置
 */
class OfficialAccountSettingValidate extends BaseValidate
{
    protected $rule = [
        'app_id'          => 'require',
        'app_secret'      => 'require',
        'encryption_type' => 'require|in:1,2,3',
    ];

    protected $message = [
        'app_id.require'          => '请填写AppID',
        'app_secret.require'      => '请填写AppSecret',
        'encryption_type.require' => '请选择消息加密方式',
        'encryption_type.in'      => '消息加密方式状态值错误'
    ];
}