<?php

namespace app\common\service\draw\engine;

use app\common\cache\KeyPoolCache;
use app\common\enum\draw\DrawEnum;
use app\common\enum\PoolEnum;
use Volc\Base\V4Curl;
use Volc\Service\Visual;
use Exception;


class DrawDoubao extends DrawBase implements DrawInterface
{
    protected V4Curl $client;

    /** 初始化
     * @throws Exception
     */
    public function __construct()
    {
        $keyPoolServer = (new KeyPoolCache(DrawEnum::API_DOUBAO, PoolEnum::TYPE_DRAW, DrawEnum::API_DOUBAO));
        $keyConfig     = $keyPoolServer->getKey();
        if (empty($keyConfig)) {
            throw new Exception('请在后台配置key');
        }

        $this->client = Visual::getInstance();
        $this->client->setAccessKey($keyConfig['key']);
        $this->client->setSecretKey($keyConfig['secret']);
    }

    /**
     * @notes 绘画
     * @param array $params
     * @return array
     * @throws Exception
     * @author mjf
     */
    public function imagine(array $params): array
    {
        $engine = $params['engine'] ?? '';

        return match ($engine) {
            'high_aes_general_v20_L' => $this->textToImage($params),
            'high_aes' => $this->animeImage($params),
            'i2i_xl_sft' => $this->imageToImage($params),
            default => throw new Exception('操作异常-模型参数异常'),
        };
    }


    /**
     * @notes 文生图
     * @param array $params
     * @return array
     * @throws Exception
     * @author mjf
     */
    public function textToImage(array $params): array
    {
        $body = [
            'req_key'       => 'high_aes_general_v20_L',
            'prompt'        => $params['prompt'],
            'model_version' => 'general_v2.0_L',
            'seed'          => intval($params['seed'] ?? -1),
            'ddim_steps'    => intval($params['ddim_steps'] ?? 16),
            'width'         => intval($params['width'] ?? 512),
            'height'        => intval($params['height'] ?? 512),
        ];

        $response = $this->client->CVSync2AsyncSubmitTask(['json' => $body]);
        $response = str_replace('\u0026', '&', $response);
        return $this->getResponseData($response);
    }

    /**
     * @notes 图生图 (同步任务,文档中暂无异步图生图)
     * @param array $params
     * @return array
     * @throws Exception
     * @author mjf
     */
    public function imageToImage(array $params): array
    {
        $body = [
            'req_key'    => 'i2i_xl_sft',
            'prompt'     => $params['prompt'],
            'seed'       => intval($params['seed'] ?? -1),
            'ddim_steps' => intval($params['ddim_steps'] ?? 20),
            'width'      => intval($params['width'] ?? 512),
            'height'     => intval($params['height'] ?? 512),
            'return_url' => true,
        ];

        if (!empty($params['image_base'])) {
            $body['image_urls'][] = $params['image_base'];
        }

        $response = $this->client->CVProcess(['json' => $body]);
        $response = str_replace('\u0026', '&', $response);
        return $this->getResponseData($response);
    }

    /**
     * @notes 动漫文生图/图生图
     * @param array $params
     * @return array
     * @throws Exception
     * @author mjf
     */
    public function animeImage(array $params): array
    {
        $body = [
            'req_key'       => 'high_aes',
            'prompt'        => $params['prompt'],
            'model_version' => 'anime_v1.3.1',
            'strength'      => $params['strength'] ?? 0.7,
            'seed'          => intval($params['seed'] ?? -1),
            'ddim_steps'    => intval($params['ddim_steps'] ?? 20),
            'width'         => intval($params['width'] ?? 1024),
            'height'        => intval($params['height'] ?? 1024),
        ];

        if (!empty($params['image_base'])) {
            $body['image_urls'][] = $params['image_base'];
        }

        $response = $this->client->CVSync2AsyncSubmitTask(['json' => $body]);
        $response = str_replace('\u0026', '&', $response);
        return $this->getResponseData($response);
    }


    /**
     * @notes 异步任务详情(文生图，动漫文生图/图生图)
     * @param $reqKey
     * @param $taskId
     * @return array
     * @throws Exception
     * @author mjf
     */
    public function fetch($reqKey, $taskId): array
    {
        $body = [
            "req_key"  => $reqKey,
            "task_id"  => $taskId,
            "req_json" => json_encode([
                'return_url' => true
            ]),
        ];

        $response = $this->client->CVSync2AsyncGetResult(['json' => $body]);
        $response = str_replace('\u0026', '&', $response);
        return $this->getResponseData($response);
    }


    public function imagineUv(array $params)
    {
    }

    /**
     * @notes 请求响应
     * @param $response
     * @return array
     * @throws Exception
     * @author mjf
     */
    public function getResponseData($response): array
    {
        $responseData = json_decode($response, true);
        if (empty($responseData['code']) || $responseData['code'] != 10000) {
            $errorMsg = !empty($responseData['message']) ? $responseData['message'] : '请求错误';
            throw new Exception($errorMsg);
        }

        if (empty($responseData['data'])) {
            $errorMsg = !empty($responseData['message']) ? $responseData['message'] : '响应数据异常';
            throw new Exception($errorMsg);
        }

        return $responseData['data'];
    }


}