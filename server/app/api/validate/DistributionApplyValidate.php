<?php
// +----------------------------------------------------------------------
// | AI系统100%开源免费商用商城系统
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | 开源版本可自由商用，可去除界面版权logo
// | 商业版本务必购买商业授权，以免引起法律纠纷
// | 禁止对系统程序代码以任何目的，任何形式的再发布
// | gitee下载：https://gitee.com/AI系统_gitee
// | github下载：https://github.com/AI系统-github
// | 访问官网：
// | 访问社区：https://home.AI系统.cn
// | 访问手册：http://doc.AI系统.cn
// | 微信公众号：AI系统技术社区
// | AI系统团队 版权所有 拥有最终解释权
// +----------------------------------------------------------------------
// | author: 匿名公司
// +----------------------------------------------------------------------
namespace app\api\validate;
use app\common\validate\BaseValidate;

/**
 * 分销申请验证类
 * Class DistributionApplyValidate
 * @package app\api\validate
 */
class DistributionApplyValidate extends BaseValidate
{

    protected $rule = [
        'name'          => 'require',
        'mobile'        => 'require|mobile',
    ];

    protected $message = [
        'name.require'      => '请输入姓名',
        'mobile.require'    => '请输入手机号码',
        'mobile.mobile'     => '手机号码格式错误',
    ];

}