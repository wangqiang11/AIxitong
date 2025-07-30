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

namespace app\common\enum;

/**
 * 语音播报枚举类
 */
class VoiceEnum
{
    const VOICE_OUTPUT = 1;
    const VOICE_INPUT  = 2;

    const KDXF   = 'kdxf';
    const OPENAI = 'openai';

    const DOUBAO = 'doubao';

    /**
     * @notes 获取发音人渠道 (讯飞)
     * @param bool $form
     * @return array|string
     */
    public static function getKdxfPronounceList(bool|string $form = true): array|string
    {
        $desc = [
            'x4_lingxiaoxuan_oral' => '聆小璇',
            'x4_lingfeizhe_oral'   => '聆飞哲',
            'x4_lingyuzhao_oral'   => '聆玉昭',
            'x4_lingfeiyi_oral'    => '聆飞逸',
            'x4_lingyuyan_oral'    => '聆玉言',
            'x4_lingxiaoli_oral'   => '聆小璃',
            'x4_lingxiaoyue_oral'  => '聆小玥',
            'x4_lingxiaoqi_oral'   => '聆小琪 ',
            'x4_zijin_oral'        => '子津',
            'x4_ziyang_oral'       => '子阳',
            'x4_EnUs_Grant_emo'    => 'Grant',
            'x4_EnUs_Lila_emo'     => 'Lila',
        ];
        if(true === $form){
            return $desc;
        }
        return $desc[$form] ?? '';

    }

    /**
     * @notes 获取发音人渠道 (OpenID)
     * @param bool $form
     * @return array|string
     */
    public static function getOpenAiPronounceList(bool|string $form = true): array|string
    {
        $desc = [
            'alloy'   => 'alloy',
            'echo'    => 'echo',
            'fable'   => 'fable',
            'onyx'    => 'onyx',
            'nova'    => 'nova',
            'shimmer' => 'shimmer'
        ];
        if(true === $form){
            return $desc;
        }
        return $desc[$form] ?? '';
    }

    /**
     * @notes 获取发音人渠道 (豆包)
     * @param bool|string $form
     * @return array|string
     * @author mjf
     * @date 2024/12/18 13:52
     */
    public static function getDoubaoPronounceList(bool|string $form = true): array|string
    {
        $desc = [
            'zh_female_cancan_mars_bigtts'         => '灿灿/Shiny (中文、美式英语)',
            'zh_female_shuangkuaisisi_moon_bigtts' => '爽快思思/Skye (中文、美式英语)',
            'zh_male_wennuanahu_moon_bigtts'       => '温暖阿虎/Alvin (中文、美式英语)',
            'zh_male_shaonianzixin_moon_bigtts'    => '少年梓辛/Brayan（中文、美式英语)',
            'zh_male_jieshuonansheng_mars_bigtts'  => '磁性解说男声/Morgan（中文、美式英语)',
            'zh_female_jitangmeimei_mars_bigtts'   => '鸡汤妹妹/Hope（中文、美式英语)',
            'zh_female_zhixingnvsheng_mars_bigtts' => '知性女声（中文)',
            'zh_female_xinlingjitang_moon_bigtts'  => '心灵鸡汤（中文)',
            'zh_female_qingxinnvsheng_mars_bigtts' => '清新女声 (中文)',
        ];
        if (true === $form) {
            return $desc;
        }
        return $desc[$form] ?? '';
    }

    /**
     * @notes 获取通道
     * @param bool $form
     * @return array|string
     */
    public static function getChannel(bool|string $form = true): array|string
    {
        $desc = [
            self::KDXF   => '科大讯飞',
            self::OPENAI => 'openAi-TTS',
            self::DOUBAO => '火山引擎',
        ];
        if (true === $form) {
            return $desc;
        }
        return $desc[$form] ?? '';
    }

    /**
     * @notes 获取"语音输入"渠道配置
     * @param bool $form
     * @return array
     * @author fzr
     */
    public static function getInputChannelDefaultConfig(bool|string $form = true): array
    {
        $desc = [
            self::KDXF  => [
                'name'           => '科大讯飞',
                'speed'          => 50,
                'pronounce'      => 'x4_lingxiaoxuan_oral',
                'pronounce_list' => self::getKdxfPronounceList(),
            ],
            self::OPENAI    => [
                'name'  => 'openAi-TTS',
                'model' => 'whisper-1',
                'agency_api' => '',
                'model_list'  => [
                    'whisper-1' => 'whisper-1'
                ],
            ],
            self::DOUBAO    => [
                'name'  => '火山引擎',
            ]
        ];
        if(true === $form){
            return $desc;
        }
        return $desc[$form] ?? [];
    }

    /**
     * @notes 获取"语音输出"渠道配置
     * @param bool $form
     * @return array
     * @author fzr
     */
    public static function getOutputChannelDefaultConfig(bool|string $form = true): array
    {
        $desc = [
            self::KDXF  => [
                'name'           => '科大讯飞',
                'pronounce_list' => self::getKdxfPronounceList(),
                'pronounce'      => 'x4_lingxiaoxuan_oral',
                'speed'          => 50,
            ],
            self::OPENAI    => [
                'name'           => 'openAi-TTS',
                'pronounce_list' => self::getOpenAiPronounceList(),
                'pronounce'      => 'alloy',
                'speed'          => 1.0,
                'model'          => 'tts-1',
                'agency_api'     => '',
                'model_list'  => [
                    'tts-1'     => 'tts-1',
                    'tts-1-hd'  => 'tts-1-hd'
                ]
            ],
            self::DOUBAO    => [
                'name'           => '火山引擎',
                'pronounce_list' => self::getDoubaoPronounceList(),
                'pronounce'      => 'zh_female_cancan_mars_bigtts',
                'speed'          => 1.0,
            ],
        ];

        if (true === $form) {
            return $desc;
        }
        return $desc[$form] ?? [];
    }



}