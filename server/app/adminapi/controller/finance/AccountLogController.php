<?php
// +----------------------------------------------------------------------
// | AI系统管理后台（PHP版）
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | 开源版本可自由商用，可去除界面版权logo
// | gitee下载：https://gitee.com/AI系统_gitee/likeadmin
// | github下载：/likeadmin
// | 访问官网：www.localhost.com
// | 匿名公司 版权所有 拥有最终解释权
// +----------------------------------------------------------------------
// | author: 匿名开发者
// +----------------------------------------------------------------------

namespace app\adminapi\controller\finance;

use app\adminapi\controller\BaseAdminController;
use app\adminapi\lists\finance\AccountLogLists;
use think\response\Json;

/**
 * 账户流水控制器
 */
class AccountLogController extends BaseAdminController
{
    /**
     * @notes 记录列表
     * @return Json
     * @author fzr
     */
    public function lists(): Json
    {
        return $this->dataLists(new AccountLogLists());
    }
}