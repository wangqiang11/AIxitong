<?php
// +----------------------------------------------------------------------
// | 匿名开发者
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | gitee下载：
// | github下载：
// | 访问官网：
// | 访问社区：
// | 访问手册：
// | 微信公众号：
// | 在gitee、github等公开渠道开源版本可免费商用，未经许可不能去除前后端官方版权标识
// |  收费版本务必购买商业授权，购买去版权授权后，方可去除前后端官方版权标识
// | 禁止对系统程序代码以任何目的，任何形式的再发布
// | 版权所有并拥有最终解释权
// +----------------------------------------------------------------------
// | author: AI系统
// +----------------------------------------------------------------------

namespace app\adminapi\controller\distribution;


use app\adminapi\controller\BaseAdminController;
use app\adminapi\lists\distribution\DistributionOrderLists;

class DistributionOrderController extends BaseAdminController
{
    /**
     * @notes 分销订单列表
     * @return mixed
     * @author ljj
     * @date 2023/5/24 10:38 上午
     */
    public function lists()
    {
        return $this->dataLists(new DistributionOrderLists());
    }
}