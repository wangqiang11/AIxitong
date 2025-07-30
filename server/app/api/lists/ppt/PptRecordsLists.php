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

namespace app\api\lists\ppt;

use app\api\lists\BaseApiDataLists;
use app\common\enum\PayEnum;
use app\common\model\ppt\PptRecord;
use think\db\exception\DataNotFoundException;
use think\db\exception\DbException;
use think\db\exception\ModelNotFoundException;

/**
 * PPT记录列表
 */
class PptRecordsLists extends BaseApiDataLists
{

    /**
     * @notes 搜索
     * @return array
     * @author mjf
     * @date 2024/5/30 10:02
     */
    public function queryWhere(): array
    {
        $where = [];
        if (isset($this->params['status']) && $this->params['status'] > 0) {
            $where[] = ['status', '=', $this->params['status']];
        }
        return $where;
    }

    /**
     * @notes 获取列表
     * @return array
     * @throws DataNotFoundException
     * @throws DbException
     * @throws ModelNotFoundException
     * @author mjf
     * @date 2024/5/29 17:40
     */
    public function lists(): array
    {
        $model = new PptRecord();
        $lists = $model
            ->where($this->queryWhere())
            ->where(['user_id' => $this->userId])
            ->order('id desc')
            ->limit($this->limitOffset, $this->limitLength)
            ->hidden(['response', 'price', 'update_time', 'delete_time'])
            ->select()
            ->toArray();

        foreach ($lists as &$item) {
            if (!empty($item['file_url'])) {
                $item['pay_status'] = PayEnum::ISPAID;
            }
        }

        return $lists;
    }

    /**
     * @notes 获取数量
     * @return int
     * @throws DbException
     * @author mjf
     * @date 2024/5/29 17:40
     */
    public function count(): int
    {
        $model = new PptRecord();
        return $model
            ->where($this->queryWhere())
            ->where(['user_id' => $this->userId])
            ->count();
    }
}