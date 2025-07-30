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

namespace app\adminapi\lists\auth;

use app\adminapi\lists\BaseAdminDataLists;
use app\common\model\auth\SystemMenu;

/**
 *  菜单列表
 * Class MenuLists
 * @package app\adminapi\lists\auth
 */
class MenuLists extends BaseAdminDataLists
{
    /**
     * @notes 获取菜单列表
     * @return array
     * @throws @\think\db\exception\DataNotFoundException
     * @throws @\think\db\exception\DbException
     * @throws @\think\db\exception\ModelNotFoundException
     * @author 段誉
     * @date 2022/6/29 16:41
     */
    public function lists(): array
    {
        $lists = (new SystemMenu())
            ->order(['sort' => 'desc', 'id' => 'asc'])
            ->select()
            ->toArray();

        return linear_to_tree($lists, 'children');
    }

    /**
     * @notes 获取菜单数量
     * @return int
     * @throws @\think\db\exception\DbException
     * @author 段誉
     * @date 2022/6/29 16:41
     */
    public function count(): int
    {
        return (new SystemMenu())->count();
    }
}