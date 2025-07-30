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

namespace app\common\enum\user;

/**
 * 管理后台登录终端
 * Class terminalEnum
 * @package app\common\enum
 */
class UserEnum
{
    /**
     * 性别
     * SEX_OTHER = 未知
     * SEX_MEN =  男
     * SEX_WOMAN = 女
     */
    const SEX_OTHER = 0;
    const SEX_MEN   = 1;
    const SEX_WOMAN = 2;


    // 审核状态
    const CENSOR_STATUS_WAIT           = 0; //未审核
    const CENSOR_STATUS_COMPLIANCE     = 1; //合规
    const CENSOR_STATUS_NON_COMPLIANCE = 2; //不合规
    const CENSOR_STATUS_SUSPECTED      = 3; //疑似
    const CENSOR_STATUS_FAIL           = 4; //审核失败

    /**
     * @notes 性别描述
     * @param bool|int $from
     * @return string|string[]
     * @author 段誉
     * @date 2022/9/7 15:05
     */
    public static function getSexDesc(bool|int $from = true): array|string
    {
        $desc = [
            self::SEX_OTHER => '未知',
            self::SEX_MEN   => '男',
            self::SEX_WOMAN => '女',
        ];
        if (true === $from) {
            return $desc;
        }
        return $desc[$from] ?? '';
    }
}