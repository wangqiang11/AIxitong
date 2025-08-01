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

namespace app\api\controller;

use app\api\validate\PayValidate;
use app\common\enum\user\UserTerminalEnum;
use app\common\logic\PaymentLogic;
use app\common\service\pay\AliPayService;
use app\common\service\pay\WeChatPayService;
use Psr\Http\Message\ResponseInterface;
use think\facade\Log;
use think\response\Json;

/**
 * 支付
 */
class PayController extends BaseApiController
{
    public array $notNeedLogin = ['notifyMnp', 'notifyOa', 'aliNotify'];

    /**
     * @notes 支付方式
     * @return Json
     * @author 段誉
     * @date 2023/2/24 17:54
     */
    public function payWay(): Json
    {
        $result = PaymentLogic::getPayWay($this->userId, $this->userInfo['terminal']);
        if ($result === false) {
            return $this->fail(PaymentLogic::getError());
        }
        return $this->data($result);
    }

    /**
     * @notes 预支付
     * @return Json
     * @author 段誉
     * @date 2023/2/28 14:21
     */
    public function prepay(): Json
    {
        $params = (new PayValidate())->post()->goCheck();

        // 订单信息
        $order = PaymentLogic::getPayOrderInfo($params, $this->terminal);
        if (false === $order) {
            return $this->fail(PaymentLogic::getError(), $params);
        }

        // 支付流程
        $redirectUrl = $params['redirect'] ?? '/pages/payment/payment';
        $result = PaymentLogic::pay($params['pay_way'], $params['from'], $order, $this->terminal, $redirectUrl);
        if (false === $result) {
            return $this->fail(PaymentLogic::getError(), $params);
        }
        return $this->success('', $result);
    }

    /**
     * @notes 获取支付状态
     * @return Json
     * @author 段誉
     * @date 2023/3/1 16:23
     */
    public function payStatus(): Json
    {
        $params = (new PayValidate())->goCheck('status', ['user_id' => $this->userId]);
        $result = PaymentLogic::getPayStatus($params);
        if ($result === false) {
            return $this->fail(PaymentLogic::getError());
        }
        return $this->data($result);
    }

    /**
     * @notes 小程序支付回调
     * @return ResponseInterface
     * @throws @\EasyWeChat\Kernel\Exceptions\InvalidArgumentException
     * @throws @\EasyWeChat\Kernel\Exceptions\RuntimeException
     * @throws @\ReflectionException
     * @throws @\Throwable
     * @author 段誉
     * @date 2023/2/28 14:21
     */
    public function notifyMnp(): ResponseInterface
    {
        return (new WeChatPayService(UserTerminalEnum::WECHAT_MMP))->notify();
    }

    /**
     * @notes 公众号支付回调
     * @return ResponseInterface
     * @throws @\EasyWeChat\Kernel\Exceptions\InvalidArgumentException
     * @throws @\EasyWeChat\Kernel\Exceptions\RuntimeException
     * @throws @\ReflectionException
     * @throws @\Throwable
     * @author 段誉
     * @date 2023/2/28 14:21
     */
    public function notifyOa(): ResponseInterface
    {
        return (new WeChatPayService(UserTerminalEnum::WECHAT_OA))->notify();
    }

    /**
     * @notes 支付宝回调
     * @author 段誉
     * @date 2021/8/13 14:16
     */
    public function aliNotify(): void
    {
        $params = $this->request->post();
        $result = (new AliPayService())->notify($params);
        if (true === $result) {
            echo 'success';
        } else {
            echo 'fail';
        }
    }
}
