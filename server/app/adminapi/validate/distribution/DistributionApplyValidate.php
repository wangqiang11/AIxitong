<?php
// +----------------------------------------------------------------------
// | AI系统100%开源免费商用商城系统
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | 开源版本可自由商用，可去除界面版权logo
// | 商业版本务必购买商业授权，以免引起法律纠纷
// | 禁止对系统程序代码以任何目的，任何形式的再发布
// | gitee下载：
// | github下载：
// | 访问官网：https://www.AI系统.cn
// | 访问社区：https://home.AI系统.cn
// | 访问手册：http://doc.AI系统.cn
// | 微信公众号：AI系统技术社区
// | AI系统团队 版权所有 拥有最终解释权
// +----------------------------------------------------------------------
// | author: AI系统Team
// +----------------------------------------------------------------------
namespace app\adminapi\validate\distribution;
use app\common\enum\DistributionEnum;
use app\common\validate\BaseValidate;

/**
 * 分销商申请类
 * Class DistributionApplyValidate
 * @package app\adminapi\validate\distribution
 */
class DistributionApplyValidate extends BaseValidate
{

    protected $rule = [
        'id'        => 'require',
        'status'    => 'require|in:'.DistributionEnum::AUDIT_PASS.','.DistributionEnum::AUDIT_FAILT,
        'remark'    => 'max:128',
    ];

    protected $message = [
        'id.require'        => '请选择申请',
        'status.require'    => '请选择审核状态',
        'status.in'         => '状态错误',
        'remark.max'        => '备注最多输入128个字符',
    ];

}