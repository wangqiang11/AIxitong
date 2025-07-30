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

namespace app\adminapi\lists\setting\pay;

use app\adminapi\lists\BaseAdminDataLists;
use app\common\model\pay\PayConfig;

/**
 * 支付配置列表
 * Class PayConfigLists
 * @package app\adminapi\lists\setting\pay
 */
class PayConfigLists extends BaseAdminDataLists
{
    /**
     * @notes 获取列表
     * @return array
     * @throws @\think\db\exception\DataNotFoundException
     * @throws @\think\db\exception\DbException
     * @throws @\think\db\exception\ModelNotFoundException
     * @author 段誉
     * @date 2023/2/23 16:15
     */
    public function lists(): array
    {
        return (new PayConfig())
            ->field('id,name,pay_way,icon,sort')
            ->append(['pay_way_name'])
            ->order('sort','asc')
            ->select()
            ->toArray();
    }

    /**
     * @notes 获取数量
     * @return int
     * @throws @\think\db\exception\DbException
     * @author 段誉
     * @date 2023/2/23 16:15
     */
    public function count(): int
    {
        return (new PayConfig())->count();
    }
}