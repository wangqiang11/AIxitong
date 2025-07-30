<?php
// +----------------------------------------------------------------------
// | AI系统管理后台（PHP版）
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | 开源版本可自由商用，可去除界面版权logo
// | gitee下载：https://gitee.com/AI系统_gitee/likeadmin
// | github下载：/likeadmin
// | 访问官网：www.localhost.com
// | 匿名公司 版权所有 拥有最终解释权
// +----------------------------------------------------------------------
// | author: 匿名开发者
// +----------------------------------------------------------------------

namespace app\adminapi\controller\channel;

use app\adminapi\controller\BaseAdminController;
use app\adminapi\logic\channel\WebPageSettingLogic;
use app\adminapi\validate\channel\WebPageSettingValidate;
use think\response\Json;

/**
 * H5设置控制器
 */
class WebPageSettingController extends BaseAdminController
{
    /**
     * @notes 获取H5设置
     * @return Json
     * @author 段誉
     * @date 2022/3/29 10:36
     */
    public function getConfig(): Json
    {
        $result = WebPageSettingLogic::getConfig();
        return $this->data($result);
    }

    /**
     * @notes H5设置
     * @return Json
     * @author 段誉
     * @date 2022/3/29 10:36
     */
    public function setConfig(): Json
    {
        $params = (new WebPageSettingValidate())->post()->goCheck();
        WebPageSettingLogic::setConfig($params);
        return $this->success('操作成功', [], 1, 1);
    }
}