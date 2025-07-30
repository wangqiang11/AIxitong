<?php
// +----------------------------------------------------------------------
// | AI系统管理后台（PHP版）
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | 开源版本可自由商用，可去除界面版权logo
// | gitee下载：https://gitee.com/AI系统_gitee/likeadmin
// | github下载：/likeadmin
// | 访问官网：www.localhost.com
// | 匿名公司 版权所有 拥有最终解释权
// +----------------------------------------------------------------------
// | author: 匿名开发者
// +----------------------------------------------------------------------

namespace app\api\controller;

use app\api\logic\SmsLogic;
use app\api\validate\SendSmsValidate;
use think\response\Json;

/**
 * 短信
 */
class SmsController extends BaseApiController
{
    public array $notNeedLogin = ['sendCode'];

    /**
     * @notes 发送短信验证码
     * @return Json
     * @author 段誉
     * @date 2022/9/15 16:17
     */
    public function sendCode(): Json
    {
        $params = (new SendSmsValidate())->post()->goCheck();
        $result = SmsLogic::sendCode($params);
        if (true === $result) {
            return $this->success('发送成功');
        }
        return $this->fail(SmsLogic::getError());
    }
}