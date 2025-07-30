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

namespace app\adminapi\controller\setting;

use app\adminapi\controller\BaseAdminController;
use app\adminapi\logic\setting\CustomerLogic;
use think\response\Json;

/**
 * 客服设置
 */
class CustomerController extends BaseAdminController
{
    /**
     * @notes 获取客服设置
     * @return Json
     * @author ljj
     * @date 2022/2/15 12:05 下午
     */
    public function detail(): Json
    {
        $result = CustomerLogic::getConfig();
        return $this->data($result);
    }

    /**
     * @notes 设置客服设置
     * @return Json
     * @author ljj
     * @date 2022/2/15 12:11 下午
     */
    public function save(): Json
    {
        $params = $this->request->post();
        CustomerLogic::setConfig($params);
        return $this->success('设置成功', [], 1, 1);
    }
}