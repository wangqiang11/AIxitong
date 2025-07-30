<?php
// +----------------------------------------------------------------------
// | AI系统管理后台（PHP版）
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | 开源版本可自由商用，可去除界面版权logo
// | gitee下载：https://gitee.com/AI系统_gitee/likeadmin
// | github下载：/likeadmin
// | 访问官网：www.localhost.com
// | 匿名公司 版权所有 拥有最终解释权
// +----------------------------------------------------------------------
// | author: 匿名开发者
// +----------------------------------------------------------------------

namespace app\common\model\tools;


use app\common\model\BaseModel;
use think\model\relation\BelongsTo;


/**
 * 代码生成器-数据表字段信息模型
 * Class GenerateColumn
 * @package app\common\model\tools
 */
class GenerateColumn extends BaseModel
{
    /**
     * @notes 关联table表
     * @return BelongsTo
     * @author 段誉
     * @date 2022/6/15 18:59
     */
    public function generateTable(): BelongsTo
    {
        return $this->belongsTo(GenerateTable::class, 'id', 'table_id');
    }
}