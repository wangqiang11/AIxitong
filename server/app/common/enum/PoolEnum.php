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
 * key池枚举类
 */
class PoolEnum
{
    const TYPE_CHAT         = 1;  // 对话模型
    const TYPE_EMB          = 2;  // 向量模型
    const TYPE_VOICE_OUTPUT = 3;  // 语音合成
    const TYPE_VOICE_INPUT  = 4;  // 语音输入
    const TYPE_MUSIC        = 5;  // AI音乐
    const TYPE_VIDEO        = 6;  // AI视频
    const TYPE_SEARCH       = 7;  // AI搜索
    const TYPE_DRAW         = 8;  // AI绘画
    const TYPE_PPT          = 9;  // AI-PPT
    const TYPE_RANKING      = 11; // 重排模型
}