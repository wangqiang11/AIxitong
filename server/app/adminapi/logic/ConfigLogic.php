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

namespace app\adminapi\logic;

use app\common\model\dict\DictData;
use app\common\service\{FileService, ConfigService};

/**
 * 配置类逻辑层
 */
class ConfigLogic
{
    /**
     * @notes 获取配置
     * @return array
     * @author 段誉
     * @date 2021/12/31 11:03
     */
    public static function getConfig(): array
    {
        $install = file_exists(root_path() . '/config/install.lock');
        if (!$install) {
            return ['install'=>$install]??[];
        }

        return [
            // 是否安装
            'install'     => file_exists(root_path() . '/config/install.lock'),

            // 版本号
            'version'     => config('project.version'),

            // 文件域名
            'oss_domain'  => FileService::getFileUrl('', '', true),

            // 网站名称
            'web_name'    => ConfigService::get('website', 'name'),
            // 网站图标
            'web_favicon' => FileService::getFileUrl(ConfigService::get('website', 'web_favicon')),
            // 网站logo
            'web_logo'    => FileService::getFileUrl(ConfigService::get('website', 'web_logo')),
            // 登录页
            'login_image' => FileService::getFileUrl(ConfigService::get('website', 'login_image')),

            // 版权信息
            'copyright_config' => ConfigService::get('copyright', 'config', [])
        ]??[];
    }

    /**
     * @notes 根据类型获取字典类型
     * @param $type
     * @return array
     * @throws @\think\db\exception\DataNotFoundException
     * @throws @\think\db\exception\DbException
     * @throws @\think\db\exception\ModelNotFoundException
     * @author 段誉
     * @date 2022/9/27 19:09
     */
    public static function getDictByType($type): array
    {
        if (!is_string($type)) {
            return [];
        }
        
        $type = explode(',', $type);
        $lists = (new DictData())->whereIn('type_value', $type)->select()->toArray();

        if (empty($lists)) {
            return [];
        }

        $result = [];
        foreach ($type as $item) {
            foreach ($lists as $dict) {
                if ($dict['type_value'] == $item) {
                    $result[$item][] = $dict;
                }
            }
        }
        return $result;
    }
}