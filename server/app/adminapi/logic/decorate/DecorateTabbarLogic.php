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
use app\common\model\decorate\DecorateTabbar;
use app\common\service\ConfigService;
use app\common\service\FileService;
use Exception;

/**
 * 装修配置-底部导航
 * Class DecorateTabbarLogic
 * @package app\adminapi\logic\decorate
 */
class DecorateTabbarLogic extends BaseLogic
{
    /**
     * @notes 获取底部导航详情
     * @return array
     * @throws @\think\db\exception\DataNotFoundException
     * @throws @\think\db\exception\DbException
     * @throws @\think\db\exception\ModelNotFoundException
     * @author 段誉
     * @date 2022/9/7 16:58
     */
    public static function detail(): array
    {
        $list = DecorateTabbar::getTabbarLists();
        $style = ConfigService::get('tabbar', 'style', config('project.decorate.tabbar_style'));
        return ['style' => $style, 'list' => $list]??[];
    }

    /**
     * @notes 底部导航保存
     * @param $params
     * @return bool
     * @throws Exception
     * @author 段誉
     * @date 2022/9/7 17:19
     */
    public static function save($params): bool
    {
        $model = new DecorateTabbar();

        // 删除旧配置数据
        $model->where('id', '>', 0)->delete();

        // 保存新配置数据
        $tabBars = $params['list'] ?? [];
        $data = [];
        foreach ($tabBars as $item) {
            $data[] = [
                'name'       => $item['name'],
                'selected'   => FileService::setFileUrl($item['selected']),
                'unselected' => FileService::setFileUrl($item['unselected']),
                'link'       => $item['link'],
            ];
        }
        $model->saveAll($data);

        if (!empty($params['style'])) {
            ConfigService::set('tabbar', 'style', $params['style']);
        }
        return true;
    }
}