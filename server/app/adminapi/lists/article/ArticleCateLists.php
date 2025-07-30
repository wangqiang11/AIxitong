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

namespace app\adminapi\lists\article;

use app\adminapi\lists\BaseAdminDataLists;
use app\common\lists\ListsSearchInterface;
use app\common\lists\ListsSortInterface;
use app\common\model\article\ArticleCate;

/**
 * 资讯分类列表
 * Class ArticleCateLists
 * @package app\adminapi\lists\article
 */
class ArticleCateLists extends BaseAdminDataLists implements ListsSearchInterface, ListsSortInterface
{
    /**
     * @notes  设置搜索条件
     * @return array
     * @author heshihu
     * @date 2022/2/8 18:39
     */
    public function setSearch(): array
    {
        return [];
    }

    /**
     * @notes  设置支持排序字段
     * @return array
     * @author heshihu
     * @date 2022/2/9 15:11
     */
    public function setSortFields(): array
    {
        return ['create_time' => 'create_time', 'id' => 'id']??[];
    }

    /**
     * @notes  设置默认排序
     * @return array
     * @author heshihu
     * @date 2022/2/9 15:08
     */
    public function setDefaultOrder(): array
    {
        return ['sort' => 'desc','id' => 'desc']??[];
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
        return (new ArticleCate())
            ->where($this->searchWhere)
            ->limit($this->limitOffset, $this->limitLength)
            ->order($this->sortOrder)
            ->append(['article_count'])
            ->append(['is_show_desc'])
            ->select()
            ->toArray();
    }

    /**
     * @notes  获取数量
     * @return int
     * @throws @\think\db\exception\DbException
     * @author heshihu
     * @date 2022/2/9 15:12
     */
    public function count(): int
    {
        return (new ArticleCate())->where($this->searchWhere)->count();
    }

    public function extend(): array
    {
        return [];
    }
}