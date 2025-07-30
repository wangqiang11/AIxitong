<?php
// +----------------------------------------------------------------------
// | AI系统管理后台（PHP版）
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | 开源版本可自由商用，可去除界面版权logo
// | gitee下载：/likeadmin
// | //
// | 访问官网：www.localhost.com
// | 匿名公司 版权所有 拥有最终解释权
// +----------------------------------------------------------------------
// | author: 匿名开发者
// +----------------------------------------------------------------------
declare (strict_types=1);

namespace app\adminapi\http\middleware;

/**
 * 演示环境数据加密
 * Class DemoDataMiddleware
 * @package app\adminapi\http\middleware
 */
class EncryDemoDataMiddleware
{

    // 需要过滤的接口
    protected array $needCheck = [
        // 存储配置
        'setting.storage/detail',
        // 短信配置
        'notice.smsConfig/detail',
        // 公众号配置
        'channel.official_account_setting/getConfig',
        // 小程序配置
        'channel.mnp_settings/getConfig',
        // 开放平台配置
        'channel.open_setting/getConfig',
        // 支付配置
        'setting.pay.pay_config/getConfig',
        // 密钥配置
        'setting.keypool/lists',
        'setting.keypool/detail',
    ];

    // 可以排除字段
    protected array $excludeParams = [
        'name',
        'icon',
        'image',
        'qr_code',
        'interface_version',
        'merchant_type',
        'channel'
    ];

    public function handle($request, \Closure $next)
    {
        $response = $next($request);

        if ($request->adminInfo && 1 === ($request->adminInfo['root']??0))  {
            return $response;
        }

        // 非需校验的接口 或者 未开启演示模式
        $accessUri = strtolower($request->controller() . '/' . $request->action());
        if (!in_array($accessUri, lower_uri($this->needCheck)) || !env('project.demo_env')) {
            return $response;
        }

        // 非json数据
        if (!method_exists($response, 'header') || !in_array('application/json; charset=utf-8', $response->getHeader())) {
            return $response;
        }

        $data = $response->getData();
        if (!is_array($data) || empty($data)) {
            return $response;
        }

        foreach ($data['data'] as $key => $item) {
            // 字符串
            if (is_string($item)) {
                $data['data'][$key] = $this->getEncryData($key, $item);
                continue;
            }
            // 数组
            if (is_array($item)) {
                foreach ($item as $itemKey => $itemValue) {
                    if (in_array($accessUri, ['setting.keypool/lists', 'setting.keypool/detail']) && isset($itemValue['key'])) {
                        $itemValue['key'] = '********';
                        $data['data'][$key][$itemKey] = $itemValue;
                    } else {
                        $data['data'][$key][$itemKey] = $this->getEncryData($itemKey, $itemValue);
                    }
                }
            }
        }

        return $response->data($data);
    }

    /**
     * @notes 加密配置
     * @param $key
     * @param $value
     * @return mixed
     * @author 段誉
     * @date 2023/3/6 11:49
     */
    protected function getEncryData($key, $value): mixed
    {
        // 非隐藏字段
        if (in_array($key, $this->excludeParams)) {
            return $value;
        }

        // 隐藏字段
        if (is_string($value)) {
            return '******';
        }
        return $value;
    }
}