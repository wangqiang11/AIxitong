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

namespace app\adminapi\controller\channel;

use app\adminapi\controller\BaseAdminController;
use app\adminapi\logic\channel\OfficialAccountMenuLogic;
use think\response\Json;

/**
 * 微信公众号菜单控制器
 */
class OfficialAccountMenuController extends BaseAdminController
{

    /**
     * @notes 保存菜单
     * @return Json
     * @author 段誉
     * @date 2022/3/29 10:41
     */
    public function save(): Json
    {
        $params = $this->request->post();
        $result = OfficialAccountMenuLogic::save($params);
        if(false === $result) {
            return $this->fail(OfficialAccountMenuLogic::getError());
        }
        return $this->success('保存成功',[],1,1);
    }

    /**
     * @notes 保存发布菜单
     * @return Json
     * @author 段誉
     * @date 2022/3/29 10:42
     */
    public function saveAndPublish(): Json
    {
        $params = $this->request->post();
        $result = OfficialAccountMenuLogic::saveAndPublish($params);
        if($result) {
            return $this->success('保存并发布成功',[],1,1);
        }
        return $this->fail(OfficialAccountMenuLogic::getError());
    }

    /**
     * @notes 查看菜单详情
     * @return Json
     * @author 段誉
     * @date 2022/3/29 10:42
     */
    public function detail(): Json
    {
        $result = OfficialAccountMenuLogic::detail();
        return $this->data($result);
    }
}