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

namespace app\api\validate;

use app\common\enum\PayEnum;
use app\common\validate\BaseValidate;

/**
 * 支付验证
 */
class PayValidate extends BaseValidate
{
    protected $rule = [
        'from'      => 'require',
        'pay_way'   => 'require|in:' . PayEnum::BALANCE_PAY . ',' . PayEnum::WECHAT_PAY . ',' . PayEnum::ALI_PAY,
        'order_id'  => 'require'
    ];


    protected $message = [
        'from.require'      => '参数缺失',
        'pay_way.require'   => '支付方式参数缺失',
        'pay_way.in'        => '支付方式参数错误',
        'order_id.require'  => '订单参数缺失'
    ];

    /**
     * @notes 支付状态
     * @return PayValidate
     * @author 段誉
     * @date 2023/3/1 16:17
     */
    public function sceneStatus(): PayValidate
    {
        return $this->only(['from', 'order_id']);
    }
}