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

namespace app\adminapi\lists\kb;

use app\adminapi\lists\BaseAdminDataLists;
use app\common\lists\ListsSearchInterface;
use app\common\model\kb\KbRobot;
use app\common\model\kb\KbRobotCategory;

/**
 * 机器人分类列表
 */
class KbRobotCateLists extends BaseAdminDataLists implements ListsSearchInterface
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
        $model = new KbRobotCategory();
        $lists = $model
            ->withoutField('delete_time')
            ->where($this->searchWhere)
            ->limit($this->limitOffset, $this->limitLength)
            ->order('sort desc, id desc')
            ->select()
            ->toArray();

        $modelKbRobot = new KbRobot();
        foreach ($lists as &$item) {
            $item['example_sum'] = $modelKbRobot->where(['cate_id'=>$item['id']])->count();
        }

        return $lists;
    }

    /**
     * @notes 统计
     * @return int
     * @throws @\think\db\exception\DbException
     * @author fzr
     */
    public function count(): int
    {
        $model = new KbRobotCategory();
        return $model
            ->withoutField('delete_time')
            ->where($this->searchWhere)
            ->limit($this->limitOffset, $this->limitLength)
            ->count();
    }

    /**
     * @notes 搜索
     * @return array|array[]
     * @author fzr
     */
    public function setSearch(): array
    {
        return [
            '='      => ['is_enable'],
            '%like%' => ['name']
        ]??[];
    }
}