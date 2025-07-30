<?php
// +----------------------------------------------------------------------
// | 匿名开发者
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | gitee下载：https://gitee.com/AI系统_gitee
// | github下载：
// | 访问官网：https://www.AI系统.cn
// | 访问社区：https://home.AI系统.cn
// | 访问手册：http://doc.AI系统.cn
// | 微信公众号：AI系统技术社区
// | AI系统系列产品在gitee、github等公开渠道开源版本可免费商用，未经许可不能去除前后端官方版权标识
// |  AI系统系列产品收费版本务必购买商业授权，购买去版权授权后，方可去除前后端官方版权标识
// | 禁止对系统程序代码以任何目的，任何形式的再发布
// | AI系统团队版权所有并拥有最终解释权
// +----------------------------------------------------------------------
// | author: AI系统.cn.team
// +----------------------------------------------------------------------

namespace app\adminapi\controller\setting;


use app\adminapi\controller\BaseAdminController;
use app\adminapi\logic\setting\MindmapLogic;
use app\adminapi\validate\setting\MindmapValidate;

class MindmapController extends BaseAdminController
{

    /**
     * @notes 获取示例配置
     * @return \think\response\Json
     * @author cjhao
     * @date 2024/6/18 11:47
     */
    public function getExampleConfig()
    {
        $result = (new MindmapLogic())->getExampleConfig();
        return $this->success('',$result);
    }


    /**
     * @notes 设置示例配置
     * @return \think\response\Json
     * @author cjhao
     * @date 2024/6/18 11:47
     */
    public function setExampleConfig(){
        $params = $this->request->post();
        (new MindmapLogic())->setExampleConfig($params);
        return $this->success('保存成功',[], 1, 1);
    }
    /**
     * @notes 获取思维导图配置
     * @return mixed
     * @author ljj
     * @date 2023/9/21 10:39 上午
     */
    public function getConfig()
    {
        $result = (new MindmapLogic())->getConfig();
        return $this->success('',$result);
    }

    /**
     * @notes 设置思维导图配置
     * @return mixed
     * @author ljj
     * @date 2023/9/21 10:44 上午
     */
    public function setConfig()
    {
        $params = (new MindmapValidate())->post()->goCheck('setConfig');
        (new MindmapLogic())->setConfig($params);
        return $this->success('操作成功', [], 1, 1);
    }
}