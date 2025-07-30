<?php
// +----------------------------------------------------------------------
// | AI系统管理后台（PHP版）
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | 开源版本可自由商用，可去除界面版权logo
// | gitee下载：https://gitee.com/AI系统_gitee/likeadmin
// | //
// | 访问官网：www.localhost.com
// | 匿名公司 版权所有 拥有最终解释权
// +----------------------------------------------------------------------
// | author: 匿名开发者
// +----------------------------------------------------------------------

namespace app\adminapi\controller\channel;

use app\adminapi\controller\BaseAdminController;
use app\adminapi\logic\channel\MnpSettingsLogic;
use app\adminapi\validate\channel\MnpSettingsValidate;
use think\response\Json;

/**
 * 小程序设置
 */
class MnpSettingsController extends BaseAdminController
{
    /**
     * @notes 获取小程序配置
     * @return Json
     * @author ljj
     * @date 2022/2/16 9:38 上午
     */
    public function getConfig(): Json
    {
        $result = (new MnpSettingsLogic())->getConfig();
        return $this->data($result);
    }

    /**
     * @notes 设置小程序配置
     * @return Json
     * @author ljj
     * @date 2022/2/16 9:51 上午
     */
    public function setConfig(): Json
    {
        $params = (new MnpSettingsValidate())->post()->goCheck();
        (new MnpSettingsLogic())->setConfig($params);
        return $this->success('操作成功', [], 1, 1);
    }

    /**
     * @notes 上传小程序代码
     * @return mixed
     * @author ljj
     * @date 2023/12/7 11:58 上午
     */
    public function uploadMnp()
    {
        $params = $this->request->post();
        $result = (new MnpSettingsLogic())->uploadMnp($params);
        if(false === $result) {
            return $this->fail(MnpSettingsLogic::getError());
        }
        return $this->success('', $result);
    }
}