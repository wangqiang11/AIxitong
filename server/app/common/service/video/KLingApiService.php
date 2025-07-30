<?php

namespace app\common\service\video;

use app\common\cache\KeyPoolCache;
use app\common\enum\PoolEnum;
use app\common\enum\VideoEnum;
use Firebase\JWT\JWT;
use think\facade\Log;
use WpOrg\Requests\Requests;
use Exception;

/**
 * KLingAPI服务类
 */
class KLingApiService
{
    protected string $baseUrl = 'https://api.klingai.com';

    protected array $headers = [];

    protected array $options = [];

    /**
     * @throws Exception
     */
    public function __construct($baseUrl = '')
    {
        $keyPoolServer = (new KeyPoolCache(VideoEnum::KLING, PoolEnum::TYPE_VIDEO, VideoEnum::KLING));
        $keyData       = $keyPoolServer->getKey();

        if (empty($keyData)) {
            throw new Exception('请在后台配置key');
        }

        if (!empty($baseUrl)) {
            $this->baseUrl = $baseUrl;
        }

        if (!empty($keyData['secret'])) {
            $payload = [
                "iss" => $keyData['key'],
                "exp" => time() + 1800,
                "nbf" => time() - 5
            ];

            $this->headers = [
                'Content-Type'  => 'application/json',
                'Authorization' => 'Bearer ' . JWT::encode($payload, $keyData['secret'], 'HS256'),
            ];
        } else {
            $this->headers = [
                'Content-Type'  => 'application/json',
                'Authorization' => 'Bearer ' . $keyData['key'],
            ];
        }

        $this->options = [
            'verify' => false,
        ];
    }

    /**
     * @notes 提交视频
     * @param array $params
     * @return mixed
     * @throws Exception
     */
    public function video(array $params)
    {
        $url = $this->baseUrl . '/v1/videos/text2video';

        if ($params['camera_control']['type'] == 'simple') {
            $params['camera_control'] = null;
        }

        // 文生视频
        $data = [
            // kling-v1, kling-v1-6, kling-v2-master
            'model_name' => $params['model_name'] ?? 'kling-v1',
            'prompt' => $params['prompt'],
            'negative_prompt' => $params['negative_prompt'] ?? '',
            'cfg_scale' => $params['cfg_scale'] ?? '0.5', // 0,1
            'mode' => $params['mode'] ?? 'std', // std，pro
            'aspect_ratio' => $params['aspect_ratio'] ?? '16:9',
            'duration' => $params['duration'] ?? 5,
            'camera_control' => $params['camera_control'] ?? null,
        ];

        $response = Requests::post($url, $this->headers,json_encode($data),$this->options);
        return $this->getResponseData($response);
    }

    /**
     * @notes 查询详情
     * @param string $taskId
     * @return mixed
     * @throws Exception
     * @author mjf
     * @date 2025/5/22 21:44
     */
    public function query(string $taskId): mixed
    {
        $url = $this->baseUrl . '/v1/videos/text2video/' . $taskId;
        $response = Requests::get($url, $this->headers, $this->options);
        return $this->getResponseData($response);
    }

    /**
     * @notes 响应数据
     * @param $response
     * @return mixed
     * @throws Exception
     * @author mjf
     * @date 2025/5/22 21:35
     */
    public function getResponseData($response): mixed
    {
        $responseData = json_decode($response->body, true);

        if (isset($responseData['ResponseMeta']) && !empty($responseData['ResponseMeta']['ErrorMessage'])) {
            $error = $responseData['ResponseMeta']['ErrorMessage'];
            if ($error == 'Parameter handling exception') {
                Log::write('可灵视频请求异常：' . json_encode($responseData, JSON_UNESCAPED_UNICODE), 'error');
                throw new Exception('请求参数异常:'. $error);
            }
            throw new Exception($responseData['ResponseMeta']['ErrorMessage']);
        }

        if (isset($responseData['code']) && $responseData['code'] != 0) {
            Log::write('可灵视频请求异常：' . json_encode($responseData, JSON_UNESCAPED_UNICODE), 'error');
            $error = $responseData['message'] ?? '请求错误';
            throw new Exception($error);
        }

        // 第三方异常处理
        if (!empty($responseData['error'])) {
            Log::write('可灵视频请求异常：' . json_encode($responseData, JSON_UNESCAPED_UNICODE), 'error');
            $error = !empty($responseData['error']['message']) ? $responseData['error']['message'] : '请求错误';
            throw new Exception($error);
        }

        return $responseData['data'];
    }


}