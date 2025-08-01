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

namespace app\adminapi\validate\decorate;

use app\common\validate\BaseValidate;

/**
 * 装修页面验证
 */
class DecoratePageValidate extends BaseValidate
{
    protected $rule = [
        'id'   => 'require',
        'type' => 'require',
        'data' => 'require',
    ];

    protected $message = [
        'id.require'   => '参数缺失',
        'type.require' => '装修类型参数缺失',
        'data.require' => '装修信息参数缺失'
    ];
}