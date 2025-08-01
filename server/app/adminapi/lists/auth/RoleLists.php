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

namespace app\adminapi\lists\auth;

use app\adminapi\lists\BaseAdminDataLists;
use app\common\model\auth\AdminRole;
use app\common\model\auth\SystemRole;

/**
 * 角色列表
 * Class RoleLists
 * @package app\adminapi\lists\auth
 */
class RoleLists extends BaseAdminDataLists
{
    /**
     * @notes 导出字段
     * @return string[]
     * @author Tab
     * @date 2021/9/22 18:52
     */
    public function setExcelFields(): array
    {
        return [
            'name'        => '角色名称',
            'desc'        => '备注',
            'create_time' => '创建时间'
        ]??[];
    }

    /**
     * @notes 导出表名
     * @return string
     * @author Tab
     * @date 2021/9/22 18:52
     */
    public function setFileName(): string
    {
        return '角色表';
    }

    /**
     * @notes 角色列表
     * @return array
     * @throws @\think\db\exception\DataNotFoundException
     * @throws @\think\db\exception\DbException
     * @throws @\think\db\exception\ModelNotFoundException
     * @author cjhao
     * @date 2021/8/25 18:00
     */
    public function lists(): array
    {
        $lists = (new SystemRole())
            ->with(['role_menu_index'])
            ->field('id,name,desc,sort,create_time')
            ->limit($this->limitOffset, $this->limitLength)
            ->order(['sort' => 'desc', 'id' => 'desc'])
            ->select()
            ->toArray();

        foreach ($lists as $key => $role) {
            //使用角色的人数
            $lists[$key]['num'] = AdminRole::where('role_id', $role['id'])->count();
            $menuId = array_column($role['role_menu_index'], 'menu_id');
            $lists[$key]['menu_id'] = $menuId;
            unset($lists[$key]['role_menu_index']);
        }

        return $lists;
    }

    /**
     * @notes 总记录数
     * @return int
     * @throws @\think\db\exception\DbException
     * @author Tab
     * @date 2021/7/13 11:26
     */
    public function count(): int
    {
        return (new SystemRole())->count();
    }
}