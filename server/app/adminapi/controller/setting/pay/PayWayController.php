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

namespace app\adminapi\controller\setting\pay;

use app\adminapi\controller\BaseAdminController;
use app\adminapi\logic\setting\pay\PayWayLogic;
use Exception;
use think\response\Json;

/**
 * 支付方式
 */
class PayWayController extends BaseAdminController
{
    /**
     * @notes 获取支付方式
     * @return Json
     * @author 段誉
     * @date 2023/2/23 16:27
     */
    public function getPayWay(): Json
    {
        $result = PayWayLogic::getPayWay();
        return $this->success('获取成功',$result);
    }

    /**
     * @notes 设置支付方式
     * @return Json
     * @throws Exception
     * @author 段誉
     * @date 2023/2/23 16:27
     */
    public function setPayWay(): Json
    {
        $params = $this->request->post();
        $result = (new PayWayLogic())->setPayWay($params);
        if (true !== $result) {
            return $this->fail($result);
        }
        return $this->success('操作成功',[],1, 1);
    }
}