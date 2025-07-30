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
namespace app\adminapi\logic\channel;

use app\common\logic\BaseLogic;
use app\common\service\ConfigService;

/**
 * App设置逻辑层
 * Class AppSettingLogic
 * @package app\adminapi\logic\setting\app
 */
class AppSettingLogic extends BaseLogic
{
    /**
     * @notes 获取App设置
     * @return array
     * @author 段誉
     * @date 2022/3/29 10:25
     */
    public static function getConfig(): array
    {
        return [
            'ios_download_url'     => ConfigService::get('app', 'ios_download_url', ''),
            'android_download_url' => ConfigService::get('app', 'android_download_url', ''),
            'download_title'       => ConfigService::get('app', 'download_title', ''),
        ]??[];
    }

    /**
     * @notes App设置
     * @param $params
     * @author 段誉
     * @date 2022/3/29 10:26
     */
    public static function setConfig($params): void
    {
        ConfigService::set('app', 'ios_download_url', $params['ios_download_url'] ?? '');
        ConfigService::set('app', 'android_download_url', $params['android_download_url'] ?? '');
        ConfigService::set('app', 'download_title', $params['download_title'] ?? '');
    }
}