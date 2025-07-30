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
use app\adminapi\logic\setting\ContentCensorLogic;
use think\response\Json;

/**
 * 内容审核控制器
 */
class ContentCensorController extends BaseAdminController
{
    /**
     * @notes 内容审核配置详情
     * @return Json
     * @author fzr
     */
    public function detail(): Json
    {
        $config = ContentCensorLogic::detail();
        return $this->data($config);
    }

    /**
     * @notes 内容审核配置保存
     * @return Json
     * @author fzr
     */
    public function save(): Json
    {
        ContentCensorLogic::save($this->request->post());
        return $this->success('设置成功',[],1,1);
    }
}