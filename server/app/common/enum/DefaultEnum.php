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

namespace app\common\enum;

class DefaultEnum
{
    //默认排序
    const SORT = 50;

    //显示隐藏
    const HIDE = 0; // 隐藏
    const SHOW = 1; // 显示

    // 性别
    const UNKNOWN = 0; // 未知
    const MAN     = 1; // 男
    const WOMAN   = 2; // 女

    // 属性
    const SYSTEM = 1; // 系统默认
    const CUSTOM = 2; // 自定义

    /**
     * @notes 获取显示状态
     * @param bool|int $value
     * @return string|string[]
     * @author ljj
     * @date 2022/2/8 3:56 下午
     */
    public static function getShowDesc(bool|int $value = true): array|string
    {
        $data = [
            self::HIDE => '隐藏',
            self::SHOW => '显示'
        ];
        if ($value === true) {
            return $data;
        }
        return $data[$value];
    }

    /**
     * @notes 启用状态
     * @param bool|int $value
     * @return string|string[]
     * @author ljj
     * @date 2022/2/14 4:02 下午
     */
    public static function getEnableDesc(bool|int $value = true): array|string
    {
        $data = [
            self::HIDE => '停用',
            self::SHOW => '启用'
        ];
        if ($value === true) {
            return $data;
        }
        return $data[$value];
    }

    /**
     * @notes 性别
     * @param bool $value
     * @return string|string[]
     * @author ljj
     * @date 2022/2/10 11:40 上午
     */
    public static function getSexDesc(bool|int $value = true): array|string
    {
        $data = [
            self::UNKNOWN => '未知',
            self::MAN     => '男',
            self::WOMAN   => '女'
        ];
        if ($value === true) {
            return $data;
        }
        return $data[$value];
    }

    /**
     * @notes 属性
     * @param bool|int $value
     * @return string|string[]
     * @author ljj
     * @date 2022/2/14 4:41 下午
     */
    public static function getAttrDesc(bool|int $value = true): array|string
    {
        $data = [
            self::SYSTEM => '系统默认',
            self::CUSTOM => '自定义'
        ];
        if ($value === true) {
            return $data;
        }
        return $data[$value];
    }

    /**
     * @notes 是否推荐
     * @param bool|int $value
     * @return string|string[]
     * @author ljj
     * @date 2022/2/23 3:30 下午
     */
    public static function getRecommendDesc(bool|int $value = true): array|string
    {
        $data = [
            self::HIDE => '不推荐',
            self::SHOW => '推荐'
        ];
        if ($value === true) {
            return $data;
        }
        return $data[$value];
    }
}