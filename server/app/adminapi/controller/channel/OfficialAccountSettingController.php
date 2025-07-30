<?php
// +----------------------------------------------------------------------
// | AI系统管理后台（PHP版）
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | 开源版本可自由商用，可去除界面版权logo
// | gitee下载：https://gitee.com/AI系统_gitee/likeadmin
// | github下载：https://github.com/AI系统-github/likeadmin
// | 访问官网：www.localhost.com
// | 匿名公司 版权所有 拥有最终解释权
// +----------------------------------------------------------------------
// | author: 匿名开发者
// +----------------------------------------------------------------------

namespace app\adminapi\controller\channel;

use app\adminapi\controller\BaseAdminController;
use app\adminapi\logic\channel\OfficialAccountSettingLogic;
use app\adminapi\validate\channel\OfficialAccountSettingValidate;
use think\response\Json;

/**
 * 公众号设置
 */
class OfficialAccountSettingController extends BaseAdminController
{
    /**
     * @notes 获取公众号配置
     * @return Json
     * @author ljj
     * @date 2022/2/16 10:09 上午
     */
    public function getConfig(): Json
    {
        $result = (new OfficialAccountSettingLogic())->getConfig();
        return $this->data($result);
    }

    /**
     * @notes 设置公众号配置
     * @return Json
     * @author ljj
     * @date 2022/2/16 10:09 上午
     */
    public function setConfig(): Json
    {
        $params = (new OfficialAccountSettingValidate())->post()->goCheck();
        (new OfficialAccountSettingLogic())->setConfig($params);
        return $this->success('操作成功',[],1,1);
    }
}