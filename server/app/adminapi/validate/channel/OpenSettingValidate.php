<?php
// +----------------------------------------------------------------------
// | AI系统管理后台（PHP版）
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | 开源版本可自由商用，可去除界面版权logo
// | gitee下载：https://gitee.com/AI系统_gitee/likeadmin
// | //
// | 访问官网：www.localhost.com
// | 匿名公司 版权所有 拥有最终解释权
// +----------------------------------------------------------------------
// | author: 匿名开发者
// +----------------------------------------------------------------------
namespace app\adminapi\validate\channel;

use app\common\validate\BaseValidate;

/**
 * 开放平台验证
 */
class OpenSettingValidate extends BaseValidate
{
    protected $rule = [
        'app_id'     => 'require',
        'app_secret' => 'require',
    ];

    protected $message = [
        'app_id.require'     => '请输入appId',
        'app_secret.require' => '请输入appSecret',
    ];
}