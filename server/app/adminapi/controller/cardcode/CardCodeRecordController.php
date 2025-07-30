<?php
// +----------------------------------------------------------------------
// | AI系统100%开源免费商用商城系统
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | 开源版本可自由商用，可去除界面版权logo
// | 商业版本务必购买商业授权，以免引起法律纠纷
// | 禁止对系统程序代码以任何目的，任何形式的再发布
// | gitee下载：
// | github下载：
// | 访问官网：
// | 访问社区：https://home.AI系统.cn
// | 访问手册：http://doc.AI系统.cn
// | 微信公众号：AI系统技术社区
// | AI系统团队 版权所有 拥有最终解释权
// +----------------------------------------------------------------------
// | author: AI系统Team
// +----------------------------------------------------------------------
namespace app\adminapi\controller\cardcode;
use app\adminapi\controller\BaseAdminController;

/**
 * 卡密记录控制器类
 * Class CardCodeController
 * @package app\adminapi\controller\cardcode
 */
class CardCodeRecordController extends BaseAdminController
{

    /**
     * @notes 列表类
     * @return mixed
     * @author cjhao
     * @date 2023/7/10 12:09
     */
    public function lists()
    {
        return $this->dataLists();
    }



}