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

namespace app\api\validate\chat;

use app\common\validate\BaseValidate;

/**
 * 对话分类参数验证器
 */
class ChatCategoryValidate extends BaseValidate
{
    protected $rule = [
        'id'    => 'require',
        'name'  => 'require',
    ];

    protected $message = [
        'id.require'   => '请选择对话id',
        'name.require' => '请输入对话分类名称',
    ];

    protected function sceneId(): ChatCategoryValidate
    {
        return $this->only(['id']);
    }
}