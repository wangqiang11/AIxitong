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

namespace app\adminapi\controller;

use app\adminapi\logic\LoginLogic;
use app\adminapi\validate\LoginValidate;
use think\response\Json;

/**
 * 管理员登录控制器
 */
class LoginController extends BaseAdminController
{
    public array $notNeedLogin = ['account'];

    /**
     * @notes 账号登录
     * @date 2021/6/30 17:01
     * @return Json
     * @author 令狐冲
     */
    public function account(): Json
    {
        $params = (new LoginValidate())->post()->goCheck();
        return $this->data((new LoginLogic())->login($params));
    }

    /**
     * @notes 退出登录
     * @return Json
     * @author 令狐冲
     * @date 2021/7/8 00:36
     */
    public function logout(): Json
    {
        // 退出登录情况特殊，只有成功的情况，也不需要token验证
        (new LoginLogic())->logout($this->adminInfo);
        return $this->success();
    }
}