<?php

namespace app\common\service\ai\ppt;

use app\common\cache\KeyPoolCache;
use app\common\enum\PoolEnum;
use app\common\enum\PPTEnum;
use Exception;
use WpOrg\Requests\Requests;

class ChatPPTService
{
    private array $options;
    private array $headers;

    // 请求信息
    protected string $baseUrl = 'https://saas.api.yoo-ai.com';
    protected string $type;  // 类型
    protected string $title; // 标题

    // 用户ID
    protected int $userId;

    // 密钥对象
    protected mixed $keyPoolServer = null;

    /**
     * @notes 初始化
     * @throws Exception
     */
    public function __construct(int $userId = 0)
    {
        $this->userId        = $userId;
        $this->keyPoolServer = (new KeyPoolCache(PPTEnum::CHAT_PPT, PoolEnum::TYPE_PPT, PPTEnum::CHAT_PPT));
        $apiToken               = $this->keyPoolServer->getKey();
        if (empty($apiToken)) {
            throw new Exception('请在后台配置key');
        }

        $this->headers = [
            'clientUser'    => $userId,
            'Authorization' => 'Bearer ' . trim($apiToken),
        ];

        $this->options = [
            'verify'  => false,
            'timeout' => 100,
        ];
    }

    /**
     * @notes 提交ppt任务
     * @param array $params
     * @return array
     * @throws Exception
     * @author mjf
     * @date 2024/10/8 15:12
     */
    public function create(array $params): array
    {
        $data = [
            'text'        => $params['prompt'] ?? '',
            'complex'     => $params['complex'] ?? 1,
            'user_name'   => $params['user_name'] ?? '',
            'cover_id'    => $params['cover_id'] ?? '',
            'custom_data' => $params['custom_data'] ?? []
        ];

        $url      = $this->baseUrl . '/apps/ppt-create';
        $response = Requests::post($url, $this->headers, $data, $this->options);
        return $this->getResponseData($response);
    }

    /**
     * @notes 获取模版封面
     * @param array $params
     * @return array
     * @throws Exception
     * @author mjf
     * @date 2024/10/8 17:27
     */
    public function cover(array $params): array
    {
        $data = [
            'title'     => $params['title'],
            'count'     => $params['count'] ?? 4,
            'user_name' => $params['user_name'],
            'color'     => $params['color'] ?? '',
            'style'     => $params['style'] ?? '',
        ];

        $url      = $this->baseUrl . '/apps/ppt-cover';
        $response = Requests::post($url, $this->headers, $data, $this->options);
        return $this->getResponseData($response);
    }

    /**
     * @notes 生成大纲及标题
     * @param array $params
     * @return array
     * @throws Exception
     * @author mjf
     * @date 2024/10/8 17:43
     */
    public function structure(array $params): array
    {
        $data = [
            'title' => $params['title'] ?? '',
            'text'  => $params['text'] ?? '',
            'theme' => $params['theme'] ?? '',
        ];

        $url      = $this->baseUrl . '/apps/ppt-structure';
        $response = Requests::post($url, $this->headers, $data, $this->options);
        return $this->getResponseData($response);
    }

    /**
     * @notes 查询结果
     * @param string $taskId
     * @return array
     * @throws Exception
     * @author mjf
     * @date 2024/10/9 16:23
     */
    public function result(string $taskId): array
    {
        $url      = $this->baseUrl . '/apps/ppt-result?id=' . $taskId;
        $response = Requests::get($url, $this->headers, $this->options);
        return $this->getResponseData($response);
    }

    /**
     * @notes 获取下载链接
     * @param string $taskId
     * @return array
     * @throws Exception
     * @author mjf
     * @date 2024/10/10 14:04
     */
    public function getDownLoadUrl(string $taskId): array
    {
        $url = $this->baseUrl . '/apps/ppt-download';
        $url .= '?id=' . $taskId . '&type=pptx';

        $response = Requests::get($url, $this->headers, $this->options);
        return $this->getResponseData($response);
    }

    /**
     * @notes 响应信息
     * @param $response
     * @return array
     * @throws Exception
     * @author mjf
     * @date 2024/9/29 11:36
     */
    public function getResponseData($response): array
    {
        $responseData = json_decode($response->body, true);

        if (empty($responseData['code']) || $responseData['code'] !== 200) {
            $message = !empty($responseData['msg']) ? $responseData['msg'] : '请求失败';
            throw new Exception($message);
        }

        if (empty($responseData['data'])) {
            throw new Exception("响应异常");
        }

        return $responseData['data'];
    }


}