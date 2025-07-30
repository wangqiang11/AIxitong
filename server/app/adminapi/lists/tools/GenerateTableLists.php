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

namespace app\adminapi\lists\tools;

use app\adminapi\lists\BaseAdminDataLists;
use app\common\lists\ListsSearchInterface;
use app\common\model\tools\GenerateTable;

/**
 * 代码生成所选数据表列表
 * Class GenerateTableLists
 * @package app\adminapi\lists\tools
 */
class GenerateTableLists extends BaseAdminDataLists implements ListsSearchInterface
{
    /**
     * @notes 设置搜索条件
     * @return \string[][]
     * @author 段誉
     * @date 2022/6/14 10:55
     */
    public function setSearch(): array
    {
        return [
            '%like%' => ['table_name', 'table_comment']
        ]??[];
    }

    /**
     * @notes 查询列表
     * @return array
     * @throws @\think\db\exception\DataNotFoundException
     * @throws @\think\db\exception\DbException
     * @throws @\think\db\exception\ModelNotFoundException
     * @author 段誉
     * @date 2022/6/14 10:55
     */
    public function lists(): array
    {
        return (new GenerateTable())
            ->where($this->searchWhere)
            ->order(['id' => 'desc'])
            ->append(['template_type_desc'])
            ->limit($this->limitOffset, $this->limitLength)
            ->select()
            ->toArray();
    }

    /**
     * @notes 获取数量
     * @return int
     * @throws @\think\db\exception\DbException
     * @author 段誉
     * @date 2022/6/14 10:55
     */
    public function count(): int
    {
        return (new GenerateTable())->count();
    }
}