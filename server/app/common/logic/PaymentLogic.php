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

namespace app\common\logic;

use app\common\enum\PayEnum;
use app\common\enum\user\UserTerminalEnum;
use app\common\enum\YesNoEnum;
use app\common\model\member\MemberOrder;
use app\common\model\Order;
use app\common\model\pay\PayWay;
use app\common\model\recharge\RechargeOrder;
use app\common\model\user\User;
use app\common\service\pay\AliPayService;
use app\common\service\pay\WeChatPayService;
use app\common\service\wechat\WeChatMnpService;
use app\common\service\wechat\WeChatOaService;
use Exception;
use think\Model;

/**
 * 支付逻辑
 */
class PaymentLogic extends BaseLogic
{
    /**
     * @notes 支付方式
     * @param $userId
     * @param $terminal
     * @return array|false
     * @author 段誉
     * @date 2023/2/24 17:53
     */
    public static function getPayWay($userId, $terminal): bool|array
    {
        try {
            // 获取支付场景
            $pay_way = (new PayWay())
                ->alias('pw')
                ->join('dev_pay_config dp', 'pw.pay_config_id = dp.id')
                ->where(['pw.scene' => $terminal, 'pw.status' => YesNoEnum::YES])
                ->field('dp.id,dp.name,dp.pay_way,dp.icon,dp.sort,dp.remark,pw.is_default')
                ->order('pw.is_default desc,dp.sort desc,id asc')
                ->select()
                ->toArray();

            foreach ($pay_way as &$item) {
                if ($item['pay_way'] == PayEnum::WECHAT_PAY) {
                    $item['extra'] = '微信快捷支付';
                }

                if ($item['pay_way'] == PayEnum::ALI_PAY) {
                    $item['extra'] = '支付宝快捷支付';
                }

                if ($item['pay_way'] == PayEnum::BALANCE_PAY) {
                    $user_money = (new User())->where(['id' => $userId])->value('user_money');
                    $item['extra'] = '可用余额:' . $user_money;
                }
            }

            return [
                'lists' => array_values($pay_way)
            ];

        } catch (Exception $e) {
            self::setError($e->getMessage());
            return false;
        }
    }

    /**
     * @notes 获取支付状态
     * @param $params
     * @return array|false
     * @author 段誉
     * @date 2023/3/1 16:23
     */
    public static function getPayStatus($params): bool|array
    {
        try {
            $order = [];
            $orderInfo = [];
            switch ($params['from']) {
                case 'recharge':
                    $order   = (new RechargeOrder())->where(['user_id'=>intval($params['user_id']), 'id'=>intval($params['order_id'])])->findOrEmpty();
                    $payTime = empty($order['pay_time']) ? '' : date('Y-m-d H:i:s', $order['pay_time']);
                    $orderInfo = [
                        'order_id'     => $order['id'],
                        'order_sn'     => $order['sn'],
                        'order_amount' => $order['order_amount'],
                        'pay_way'      => PayEnum::getPayDesc($order['pay_way']),
                        'pay_status'   => PayEnum::getPayStatusDesc($order['pay_status']),
                        'pay_time'     => $payTime
                    ];
                    break;
                case 'member':
                    $order = MemberOrder::where(['user_id' => $params['user_id'], 'id' => $params['order_id']])
                        ->findOrEmpty();
                    $payTime = empty($order['pay_time']) ? '' : date('Y-m-d H:i:s', $order['pay_time']);
                    $orderInfo = [
                        'order_id' => $order['id'],
                        'order_sn' => $order['sn'],
                        'order_amount' => $order['order_amount'],
                        'pay_way' => PayEnum::getPayDesc($order['pay_way']),
                        'pay_status' => PayEnum::getPayStatusDesc($order['pay_status']),
                        'pay_time' => $payTime,
                    ];
                    break;
            }

            if (empty($order)) {
                throw new Exception('订单不存在');
            }

            return [
                'pay_status' => $order['pay_status'],
                'pay_way'    => $order['pay_way'],
                'order'      => $orderInfo
            ];
        } catch (Exception $e) {
            self::setError($e->getMessage());
            return false;
        }
    }

    /**
     * @notes 获取预支付订单信息
     * @param $params
     * @param $terminal
     * @return array|false|Model
     * @throws @\Symfony\Contracts\HttpClient\Exception\ClientExceptionInterface
     * @throws @\Symfony\Contracts\HttpClient\Exception\DecodingExceptionInterface
     * @throws @\Symfony\Contracts\HttpClient\Exception\RedirectionExceptionInterface
     * @throws @\Symfony\Contracts\HttpClient\Exception\ServerExceptionInterface
     * @throws @\Symfony\Contracts\HttpClient\Exception\TransportExceptionInterface
     * @author 段誉
     * @date 2023/2/27 15:19
     */
    public static function getPayOrderInfo($params, $terminal): bool|array|Model
    {
        try {
            $order = null;
            switch ($params['from']) {
                case 'recharge':
                    $order = (new RechargeOrder())->findOrEmpty($params['order_id']);
                    if ($order->isEmpty()) {
                        throw new Exception('充值订单不存在');
                    }
                    break;
                case 'member':
                    $order = MemberOrder::findOrEmpty($params['order_id']);
                    if ($order->isEmpty()) {
                        throw new \Exception('会员订单不存在');
                    }
                    break;
            }

            if ($order['pay_status'] == PayEnum::ISPAID) {
                throw new Exception('订单已支付');
            }

            if (isset($params['code']) && $params['code'] != '' && $params['pay_way'] == PayEnum::WECHAT_PAY) {
                switch ($terminal) {
                    case UserTerminalEnum::WECHAT_MMP:
                        $response = (new WeChatMnpService())->getMnpResByCode($params['code']);
                        $order['openid'] = $response['openid'];
                        break;
                    case UserTerminalEnum::WECHAT_OA:
                        $response = (new WeChatOaService())->getOaResByCode($params['code']);
                        $order['openid'] = $response['openid'];
                        break;
                }
            }

            return $order;
        } catch (Exception $e) {
            self::$error = $e->getMessage();
            return false;
        }
    }

    /**
     * @notes 支付
     * @param $payWay
     * @param $from
     * @param $order
     * @param $terminal
     * @param $redirectUrl
     * @return mixed
     * @throws @\EasyWeChat\Kernel\Exceptions\InvalidArgumentException
     * @author 段誉
     * @date 2023/2/28 12:15
     */
    public static function pay($payWay, $from, $order, $terminal, $redirectUrl): mixed
    {
        // 支付编号-仅为微信支付预置(同一商户号下不同客户端支付需使用唯一订单号)
        $paySn = $order['order_sn'];
        if ($payWay == PayEnum::WECHAT_PAY) {
            $paySn = self::formatOrderSn($order['order_sn'], $terminal);
        }
        // 更新支付方式
        switch ($from) {
            case 'recharge':
                RechargeOrder::update(['pay_way'=>$payWay, 'pay_sn'=>$paySn], ['id'=>$order['id']]);
                break;
            case 'member':
                MemberOrder::update(['pay_way' => $payWay, 'pay_sn' => $paySn], ['id' => $order['id']]);
                break;
        }

        if ($order['order_amount'] == 0) {
            PayNotifyLogic::handle($from, $order['sn']);
            return ['pay_way' => PayEnum::BALANCE_PAY];
        }
        $payService = null;
        switch ($payWay) {
            case PayEnum::WECHAT_PAY:
                $payService            = (new WeChatPayService($terminal, $order['user_id'] ?? null));
                $order['pay_sn']       = $paySn;
                $order['redirect_url'] = $redirectUrl;
                $result = $payService->pay($from, $order);
                break;
            case PayEnum::ALI_PAY:
                $payService = (new AliPayService($terminal));
                $order['redirect_url'] = $redirectUrl;
                $result = $payService->pay($from, $order);
                break;
            default:
                self::$error = '订单异常';
                $result = false;
        }

        if (false === $result && !self::hasError()) {
            self::setError($payService->getError());
        }
        return $result;
    }

    /**
     * @notes 设置订单号 支付回调时截取前面的单号 18个
     * @param $orderSn
     * @param $terminal
     * @return string
     * @author 段誉
     * @date 2023/3/1 16:31
     * @remark 回调时使用了不同的回调地址,导致跨客户端支付时(例如小程序,公众号)可能出现201,商户订单号重复错误
     */
    public static function formatOrderSn($orderSn, $terminal): string
    {
        $suffix = mb_substr(time(), -4);
        return $orderSn . $terminal . $suffix;
    }
}