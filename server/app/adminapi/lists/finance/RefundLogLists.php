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

namespace app\adminapi\lists\finance;

use app\adminapi\lists\BaseAdminDataLists;
use app\common\model\refund\RefundLog;

/**
 * 退款日志列表
 * Class RefundLogLists
 * @package app\adminapi\lists\product
 */
class RefundLogLists extends BaseAdminDataLists
{
    /**
     * @notes 查询条件
     * @return array
     * @author 段誉
     * @date 2023/3/1 9:55
     */
    public function queryWhere(): array
    {
        $where[] = ['record_id', '=', $this->params['record_id'] ?? 0];
        return $where;
    }

    /**
     * @notes 获取列表
     * @return array
     * @throws @\think\db\exception\DataNotFoundException
     * @throws @\think\db\exception\DbException
     * @throws @\think\db\exception\ModelNotFoundException
     * @author 段誉
     * @date 2023/3/1 9:56
     */
    public function lists(): array
    {
        return (new RefundLog())
            ->order(['id' => 'desc'])
            ->where($this->queryWhere())
            ->limit($this->limitOffset, $this->limitLength)
            ->hidden(['refund_msg'])
            ->append(['handler', 'refund_status_text'])
            ->select()
            ->toArray();
    }

    /**
     * @notes 获取数量
     * @return int
     * @throws @\think\db\exception\DbException
     * @author 段誉
     * @date 2023/3/1 9:56
     */
    public function count(): int
    {
        return (new RefundLog())
            ->where($this->queryWhere())
            ->count();
    }
}
