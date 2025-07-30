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
// |  务必购买商业授权，购买去版权授权后，方可去除前后端官方版权标识
// | 禁止对系统程序代码以任何目的，任何形式的再发布
// | AI系统团队版权所有并拥有最终解释权
// +----------------------------------------------------------------------
// | author: AI系统
// +----------------------------------------------------------------------

namespace app\common\enum\kb;


class KbRotBotSquareEnum
{
    //来源
    const SOURCE_ADMIN = 1;//官方
    const SOURCE_USER = 2;//用户


    //审核状态
    const VERIFY_STATUS_WAIT = 0;//待审核
    const VERIFY_STATUS_SUCCESS = 1;//审核通过
    const VERIFY_STATUS_FAIL = 2;//审核不通过


    /**
     * @notes 审核状态
     * @param bool $value
     * @return string|string[]
     * @author ljj
     * @date 2023/8/1 6:04 下午
     */
    public static function getVerifyStatusDesc($value = true)
    {
        $data = [
            self::VERIFY_STATUS_WAIT => '待审核',
            self::VERIFY_STATUS_SUCCESS => '审核通过',
            self::VERIFY_STATUS_FAIL => '审核不通过'
        ];
        if ($value === true) {
            return $data;
        }
        return $data[$value] ?? '';
    }

}