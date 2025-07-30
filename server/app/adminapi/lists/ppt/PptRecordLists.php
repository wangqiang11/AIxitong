<?php

namespace app\adminapi\lists\ppt;

use app\adminapi\lists\BaseAdminDataLists;
use app\common\enum\PayEnum;
use app\common\enum\PPTEnum;
use app\common\model\ppt\PptRecord;
use app\common\service\FileService;
use think\db\exception\DataNotFoundException;
use think\db\exception\DbException;
use think\db\exception\ModelNotFoundException;

/**
 * Ai-PPT记录列表
 */
class PptRecordLists extends BaseAdminDataLists
{
    /**
     * @notes 搜索条件
     * @return array
     * @author mjf
     * @date 2024/9/27 10:52
     */
    public function where(): array
    {
        $where = [];
        if (isset($this->params['user_info']) && $this->params['user_info'] != '') {
            $where[] = ['u.sn|u.nickname', 'like', '%' . $this->params['user_info'] . '%'];
        }

        if (isset($this->params['keyword']) && $this->params['keyword'] != '') {
            $where[] = ['r.prompt|title', 'like', '%' . $this->params['keyword'] . '%'];
        }

        if (!empty($this->params['start_time']) && $this->params['start_time']) {
            $where[] = ['r.create_time', '>=', strtotime($this->params['start_time'])];
        }

        if (!empty($this->params['end_time']) && $this->params['end_time']) {
            $where[] = ['r.create_time', '<=', strtotime($this->params['end_time'])];
        }

        if (isset($this->params['pay_status']) && $this->params['pay_status'] != '') {
            // 兼容旧数据,旧数据无支付状态
            if ($this->params['pay_status'] == 1) {
                $where[] = ['r.file_url', '<>', ''];
            } else {
                $where[] = ['r.file_url', '=', ''];
            }
        }

        return $where;
    }

    /**
     * @notes 列表
     * @return array
     * @throws DataNotFoundException
     * @throws DbException
     * @throws ModelNotFoundException
     * @author mjf
     * @date 2024/9/27 10:52
     */
    public function lists(): array
    {
        $lists = (new PptRecord())
            ->alias('r')
            ->field(['r.id,r.user_id,u.nickname,u.avatar,
            r.title,r.prompt,r.preview,r.file_url,r.status,r.price,r.type,r.ip,r.pay_status,r.create_time'])
            ->join('user u', 'u.id = r.user_id')
            ->order('id desc')
            ->where($this->where())
            ->limit($this->limitOffset, $this->limitLength)
            ->select()
            ->toArray();

        foreach ($lists as &$item) {
            $item['price']  = format_amount_zero($item['price']);
            $item['type']   = PPTEnum::getTypeDesc($item['type']);
            $item['avatar'] = FileService::getFileUrl($item['avatar']);
            if (!empty($item['file_url'])) {
                $item['pay_status'] = PayEnum::ISPAID;
            }
        }

        return $lists;
    }

    /**
     * @notes 统计
     * @return int
     * @throws DbException
     * @author mjf
     * @date 2024/9/27 10:52
     */
    public function count(): int
    {
        return (new PptRecord())
            ->alias('r')
            ->join('user u', 'u.id = r.user_id')
            ->where($this->where())
            ->count();
    }
}