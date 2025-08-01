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

namespace app\common\model\decorate;

use app\common\model\BaseModel;
use app\common\service\FileService;

/**
 * 装修配置-底部导航
 * Class DecorateTabbar
 * @package app\common\model\decorate
 */
class DecorateTabbar extends BaseModel
{
    // 设置json类型字段
    protected $json = ['link'];

    // 设置JSON数据返回数组
    protected $jsonAssoc = true;

    /**
     * @notes 获取底部导航列表
     * @return array
     * @throws @\think\db\exception\DataNotFoundException
     * @throws @\think\db\exception\DbException
     * @throws @\think\db\exception\ModelNotFoundException
     * @author 段誉
     * @date 2022/9/23 12:07
     */
    public static function getTabbarLists(): array
    {
        $model = new self();
        $tabbar = $model->select()->toArray();

        if (empty($tabbar)) {
           return $tabbar;
        }

        foreach ($tabbar as &$item) {
            if (!empty($item['selected'])) {
                $item['selected'] = FileService::getFileUrl($item['selected']);
            }
            if (!empty($item['unselected'])) {
                $item['unselected'] = FileService::getFileUrl($item['unselected']);
            }
        }

        return $tabbar;
    }
}