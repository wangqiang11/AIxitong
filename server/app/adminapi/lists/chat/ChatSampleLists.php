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

namespace app\adminapi\lists\chat;

use app\adminapi\lists\BaseAdminDataLists;
use app\common\lists\ListsSearchInterface;
use app\common\model\chat\ChatSample;

/**
 * 对话示例列表
 */
class ChatSampleLists extends BaseAdminDataLists implements ListsSearchInterface
{
    /**
     * @notes 实现数据列表
     * @return array
     * @throws @\think\db\exception\DataNotFoundException
     * @throws @\think\db\exception\DbException
     * @throws @\think\db\exception\ModelNotFoundException
     * @author fzr
     */
    public function lists(): array
    {
        return (new ChatSample())
            ->alias('cs')
            ->where($this->searchWhere)
            ->join('chat_category cc','cc.id = cs.category_id')
            ->limit($this->limitOffset, $this->limitLength)
            ->field('cs.*,cc.name as category_name')
            ->order(['cs.sort'=>'desc','id'=>'desc'])
            ->select()
            ->toArray();
    }

    /**
     * @notes 实现数据列表记录数
     * @return int
     * @throws @\think\db\exception\DbException
     * @author fzr
     */
    public function count(): int
    {
        return (new ChatSample())
            ->alias('cs')
            ->where($this->searchWhere)
            ->join('chat_category cc','cc.id = cs.category_id')
            ->count();
    }

    /**
     * @notes 设置搜索条件
     * @return array
     * @author fzr
     */
    public function setSearch(): array
    {
        return [
            '%like%' => ['cs.content'],
            '=' => ['cs.status','cs.category_id']
        ]??[];
    }
}