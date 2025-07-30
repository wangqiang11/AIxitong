<?php

namespace app\common\service\draw\engine;

use app\common\cache\KeyPoolCache;
use app\common\enum\draw\DrawEnum;
use app\common\enum\PoolEnum;
use Exception;
use WpOrg\Requests\Requests;

/**
 * AceData绘画
 * Class DrawAceData
 * @package app\common\service\draw
 */
class DrawAceData extends DrawBase implements DrawInterface
{
    protected string $apiToken;

    public function __construct()
    {
        $keyPoolServer  = (new KeyPoolCache(DrawEnum::API_MJ_ACEDATA, PoolEnum::TYPE_DRAW));
        $this->apiToken = $keyPoolServer->getKey();
        if (empty($this->apiToken)) {
            throw new Exception('请在后台配置key');
        }

        $this->headers = [
            'content-type'  => 'application/json',
            'accept'        => 'application/json',
            'authorization' => 'Bearer ' . $this->apiToken,
        ];

        $this->baseUrl    = 'https://api.acedata.cloud/midjourney';
        $this->notifyHook = request()->domain() . '/api/draw.draw/notifyMjAceData';
    }

    /**
     * @notes 文生图,图生图 // $prompt 关键词  $imageId 图片id // 操作
     * @param $params
     * @return array
     * @throws Exception
     * @author 段誉
     * @date 2023/6/19 11:22
     */
    public function imagine($params): array
    {
        $url      = $this->baseUrl . "/imagine";
        $params   = [
            'mode'         => $params['mode'],
            'action'       => $params['action'],
            'prompt'       => $params['prompt'],
            'image_id'     => $params['image_id'],
            'timeout'      => 300,
            'callback_url' => $this->notifyHook,
        ];
        $option   = ['timeout' => 100, 'connect_timeout' => 100, 'verify' => false];
        $response = Requests::post($url, $this->headers, json_encode($params), $option);
        return $this->getResponseData($response);
    }

    /**
     * @notes 图片放大，变换
     * @param array $params
     * @return array
     * @throws \Exception
     * @author 段誉
     * @date 2023/7/17 9:56
     */
    public function imagineUv(array $params): array
    {
        return $this->imagine($params);
    }

    /**
     * @notes 详情
     * @param string $taskId
     * @return array
     * @throws Exception
     * @author mjf
     * @date 2024/2/2 17:40
     */
    public function fetch(string $taskId): array
    {
        $url      = $this->baseUrl . "/tasks";
        $params   = [
            'id'     => $taskId,
            'action' => 'retrieve', // retrieve retrieve_batch
        ];
        $option   = ['timeout' => 100, 'connect_timeout' => 100, 'verify' => false];
        $response = Requests::post($url, $this->headers, json_encode($params), $option);
        return json_decode($response->body, true);
    }

    /**
     * @notes 结果处理
     * @param $response
     * @return array
     * @throws Exception
     * @author 段誉
     * @date 2023/6/19 11:27
     */
    public function getResponseData($response): array
    {
        $response = json_decode($response->body, true);

        if (!empty($response['error'])) {
            $errMsg = !empty($response['error']['message']) ? $response['error']['message'] : '提交失败';
            throw new Exception($errMsg);
        }

        if (empty($response['task_id'])) {
            $errMsg = !empty($response['detail']) ? $response['detail'] : '提交失败';
            throw new Exception($errMsg);
        }

        return $response;
    }


}