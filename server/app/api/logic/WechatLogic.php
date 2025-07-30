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

namespace app\api\logic;

use app\common\logic\BaseLogic;
use app\common\service\wechat\WeChatOaService;
use EasyWeChat\Kernel\Exceptions\Exception;

/**
 * 微信
 * Class WechatLogic
 * @package app\api\logic
 */
class WechatLogic extends BaseLogic
{
    /**
     * @notes 微信JsSDK授权接口
     * @param $params
     * @return false|mixed
     * @throws @\Psr\SimpleCache\InvalidArgumentException
     * @throws @\Symfony\Contracts\HttpClient\Exception\ClientExceptionInterface
     * @throws @\Symfony\Contracts\HttpClient\Exception\DecodingExceptionInterface
     * @throws @\Symfony\Contracts\HttpClient\Exception\RedirectionExceptionInterface
     * @throws @\Symfony\Contracts\HttpClient\Exception\ServerExceptionInterface
     * @throws @\Symfony\Contracts\HttpClient\Exception\TransportExceptionInterface
     * @author 段誉
     * @date 2023/3/1 11:49
     */
    public static function jsConfig($params): array|bool
    {
        try {
            $url = urldecode($params['url']);
            return (new WeChatOaService())->getJsConfig($url, [
                'onMenuShareTimeline',
                'onMenuShareAppMessage',
                'onMenuShareQQ',
                'onMenuShareWeibo',
                'onMenuShareQZone',
                'openLocation',
                'getLocation',
                'chooseWXPay',
                'updateAppMessageShareData',
                'updateTimelineShareData',
                'openAddress',
                'scanQRCode'
            ]);
        } catch (Exception $e) {
            self::setError('获取jsSdk失败:' . $e->getMessage());
            return false;
        }
    }
}