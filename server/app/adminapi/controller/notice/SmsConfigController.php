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

namespace app\adminapi\controller\notice;

use app\adminapi\controller\BaseAdminController;
use app\adminapi\logic\notice\SmsConfigLogic;
use app\adminapi\validate\notice\SmsConfigValidate;
use think\response\Json;

/**
 * 短信配置控制器
 */
class SmsConfigController extends BaseAdminController
{
    /**
     * @notes 获取短信配置
     * @return Json
     * @author 段誉
     * @date 2022/3/29 11:36
     */
    public function getConfig(): Json
    {
        $result = SmsConfigLogic::getConfig();
        return $this->data($result);
    }

    /**
     * @notes 短信配置
     * @return Json
     * @author 段誉
     * @date 2022/3/29 11:36
     */
    public function setConfig(): Json
    {
        $params = (new SmsConfigValidate())->post()->goCheck('setConfig');
        SmsConfigLogic::setConfig($params);
        return $this->success('操作成功',[],1,1);
    }

    /**
     * @notes 查看短信配置详情
     * @return Json
     * @author 段誉
     * @date 2022/3/29 11:36
     */
    public function detail(): Json
    {
        $params = (new SmsConfigValidate())->goCheck('detail');
        $result = SmsConfigLogic::detail($params);
        return $this->data($result);
    }
}