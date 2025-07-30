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

namespace app\common\model\draw;

use app\common\model\BaseModel;

/**
 * 绘画收藏
 * Class DrawRecordsCollect
 * @package app\common\model\draw
 */
class DrawRecordsCollect extends BaseModel
{

    /**
     * @notes 绘画记录
     * @return \think\model\relation\HasOne
     * @author 段誉
     * @date 2023/6/27 11:49
     */
    public function drawRecords()
    {
        return $this->hasOne(DrawRecords::class,'id','records_id')
            ->field('id,image_url');
    }
    
}