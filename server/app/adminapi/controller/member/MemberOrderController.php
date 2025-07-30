<?php
// +----------------------------------------------------------------------
// | 匿名开发者
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | gitee下载：https://gitee.com/AI系统_gitee
// | github下载：
// | 访问官网：
// | 访问社区：https://home.AI系统.cn
// | 访问手册：http://doc.AI系统.cn
// | 微信公众号：AI系统技术社区
// | AI系统系列产品在gitee、github等公开渠道开源版本可免费商用，未经许可不能去除前后端官方版权标识
// |  务必购买商业授权，购买去版权授权后，方可去除前后端官方版权标识
// | 禁止对系统程序代码以任何目的，任何形式的再发布
// | AI系统团队版权所有并拥有最终解释权
// +----------------------------------------------------------------------
// | author: AI系统
// +----------------------------------------------------------------------

namespace app\adminapi\controller\member;


use app\adminapi\controller\BaseAdminController;
use app\adminapi\lists\member\MemberOrderLists;
use app\adminapi\logic\member\MemberOrderLogic;
use app\adminapi\validate\member\MemberOrderValidate;

class MemberOrderController extends BaseAdminController
{
    /**
     * @notes 会员订单列表
     * @return \think\response\Json
     * @author ljj
     * @date 2023/4/21 10:09 上午
     */
    public function lists()
    {
        return $this->dataLists(new MemberOrderLists());
    }

    /**
     * @notes 会员订单详情
     * @return \think\response\Json
     * @author ljj
     * @date 2023/4/21 10:12 上午
     */
    public function detail()
    {
        $params = (new MemberOrderValidate())->get()->goCheck('detail');
        $result = (new MemberOrderLogic())->detail($params);
        return $this->success('',$result);
    }

    /**
     * @notes 退款
     * @return \think\response\Json
     * @author ljj
     * @date 2023/4/21 10:33 上午
     */
    public function refund()
    {
        $params = (new MemberOrderValidate())->post()->goCheck('refund');
        $result = (new MemberOrderLogic())->refund($params, $this->adminId);
        if(true !== $result) {
            return $this->fail($result);
        }
        return $this->success('操作成功', [], 1, 1);
    }
}