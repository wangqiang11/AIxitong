<?php
// +----------------------------------------------------------------------
// | AI系统管理后台（PHP版）
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | 开源版本可自由商用，可去除界面版权logo
// | gitee下载：/likeadmin
// | //
// | 访问官网：www.localhost.com
// | 匿名公司 版权所有 拥有最终解释权
// +----------------------------------------------------------------------
// | author: 匿名开发者
// +----------------------------------------------------------------------
declare (strict_types = 1);

namespace app\adminapi\validate;

use app\common\validate\BaseValidate;

/**
 * ID参数验证器
 */
class IDMustValidate extends BaseValidate
{
    protected $rule = [
        'id' => 'require|integer',
    ];

    protected $message = [
        'id'         => 'id参数缺失',
        'id.integer' => 'id必须为正整数',
    ];
}