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

namespace app\adminapi\validate\setting;

use app\common\validate\BaseValidate;

/**
 * 网站设置验证器
 */
class WebsiteValidate extends BaseValidate
{
    protected $rule = [
        'name'        => 'require|max:30',
        'web_favicon' => 'require',
        'web_logo'    => 'require',
        'login_image' => 'require',
        'pc_logo'     => 'require',
    ];

    protected $message = [
        'name.require'        => '请填写网站名称',
        'name.max'            => '网站名称最长为12个字符',
        'web_favicon.require' => '请上传网站图标',
        'web_logo.require'    => '请上传网站logo',
        'login_image.require' => '请上传登录页广告图',
        'pc_logo.require'     => '请上传PC端logo'
    ];

    protected $scene = [
        'website' => ['name', 'web_favicon', 'web_logo', 'login_image', 'pc_logo'],
    ];
}