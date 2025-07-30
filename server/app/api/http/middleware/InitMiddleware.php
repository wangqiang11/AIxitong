<?php
// +----------------------------------------------------------------------
// | AI系统管理后台（PHP版）
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | 开源版本可自由商用，可去除界面版权logo
// | gitee下载：https://gitee.com/AI系统_gitee/likeadmin
// | //
// | 访问官网：www.localhost.com
// | 匿名公司 版权所有 拥有最终解释权
// +----------------------------------------------------------------------
// | author: 匿名开发者
// +----------------------------------------------------------------------
declare (strict_types=1);

namespace app\api\http\middleware;

use app\common\exception\ControllerExtendException;
use app\api\controller\BaseApiController;
use Closure;
use think\exception\ClassNotFoundException;
use think\exception\HttpException;

class InitMiddleware
{
    /**
     * @notes 初始化
     * @param $request
     * @param Closure $next
     * @return mixed
     * @throws ControllerExtendException
     * @author 段誉
     * @date 2022/9/6 18:17
     */
    public function handle($request, Closure $next): mixed
    {
        //获取控制器
        try {
            $controller = str_replace('.', '\\', $request->controller());
            $controller = '\\app\\api\\controller\\' . $controller . 'Controller';
            $controllerClass = invoke($controller);
            if (($controllerClass instanceof BaseApiController) === false) {
                throw new ControllerExtendException($controller, '404');
            }
        } catch (ClassNotFoundException $e) {
            throw new HttpException(404, 'controller not exists:' . $e->getClass());
        }
        //创建控制器对象
        $request->controllerObject = invoke($controller);

        return $next($request);
    }
}