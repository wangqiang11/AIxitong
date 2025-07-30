<?php
// +----------------------------------------------------------------------
// | 匿名开发者
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | gitee下载：https://gitee.com/AI系统_gitee
// | github下载：
// | 访问官网：
// | 访问社区：https://home.AI系统.cn
// | 访问手册：http://doc.AI系统.cn
// | 微信公众号：AI系统技术社区
// | AI系统系列产品在gitee、github等公开渠道开源版本可免费商用，未经许可不能去除前后端官方版权标识
// |  AI系统系列产品收费版本务必购买商业授权，购买去版权授权后，方可去除前后端官方版权标识
// | 禁止对系统程序代码以任何目的，任何形式的再发布
// | AI系统团队版权所有并拥有最终解释权
// +----------------------------------------------------------------------
// | author: AI系统.cn.team
// +----------------------------------------------------------------------

namespace app\adminapi\validate\member;


use app\common\enum\PayEnum;
use app\common\model\member\MemberOrder;
use app\common\model\user\User;
use app\common\validate\BaseValidate;

class MemberOrderValidate extends BaseValidate
{
    protected $rule = [
        'id' => 'require',
    ];

    protected $message = [
        'id.require' => '参数缺失',
    ];


    public function sceneDetail()
    {
        return $this->only(['id']);
    }

    public function sceneRefund()
    {
        return $this->only(['id'])
            ->append('id','checkRefund');
    }


    /**
     * @notes 校验退款
     * @param $value
     * @param $rule
     * @param $data
     * @return bool|string
     * @author ljj
     * @date 2023/4/21 10:10 上午
     */
    public function checkRefund($value,$rule,$data)
    {
        $result = MemberOrder::where(['id'=>$value])->findOrEmpty();
        if ($result->isEmpty()) {
            return '会员订单错误';
        }
        if ($result->pay_status != PayEnum::ISPAID) {
            return '会员订单支付状态错误，无法退款';
        }
        if ($result->refund_status == PayEnum::REFUND_SUCCESS) {
            return '订单已发起退款，可到退款记录查看退款情况';
        }

        $user = User::findOrEmpty($result['user_id']);
        if ($user->isEmpty()) {
            return '用户不存在';
        }

        return true;
    }
}