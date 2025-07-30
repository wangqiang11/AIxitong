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

namespace app\api\controller;

use app\api\logic\BroadcastLogic;
use think\response\Json;

/**
 * 语音播报管理
 */
class BroadcastController extends BaseApiController
{
    public array $notNeedLogin = ['generate'];

    /**
     * @notes 语音播报
     * @return Json
     * @author fzr
     */
    public function generate(): Json
    {
        $params = $this->request->post();
        $params['apiKey']   = $this->request->header('Authorization', '');
        $params['identity'] = $this->request->header('identity', '');

        $result = (new BroadcastLogic())->generate($params, $this->userId);
        if(false === $result) {
            return $this->fail(BroadcastLogic::getError());
        }
        return $this->success('',$result);
    }
}