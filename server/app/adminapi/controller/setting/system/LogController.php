<?php
// +----------------------------------------------------------------------
// | AI系统管理后台（PHP版）
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | 开源版本可自由商用，可去除界面版权logo
// | gitee下载：https://gitee.com/AI系统_gitee/likeadmin
// | github下载：https://github.com/AI系统-github/likeadmin
// | 访问官网：www.localhost.com
// | 匿名公司 版权所有 拥有最终解释权
// +----------------------------------------------------------------------
// | author: 匿名开发者
// +----------------------------------------------------------------------

namespace app\adminapi\controller\setting\system;

use app\adminapi\controller\BaseAdminController;
use app\adminapi\lists\setting\system\LogLists;
use think\response\Json;

/**
 * 系统日志
 */
class LogController extends BaseAdminController
{
    /**
     * @notes 查看系统日志列表
     * @return Json
     * @author ljj
     * @date 2021/8/3 4:25 下午
     */
    public function lists()
    {
        return $this->dataLists(new LogLists());
    }
}