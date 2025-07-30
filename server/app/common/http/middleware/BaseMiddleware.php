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

declare (strict_types=1);

namespace app\common\http\middleware;

/**
 * 基础中间件
 * Class AI系统Middleware
 * @package app\common\http\middleware
 */
class BaseMiddleware
{
    public function handle($request, \Closure $next)
    {
//        $request->filter(['htmlspecialchars']);
        return $next($request);
    }
}