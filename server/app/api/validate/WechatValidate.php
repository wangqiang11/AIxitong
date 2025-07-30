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

use app\common\validate\BaseValidate;

/**
 * 微信验证器
 */
class WechatValidate extends BaseValidate
{
    public $rule = [
        'url' => 'require'
    ];

    public $message = [
        'url.require' => '请提供url'
    ];

    public function sceneJsConfig(): WechatValidate
    {
        return $this->only(['url']);
    }
}