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
use app\common\enum\RefundEnum;
use app\common\lists\ListsExtendInterface;
use app\common\lists\ListsSearchInterface;
use app\common\model\refund\RefundRecord;
use app\common\service\FileService;

/**
 * 退款记录列表
 * Class RefundRecordLists
 * @package app\adminapi\lists\product
 */
class RefundRecordLists extends BaseAdminDataLists implements ListsSearchInterface, ListsExtendInterface
{
    /**
     * @notes 查询条件
     * @return string[][]
     * @author 段誉
     * @date 2023/3/1 9:51
     */
    public function setSearch(): array
    {
        return [
            '=' => ['r.sn', 'r.order_sn', 'r.refund_type'],
        ]??[];
    }

    /**
     * @notes 查询条件
     * @param bool $flag
     * @return array
     * @author 段誉
     * @date 2023/3/1 9:51
     */
    public function queryWhere(bool $flag = true): array
    {
        $where = [];
        if (!empty($this->params['user_info'])) {
            $where[] = ['u.sn|u.nickname|u.mobile', 'like', '%' . $this->params['user_info'] . '%'];
        }

        if (!empty($this->params['start_time'])) {
            $where[] = ['r.create_time', '>=', strtotime($this->params['start_time'])];
        }

        if (!empty($this->params['end_time'])) {
            $where[] = ['r.create_time', '<=', strtotime($this->params['end_time'])];
        }

        if ($flag == true) {
            if (isset($this->params['refund_status']) && $this->params['refund_status'] != '') {
                $where[] = ['r.refund_status', '=', $this->params['refund_status']];
            }
        }

        return $where;
    }

    /**
     * @notes 获取列表
     * @return array
     * @throws @\think\db\exception\DataNotFoundException
     * @throws @\think\db\exception\DbException
     * @throws @\think\db\exception\ModelNotFoundException
     * @author 段誉
     * @date 2023/3/1 9:51
     */
    public function lists(): array
    {
        $lists = (new RefundRecord())
            ->alias('r')
            ->field('r.*,u.nickname,u.avatar')
            ->join('user u', 'u.id = r.user_id')
            ->order(['r.id' => 'desc'])
            ->where($this->searchWhere)
            ->where($this->queryWhere())
            ->limit($this->limitOffset, $this->limitLength)
            ->append(['refund_type_text', 'refund_status_text', 'refund_way_text'])
            ->select()
            ->toArray();

        foreach ($lists as &$item) {
            $item['avatar'] = FileService::getFileUrl($item['avatar']);
        }

        return $lists;
    }

    /**
     * @notes 获取数量
     * @return int
     * @throws @\think\db\exception\DbException
     * @author 段誉
     * @date 2023/3/1 9:51
     */
    public function count(): int
    {
        return (new RefundRecord())
            ->alias('r')
            ->join('user u', 'u.id = r.user_id')
            ->where($this->searchWhere)
            ->where($this->queryWhere())
            ->count();
    }

    /**
     * @notes 额外参数
     * @return mixed
     * @author 段誉
     * @date 2023/3/1 9:51
     */
    public function extend(): mixed
    {
        $count = (new RefundRecord())->alias('r')
            ->join('user u', 'u.id = r.user_id')
            ->field([
                'count(r.id) as total',
                'count(if(r.refund_status='.RefundEnum::REFUND_ING.', true, null)) as ing',
                'count(if(r.refund_status='.RefundEnum::REFUND_SUCCESS.', true, null)) as success',
                'count(if(r.refund_status='.RefundEnum::REFUND_ERROR.', true, null)) as error',
            ])
            ->where($this->searchWhere)
            ->where($this->queryWhere(false))
            ->select()->toArray();

        return array_shift($count);
    }
}
