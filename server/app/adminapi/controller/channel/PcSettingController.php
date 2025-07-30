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

namespace app\adminapi\controller\channel;

use app\adminapi\controller\BaseAdminController;
use app\adminapi\logic\channel\PcSettingLogic;
use think\response\Json;

/**
 * pc端设置控制器类
 */
class PcSettingController extends BaseAdminController
{
    /**
     * @notes 获取pc端设置
     * @author cjhao
     * @date 2023/4/19 15:25
     */
    public function getConfig(): Json
    {
        $config = (new PcSettingLogic())->getConfig();
        return $this->success('',$config);
    }

    /**
     * @notes 设置pc端设置
     * @return Json
     * @author cjhao
     * @date 2023/4/19 15:27
     */
    public function setConfig(): Json
    {
        (new PcSettingLogic())->setConfig($this->request->post());
        return $this->success('操作成功');
    }
}