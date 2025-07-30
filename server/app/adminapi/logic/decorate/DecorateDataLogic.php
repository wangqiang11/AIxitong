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

namespace app\adminapi\logic\decorate;

use app\common\logic\BaseLogic;
use app\common\model\article\Article;

/**
 * 装修页-数据
 * Class DecorateDataLogic
 * @package app\adminapi\logic\decorate
 */
class DecorateDataLogic extends BaseLogic
{
    /**
     * @notes 获取文章列表
     * @param $limit
     * @return array
     * @throws @\think\db\exception\DataNotFoundException
     * @throws @\think\db\exception\DbException
     * @throws @\think\db\exception\ModelNotFoundException
     * @author 段誉
     * @date 2022/9/22 16:49
     */
    public static function getArticleLists($limit): array
    {
        return (new Article())
            ->field([
                'id,title,abstract,image,author,content',
                'click_virtual,click_actual,create_time'
            ])
            ->where(['is_show' => 1])
            ->order(['id' => 'desc'])
            ->limit($limit)
            ->append(['click'])
            ->hidden(['click_virtual', 'click_actual'])
            ->select()->toArray();
    }
}