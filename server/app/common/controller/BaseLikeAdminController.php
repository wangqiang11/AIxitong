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

declare(strict_types=1);

namespace app\common\controller;

use app\BaseController;
use app\common\lists\BaseDataLists;
use app\common\service\JsonService;
use JetBrains\PhpStorm\Pure;
use think\facade\App;
use think\response\Json;

/**
 * 控制器基类
 * Class BaseLikeAdminController
 * @package app\common\controller
 */
class BaseLikeAdminController extends BaseController
{
    public array $notNeedLogin = [];

    /**
     * @notes 操作成功
     * @param string $msg
     * @param array $data
     * @param int $code
     * @param int $show
     * @return Json
     * @author 段誉
     * @date 2021/12/27 14:21
     */
    protected function success(string $msg = 'success', array $data = [], int $code = 1, int $show = 0): Json
    {
        return JsonService::success($msg, $data, $code, $show);
    }

    /**
     * @notes 数据返回
     * @param $data
     * @return Json
     * @author 段誉
     * @date 2021/12/27 14:21\
     */
    protected function data($data): Json
    {
        return JsonService::data($data);
    }

    /**
     * @notes 列表数据返回
     * @param BaseDataLists|null $lists
     * @return Json
     * @author 令狐冲
     * @date 2021/7/8 00:40
     */
    protected function dataLists(BaseDataLists $lists = null): Json
    {
        //列表类和控制器一一对应，"app/应用/controller/控制器的方法" =》"app\应用\lists\"目录下
        //（例如："app/adminapi/controller/auth/AdminController.php的lists()方法" =》 "app/adminapi/lists/auth/AminLists.php")
        //当对象为空时，自动创建列表对象
        if (is_null($lists)) {
            $listName = str_replace('.', '\\', App::getNamespace() . '\\lists\\' . $this->request->controller() . ucwords($this->request->action()));
            $lists = invoke($listName);
        }
        return JsonService::dataLists($lists);
    }

    /**
     * @notes 操作失败
     * @param string $msg
     * @param array $data
     * @param int $code
     * @param int $show
     * @return Json
     * @author 段誉
     * @date 2021/12/27 14:21
     */
    protected function fail(string $msg = 'fail', array $data = [], int $code = 0, int $show = 1): Json
    {
        return JsonService::fail($msg, $data, $code, $show);
    }

    /**
     * @notes 是否免登录验证
     * @return bool
     * @author 段誉
     * @date 2021/12/27 14:21
     */
    #[Pure]
    public function isNotNeedLogin() : bool
    {
        $notNeedLogin = $this->notNeedLogin;
        if (empty($notNeedLogin)) {
            return false;
        }
        $action = $this->request->action();

        if (!in_array(trim($action), $notNeedLogin)) {
            return false;
        }
        return true;
    }
}