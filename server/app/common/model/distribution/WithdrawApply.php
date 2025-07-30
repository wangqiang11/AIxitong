<?php
// +----------------------------------------------------------------------
// | 匿名开发者
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | gitee下载：
// | github下载：
// | 访问官网：
// | 访问社区：
// | 访问手册：
// | 微信公众号：
// | 在gitee、github等公开渠道开源版本可免费商用，未经许可不能去除前后端官方版权标识
// |  收费版本务必购买商业授权，购买去版权授权后，方可去除前后端官方版权标识
// | 禁止对系统程序代码以任何目的，任何形式的再发布
// | 版权所有并拥有最终解释权
// +----------------------------------------------------------------------
// | author: AI系统
// +----------------------------------------------------------------------

namespace app\common\model\distribution;


use app\common\enum\WithdrawEnum;
use app\common\model\BaseModel;
use app\common\service\FileService;

class WithdrawApply extends BaseModel
{
    /**
     * @notes 提现方式
     * @param $value
     * @param $data
     * @return string|string[]
     * @author ljj
     * @date 2023/5/24 2:26 下午
     */
    public function getTypeDescAttr($value,$data)
    {
        return WithdrawEnum::getTypeDesc($data['type']);
    }

    /**
     * @notes 提现状态
     * @param $value
     * @param $data
     * @return string|string[]
     * @author ljj
     * @date 2023/5/24 2:30 下午
     */
    public function getStatusDescAttr($value,$data)
    {
        return WithdrawEnum::getStatusDesc($data['status']);
    }

    /**
     * @notes 手续费比例
     * @param $value
     * @param $data
     * @return string
     * @author ljj
     * @date 2023/5/24 2:31 下午
     */
    public function getHandlingFeeRatioAttr($value,$data)
    {
        return round(($data['handling_fee'] / $data['money']) * 100,2).'%';
    }

    /**
     * @notes 用户头像
     * @param $value
     * @param $data
     * @return false|string
     * @author ljj
     * @date 2023/5/24 2:36 下午
     */
    public function getAvatarAttr($value,$data)
    {
        return empty($value) ? '' : FileService::getFileUrl($value);
    }

    /**
     * @notes 收款码获取器
     * @param $value
     * @param $data
     * @return string
     * @author ljj
     * @date 2023/6/21 11:51 上午
     */
    public function getMoneyQrCodeAttr($value,$data)
    {
        return empty($value) ? '' : FileService::getFileUrl($value);
    }

    /**
     * @notes 收款码修改器
     * @param $value
     * @param $data
     * @return string
     * @author ljj
     * @date 2023/6/21 11:51 上午
     */
    public function setMoneyQrCodeAttr($value,$data)
    {
        return empty($value) ? '' : FileService::setFileUrl($value);
    }
}