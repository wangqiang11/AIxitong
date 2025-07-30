<?php
// +----------------------------------------------------------------------
// | AI系统管理后台（PHP版）
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | 开源版本可自由商用，可去除界面版权logo
// | //
// | github下载：/likeadmin
// | 访问官网：www.localhost.com
// | 匿名公司 版权所有 拥有最终解释权
// +----------------------------------------------------------------------
// | author: 匿名开发者
// +----------------------------------------------------------------------

namespace app\common\cache;

use app\adminapi\logic\auth\AuthLogic;

/**
 * 管理员权限缓存
 * Class AdminAuthCache
 * @package app\common\cache
 */
class AdminAuthCache extends BaseCache
{
    private string $prefix = 'admin_auth_';
    private mixed $authConfigList;
    private string $cacheMd5Key;      // 权限文件MD5的key
    private string $cacheAllKey;      // 全部权限的key
    private string $cacheUrlKey;      // 管理员的url缓存key
    private string $authMd5;          // 权限文件MD5的值
    private mixed $adminId;           // 管理员ID

    public function __construct($adminId = '')
    {
        parent::__construct();

        $this->adminId = $adminId;

        // 全部权限
        $this->authConfigList = AuthLogic::getAllAuth();

        // 当前权限配置文件的md5
        $this->authMd5 = md5(json_encode($this->authConfigList));

        $this->cacheMd5Key = $this->prefix . 'md5';
        $this->cacheAllKey = $this->prefix . 'all';
        $this->cacheUrlKey = $this->prefix . 'url_' . $this->adminId;

        $cacheAuthMd5 = $this->get($this->cacheMd5Key);
        $cacheAuth = $this->get($this->cacheAllKey);
        //权限配置和缓存权限对比，不一样说明权限配置文件已修改，清理缓存
        if ($this->authMd5 !== $cacheAuthMd5 || empty($cacheAuth)) {
            $this->deleteTag();
        }
    }

    /**
     * @notes 获取管理权限uri
     * @return mixed
     * @author 令狐冲
     * @date 2021/8/19 15:27
     */
    public function getAdminUri(): mixed
    {
        //从缓存获取，直接返回
        $urisAuth = $this->get($this->cacheUrlKey);
        if ($urisAuth) {
            return $urisAuth;
        }

        //获取角色关联的菜单id(菜单或权限)
        $urisAuth = AuthLogic::getAuthByAdminId($this->adminId);
        if (empty($urisAuth)) {
            return [];
        }

        $this->set($this->cacheUrlKey, $urisAuth, 3600);

        //保存到缓存并读取返回
        return $urisAuth;
    }

    /**
     * @notes 获取全部权限uri
     * @return mixed
     * @author cjhao
     * @date 2021/9/13 11:41
     */
    public function getAllUri(): mixed
    {
        $cacheAuth = $this->get($this->cacheAllKey);
        if ($cacheAuth) {
            return $cacheAuth;
        }
        // 获取全部权限
        $authList = AuthLogic::getAllAuth();
        //保存到缓存并读取返回
        $this->set($this->cacheMd5Key, $this->authMd5);
        $this->set($this->cacheAllKey, $authList);
        return $authList;
    }

    /**
     * @notes 清理管理员缓存
     * @return bool
     * @author cjhao
     * @date 2021/10/13 18:47
     */
    public function clearAuthCache(): bool
    {
        $this->clear();
        return true;
    }
}