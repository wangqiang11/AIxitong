<?php
// +----------------------------------------------------------------------
// | 匿名开发者
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | gitee下载：
// | github下载：
// | 访问官网：
// | 访问社区：
// | 访问手册：
// | 微信公众号：
// | 在gitee、github等公开渠道开源版本可免费商用，未经许可不能去除前后端官方版权标识
// |  收费版本务必购买商业授权，购买去版权授权后，方可去除前后端官方版权标识
// | 禁止对系统程序代码以任何目的，任何形式的再发布
// | 版权所有并拥有最终解释权
// +----------------------------------------------------------------------
// | author: AI系统
// +----------------------------------------------------------------------

namespace app\api\lists;


use app\common\model\distribution\DistributionOrder;

class DistributionOrderLists extends BaseApiDataLists
{
    /**
     * @notes 分销订单列表
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @author ljj
     * @date 2023/5/24 7:40 下午
     */
    public function lists(): array
    {
        $lists = DistributionOrder::field('id,order_type,order_sn,order_amount,user_id,IF(first_user_id='.$this->userId.',first_reward,second_reward) as income,create_time')
            ->with(['user'])
            ->append(['order_type_desc','status_desc'])
            ->hidden(['order_type','user_id'])
            ->where(['first_user_id|second_user_id'=>$this->userId])
            ->order('id','desc')
            ->limit($this->limitOffset, $this->limitLength)
            ->select()
            ->toArray();

        return $lists;
    }

    /**
     * @notes 分销订单数量
     * @return int
     * @author ljj
     * @date 2023/5/24 7:40 下午
     */
    public function count(): int
    {
        return DistributionOrder::where(['first_user_id|second_user_id'=>$this->userId])->count();
    }
}