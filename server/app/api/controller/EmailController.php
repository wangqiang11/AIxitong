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

namespace app\api\controller;

use app\api\logic\EmailLogic;
use app\api\validate\EmailValidate;
use think\response\Json;

/**
 * 邮件管理
 */
class EmailController extends BaseApiController
{
    public array $notNeedLogin = ['sendCode'];

    /**
     * @notes 发送邮箱验证码
     * @return Json
     * @author ljj
     * @date 2023/7/19 2:38 下午
     */
    public function sendCode(): Json
    {
        $params = (new EmailValidate())->post()->goCheck('sendCode');
        $result = (new EmailLogic())->sendCode($params);
        if (true !== $result) {
            return $this->fail($result);
        }
        return $this->success('发送成功');
    }
}