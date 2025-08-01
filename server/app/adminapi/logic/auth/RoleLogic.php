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

namespace app\adminapi\logic\auth;

use app\common\cache\AdminAuthCache;
use app\common\model\auth\SystemRole;
use app\common\model\auth\SystemRoleMenu;
use app\common\logic\BaseLogic;
use Exception;

/**
 * 角色逻辑层
 * Class RoleLogic
 * @package app\adminapi\logic\auth
 */
class RoleLogic extends BaseLogic
{
    /**
     * @notes 添加角色
     * @param array $params
     * @return bool
     * @author 段誉
     * @date 2021/12/29 11:50
     */
    public static function add(array $params): bool
    {
        $modelSystemRoleMenu = new SystemRoleMenu();
        $modelSystemRoleMenu->startTrans();
        try {
            $menuId = !empty($params['menu_id']) ? $params['menu_id'] : [];

            $role = SystemRole::create([
                'name' => $params['name'],
                'desc' => $params['desc'] ?? '',
                'sort' => $params['sort'] ?? 0,
            ]);

            $data = [];
            foreach ($menuId as $item) {
                if (empty($item)) {
                    continue;
                }
                $data[] = [
                    'role_id' => $role['id'],
                    'menu_id' => $item,
                ];
            }

            $modelSystemRoleMenu->insertAll($data);
            $modelSystemRoleMenu->commit();
            return true;
        } catch (Exception $e) {
            $modelSystemRoleMenu->rollback();
            self::$error = $e->getMessage();
            return false;
        }
    }

    /**
     * @notes 编辑角色
     * @param array $params
     * @return bool
     * @author 段誉
     * @date 2021/12/29 14:16
     */
    public static function edit(array $params): bool
    {
        $modelSystemRoleMenu = new SystemRoleMenu();
        $modelSystemRoleMenu->startTrans();
        try {
            $menuId = !empty($params['menu_id']) ? $params['menu_id'] : [];

            SystemRole::update([
                'id' => $params['id'],
                'name' => $params['name'],
                'desc' => $params['desc'] ?? '',
                'sort' => $params['sort'] ?? 0,
            ]);

            if (!empty($menuId)) {
                (new SystemRoleMenu())->where(['role_id' => $params['id']])->delete();
                $data = [];
                foreach ($menuId as $item) {
                    $data[] = [
                        'role_id' => $params['id'],
                        'menu_id' => $item,
                    ];
                }
                $modelSystemRoleMenu->insertAll($data);
            }

            (new AdminAuthCache())->deleteTag();
            $modelSystemRoleMenu->commit();
            return true;
        } catch (Exception $e) {
            $modelSystemRoleMenu->rollback();
            self::$error = $e->getMessage();
            return false;
        }
    }

    /**
     * @notes 删除角色
     * @param int $id
     * @return bool
     * @author 段誉
     * @date 2021/12/29 14:16
     */
    public static function delete(int $id): bool
    {
        SystemRole::destroy(['id' => $id]);
        (new AdminAuthCache())->deleteTag();
        return true;
    }

    /**
     * @notes 角色详情
     * @param int $id
     * @return array
     * @throws @\think\db\exception\DataNotFoundException
     * @throws @\think\db\exception\DbException
     * @throws @\think\db\exception\ModelNotFoundException
     * @author 段誉
     * @date 2021/12/29 14:17
     */
    public static function detail(int $id): array
    {
        $detail = (new SystemRole())->field('id,name,desc,sort')->find($id);
        $authList = $detail->roleMenuIndex()->select()->toArray();
        $menuId = array_column($authList, 'menu_id');
        $detail['menu_id'] = $menuId;
        return $detail->toArray();
    }

    /**
     * @notes 角色数据
     * @return array
     * @throws @\think\db\exception\DataNotFoundException
     * @throws @\think\db\exception\DbException
     * @throws @\think\db\exception\ModelNotFoundException
     * @author 段誉
     * @date 2022/10/13 10:39
     */
    public static function getAllData(): array
    {
        return (new SystemRole())->order(['sort' => 'desc', 'id' => 'desc'])
            ->select()
            ->toArray();
    }
}