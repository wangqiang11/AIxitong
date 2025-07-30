<?php

namespace app\adminapi\logic\ppt;

use app\common\logic\BaseLogic;
use app\common\model\ppt\PptRecord;
use Exception;

class RecordLogic extends BaseLogic
{
    /**
     * @notes 详请
     * @param int $id
     * @return array
     * @author mjf
     * @date 2024/9/27 10:50
     */
    public static function detail(int $id): array
    {
        $detail = (new PptRecord())
            ->withoutField('update_time,delete_time')
            ->where(['id' => $id])
            ->findOrEmpty()
            ->toArray();

        if (!$detail) {
            return [];
        }
        return $detail;
    }

    /**
     * @notes 删除记录
     * @param $ids
     * @return bool
     * @author mjf
     * @date 2024/9/27 10:50
     */
    public static function del($ids): bool
    {
        try {
            if (!$ids) {
                throw new Exception('请选择要删除的数据');
            }

            PptRecord::destroy($ids);
            return true;
        } catch (Exception $e) {
            self::setError($e->getMessage());
            return false;
        }
    }
}