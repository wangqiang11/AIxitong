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

use app\common\model\user\User;
use app\common\validate\BaseValidate;

/**
 * 设置用户信息验证
 */
class SetUserInfoValidate extends BaseValidate
{
    protected $rule = [
        'field' => 'require|checkField',
        'value' => 'require',
    ];

    protected $message = [
        'field.require' => '参数缺失',
        'value.require' => '值不存在',
    ];

    /**
     * @notes 校验字段内容
     * @param $value
     * @param $rule
     * @param $data
     * @return bool|string
     * @author 段誉
     * @date 2022/9/21 17:01
     */
    protected function checkField($value, $rule, $data): bool|string
    {
        unset($rule);
        $allowField = [
            'nickname', 'account', 'sex', 'avatar', 'real_name',
        ];

        if (!in_array($value, $allowField)) {
            return '参数错误';
        }

        if ($value == 'account') {
            $user = (new User())
                ->where([
                    ['account', '=', $data['value']],
                    ['id', '<>', $data['id']]
                ])->findOrEmpty();

            if (!$user->isEmpty()) {
                return '账号已被使用!';
            }
        }

        return true;
    }
}