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

namespace app\api\lists\kb;

use app\api\lists\BaseApiDataLists;
use app\common\model\kb\KbRobot;
use app\common\model\kb\KbRobotShareLog;

/**
 * 机器人列表
 */
class KbRobotLists extends BaseApiDataLists
{
    public function where(): array
    {
        $where = [];
        if (isset($this->params['type']) && is_numeric($this->params['type'])) {
            $where[] = ['is_public', '=', intval($this->params['type'])];
        }
        if (!empty($this->params['keyword']) && $this->params['keyword']) {
            $where[] = ['name', 'like', '%'.$this->params['keyword'].'%'];
        }
        return $where;
    }

    /**
     * @notes 列表
     * @return array
     * @throws @\think\db\exception\DataNotFoundException
     * @throws @\think\db\exception\DbException
     * @throws @\think\db\exception\ModelNotFoundException
     * @author fzr
     */
    public function lists(): array
    {
        $model = new KbRobot();
        $lists =  $model
            ->field(['id,image,name,intro,is_public,is_enable,create_time'])
            ->where(['user_id'=>$this->userId])
            ->where($this->where())
            ->order('id desc')
            ->limit($this->limitOffset, $this->limitLength)
            ->select()
            ->toArray();

        $shareRobotIds = KbRobotShareLog::where(['user_id'=>$this->userId])
            ->distinct(true)
            ->column('robot_id');
        foreach ($lists as $key =>$list){
            $lists[$key]['is_share'] = 0;
            if(in_array($list['id'],$shareRobotIds)){
                $lists[$key]['is_share'] = 1;
            }
        }
        return $lists;
    }

    /**
     * @notes 统计
     * @return int
     * @throws @\think\db\exception\DbException
     * @author fzr
     */
    public function count(): int
    {
        $model = new KbRobot();
        return $model
            ->where(['user_id'=>$this->userId])
            ->where($this->where())
            ->count();
    }
}