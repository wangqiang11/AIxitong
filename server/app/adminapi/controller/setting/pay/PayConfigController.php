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

namespace app\adminapi\controller\setting\pay;

use app\adminapi\controller\BaseAdminController;
use app\adminapi\lists\setting\pay\PayConfigLists;
use app\adminapi\logic\setting\pay\PayConfigLogic;
use app\adminapi\validate\setting\PayConfigValidate;
use think\response\Json;

/**
 * 支付配置
 */
class PayConfigController extends BaseAdminController
{
    /**
     * @notes 支付配置列表
     * @return Json
     * @author 段誉
     * @date 2023/2/23 16:15
     */
    public function lists(): Json
    {
        return $this->dataLists(new PayConfigLists());
    }

    /**
     * @notes 支付配置详情
     * @return Json
     * @author 段誉
     * @date 2023/2/23 16:14
     */
    public function getConfig(): Json
    {
        $id = (new PayConfigValidate())->goCheck('get');
        $result = PayConfigLogic::getConfig($id);
        return $this->success('获取成功', $result);
    }

    /**
     * @notes 设置支付配置
     * @return Json
     * @author 段誉
     * @date 2023/2/23 16:14
     */
    public function setConfig(): Json
    {
        $params = (new PayConfigValidate())->post()->goCheck();
        PayConfigLogic::setConfig($params);
        return $this->success('设置成功', [], 1, 1);
    }
}