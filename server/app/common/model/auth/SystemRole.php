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

namespace app\common\model\auth;

use app\common\model\BaseModel;
use think\model\concern\SoftDelete;
use think\model\relation\HasMany;

/**
 * 角色模型
 * Class Role
 * @package app\common\model
 */
class SystemRole extends BaseModel
{
    use SoftDelete;

    protected string $deleteTime = 'delete_time';

    protected $name = 'system_role';

    /**
     * @notes 角色与菜单关联关系
     * @return HasMany
     * @author 段誉
     * @date 2022/7/6 11:16
     */
    public function roleMenuIndex(): HasMany
    {
        return $this->hasMany(SystemRoleMenu::class, 'role_id');
    }
}