<?php
// +----------------------------------------------------------------------
// | 匿名开发者
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | gitee下载：
// | github下载：
// | 访问官网：
// | 访问社区：
// | 访问手册：
// | 微信公众号：
// | 在gitee、github等公开渠道开源版本可免费商用，未经许可不能去除前后端官方版权标识
// |  收费版本务必购买商业授权，购买去版权授权后，方可去除前后端官方版权标识
// | 禁止对系统程序代码以任何目的，任何形式的再发布
// | 版权所有并拥有最终解释权
// +----------------------------------------------------------------------
// | author: AI系统
// +----------------------------------------------------------------------

namespace app\api\controller;


use app\api\logic\ShareLogic;

class ShareController extends BaseApiController
{
    public array $notNeedLogin = ['share','click'];


    /**
     * @notes 任务
     * @return \think\response\Json
     * @author ljj
     * @date 2023/4/19 4:51 下午
     */
    public function task()
    {
        $result = (new ShareLogic())->task($this->userId);
        return $this->success('',$result);
    }

    /**
     * @notes 分享接口
     * @return \think\response\Json
     * @author ljj
     * @date 2023/4/18 4:59 下午
     */
    public function share()
    {
        $result = (new ShareLogic())->share($this->userInfo);
        if (false === $result) {
            return $this->fail(ShareLogic::getError());
        }
        return $this->success('',$result);
    }

    /**
     * @notes 点击分享链接
     * @return \think\response\Json
     * @author ljj
     * @date 2023/4/18 5:14 下午
     */
    public function click()
    {
        $params = $this->request->post();
        $params['user_id'] = $this->userId;
        $result = (new ShareLogic())->click($params);
        if (false === $result) {
            return $this->fail(ShareLogic::getError());
        }
        return $this->success('操作成功');
    }

    /**
     * @notes 邀请新用户
     * @return \think\response\Json
     * @author ljj
     * @date 2023/4/18 5:35 下午
     */
    public function invite()
    {
        $params = $this->request->post();
        $params['new_user_id'] = $this->userId;
        $result = (new ShareLogic())->invite($params);
        if (false === $result) {
            return $this->fail(ShareLogic::getError());
        }
        return $this->success('操作成功');
    }


    /**
     * @notes 获取小程序码
     * @return \think\response\Json
     * @author ljj
     * @date 2023/5/23 11:25 上午
     */
    public function getMnpQrCode()
    {
        $params = $this->request->post();
        $result = (new ShareLogic())->getMnpQrCode($params);
        if(false === $result){
            return $this->fail(ShareLogic::getError());
        }
        return $this->success('获取成功',['result'=>$result]);
    }


    /**
     * @notes 用户签到
     * @return \think\response\Json
     * @author cjhao
     * @date 2024/7/18 11:04
     */
    public function sign()
    {
        $result = (new ShareLogic())->sign($this->userInfo);
        if (false === $result) {
            return $this->fail(ShareLogic::getError());
        }
        return $this->success('签到成功',[],1,1);
    }



}