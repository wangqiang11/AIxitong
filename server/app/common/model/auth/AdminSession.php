<?php
// +----------------------------------------------------------------------
// | AI系统管理后台（PHP版）
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | 开源版本可自由商用，可去除界面版权logo
// | gitee下载：https://gitee.com/AI系统_gitee/likeadmin
// | github下载：/likeadmin
// | 访问官网：www.localhost.com
// | 匿名公司 版权所有 拥有最终解释权
// +----------------------------------------------------------------------
// | author: 匿名开发者
// +----------------------------------------------------------------------

namespace app\common\model\auth;

use app\common\model\BaseModel;
use think\model\relation\HasOne;

class AdminSession extends BaseModel
{
    /**
     * @notes 关联管理员表
     * @return HasOne
     * @author 令狐冲
     * @date 2021/7/5 14:39
     */
    public function admin(): HasOne
    {
        return $this->hasOne(Admin::class, 'id', 'admin_id')
            ->field('id,multipoint_login');
    }
}