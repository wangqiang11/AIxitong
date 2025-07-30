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

namespace app\adminapi\controller\setting;

use app\adminapi\controller\BaseAdminController;
use app\adminapi\logic\setting\VoiceLogic;
use think\response\Json;

/**
 * 语音播报配置控制器类
 */
class VoiceController extends BaseAdminController
{
    /**
     * @notes 获取语音播报
     * @return Json
     * @author fzr
     */
    public function detail(): Json
    {
        $result = VoiceLogic::detail();
        return $this->data($result);
    }

    /**
     * @notes 设置语音播报
     * @return Json
     * @author fzr
     */
    public function save(): Json
    {
        VoiceLogic::save($this->request->post());
        return $this->success('设置成功', [], 1, 1);
    }
}