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

namespace app\common\cache;

use app\common\model\auth\Admin;
use app\common\model\auth\AdminSession;
use app\common\model\auth\SystemRole;
use DateTime;

/**
 * 管理员token缓存
 * Class AdminTokenCache
 * @package app\common\cache
 */
class AdminTokenCache extends BaseCache
{
    private string $prefix = 'token_admin_';

    /**
     * @notes 通过token获取缓存管理员信息
     * @param $token
     * @return mixed
     * @throws @\think\db\exception\DataNotFoundException
     * @throws @\think\db\exception\DbException
     * @throws @\think\db\exception\ModelNotFoundException
     * @author 令狐冲
     * @date 2021/6/30 16:57
     */
    public function getAdminInfo($token): mixed
    {
        //直接从缓存获取
        $adminInfo = $this->get($this->prefix . $token);
        if ($adminInfo) {
            return $adminInfo;
        }

        //从数据获取信息被设置缓存(可能后台清除缓存）
        $adminInfo = $this->setAdminInfo($token);
        if ($adminInfo) {
            return $adminInfo;
        }

        return false;
    }

    /**
     * @notes 通过有效token设置管理信息缓存
     * @param $token
     * @return mixed
     * @throws @\think\db\exception\DataNotFoundException
     * @throws @\think\db\exception\DbException
     * @throws @\think\db\exception\ModelNotFoundException
     * @author 令狐冲
     * @date 2021/7/5 12:12
     */
    public function setAdminInfo($token): mixed
    {
        $adminSession = (new AdminSession())->where([['token', '=', $token], ['expire_time', '>', time()]])->find();
        if (empty($adminSession)) {
            return [];
        }

        $admin = (new Admin())->where('id', '=', $adminSession->admin_id)
            ->append(['role_id'])
            ->find();

        $roleName = '';
        $roleLists = (new SystemRole())->column('name', 'id');
        if ($admin['root'] == 1) {
            $roleName = '系统管理员';
        } else {
            foreach ($admin['role_id'] as $roleId) {
                $roleName .= $roleLists[$roleId] ?? '';
                $roleName .= '/';
            }
            $roleName = trim($roleName, '/');
        }

        $adminInfo = [
            'admin_id'    => $admin->id,
            'root'        => $admin->root,
            'name'        => $admin->name,
            'account'     => $admin->account,
            'role_name'   => $roleName,
            'role_id'     => $admin->role_id,
            'token'       => $token,
            'terminal'    => $adminSession->terminal,
            'expire_time' => $adminSession->expire_time,
        ];
        $this->set($this->prefix . $token, $adminInfo, new DateTime(Date('Y-m-d H:i:s', $adminSession->expire_time)));
        return $this->getAdminInfo($token);
    }

    /**
     * @notes 删除缓存
     * @param $token
     * @return bool
     * @author 令狐冲
     * @date 2021/7/3 16:57
     */
    public function deleteAdminInfo($token): bool
    {
        return $this->delete($this->prefix . $token);
    }
}