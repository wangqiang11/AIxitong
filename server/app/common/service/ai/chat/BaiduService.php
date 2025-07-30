<?php
// +----------------------------------------------------------------------
// | AI系统管理后台（PHP版）
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | 开源版本可自由商用，可去除界面版权logo
// | gitee下载：https://gitee.com/AI系统_gitee/likeadmin
// | //
// | 访问官网：www.localhost.com
// | 匿名公司 版权所有 拥有最终解释权
// +----------------------------------------------------------------------
// | author: 匿名开发者
// +----------------------------------------------------------------------
declare (strict_types = 1);

namespace app\common\service\ai\chat;

use app\common\cache\KeyPoolCache;
use app\common\enum\ChatEnum;
use app\common\service\ai\ChatService;
use Exception;
use think\facade\Log;
use WpOrg\Requests\Requests;

/**
 * 文心一言服务类
 */
class BaiduService
{
    protected array $config        = [];                             // 配置参数
    protected string $channel      = 'baidu';                        // 渠道模型
    protected string $model        = '';                             // 对话模型
    protected string $appId        = '';                             // 应用ID
    protected string $apiKey       = '';                             // 接口密钥
    protected string $baseUrl      = 'https://qianfan.baidubce.com'; // 请求地址
    protected bool $outputStream   = true;                           // 流式输出

    protected int $contextNum      = 0;                              // 上下文数
    protected float $temperature   = 0.8;                            // 词汇属性: [默认0.8, 范围(0, 1.0), 不能为0]
    protected float $penaltyScore  = 1.0;                            // 减少重复生成的现象: [1.0, 2.0]
    protected bool $disableSearch  = false;                          // 是否强制关闭实时搜索功能
    protected array $messages      = [];                             // 上下文

    protected string $reasoning    = '';                             // 思考的过程
    protected array $content       = [];                             // 回复的内容
    protected array $usage         = [];                             // token使用量

    protected mixed $keyPoolServer = null;                           // Key池对象

    /**
     * @notes 初始化
     * @param array $chatConfig
     * @throws Exception
     * @author fzr
     */
    public function __construct(array $chatConfig)
    {
        // 当前模型渠道
        $this->channel = $chatConfig['channel'];
        $this->config  = $chatConfig;

        // 是否流式输出 (SSE有效)
        $this->outputStream = $chatConfig['outputStream'] ?? true;

        // 设置基础参数
        $this->model        = trim($this->config['model']);
        $this->contextNum   = intval($this->config['context_num']);
        $this->temperature  = floatval($this->config['temperature']??0.95);
        $this->penaltyScore = floatval($this->config['penalty_score']??1.0);
        $this->disableSearch = boolval($this->config['disableSearch']??0);

        // 参数兼容处理
        if ($this->temperature <= 0) { $this->temperature = 0.1; }
        if ($this->temperature >= 1) { $this->temperature = 1.0; }

        // 设置请求域名
        $this->baseUrl .= '/v2/chat/completions';

        // 获取密钥Key
        $this->keyPoolServer = (new KeyPoolCache($chatConfig['model_id'], ChatEnum::MODEL_TYPE_CHAT, $this->channel));
        $keyConfig = $this->keyPoolServer->getKey();
        if (empty($keyConfig)) {
            throw new Exception('请在后台配置key');
        }

        // 获取密钥
        $this->appId    = $keyConfig['appid'];
        $this->apiKey    = $keyConfig['key'];
    }

    /**
     * @notes HTTP对话请求
     * @param array $messages
     * @return array
     * @author fzr
     */
    public function chatHttpRequest(array $messages): array
    {
        $this->messages = $messages;
        $data = [
            'model'          => $this->model,
            'messages'       => $messages,
            'temperature'    => $this->temperature,
            'penalty_score'  => $this->penaltyScore,
            'disable_search' => $this->disableSearch
        ];

        if ($messages[0]['role'] == 'system') {
            if (count($messages) <= 1) {
                $data['messages'] = ['role'=>'user', 'content'=>$messages[0]['content']];
            } else {
                $data['system'] = $messages[0]['content'];
                array_shift($data['messages']);
            }
        }

        $headers  = [
            'Content-Type' => 'application/json',
            'Authorization' => 'Bearer ' . $this->apiKey,
            'appid' =>   $this->appId
        ];

        $options['timeout'] = 300;
        $response = Requests::post($this->baseUrl, $headers, json_encode($data), $options);
        return $this->parseResponseData($response);
    }

    /**
     * @notes SSE对话请求
     * @param array $messages
     * @return BaiduService
     * @throws Exception
     * @author fzr
     */
    public function chatSseRequest(array $messages): self
    {
        ignore_user_abort(true);
        $this->messages = $messages;
        $data = [
            'model'       => $this->model,
            'stream'      => true,
            'messages'    => $messages,
            'temperature' => $this->temperature,
            'penalty_score'  => $this->penaltyScore,
            'disable_search' => $this->disableSearch
        ];

        if ($messages[0]['role'] == 'system') {
            if (count($messages) <= 1) {
                $data['messages'] = ['role'=>'user', 'content'=>$messages[0]['content']];
            } else {
                $data['system'] = $messages[0]['content']??'';
                array_shift($data['messages']);
            }
        }

        $response = true;
        $callback = function ($ch, $data) use (&$content,&$response,&$total){
            $result = @json_decode($data);
            if (isset($result->error)) {
                $error = $this->keyPoolServer->takeDownKey($result->error->message, $this->baseUrl);
                $response = $result->error->message ? $error : $result->error->type;
                return 1;
            }

            // 客户端没断开
            if (!connection_aborted() and $response === true) {
                $this->parseStreamData($data);
                return strlen($data);
            } else {
                return 1;
            }
        };

        $headers  = [
            'Content-Type: application/json',
            'Authorization: Bearer ' . $this->apiKey,
            'appid: ' . $this->appId
        ];

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $this->baseUrl);
        curl_setopt($ch, CURLOPT_TIMEOUT,300);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
        curl_setopt($ch, CURLOPT_WRITEFUNCTION, $callback);
        curl_exec($ch);
        curl_close($ch);

        if (true !== $response) {
            $response = $this->handleError($response);
            throw new Exception((string)$response);
        }
        return $this;
    }

    /**
     * @notes 获取回复内容
     * @param string $type
     * @return array|string
     * @author fzr
     */
    public function getReplyContent(string $type = 'content'): array|string
    {
        // 思考过程
        if ($type == 'reasoning') {
            return $this->reasoning;
        }
        // 答复内容
        return $this->content;
    }

    /**
     * 获取消耗的tokens
     * @author fzr
     */
    public function getUsage(): array
    {
        $promptContent = '';
        foreach ($this->messages as $item) {
            $promptContent .= $item['content'];
        }

        $reply = $this->reasoning . trim($this->content[0]);
        if (!$this->usage) {
            $completionTokens = gpt_tokenizer_count($reply);
            $promptTokens     = gpt_tokenizer_count($promptContent);
            return [
                'prompt_tokens'     => $promptTokens,
                'completion_tokens' => $completionTokens,
                'total_tokens'      => $promptTokens + $completionTokens,
                'str_length'        => mb_strlen($promptContent . $reply)
            ] ?? [];
        } else {
            $this->usage['str_length'] = mb_strlen($promptContent . $reply);
            return $this->usage;
        }
    }

    /**
     * @notes 解析HTTP数据
     * @param $response
     * @return array
     * @author fzr
     */
    private function parseResponseData($response): array
    {
        $responseData = json_decode($response->body,true);
        if (isset($responseData['error'])) {
            $message = $responseData['error']['message'];
            $code    = $responseData['error']['code'];
            $type    = $responseData['error']['type'];
            $error = $this->keyPoolServer->takeDownKey($message, $this->baseUrl);
            $error = $this->handleError($error);
            return ChatService::parseReturnError(false, $error, $code, $this->model, $type);
        }

        $this->usage   = $responseData['usage'] ?? [];
        $this->content = [$responseData['choices'][0]['message']['content']];
        return $responseData;
    }

    /**
     * @notes 解析SSE数据
     * @param $stream
     * @author fzr
     */
    private function parseStreamData($stream): void
    {
        $dataLists = explode("\n\n", $stream);
        $chatEvent = 'chat';
        foreach ($dataLists as $data){
            if(!str_contains($data, 'data:')){
                continue;
            }

            if(str_contains($data, trim('data: [DONE]'))){
                continue;
            }

            $data = str_replace("data: ", "", $data);
            $data = json_decode($data, true);

            // 解析到数据是空的、可能是数据丢失问题
            if (empty($data) || !is_array($data)) {
                Log::write("数据异常: ".$stream);
                continue;
            }

            $id            = $data['id'] ?? '';
            $index         = $data['choices'][0]['index'] ?? 0;
            $finishReason  = $data['choices'][0]['finish_reason'] ?? '';
            $streamContent = $data['choices'][0]['delta']['content'] ?? '';

            // 思考链条
            if (isset($data['choices'][0]['delta']['reasoning_content'])) {
                $streamContent = $data['choices'][0]['delta']['reasoning_content'];
                $chatEvent = 'reasoning';
            }

            // 结束标识
            if('normal' == $finishReason){
                $chatEvent = 'finish';
            }else{
                if (!isset($data['choices'][0]['delta']['content']) and
                    !isset($data['choices'][0]['delta']['reasoning_content']))
                {
                    Log::write('数据可能丢失了:'.$stream);
                    continue;
                }
                if ($chatEvent != 'reasoning') {
                    $contents = $this->content[$index] ?? '';
                    $this->content[$index] = $contents . $streamContent;
                } else {
                    $this->reasoning .= $streamContent;
                }
            }

            // 给前端发送流数据
            ChatService::parseReturnSuccess(
                $chatEvent,
                $id,
                $streamContent,
                $index,
                $this->model,
                $finishReason,
                $this->outputStream
            );
        }
    }

    private function handleError($response)
    {
        if ($response == 'invalid_iam_token') {
            $response = 'ApiKey无效,请重新正确配置: ' . $response;
        } elseif ($response == 'No permission to use the model') {
            $response = '无权使用该模型: ' . $response;
        } elseif ($response == 'No permission to use the appId') {
            $response = '没有使用appId的权限: ' . $response;
        } elseif ($response == 'Rate limit reached for Cluster RPM') {
            $response = 'API接口RPM速率限制(请稍后再试): ' . $response;
        }
        return $response;
    }
}