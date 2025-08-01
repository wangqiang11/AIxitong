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

namespace app\common\enum;

class RefundEnum
{
    // 退款类型
    const TYPE_ADMIN = 1;  // 后台退款

    // 退款状态
    const REFUND_ING     = 0; // 退款中
    const REFUND_SUCCESS = 1; // 退款成功
    const REFUND_ERROR   = 2; // 退款失败

    // 退款方式
    const REFUND_ONLINE = 1;  // 线上退款
    const REFUND_OFFLINE = 2; // 线下退款

    // 退款订单类型
    const ORDER_TYPE_ORDER    = 'order';    // 普通订单
    const ORDER_TYPE_RECHARGE = 'recharge'; // 充值订单

    const ORDER_TYPE_MEMBER = 'member'; // 会员订单

    /**
     * @notes 退款类型描述
     * @param bool|int $value
     * @return string|string[]
     * @author 段誉
     * @date 2022/12/1 10:40
     */
    public static function getTypeDesc(bool|int $value = true): array|string
    {
        $data = [
            self::TYPE_ADMIN  => '后台退款',
        ];
        if ($value === true) {
            return $data;
        }
        return $data[$value];
    }

    /**
     * @notes 退款状态
     * @param bool|int $value
     * @return string|string[]
     * @author 段誉
     * @date 2022/12/1 10:43
     */
    public static function getStatusDesc(bool|int $value = true): array|string
    {
        $data = [
            self::REFUND_ING     => '退款中',
            self::REFUND_SUCCESS => '退款成功',
            self::REFUND_ERROR   => '退款失败',
        ];
        if ($value === true) {
            return $data;
        }
        return $data[$value];
    }

    /**
     * @notes 退款方式
     * @param bool|int $value
     * @return string|string[]
     * @author 段誉
     * @date 2022/12/1 10:43
     */
    public static function getWayDesc(bool|int $value = true): array|string
    {
        $data = [
            self::REFUND_ONLINE  => '线上退款',
            self::REFUND_OFFLINE => '线下退款'
        ];
        if ($value === true) {
            return $data;
        }
        return $data[$value];
    }

    /**
     * @notes 通过支付方式获取退款方式
     * @param $payWay
     * @return int
     * @author 段誉
     * @date 2022/12/6 10:31
     */
    public static function getRefundWayByPayWay($payWay): int
    {
        if (in_array($payWay, [PayEnum::ALI_PAY, PayEnum::WECHAT_PAY])) {
            return self::REFUND_ONLINE;
        }
        return self::REFUND_OFFLINE;
    }
}