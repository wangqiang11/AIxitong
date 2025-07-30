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

namespace app\adminapi\lists\crontab;

use app\adminapi\lists\BaseAdminDataLists;
use app\common\model\Crontab;

/**
 * 定时任务列表
 * Class CrontabLists
 * @package app\adminapi\lists\crontab
 */
class CrontabLists extends BaseAdminDataLists
{
    /**
     * @notes 定时任务列表
     * @return array
     * @throws @\think\db\exception\DataNotFoundException
     * @throws @\think\db\exception\DbException
     * @throws @\think\db\exception\ModelNotFoundException
     * @author 段誉
     * @date 2022/3/29 14:30
     */
    public function lists(): array
    {
        $field = 'id,name,type,type as type_desc,command,params,expression,
        status,status as status_desc,error,last_time,time,max_time';

        return (new Crontab())->field($field)
            ->limit($this->limitOffset, $this->limitLength)
            ->order('id', 'desc')
            ->select()
            ->toArray();
    }

    /**
     * @notes 定时任务数量
     * @return int
     * @throws @\think\db\exception\DbException
     * @author 段誉
     * @date 2022/3/29 14:38
     */
    public function count(): int
    {
        return (new Crontab())->count();
    }
}