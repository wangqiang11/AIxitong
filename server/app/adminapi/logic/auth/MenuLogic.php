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

namespace app\adminapi\logic\auth;

use app\common\enum\YesNoEnum;
use app\common\logic\BaseLogic;
use app\common\model\auth\Admin;
use app\common\model\auth\SystemMenu;
use app\common\model\auth\SystemRoleMenu;
use think\Model;

/**
 * 系统菜单
 * Class MenuLogic
 * @package app\adminapi\logic\auth
 */
class MenuLogic extends BaseLogic
{
    /**
     * @notes 获取管理员对应的角色菜单
     * @param $adminId
     * @return array
     * @throws @\think\db\exception\DataNotFoundException
     * @throws @\think\db\exception\DbException
     * @throws @\think\db\exception\ModelNotFoundException
     * @author 段誉
     * @date 2022/7/1 10:50
     */
    public static function getMenuByAdminId($adminId): array
    {
        $admin = (new Admin())->findOrEmpty($adminId);

        $where = [];
        $where[] = ['type', 'in', ['M', 'C']];
        $where[] = ['is_disable', '=', 0];

        if ($admin['root'] != 1) {
            $roleMenu = (new SystemRoleMenu())->whereIn('role_id', $admin['role_id'])->column('menu_id');
            $where[] = ['id', 'in', $roleMenu];
        }

        $menu = (new SystemMenu())
            ->where($where)
            ->order(['sort' => 'desc', 'id' => 'asc'])
            ->select();

        return linear_to_tree($menu, 'children');
    }

    /**
     * @notes 添加菜单
     * @param array $params
     * @return SystemMenu|Model
     * @author 段誉
     * @date 2022/6/30 10:06
     */
    public static function add(array $params): SystemMenu|Model
    {
        return SystemMenu::create([
            'pid'        => $params['pid'],
            'type'       => $params['type'],
            'name'       => $params['name'],
            'icon'       => $params['icon']      ?? '',
            'sort'       => $params['sort']      ?? 0,
            'perms'      => $params['perms']     ?? '',
            'paths'      => $params['paths']     ?? '',
            'component'  => $params['component'] ?? '',
            'selected'   => $params['selected']  ?? '',
            'params'     => $params['params']    ?? '',
            'is_cache'   => $params['is_cache'],
            'is_show'    => $params['is_show'],
            'is_disable' => $params['is_disable'],
        ]);
    }

    /**
     * @notes 编辑菜单
     * @param array $params
     * @return SystemMenu
     * @author 段誉
     * @date 2022/6/30 10:07
     */
    public static function edit(array $params): SystemMenu
    {
        return SystemMenu::update([
            'id'         => $params['id'],
            'pid'        => $params['pid'],
            'type'       => $params['type'],
            'name'       => $params['name'],
            'icon'       => $params['icon']      ?? '',
            'sort'       => $params['sort']      ?? 0,
            'perms'      => $params['perms']     ?? '',
            'paths'      => $params['paths']     ?? '',
            'component'  => $params['component'] ?? '',
            'selected'   => $params['selected']  ?? '',
            'params'     => $params['params']    ?? '',
            'is_cache'   => $params['is_cache'],
            'is_show'    => $params['is_show'],
            'is_disable' => $params['is_disable'],
        ]);
    }

    /**
     * @notes 详情
     * @param $params
     * @return array
     * @author 段誉
     * @date 2022/6/30 9:54
     */
    public static function detail($params): array
    {
        return (new SystemMenu())->findOrEmpty($params['id'])->toArray();
    }

    /**
     * @notes 删除菜单
     * @param $params
     * @author 段誉
     * @date 2022/6/30 9:47
     */
    public static function delete($params): void
    {
        // 删除菜单
        SystemMenu::destroy($params['id']);

        // 删除角色-菜单表中 与该菜单关联的记录
        (new SystemRoleMenu())->where(['menu_id' => $params['id']])->delete();
    }

    /**
     * @notes 更新状态
     * @param array $params
     * @return SystemMenu
     * @author 段誉
     * @date 2022/7/6 17:02
     */
    public static function updateStatus(array $params): SystemMenu
    {
        return SystemMenu::update([
            'id'         => intval($params['id']),
            'is_disable' => $params['is_disable']
        ]);
    }

    /**
     * @notes 全部数据
     * @return array
     * @throws @\think\db\exception\DataNotFoundException
     * @throws @\think\db\exception\DbException
     * @throws @\think\db\exception\ModelNotFoundException
     * @author 段誉
     * @date 2022/10/13 11:03
     */
    public static function getAllData(): array
    {
        $data = (new SystemMenu())
            ->field('id,pid,name')
            ->where(['is_disable' => YesNoEnum::NO])
            ->order(['sort' => 'desc', 'id' => 'desc'])
            ->select()
            ->toArray();

        return linear_to_tree($data, 'children');
    }
}