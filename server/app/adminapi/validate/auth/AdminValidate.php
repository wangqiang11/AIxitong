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

namespace app\adminapi\validate\auth;

use app\common\validate\BaseValidate;
use app\common\model\auth\Admin;

/**
 * 管理员验证
 */
class AdminValidate extends BaseValidate
{
    protected $rule = [
        'id'               => 'require|checkAdmin',
        'account'          => 'require|length:1,32|unique:'.Admin::class,
        'name'             => 'require|length:1,16|unique:'.Admin::class,
        'password'         => 'require|length:6,32|edit',
        'password_confirm' => 'requireWith:password|confirm',
        'role_id'          => 'require',
        'disable'          => 'require|in:0,1|checkAbleDisable',
        'multipoint_login' => 'require|in:0,1',
    ];

    protected $message = [
        'id.require'                   => '管理员id不能为空',
        'account.require'              => '账号不能为空',
        'account.length'               => '账号长度须在1-32位字符',
        'account.unique'               => '账号已存在',
        'password.require'             => '密码不能为空',
        'password.length'              => '密码长度须在6-32位字符',
        'password_confirm.requireWith' => '确认密码不能为空',
        'password_confirm.confirm'     => '两次输入的密码不一致',
        'name.require'                 => '名称不能为空',
        'name.length'                  => '名称须在1-16位字符',
        'name.unique'                  => '名称已存在',
        'role_id.require'              => '请选择角色',
        'disable.require'              => '请选择状态',
        'disable.in'                   => '状态值错误',
        'multipoint_login.require'     => '请选择是否支持多处登录',
        'multipoint_login.in'          => '多处登录状态值为误',
    ];

    /**
     * @notes 添加场景
     * @return AdminValidate
     * @author 段誉
     * @date 2021/12/29 15:46
     */
    public function sceneAdd(): AdminValidate
    {
        return $this->remove(['password', 'edit'])
            ->remove('id', 'require|checkAdmin')
            ->remove('disable', 'checkAbleDisable');
    }

    /**
     * @notes 详情场景
     * @return AdminValidate
     * @author 段誉
     * @date 2021/12/29 15:46
     */
    public function sceneDetail(): AdminValidate
    {
        return $this->only(['id']);
    }

    /**
     * @notes 编辑场景
     * @return AdminValidate
     * @author 段誉
     * @date 2021/12/29 15:47
     */
    public function sceneEdit(): AdminValidate
    {
        return $this->remove('password', 'require|length')
            ->append('id', 'require|checkAdmin');
    }

    /**
     * @notes 删除场景
     * @return AdminValidate
     * @author 段誉
     * @date 2021/12/29 15:47
     */
    public function sceneDelete(): AdminValidate
    {
        return $this->only(['id']);
    }

    /**
     * @notes 编辑情况下，检查是否填密码
     * @param $value
     * @param $rule
     * @param $data
     * @return bool|string
     * @author 段誉
     * @date 2021/12/29 10:19
     */
    public function edit($value, $rule, $data): bool|string
    {
        unset($rule);
        if (empty($data['password']) && empty($data['password_confirm'])) {
            return true;
        }
        $len = strlen($value);
        if ($len < 6 || $len > 32) {
            return '密码长度须在6-32位字符';
        }
        return true;
    }

    /**
     * @notes 检查指定管理员是否存在
     * @param $value
     * @return bool|string
     * @author 段誉
     * @date 2021/12/29 10:19
     */
    public function checkAdmin($value): bool|string
    {
        $admin = (new Admin())->findOrEmpty($value);
        if ($admin->isEmpty()) {
            return '管理员不存在';
        }
        return true;
    }

    /**
     * @notes 禁用校验
     * @param $value
     * @param $rule
     * @param $data
     * @return bool|string
     * @author 段誉
     * @date 2022/8/11 9:59
     */
    public function checkAbleDisable($value, $rule, $data): bool|string
    {
        unset($rule);
        $admin = (new Admin())->findOrEmpty($data['id']);
        if ($admin->isEmpty()) {
            return '管理员不存在';
        }

        if ($value && $admin['root']) {
            return '超级管理员不允许被禁用';
        }
        return true;
    }
}