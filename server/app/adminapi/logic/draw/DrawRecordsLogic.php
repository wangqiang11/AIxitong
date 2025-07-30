<?php
// +----------------------------------------------------------------------
// | AI系统管理后台（PHP版）
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | 开源版本可自由商用，可去除界面版权logo
// | gitee下载：https://gitee.com/AI系统_gitee/likeadmin
// | //
// | 访问官网：www.localhost.com
// | 匿名公司 版权所有 拥有最终解释权
// +----------------------------------------------------------------------
// | author: 匿名开发者
// +----------------------------------------------------------------------

namespace app\adminapi\logic\draw;

use app\common\logic\BaseLogic;
use app\common\model\draw\DrawRecords;
use app\common\service\FileService;

/**
 * 绘图记录详情
 * Class DrawRecordsLogic
 * @package app\adminapi\logic\draw
 */
class DrawRecordsLogic extends BaseLogic
{

    /**
     * @notes 详情
     * @param $id
     * @return array
     * @author 段誉
     * @date 2023/6/20 17:35
     */
    public static function detail($id): array
    {
        $detail = DrawRecords::where('id', $id)
            ->field(['id', 'prompt', 'image', 'create_time'])
            ->findOrEmpty()
            ->toArray();

        $detail['image'] = !empty($detail['image']) ? FileService::getFileUrl($detail['image']) : "";
        return $detail;
    }


    /**
     * @notes 删除
     * @param $ids
     * @author 段誉
     * @date 2023/6/20 21:02
     */
    public static function delete($ids)
    {
        DrawRecords::destroy(function ($query) use ($ids) {
            $query->whereIn('id', $ids);
        });
    }



}