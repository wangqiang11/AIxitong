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

namespace app\common\model\auth;

use app\common\enum\YesNoEnum;
use app\common\model\BaseModel;
use think\model\concern\SoftDelete;
use app\common\service\FileService;

class Admin extends BaseModel
{
    use SoftDelete;

    protected string $deleteTime = 'delete_time';

    protected $append = [
        'role_id',
        'dept_id',
        'jobs_id',
    ];

    /**
     * @notes 关联角色id
     * @param $value
     * @param $data
     * @return array
     * @author 段誉
     * @date 2022/11/25 15:00
     */
    public function getRoleIdAttr($value, $data): array
    {
        unset($value);
        return (new AdminRole())->where('admin_id', $data['id'])->column('role_id');
    }

    /**
     * @notes 关联部门id
     * @param $value
     * @param $data
     * @return array
     * @author 段誉
     * @date 2022/11/25 15:00
     */
    public function getDeptIdAttr($value, $data): array
    {
        unset($value);
        return (new AdminDept())->where('admin_id', $data['id'])->column('dept_id');
    }

    /**
     * @notes 关联岗位id
     * @param $value
     * @param $data
     * @return array
     * @author 段誉
     * @date 2022/11/25 15:01
     */
    public function getJobsIdAttr($value, $data): array
    {
        unset($value);
        return (new AdminJobs())->where('admin_id', $data['id'])->column('jobs_id');
    }

    /**
     * @notes 获取禁用状态
     * @param $value
     * @param $data
     * @return string|string[]
     * @author 令狐冲
     * @date 2021/7/7 01:25
     */
    public function getDisableDescAttr($value, $data): array|string
    {
        unset($value);
        return YesNoEnum::getDisableDesc($data['disable']);
    }

    /**
     * @notes 最后登录时间获取器 - 格式化：年-月-日 时:分:秒
     * @param $value
     * @return string
     * @author Tab
     * @date 2021/7/13 11:35
     */
    public function getLoginTimeAttr($value): string
    {
        return empty($value) ? '' : date('Y-m-d H:i:s', $value);
    }

    /**
     * @notes 头像获取器 - 头像路径添加域名
     * @param $value
     * @return string
     * @author Tab
     * @date 2021/7/13 11:35
     */
    public function getAvatarAttr($value): string
    {
        return empty($value) ? FileService::getFileUrl(config('project.default_image.admin_avatar')) : FileService::getFileUrl(trim($value, '/'));
    }
}