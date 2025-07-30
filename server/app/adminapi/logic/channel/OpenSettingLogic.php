<?php
// +----------------------------------------------------------------------
// | AI系统管理后台（PHP版）
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | 开源版本可自由商用，可去除界面版权logo
// | gitee下载：https://gitee.com/AI系统_gitee/likeadmin
// | github下载：https://github.com/AI系统-github/likeadmin
// | 访问官网：www.localhost.com
// | 匿名公司 版权所有 拥有最终解释权
// +----------------------------------------------------------------------
// | author: 匿名开发者
// +----------------------------------------------------------------------

namespace app\adminapi\logic\channel;

use app\common\logic\BaseLogic;
use app\common\service\ConfigService;

/**
 * 微信开放平台
 * Class AppSettingLogic
 * @package app\adminapi\logic\setting\app
 */
class OpenSettingLogic extends BaseLogic
{
    /**
     * @notes 获取微信开放平台设置
     * @return array
     * @author 段誉
     * @date 2022/3/29 11:03
     */
    public static function getConfig(): array
    {
        return [
            'app_id'     => ConfigService::get('open_platform', 'app_id', ''),
            'app_secret' => ConfigService::get('open_platform', 'app_secret', ''),
        ]??[];
    }

    /**
     * @notes 微信开放平台设置
     * @param $params
     * @author 段誉
     * @date 2022/3/29 11:03
     */
    public static function setConfig($params): void
    {
        ConfigService::set('open_platform', 'app_id', $params['app_id'] ?? '');
        ConfigService::set('open_platform', 'app_secret', $params['app_secret'] ?? '');
    }
}