<?php

namespace app\common\service\ai;

use app\common\cache\KeyPoolCache;
use app\common\enum\ChatEnum;
use app\common\model\chat\Models;
use Exception;

class RankerService
{
    protected array $headers = [];
    protected string $baseUrl = '';
    protected string $apikey = '';
    protected string $model = '';

    /**
     * @notes 初始化
     * @param $models
     * @throws Exception
     */
    public function __construct($models)
    {
        $this->headers = [
            'Authorization: Bearer ',
            'Content-Type: application/json'
        ];

        $rankerModel = Models::checkModels($models);
        $this->model = $rankerModel['model'];
        $this->baseUrl = $rankerModel['agency_api'];
        if (empty($rankerModel['agency_api'])) {
            throw new Exception('重排模型尚未配置代理地址');
        }

        if ($rankerModel['check_key']) {
            $cacheType = ChatEnum::MODEL_TYPE_RANKING;
            $keyPoolCache = new KeyPoolCache($rankerModel['model_id'], $cacheType, $rankerModel['channel']);
            $this->apikey = $keyPoolCache->getKey();
            if (!$this->apikey) {
                throw new Exception('重排模型尚未填写apikey');
            }
        }
    }

    /**
     * @param string $query
     * @param array $documents
     * @return array
     * @throws Exception
     */
    public function send(string $query, array $documents): array
    {
        try {
            $result = self::curlPost($this->baseUrl . '/rerank',
                [
                    'model' => $this->model,
                    'query' => $query,
                    'documents' => $documents
                ],
                $this->headers
            );

            $response = json_decode($result, true);
            if (!empty($response['object']) and isset($response['messages'])) {
                $code = $response['code'];
                $type = $response['type'];
                $message = $response['message'];
                throw new Exception("$code: $type: $message");
            }

            return $response;
        } catch (Exception $e) {
            throw new Exception($e->getMessage());
        }
    }

    /**
     * @notes 发起排序(并且自动按分数过滤数据)
     * @param string $query
     * @param array $dataList
     * @param float $similar
     * @return array
     * @throws Exception
     */
    public function sendAuto(string $query, array $dataList, float $similar): array
    {
        try {
            $documents = [];
            foreach ($dataList as $item) {
                $texts = $item['question'] . $item['answer'];
                $texts = preg_replace('/[\W_]+/u', '', $texts);
                if (mb_strlen($texts, 'UTF-8') > 4000) {
                    $texts = mb_substr($texts, 0, 4000, 'UTF-8');;
                }
                $documents[] = $texts;
            }

            // 发起排序
            $reResults = $this->send($query, $documents);

            // 合并数据
            $mergeResult = [];
            foreach ($reResults['results'] as $item) {
                if ($item['relevance_score'] >= $similar) {
                    $data = $dataList[$item['index']];
                    $data['rerank_score'] = number_format($item['relevance_score'], 5);
                    $mergeResult[] = $data;
                }
            }

            // 分数从高到低排序
            $scores = array_column($mergeResult, 'rerank_score');
            array_multisort($scores, SORT_DESC, $mergeResult);

            // 返回结果
            return $mergeResult;
        } catch (Exception $e) {
            throw new Exception($e->getMessage());
        }
    }

    /**
     * @notes 发起POST请求
     * @param string $url
     * @param array $data
     * @param array $header
     * @return bool|string
     * @throws @Exception
     * @author fzr
     */
    public static function curlPost(string $url, array $data, array $header = []): bool|string
    {
        $headers  = [
            'Accept: application/json',
            'Content-Type: application/json'
        ];
        $headers = array_merge($headers, $header);

        $curl = curl_init();
        curl_setopt($curl, CURLOPT_POST, 1);
        curl_setopt($curl, CURLOPT_URL, $url);
        curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, 0);
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, 0);
        curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($curl, CURLOPT_TIMEOUT, 50);
        curl_setopt($curl, CURLOPT_HEADER, 0);
        curl_setopt($curl, CURLOPT_POSTFIELDS, json_encode($data));
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);

        // 执行CURL请求
        $response = curl_exec($curl);

        // 检查是否有错误发生
        if (curl_errno($curl)) {
            $error = curl_error($curl);
            throw new Exception($error);
        }

        // 关闭 cURL 句柄
        curl_close($curl);
        return $response;
    }
}