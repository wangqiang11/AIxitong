<?php
// +----------------------------------------------------------------------
// | 控制台配置
// +----------------------------------------------------------------------
use app\common\command\QueryDoubao;
use app\common\command\QueryPPT;
use app\common\command\UserInfoCensor;
use app\common\command\WechatMerchantTransfer;

return [
    // 指令定义
    'commands' => [
        // 定时任务
        'crontab' => 'app\common\command\Crontab',
        // 内容审核
        'content_censor' => 'app\common\command\ContentCensor',
        // 退款查询
        'query_refund' => 'app\common\command\QueryRefund',
        // 修改密码
        'password' => 'app\common\command\Password',
        // 音乐查询处理
        'query_music' => 'app\common\command\QueryMusic',
        // 更新脚本
        'update_data' => 'app\common\command\UpdateData',
        // 绘画失败
        'draw_fail' => 'app\common\command\DrawFail',
        // 视频查询处理
        'query_video' => 'app\common\command\QueryVideo',
        // 商家转账到零钱查询
        'wechat_merchant_transfer' => WechatMerchantTransfer::class,
        // AI-PPT查询
        'query_ppt' => QueryPPT::class,
        // 豆包绘画处理
        'query_doubao' => QueryDoubao::class,
        // 用户信息审核
        'user_info_censor' => UserInfoCensor::class,
    ],
];
