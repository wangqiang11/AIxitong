<?php
// +----------------------------------------------------------------------
// | AI系统管理后台（PHP版）
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | 开源版本可自由商用，可去除界面版权logo
// | gitee下载：https://gitee.com/AI系统_gitee/likeadmin
// | github下载：https://github.com/AI系统-github/likeadmin
// | 访问官网：www.localhost.com
// | 匿名公司 版权所有 拥有最终解释权
// +----------------------------------------------------------------------
// | author: 匿名开发者
// +----------------------------------------------------------------------

namespace app\adminapi\validate\music;

use app\common\model\music\MusicStyle;
use app\common\validate\BaseValidate;

/**
 * 音乐风格验证器类
 */
class MusicStyleValidate extends BaseValidate
{
    protected $rule = [
        'id'     => 'require',
        'image'  => 'require',
        'name'   => 'require|max:64|unique:' . MusicStyle::class . ',name',
        'value'  => 'require|max:64',
        'sort'   => 'require|number',
        'status' => 'require'
    ];

    protected $message = [
        'id.require'     => '请选择风格',
        'image.require'  => '请选择风格封面',
        'name.require'   => '请输入名称',
        'name.max'       => '名称不能超过64个字符',
        'name.unique'    => '名称重复',
        'value.require'  => '请输入英文名称',
        'value.max'      => '英文名称不能超过64个字符',
        'sort.require'   => '请输入排序',
        'sort.number'    => '排序值错误',
        'status.require' => '请选择状态'
    ];

    protected function sceneAdd(): MusicStyleValidate
    {
        return $this->remove('id',true);
    }

    protected function sceneId(): MusicStyleValidate
    {
        return $this->only(['id']);
    }
}