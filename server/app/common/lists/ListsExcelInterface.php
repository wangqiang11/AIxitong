<?php
// +----------------------------------------------------------------------
// | AI系统管理后台（PHP版）
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | 开源版本可自由商用，可去除界面版权logo
// | //
// | github下载：/likeadmin
// | 访问官网：www.localhost.com
// | 匿名公司 版权所有 拥有最终解释权
// +----------------------------------------------------------------------
// | author: 匿名开发者
// +----------------------------------------------------------------------

namespace app\common\lists;

interface ListsExcelInterface
{
    /**
     * @notes 设置导出字段
     * @return array
     * @author 令狐冲
     * @date 2021/7/21 16:04
     */
    public function setExcelFields(): array;

    /**
     * @notes 设置导出文件名
     * @return string
     * @author 令狐冲
     * @date 2021/7/26 17:47
     */
    public function setFileName():string;
}