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

namespace app\adminapi\lists\chat;

use app\adminapi\lists\BaseAdminDataLists;
use app\common\lists\ListsSearchInterface;
use app\common\model\chat\ChatCategory;

/**
 * 示例分类列表
 */
class ChatCategoryLists extends BaseAdminDataLists implements ListsSearchInterface
{
    /**
     * @notes 列表
     * @return array
     * @throws @\think\db\exception\DataNotFoundException
     * @throws @\think\db\exception\DbException
     * @throws @\think\db\exception\ModelNotFoundException
     * @author fzr
     */
    public function lists(): array
    {
        return (new ChatCategory())
            ->withoutField('update_time,delete_time')
            ->where($this->searchWhere)
            ->withCount('sample')
            ->order(['sort'=>'desc','id'=>'asc'])
            ->select()
            ->toArray();
    }

    /**
     * @notes 统计
     * @return int
     * @throws @\think\db\exception\DbException
     * @author fzr
     */
    public function count(): int
    {
        return (new ChatCategory())->where($this->searchWhere)->count();
    }

    /**
     * @notes 条件
     * @return array
     * @author fzr
     */
    public function setSearch(): array
    {
        return [
            '%like%' => ['name'],
            '=' => ['status']
        ]??[];
    }
}