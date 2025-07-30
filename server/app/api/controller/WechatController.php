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

use app\api\logic\WechatLogic;
use app\api\validate\WechatValidate;
use think\response\Json;

/**
 * 微信
 */
class WechatController extends BaseApiController
{
    public array $notNeedLogin = ['jsConfig'];

    /**
     * @notes 微信JsSDK授权接口
     * @return Json
     * @author 段誉
     * @date 2023/3/1 11:39
     */
    public function jsConfig(): Json
    {
        $params = (new WechatValidate())->goCheck('jsConfig');
        $result = WechatLogic::jsConfig($params);
        if ($result === false) {
            return $this->fail(WechatLogic::getError(), [], 0, 0);
        }
        return $this->data($result);
    }
}