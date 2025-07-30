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

namespace app\common\model\refund;


use app\common\enum\RefundEnum;
use app\common\model\BaseModel;


/**
 * 退款记录模型
 * Class RefundRecord
 * @package app\common\model\refund
 */
class RefundRecord extends BaseModel
{
    /**
     * @notes 退款类型描述
     * @param $value
     * @param $data
     * @return string|string[]
     * @author 段誉
     * @date 2022/12/1 10:41
     */
    public function getRefundTypeTextAttr($value, $data): array|string
    {
        unset($value);
        return RefundEnum::getTypeDesc($data['refund_type']);
    }

    /**
     * @notes 退款状态描述
     * @param $value
     * @param $data
     * @return string|string[]
     * @author 段誉
     * @date 2022/12/1 10:44
     */
    public function getRefundStatusTextAttr($value, $data): array|string
    {
        unset($value);
        return RefundEnum::getStatusDesc($data['refund_status']);
    }

    /**
     * @notes 退款方式描述
     * @param $value
     * @param $data
     * @return string|string[]
     * @author 段誉
     * @date 2022/12/6 11:08
     */
    public function getRefundWayTextAttr($value, $data): array|string
    {
        unset($value);
        return RefundEnum::getWayDesc($data['refund_way']);
    }
}
