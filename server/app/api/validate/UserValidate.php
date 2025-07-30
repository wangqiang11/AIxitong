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

namespace app\api\validate;

use app\common\validate\BaseValidate;

/**
 * 用户验证器
 */
class UserValidate extends BaseValidate
{
    protected $rule = [
        'code' => 'require',
    ];

    protected $message = [
        'code.require' => '请输入验证码',
    ];

    /**
     * @notes 获取小程序手机号场景
     * @return UserValidate
     * @author 段誉
     * @date 2022/9/21 16:44
     */
    public function sceneGetMobileByMnp(): UserValidate
    {
        return $this->only(['code']);
    }

    /**
     * @notes 绑定/变更 手机号
     * @return UserValidate
     * @author 段誉
     * @date 2022/9/21 17:37
     */
    public function sceneBindMobile(): UserValidate
    {
        return $this->only(['mobile', 'code']);
    }
}