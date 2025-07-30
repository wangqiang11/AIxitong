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

namespace app\adminapi\lists\dept;

use app\adminapi\lists\BaseAdminDataLists;
use app\common\lists\ListsExcelInterface;
use app\common\lists\ListsSearchInterface;
use app\common\model\dept\Jobs;

/**
 * 岗位列表
 * Class JobsLists
 * @package app\adminapi\lists\dept
 */
class JobsLists extends BaseAdminDataLists implements ListsSearchInterface,ListsExcelInterface
{
    /**
     * @notes 设置搜索条件
     * @return string[][]
     * @author 段誉
     * @date 2022/5/26 9:46
     */
    public function setSearch(): array
    {
        return [
            '%like%' => ['name'],
            '=' => ['code', 'status']
        ]??[];
    }

    /**
     * @notes  获取管理列表
     * @return array
     * @throws @\think\db\exception\DataNotFoundException
     * @throws @\think\db\exception\DbException
     * @throws @\think\db\exception\ModelNotFoundException
     * @author heshihu
     * @date 2022/2/21 17:11
     */
    public function lists(): array
    {
        return (new Jobs())
            ->where($this->searchWhere)
            ->append(['status_desc'])
            ->limit($this->limitOffset, $this->limitLength)
            ->order(['sort' => 'desc', 'id' => 'desc'])
            ->select()
            ->toArray();
    }

    /**
     * @notes 获取数量
     * @return int
     * @throws @\think\db\exception\DbException
     * @author 段誉
     * @date 2022/5/26 9:48
     */
    public function count(): int
    {
        return (new Jobs())->where($this->searchWhere)->count();
    }

    /**
     * @notes 导出文件名
     * @return string
     * @author 段誉
     * @date 2022/11/24 16:17
     */
    public function setFileName(): string
    {
        return '岗位列表';
    }

    /**
     * @notes 导出字段
     * @return string[]
     * @author 段誉
     * @date 2022/11/24 16:17
     */
    public function setExcelFields(): array
    {
        return [
            'code'        => '岗位编码',
            'name'        => '岗位名称',
            'remark'      => '备注',
            'status_desc' => '状态',
            'create_time' => '添加时间',
        ]??[];
    }
}