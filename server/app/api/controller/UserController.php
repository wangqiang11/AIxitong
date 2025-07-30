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
namespace app\api\controller;

use app\api\logic\UserLogic;
use app\api\validate\PasswordValidate;
use app\api\validate\SetUserInfoValidate;
use app\api\validate\UserValidate;
use think\response\Json;

/**
 * 用户控制器
 */
class UserController extends BaseApiController
{
    public array $notNeedLogin = ['resetPassword'];

    /**
     * @notes 获取个人中心
     * @return Json
     * @author 段誉
     * @date 2022/9/16 18:19
     */
    public function center(): Json
    {
        $data = UserLogic::center($this->userInfo);
        return $this->success('', $data);
    }

    /**
     * @notes 获取个人信息
     * @return Json
     * @author 段誉
     * @date 2022/9/20 19:46
     */
    public function info(): Json
    {
        $result = UserLogic::info($this->userId);
        return $this->data($result);
    }

    /**
     * @notes 重置密码
     * @return Json
     * @author 段誉
     * @date 2022/9/16 18:06
     */
    public function resetPassword(): Json
    {
        $params = (new PasswordValidate())->post()->goCheck('resetPassword');
        $result = UserLogic::resetPassword($params);
        if (true === $result) {
            return $this->success('操作成功', [], 1, 1);
        }
        return $this->fail(UserLogic::getError());
    }

    /**
     * @notes 修改密码
     * @return Json
     * @author 段誉
     * @date 2022/9/20 19:16
     */
    public function changePassword(): Json
    {
        $params = (new PasswordValidate())->post()->goCheck('changePassword');
        $result = UserLogic::changePassword($params, $this->userId);
        if (true === $result) {
            return $this->success('操作成功', [], 1, 1);
        }
        return $this->fail(UserLogic::getError());
    }

    /**
     * @notes 获取小程序手机号
     * @return Json
     * @author 段誉
     * @date 2022/9/21 16:46
     */
    public function getMobileByMnp(): Json
    {
        $params = (new UserValidate())->post()->goCheck('getMobileByMnp');
        $params['user_id'] = $this->userId;
        $result = UserLogic::getMobileByMnp($params);
        if ($result === false) {
            return $this->fail(UserLogic::getError());
        }
        return $this->success('绑定成功', [], 1, 1);
    }

    /**
     * @notes 编辑用户信息
     * @return Json
     * @author 段誉
     * @date 2022/9/21 17:01
     */
    public function setInfo(): Json
    {
        $params = (new SetUserInfoValidate())->post()->goCheck(null, ['id' => $this->userId]);
        $result = UserLogic::setInfo($this->userId, $params);
        if (false === $result) {
            return $this->fail(UserLogic::getError());
        }
        return $this->success('操作成功', [], 1, 1);
    }

    /**
     * @notes 绑定/变更 手机号
     * @return Json
     * @author 段誉
     * @date 2022/9/21 17:29
     */
    public function bindMobile(): Json
    {
        $params = (new UserValidate())->post()->goCheck('bindMobile');
        $params['user_id'] = $this->userId;
        $result = UserLogic::bindMobile($params);
        if($result) {
            return $this->success('绑定成功', [], 1, 1);
        }
        return $this->fail(UserLogic::getError());
    }

    /**
     * @notes 账号注销
     * @return Json
     * @author fzr
     */
    public function cancelled(): Json
    {
        $params = $this->request->post();
        $result = UserLogic::cancelled($params, $this->userInfo);
        if (true !== $result) {
            return $this->fail($result);
        }
        return $this->success('注销成功', [], 1, 1);
    }
}