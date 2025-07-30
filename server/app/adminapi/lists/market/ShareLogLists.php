<?php
// +----------------------------------------------------------------------
// | 匿名开发者
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | gitee下载：https://gitee.com/AI系统_gitee
// | github下载：https://github.com/AI系统-github
// | 访问官网：
// | 访问社区：https://home.AI系统.cn
// | 访问手册：http://doc.AI系统.cn
// | 微信公众号：AI系统技术社区
// | AI系统系列产品在gitee、github等公开渠道开源版本可免费商用，未经许可不能去除前后端官方版权标识
// |  AI系统系列产品收费版本务必购买商业授权，购买去版权授权后，方可去除前后端官方版权标识
// | 禁止对系统程序代码以任何目的，任何形式的再发布
// | AI系统团队版权所有并拥有最终解释权
// +----------------------------------------------------------------------
// | author: AI系统.cn.team
// +----------------------------------------------------------------------

namespace app\adminapi\lists\market;

use app\adminapi\lists\BaseAdminDataLists;
use app\common\lists\ListsExcelInterface;
use app\common\lists\ListsExtendInterface;
use app\common\model\task\TaskShare;
use app\common\service\FileService;

class ShareLogLists extends BaseAdminDataLists implements ListsExtendInterface,ListsExcelInterface
{
    /**
     * @notes 搜索条件
     * @return array
     * @author ljj
     * @date 2023/4/17 5:55 下午
     */
    public function where()
    {
        $where = [];
        if (isset($this->params['user_info']) && $this->params['user_info'] != '') {
            $where[] = ['u.sn|u.nickname|u.mobile','like','%'.$this->params['user_info'].'%'];
        }
        if (isset($this->params['start_time']) && $this->params['start_time'] != '') {
            $where[] = ['ts.create_time','>=',strtotime($this->params['start_time'])];
        }
        if (isset($this->params['end_time']) && $this->params['end_time'] != '') {
            $where[] = ['ts.create_time','<=',strtotime($this->params['end_time'])];
        }

        return $where;
    }

    /**
     * @notes 分享记录列表
     * @return array
     * @author ljj
     * @date 2023/4/17 6:03 下午
     */
    public function lists(): array
    {
        $lists = TaskShare::alias('ts')
            ->join('user u', 'u.id = ts.user_id')
            ->field('u.nickname,u.avatar,ts.id,ts.user_id,ts.channel,ts.invite_num,ts.click_num,ts.balance,ts.create_time,u.nickname')
            ->where($this->where())
            ->append(['channel_desc'])
            ->order('id','desc')
            ->limit($this->limitOffset, $this->limitLength)
            ->select()
            ->toArray();
        foreach ($lists as $key => $list){
            $lists[$key]['avatar'] = FileService::getFileUrl($list['avatar']);
        }

        return $lists;
    }

    /**
     * @notes 分享记录数量
     * @return int
     * @author ljj
     * @date 2023/4/17 6:03 下午
     */
    public function count(): int
    {
        return TaskShare::alias('ts')
            ->join('user u', 'u.id = ts.user_id')
            ->where($this->where())
            ->count();
    }

    /**
     * @notes 统计数据
     * @return array
     * @author ljj
     * @date 2023/4/17 6:02 下午
     */
    public function extend()
    {
        return [
            'today_share_num' => TaskShare::alias('ts')
                ->join('user u', 'u.id = ts.user_id')
                ->whereDay('ts.create_time')
                ->where($this->where())
                ->count(),
            'invite_num' => TaskShare::alias('ts')
                ->join('user u', 'u.id = ts.user_id')
                ->where($this->where())
                ->sum('invite_num'),
            'today_balance' => TaskShare::alias('ts')
                ->join('user u', 'u.id = ts.user_id')
                ->whereDay('ts.create_time')
                ->where($this->where())
                ->sum('ts.balance'),
            'total_balance' => TaskShare::alias('ts')
                ->join('user u', 'u.id = ts.user_id')
                ->where($this->where())
                ->sum('ts.balance'),
        ];
    }

    /**
     * @notes 导出文件名
     * @return string
     * @author ljj
     * @date 2023/8/24 2:49 下午
     */
    public function setFileName(): string
    {
        return '分享记录列表';
    }

    /**
     * @notes 导出字段
     * @return string[]
     * @author ljj
     * @date 2023/8/24 2:49 下午
     */
    public function setExcelFields(): array
    {
        return [
            'nickname' => '用户昵称',
            'channel_desc' => '分享渠道',
            'create_time' => '分享时间',
            'click_num' => '点击量',
            'invite_num' => '成功邀请',
            'rewards' => '分享奖励',
        ];
    }
}