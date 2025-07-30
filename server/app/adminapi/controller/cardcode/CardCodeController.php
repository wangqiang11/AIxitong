<?php
// +----------------------------------------------------------------------
// | AI系统100%开源免费商用商城系统
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | 开源版本可自由商用，可去除界面版权logo
// | 商业版本务必购买商业授权，以免引起法律纠纷
// | 禁止对系统程序代码以任何目的，任何形式的再发布
// | gitee下载：
// | github下载：
// | 访问官网：
// | 访问社区：
// | 访问手册：
// | 微信公众号：
// |  版权所有 拥有最终解释权
// +----------------------------------------------------------------------
// | author: 匿名公司
// +----------------------------------------------------------------------
namespace app\adminapi\controller\cardcode;
use app\adminapi\controller\BaseAdminController;
use app\adminapi\logic\cardcode\CardCodeLogic;
use app\adminapi\validate\cardcode\CardCodeValidate;
use app\common\enum\CardCodeEnum;


/**
 * 卡密控制器类
 * Class CardCodeController
 * @package app\adminapi\controller\cardcode
 */
class CardCodeController extends BaseAdminController
{

    /**
     * @notes 获取列表
     * @return array
     * @author cjhao
     * @date 2023/7/10 18:33
     */
    public function getOtherList()
    {
        return [
            'type_list'    => CardCodeEnum::getTypeDesc()
        ];
    }

    /**
     * @notes 获取套餐列表
     * @return mixed
     * @author cjhao
     * @date 2023/7/10 15:51
     */
    public function getPackageList()
    {
        return $this->success('',(new CardCodeLogic())->getPackageList());
    }
    

    /**
     * @notes 列表类
     * @return mixed
     * @author cjhao
     * @date 2023/7/10 12:09
     */
    public function lists()
    {
        return $this->dataLists();
    }


    /**
     * @notes 添加卡密
     * @return mixed
     * @author cjhao
     * @date 2023/7/10 15:34
     */
    public function add()
    {
        $post = (new CardCodeValidate())->post()->goCheck('add');
        $result = (new CardCodeLogic())->add($post);
        if(true === $result) {
            return $this->success('添加成功',[],1,1);
        }
        return $this->fail($result);
    }


    /**
     * @notes 获取卡密详情
     * @return mixed
     * @author cjhao
     * @date 2023/7/10 16:27
     */
    public function detail()
    {
        (new CardCodeValidate())->goCheck('id');
        $detail = (new CardCodeLogic())->detail($this->request->get('id'));
        return $this->success('',$detail);
    }


    /**
     * @notes 删除卡吗
     * @return mixed
     * @author cjhao
     * @date 2023/7/10 17:32
     */
    public function del()
    {
        (new CardCodeValidate())->post()->goCheck('id');
        (new CardCodeLogic())->del($this->request->post('id'));
        return $this->success('删除成功',[],1,1);
    }


    /**
     * @notes 获取卡密设置
     * @return mixed
     * @author cjhao
     * @date 2023/7/11 11:50
     */
    public function getConfig()
    {
        $config = (new CardCodeLogic())->getConfig();
        return $this->success('',$config);
    }


    /**
     * @notes 卡密设置
     * @return mixed
     * @author cjhao
     * @date 2023/7/11 11:56
     */
    public function setConfig()
    {
        (new CardCodeLogic())->setConfig($this->request->post());
        return $this->success('设置成功');

    }


}