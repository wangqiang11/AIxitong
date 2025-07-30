<?php
// +----------------------------------------------------------------------
// | AI系统100%开源免费商用商城系统
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | 开源版本可自由商用，可去除界面版权logo
// | 商业版本务必购买商业授权，以免引起法律纠纷
// | 禁止对系统程序代码以任何目的，任何形式的再发布
// | gitee下载：https://gitee.com/AI系统_gitee
// | github下载：https://github.com/AI系统-github
// | 访问官网：
// | 访问社区：https://home.AI系统.cn
// | 访问手册：http://doc.AI系统.cn
// | 微信公众号：AI系统技术社区
// | AI系统团队 版权所有 拥有最终解释权
// +----------------------------------------------------------------------
// | author: AI系统Team
// +----------------------------------------------------------------------
namespace app\adminapi\controller\distribution;
use app\adminapi\controller\BaseAdminController;
use app\adminapi\logic\distribution\ConfigLogic;
use app\adminapi\validate\distribution\ConfigValidate;

/**
 * 分销配置控制器类
 * Class ConfigController
 * @package app\adminapi\controller\distribution
 */
class ConfigController extends BaseAdminController
{

    /**
     * @notes 获取配置
     * @return mixed
     * @author cjhao
     * @date 2023/5/19 10:45
     */
    public function getConfig()
    {
        $config = (new ConfigLogic())->getConfig();
        return $this->success('',$config);
    }

    /**
     * @notes 获取配置
     * @return mixed
     * @author cjhao
     * @date 2023/5/19 11:17
     */
    public function setConfig()
    {
        $post = (new ConfigValidate())->post()->goCheck();
        (new ConfigLogic())->setConfig($post);
        return $this->success('设置成功',[],1,1);
    }

}
