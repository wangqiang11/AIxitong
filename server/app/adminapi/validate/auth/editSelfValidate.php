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

namespace app\adminapi\validate\auth;

use app\common\validate\BaseValidate;
use app\common\model\auth\Admin;
use think\facade\Config;

/**
 * 编辑超级管理员验证
 */
class editSelfValidate extends BaseValidate
{
    protected $rule = [
        'name'             => 'require|length:1,16',
        'avatar'           => 'require',
        'password_old'     => 'length:6,32',
        'password'         => 'length:6,32|checkPassword',
        'password_confirm' => 'requireWith:password|confirm',
    ];

    protected $message = [
        'name.require'                 => '请填写名称',
        'name.length'                  => '名称须在1-16位字符',
        'avatar.require'               => '请选择头像',
        'password_now.length'          => '密码长度须在6-32位字符',
        'password_confirm.requireWith' => '确认密码不能为空',
        'password_confirm.confirm'     => '两次输入的密码不一致'
    ];

    /**
     * @notes 校验密码
     * @param $value
     * @param $rule
     * @param $data
     * @return bool|string
     * @author 段誉
     * @date 2022/4/8 17:40
     */
    public function checkPassword($value, $rule, $data): bool|string
    {
        unset($value);
        unset($rule);
        if (empty($data['password_old'])) {
            return '请填写当前密码';
        }

        $admin = (new Admin())->findOrEmpty($data['admin_id']);
        $passwordSalt = Config::get('project.unique_identification');
        $oldPassword = create_password($data['password_old'], $passwordSalt);

        if ($admin['password'] != $oldPassword) {
            return '当前密码错误';
        }

        return true;
    }
}