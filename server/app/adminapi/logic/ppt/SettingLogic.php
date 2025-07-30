<?php

namespace app\adminapi\logic\ppt;

use app\common\enum\PPTEnum;
use app\common\logic\BaseLogic;
use app\common\service\ConfigService;

class SettingLogic extends BaseLogic
{
    /**
     * @notes 基础配置详情
     * @return array
     * @author mjf
     * @date 2024/9/27 9:58
     */
    public static function basisConfig(): array
    {
        $config = ConfigService::get('ai_ppt');
        $default = PPTEnum::getChannelDefaultConfig(PPTEnum::CHAT_PPT);
        return [
            'status'  => intval($config['status'] ?? 0),
            'channel' => $config['channel'] ?? $default['channel'],
            'price'   => $config['price'] ?? $default['price']
        ];
    }

    /**
     * @notes 基础配置保存
     * @param array $post
     * @return bool
     * @author mjf
     * @date 2024/9/27 9:58
     */
    public static function basisSave(array $post): bool
    {
        if (!isset($post['price']) || !is_numeric($post['price']) || $post['price'] < 0) {
            self::setError('请正确设置消耗价格');
            return false;
        }

        ConfigService::set('ai_ppt', 'status', $post['status'] ?? 0);
        ConfigService::set('ai_ppt', 'channel', $post['channel'] ?? '');
        ConfigService::set('ai_ppt', 'price', $post['price']);
        return true;
    }

    /**
     * @notes 示例配置详情
     * @return array
     * @author mjf
     * @date 2024/9/27 9:59
     */
    public static function exampleConfig(): array
    {
        $config = ConfigService::get('ai_ppt');
        return [
            'example_status'  => intval($config['example_status'] ?? 0),
            'example_content' => $config['example_content'] ?? ''
        ];
    }

    /**
     * @notes 示例配置保存
     * @param array $post
     * @author mjf
     * @date 2024/9/27 9:59
     */
    public static function exampleSave(array $post): void
    {
        ConfigService::set('ai_ppt', 'example_status', $post['example_status'] ?? 0);
        ConfigService::set('ai_ppt', 'example_content', $post['example_content'] ?? '');
    }
}