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

namespace app\adminapi\logic\kb;

use app\common\logic\BaseLogic;
use app\common\pgsql\KbEmbedding;
use Exception;

/**
 * 训练数据管理
 */
class KbTeachLogic extends BaseLogic
{
    /**
     * @notes 删除数据
     * @author fzr
     * @param string $uuid
     * @return bool
     */
    public static function del(string $uuid): bool
    {
        try {
            $model = new KbEmbedding();
            $model->where(['uuid'=>$uuid])->update([
                'is_delete' => 1,
                'delete_time' => time()
            ]);

            return true;
        } catch (Exception $e) {
            self::setError($e->getMessage());
            return false;
        }
    }
}