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

namespace app\common\model\auth;

use app\common\model\BaseModel;

class AdminJobs extends BaseModel
{
    /**
     * @notes 删除用户关联岗位
     * @param $adminId
     * @return bool
     * @author 段誉
     * @date 2022/11/25 14:14
     */
    public static function delByUserId($adminId): bool
    {
        $model = new self();
        return $model->where(['admin_id' => $adminId])->delete();
    }
}