<?php
// +----------------------------------------------------------------------
// | AI系统管理后台（PHP版）
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | 开源版本可自由商用，可去除界面版权logo
// | //
// | github下载：/likeadmin
// | 访问官网：www.localhost.com
// | 匿名公司 版权所有 拥有最终解释权
// +----------------------------------------------------------------------
// | author: 匿名开发者
// +----------------------------------------------------------------------

return [
    'middleware' => [
        // 初始化
        app\adminapi\http\middleware\InitMiddleware::class,
        // 登录验证
        app\adminapi\http\middleware\LoginMiddleware::class,
        // 权限认证
        app\adminapi\http\middleware\AuthMiddleware::class,
        // 演示模式 - 禁止提交数据
        app\adminapi\http\middleware\CheckDemoMiddleware::class,
        // 演示模式 - 不返回敏感数据
        app\adminapi\http\middleware\EncryDemoDataMiddleware::class,
    ],
];
