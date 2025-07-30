<?php
// +----------------------------------------------------------------------
// | AI系统管理后台（PHP版）
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | 开源版本可自由商用，可去除界面版权logo
// | gitee下载：https://gitee.com/AI系统_gitee/likeadmin
// | github下载：https://github.com/AI系统-github/likeadmin
// | 访问官网：www.localhost.com
// | 匿名公司 版权所有 拥有最终解释权
// +----------------------------------------------------------------------
// | author: 匿名开发者
// +----------------------------------------------------------------------
declare (strict_types=1);

namespace app\common\service\ai\flow;

use app\common\service\ai\ChatService;
use Exception;
use WpOrg\Requests\Requests;

/**
 * coze服务类
 */
class CozeService
{
    protected array $config = [];                        // 配置参数
    protected string $apiKey = '';                       // 接口密钥
    protected string $baseUrl = 'https://api.coze.cn';   // 请求地址
    protected bool $outputStream = true;                 // 流式输出

    protected string $messages = '';                     // 上下文内容

    protected array $headers = [];                       // 请求头值
    protected array $content = [];                       // 回复的内容
    protected array $usage = [];                         // 使用Token

    protected mixed $keyPoolServer = null;               // Key池对象

    protected string $workflowId = '';                  // 工作流ID
    protected string $botId = '';                       // 智能体ID
    protected string $appId = '';                       // appid
    protected array $flowFiles = [];

    /**
     * @notes 初始化
     * @param array $chatConfig
     * @throws Exception
     */
    public function __construct(array $chatConfig)
    {
        // 获取当前模型的渠道
        $this->config = $chatConfig;

        $this->apiKey     = $this->config['api_token'] ?? '';
        $this->botId      = $this->config['bot_id'] ?? '';
        $this->appId      = $this->config['app_id'] ?? '';
        $this->workflowId = $this->config['workflow_id'] ?? '';

        if (empty($this->apiKey)) {
            throw new Exception('请配置关联工作流token');
        }

        if (empty($this->workflowId)) {
            throw new Exception('关联工作流配置参数工作流ID异常');
        }

        // 是否流式输出 (SSE有效)
        $this->outputStream = $chatConfig['outputStream'] ?? true;

        // 设置请求头值
        $this->headers['Accept']        = 'application/json';
        $this->headers['Content-Type']  = 'application/json';
        $this->headers['Authorization'] = 'Bearer ' . trim($this->apiKey);
    }

    /**
     * @notes HTTP对话请求
     * @param string $messages
     * @return array
     * @throws Exception
     * @author fzr
     */
    public function chatHttpRequest(string $messages): array
    {
        $this->messages = $messages;
        $reqUrl         = $this->baseUrl . '/v1/workflow/run';
        $data           = [
            'parameters'  => [
                'input' => $messages
            ],
            'workflow_id' => $this->workflowId,
            'bot_id'      => $this->botId,
            'app_id'      => $this->appId,
        ];
        // 设置超时时间
        $options['timeout'] = 300;
        $response           = Requests::post($reqUrl, $this->headers, json_encode($data), $options);
        return $this->parseResponseData($response);
    }

    /**
     * @notes SSE对话请求
     */
    public function chatSseRequest(string $messages): self
    {
        ignore_user_abort(true);
        $this->messages = $messages;
        $reqUrl         = $this->baseUrl . '/v1/workflow/stream_run';

        $data = [
            'parameters'  => [
                'input' => $messages
            ],
            'workflow_id' => $this->workflowId,
            'app_id'      => $this->appId,
            'bot_id'      => $this->botId,
        ];

        $response = true;
        $buffer   = "";
        $callback = function ($ch, $data) use (&$content, &$response, &$buffer) {
            $buffer .= $data;
            $lines  = explode("\n", $buffer);
            $buffer = array_pop($lines);

            // 数据输出
            $index = -1;
            foreach ($lines as $line) {
                if (empty($line)) {
                    continue;
                }

                if (str_starts_with($line, 'data:')) {
                    $json   = substr($line, 5);
                    $result = json_decode(trim($json), true);

                    if (isset($result['error_message'])) {
                        $response = $result['error_message'];
                        return strlen($line);
                    }
                    $res = $this->parseStreamData($result);
                    if ($res) {
                        $index += 1;
                    }
                }

                if (str_starts_with($line, 'event:')) {
                    $event = substr($line, 7);
                    $id    = $index + 1;
                    if ($event == 'Done') {
                        ChatService::parseReturnSuccess(
                            'finish',
                            (string)$id,
                            '',
                            $id,
                            'flow',
                            'stop',
                            $this->outputStream
                        );
                    }
                }
            }

            if (connection_aborted()) {
                return 1;
            }

            return strlen($data);
        };

        $headers = [
            'Content-Type: application/json',
            'Authorization: Bearer ' . $this->apiKey
        ];

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $reqUrl);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_TIMEOUT, 100);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
        curl_setopt($ch, CURLOPT_WRITEFUNCTION, $callback);
        curl_exec($ch);
        curl_close($ch);

        if (true !== $response) {
            throw new Exception((string)$response);
        }

        return $this;
    }

    /**
     * @notes 获取回复内容
     * @return array|string
     * @author fzr
     */
    public function getReplyContent(): array|string
    {
        return $this->content;
    }

    /**
     * 获取消耗的tokens
     * @author fzr
     */
    public function getUsage()
    {
        $promptContent = $this->messages;
        $reply         = trim($this->content[0]);
        if (!$this->usage) {
            $promptTokens     = gpt_tokenizer_count($promptContent);
            $completionTokens = gpt_tokenizer_count($reply);
            return [
                'prompt_tokens'     => $promptTokens,
                'completion_tokens' => $completionTokens,
                'total_tokens'      => $promptTokens + $completionTokens,
                'str_length'        => mb_strlen($promptContent . $reply)
            ] ?? [];
        } else {
            $this->usage['str_length'] = mb_strlen($promptContent . trim($reply));
            return $this->usage;
        }
    }

    /**
     * @notes 解析HTTP数据
     * @param mixed $response
     * @return array
     * @throws Exception
     * @author fzr
     */
    private function parseResponseData(mixed $response): array
    {
        $responseData = json_decode($response->body, true);
        if ($responseData['code'] != 0) {
            throw new Exception($responseData['msg'] ?? '请求失败');
        }
        $promptTokens     = gpt_tokenizer_count($this->messages);
        $completionTokens = $responseData['token'] ?? 0;
        $this->usage      = [
            'prompt_tokens'     => $promptTokens,
            'completion_tokens' => $completionTokens,
            'total_tokens'      => $promptTokens + $completionTokens,
            'str_length'        => mb_strlen($this->messages . $completionTokens)
        ];
        $resData          = json_decode($responseData['data'], true);
        $content          = $resData['output_text'] ?? '';
        $this->content    = [$content];
        $file             = $resData['output_image'] ?? '';
        if (!empty($file)) {
            $this->setFlowFile(['url' => $file, 'name' => md5($file) . 'png']);
        }


        $result = [
            'id' => 'chatcmpl-' . uniqid(),
            'object' => 'chat.completion',
            'created' => time(),
            'model' => 'flow',
            'choices' => [
                [
                    'index' => 0,
                    'message' => [
                        'role' => 'assistant',
                        'content' => $content
                    ],
                    'finish_reason' => 'stop'
                ]
            ],
            'usage' => [
                'prompt_tokens' => $promptTokens,
                'completion_tokens' => $completionTokens,
                'total_tokens' => $promptTokens + $completionTokens
            ]
        ];
        return $result;
    }

    /**
     * @notes 解析SSE数据
     * @param array $data
     * @author fzr
     */
    private function parseStreamData($data): bool
    {
        $chatEvent = 'chat';
        if (empty($data['content'])) {
            return false;
        }

        $streamContent      = json_decode($data['content'], true);
        $streamContentText  = $streamContent['output_text'] ?? '';
        $streamContentImage = $streamContent['output_image'] ?? '';

        if (!empty($streamContentText)) {
            $index                 = $data['node_seq_id'];
            $contents              = $this->content[$index] ?? '';
            $this->content[$index] = $contents . $streamContentText;
            ChatService::parseReturnSuccess(
                $chatEvent,
                $index,
                $streamContentText,
                (int)$index,
                'flow',
                '',
                $this->outputStream
            );
        }

        if (!empty($streamContentImage)) {
            $imageData = [
                'url' => $streamContentImage, 'name' => md5($streamContentImage) . '.png',
            ];
            $this->setFlowFile($imageData);
        }
        return true;
    }


    public function setFlowFile($file)
    {
        $this->flowFiles[] = $file;
    }

    public function getFlowFiles()
    {
        return $this->flowFiles;
    }

}
