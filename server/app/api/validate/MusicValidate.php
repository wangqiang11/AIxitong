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
 * 音乐参数验证
 */
class MusicValidate extends BaseValidate
{
    protected $rule = [
        'custom_mode'   => 'require',
        'title'         => 'require|max:60',
    ];

    protected $message = [
        'custom_mode.require'   => '请选择生成模式',
        'title.require'         => '请填写歌曲名称',
        'title.max'             => '歌曲名称不能超过60个字符',
    ];

    public function sceneGenerate(): MusicValidate
    {
        return $this->only(['custom_mode', 'title']);
    }
}