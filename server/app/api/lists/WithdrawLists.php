<?php
// +----------------------------------------------------------------------
// | 匿名开发者
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | gitee下载：https://gitee.com/AI系统_gitee
// | github下载：
// | 访问官网：https://www.AI系统.cn
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

namespace app\api\lists;


use app\common\model\distribution\WithdrawApply;

class WithdrawLists extends BaseApiDataLists
{
    /**
     * @notes 提现记录列表
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @author ljj
     * @date 2023/5/24 8:12 下午
     */
    public function lists(): array
    {
        $lists = WithdrawApply::field('id,sn,money,left_money,handling_fee,type,account,status,create_time')
            ->append(['type_desc','status_desc','handling_fee_ratio'])
            ->hidden(['type','status'])
            ->where(['user_id'=>$this->userId])
            ->order('id','desc')
            ->limit($this->limitOffset, $this->limitLength)
            ->select()
            ->toArray();

        return $lists;
    }

    /**
     * @notes 提现记录数量
     * @return int
     * @author ljj
     * @date 2023/5/24 8:12 下午
     */
    public function count(): int
    {
        return WithdrawApply::where(['user_id'=>$this->userId])->count();
    }
}