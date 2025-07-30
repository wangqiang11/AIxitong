<?php
// +----------------------------------------------------------------------
// | AI系统管理后台（PHP版）
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | 开源版本可自由商用，可去除界面版权logo
// | //
// | github下载：/likeadmin
// | 访问官网：www.localhost.com
// | 匿名公司 版权所有 拥有最终解释权
// +----------------------------------------------------------------------
// | author: 匿名开发者
// +----------------------------------------------------------------------

namespace app\adminapi\validate\setting;

use app\common\validate\BaseValidate;

/**
 * key池验证类
 */
class KeyPoolValidate extends BaseValidate
{
    protected $rule = [
        'id'        => 'require',
        'type'      => 'require|in:1,2,3,4,5,6,7,8,9,11',
        'channel'   => 'require',
        'key'       => 'require',
        'status'    => 'require|in:0,1'
    ];

    protected $message = [
        'id.require'      => '请选择秘钥',
        'type.require'    => '请选择类型',
        'type.in'         => '类型错误',
        'channel.require' => '请选择模型',
        'key.require'     => '请选择key',
        'status.require'  => '请选择状态',
        'status.in'       => '状态错误'
    ];

    public function sceneId(): KeyPoolValidate
    {
        return $this->only(['id']);
    }

    public function sceneAdd(): KeyPoolValidate
    {
        return $this->remove('id',true);
    }
}