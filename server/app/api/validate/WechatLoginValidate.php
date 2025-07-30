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
 * 微信登录验证
 */
class WechatLoginValidate extends BaseValidate
{
    protected $rule = [
        'code'         => 'require',
        'nickname'     => 'require',
        'headimgurl'   => 'require',
        'openid'       => 'require',
        'access_token' => 'require',
        'terminal'     => 'require',
        'avatar'       => 'require'
    ];

    protected $message = [
        'code.require'         => 'code缺少',
        'nickname.require'     => '昵称缺少',
        'headimgurl.require'   => '头像缺少',
        'openid.require'       => 'openid缺少',
        'access_token.require' => 'access_token缺少',
        'terminal.require'     => '终端参数缺少',
        'avatar.require'       => '头像缺少'
    ];

    /**
     * @notes 公众号登录场景
     * @return WechatLoginValidate
     * @author 段誉
     * @date 2022/9/16 10:57
     */
    public function sceneOa(): WechatLoginValidate
    {
        return $this->only(['code']);
    }

    /**
     * @notes 小程序-授权登录场景
     * @return WechatLoginValidate
     * @author 段誉
     * @date 2022/9/16 11:15
     */
    public function sceneMnpLogin(): WechatLoginValidate
    {
        return $this->only(['code']);
    }

    /**
     * @notes
     * @return WechatLoginValidate
     * @author 段誉
     * @date 2022/9/16 11:15
     */
    public function sceneWechatAuth(): WechatLoginValidate
    {
        return $this->only(['code']);
    }

    /**
     * @notes 更新用户信息场景
     * @return WechatLoginValidate
     * @author 段誉
     * @date 2023/2/22 11:14
     */
    public function sceneUpdateUser(): WechatLoginValidate
    {
        return $this->only(['nickname', 'avatar']);
    }
}