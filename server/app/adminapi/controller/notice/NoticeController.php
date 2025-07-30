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

namespace app\adminapi\controller\notice;

use app\adminapi\controller\BaseAdminController;
use app\adminapi\lists\notice\NoticeSettingLists;
use app\adminapi\logic\notice\NoticeLogic;
use app\adminapi\validate\notice\NoticeValidate;
use think\response\Json;

/**
 * 通知控制器
 */
class NoticeController extends BaseAdminController
{
    /**
     * @notes 查看通知设置列表
     * @return Json
     * @author 段誉
     * @date 2022/3/29 11:18
     */
    public function settingLists(): Json
    {
        return $this->dataLists(new NoticeSettingLists());
    }

    /**
     * @notes 查看通知设置详情
     * @return Json
     * @author 段誉
     * @date 2022/3/29 11:18
     */
    public function detail(): Json
    {
        $params = (new NoticeValidate())->goCheck('detail');
        $result = NoticeLogic::detail($params);
        return $this->data($result);
    }

    /**
     * @notes 通知设置
     * @return Json
     * @author 段誉
     * @date 2022/3/29 11:18
     */
    public function set(): Json
    {
        $params = $this->request->post();
        $result = NoticeLogic::set($params);
        if ($result) {
            return $this->success('设置成功');
        }
        return $this->fail(NoticeLogic::getError());
    }
}