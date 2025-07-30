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

namespace app\adminapi\lists\recharge;

use app\adminapi\lists\BaseAdminDataLists;
use app\common\model\recharge\RechargePackage;
use think\db\exception\DbException;

/**
 * 充值套餐列表
 */
class RechargePackageLists extends BaseAdminDataLists
{
    /**
     * @notes 套餐列表
     * @return array
     * @throws @\think\db\exception\DataNotFoundException
     * @throws @\think\db\exception\DbException
     * @throws @\think\db\exception\ModelNotFoundException
     * @author fzr
     */
    public function lists(): array
    {
        $model = new RechargePackage();
        $lists = $model
            ->withoutField('delete_time')
            ->order('sort desc, id desc')
            ->limit($this->limitOffset, $this->limitLength)
            ->select()
            ->toArray();

        foreach ($lists as &$item) {
            $item['chat_balance'] = format_amount_zero($item['chat_balance']);
        }

        return $lists;
    }

    /**
     * @notes 套餐总数
     * @return int
     * @throws DbException
     * @author fzr
     */
    public function count(): int
    {
        $model = new RechargePackage();
        return $model->count();
    }
}