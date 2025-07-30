<?php

namespace app\common\enum;

/**
 * AI-PPT枚举
 */
class PPTEnum
{
    // 模型通道
    const CHAT_PPT = 'chat_ppt';

    // 生成状态
    const STATUS_WAIT           = 0; //待生成
    const STATUS_IN_PROGRESS    = 1; // 生成中
    const STATUS_SUCCESS        = 2; // 成功
    const STATUS_FAIL           = 3; // 失败

    // 类型
    const TYPE_BASE = 1; // 基础
    const TYPE_PLUS = 2; // 增强
    CONST TYPE_DEEP = 3; // 深入

    /**
     * @notes 获取模型通道
     * @param bool|string $from
     * @return array|string
     * @author mjf
     * @date 2024/9/27 10:18
     */
    public static function getChannel(bool|string $from = true): array|string
    {
        $desc = [
            self::CHAT_PPT => 'ChatPPT',
        ];
        if (true === $from) {
            return $desc;
        }
        return $desc[$from] ?? '';
    }

    /**
     * @notes 渠道默认配置
     * @param bool|string $from
     * @return array|array[]
     * @author mjf
     * @date 2024/10/8 11:15
     */
    public static function getChannelDefaultConfig(bool|string $from = true): array
    {
        $desc = [
            self::CHAT_PPT => [
                'channel' => PPTEnum::CHAT_PPT,
                'price'   => 10,
                'tips'    => '开通地址：https://wiki.yoo-ai.com',
                'website' => 'https://wiki.yoo-ai.com',
            ],
        ];

        if (true === $from) {
            return $desc;
        }
        return $desc[$from] ?? [];
    }

    /**
     * @notes 类型
     * @param bool|string $from
     * @return array|string
     * @author mjf
     * @date 2024/10/9 18:03
     */
    public static function getTypeDesc(bool|string $from = true): array|string
    {
        $desc = [
            self::TYPE_BASE => '基础PPT',
            self::TYPE_PLUS => '增强PPT',
            self::TYPE_DEEP => '深入PPT',
        ];
        if (true === $from) {
            return $desc;
        }
        return $desc[$from] ?? '';
    }

}