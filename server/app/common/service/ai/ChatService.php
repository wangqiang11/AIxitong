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
declare (strict_types = 1);

namespace app\common\service\ai;

use app\common\service\ai\chat\AzureService;
use app\common\service\ai\chat\BaiduService;
use app\common\service\ai\chat\DoubaoService;
use app\common\service\ai\chat\MiniMaxService;
use app\common\service\ai\chat\OllamaService;
use app\common\service\ai\chat\OpenaiService;
use app\common\service\ai\chat\QwenService;
use app\common\service\ai\chat\SystemService;
use app\common\service\ai\chat\XunfeiService;
use app\common\service\ai\chat\ZhipuService;
use Exception;

/**
 * AI统一逻辑服务类
 */
class ChatService
{
    /**
     * @notes AI搜索流输出
     * @param string $cardType
     * @param string $target
     * @param string $type
     * @param array|string $data
     * @return void
     */
    public static function AiSearchOutput(string $cardType, string $target, string $type='', array|string $data=''): void
    {
        echo "data: ". json_encode([
                'card_type' => $cardType,
                'target'    => $target,
                'type'      => $type,
                'data'      => $data
            ], JSON_UNESCAPED_UNICODE) . "\n\n";

        ob_flush();
        flush();
    }

    /**
     * @notes 返回成功数据
     * @param string $event
     * @param string $id
     * @param string $data
     * @param int $index
     * @param string $model
     * @param string|null $finish
     * @param bool $outputStream
     * @param array|null $extend
     * @return array
     */
    public static function parseReturnSuccess(string $event, string $id, string $data, int $index, string $model, mixed $finish='', bool $outputStream = true, array $extend=null): array
    {
        $chatMessage = [
            'id'      => $id,
            'object'  => $event,
            'created' => time(),
            'model'   => $model,
            'choices' => [
                [
                    'index' => $index,
                    'delta' => [
                        'role'    => 'assistant',
                        'content' => $data,
                    ],
                    'finish_reason' => $finish
                ]
            ]
        ]??[];

        if ($extend !== null) {
            $chatMessage['usage']  = [
                'prompt_tokens'     => intval($extend['prompt_tokens']??1),
                'completion_tokens' => intval($extend['completion_tokens']??1),
                'total_tokens'      => intval($extend['total_tokens']??1)
            ];
            $chatMessage['choices'][0]['message'] = $chatMessage['choices'][0]['delta'];
            unset($chatMessage['choices'][0]['delta']);
            return $chatMessage;
        } else {
            if ($outputStream) {
                $jsonChatMessage = json_encode($chatMessage, JSON_UNESCAPED_UNICODE);
                echo "data:" . $jsonChatMessage . "\n\n";
                ob_flush();
                flush();
            }
        }

        return [];
    }

    /**
     * @notes 返回错误数据
     * @param bool $isStream
     * @param string $message
     * @param int|string $code
     * @param string $model
     * @param string|null $type
     * @param array|null $param
     * @return array
     * @author fzr
     */
    public static function parseReturnError(bool $isStream, string $message, mixed $code=0, string $model='', string $type=null, mixed $param=null): array
    {
        $type = $type ?? 'invalid_request_error';
        $chatMessage = [
            'error' => [
                'model'   => $model,
                'message' => $message,
                'type'    => $type,
                'code'    => $code,
                'param'   => $param
            ]
        ]??[];

        if (!$isStream) {
            return $chatMessage;
        } else {
            $jsonChatMessage = json_encode($chatMessage, JSON_UNESCAPED_UNICODE);
            echo "data:" . $jsonChatMessage . "\n\n";
            ob_flush();
            flush();
        }
        return [];
    }

    /**
     * @notes 生成相关的问题
     * @param $chatService
     * @param array $messages
     * @param string $reply
     * @param int $num
     * @return array
     */
    public static function makeQuestion($chatService, array $messages, string $reply, int $num): array
    {
        try {
            $prompt = "结合最后一轮回复内容推测用户下一轮最可能输入的内容:
                - 用户输入建议应与上一轮回复紧密相关，但不要与前文已经提问或者回答过的内容重复。
                - 用户输入建议应匹配用户在对话中的角色和对话类型。
                - 最多提出 $num 个问题建议。
                - 仅按要求返回,其它内容不要返回。
                
                请严格遵守格式规则：
                以JSON格式返回问题：[“问题1”、“问题2”、“疑问3”]。您的输出：
                ";

            $messages[] = ['role' => 'assistant', 'content' => $reply];
            $messages[] = ['role' => 'user', 'content' => $prompt];
            $chatService->chatHttpRequest($messages)[0] ?? '';
            $content = $chatService->getReplyContent()[0];

            $char = '```';
            $content = trim(trim($content, "\n"), $char.'json');
            $content = trim(trim($content, $char), "\n");
            return json_decode(trim($content), true)??[];
//
//            dump($result);exit;
//
////            $content = .trim().trim('```').trim("\n");
//            dump($content);exit;
//            preg_match_all('/^\d+\.\s+(.+)$/m', $content, $matches);
//
//            $i = 0;
//            $data = [];
//            foreach ($matches[1] as $text) {
//                if ($text and $i < $num) {
//                    $data[] = trim(trim($text), "\n");
//                    $i++;
//                }
//            }
//
//            return $data;
        } catch (Exception) {
            return [];
        }
    }


    /**
     * @notes AI实咧工厂
     * @param string $channel
     * @param array $configs
     * @return mixed
     * @throws Exception
     */
    public static function AIChannelFactory(string $channel, array $configs): mixed
    {
        try {
            return match ($channel) {
                'openai',
                'baichuan' => (new OpenaiService($configs)),
                'xunfei'   => (new XunfeiService($configs)),
                'zhipu'    => (new ZhipuService($configs)),
                'baidu'    => (new BaiduService($configs)),
                'qwen'     => (new QwenService($configs)),
                'azure'    => (new AzureService($configs)),
                'doubao'   => (new DoubaoService($configs)),
                'ollama'   => (new OllamaService($configs)),
                'minimax'  => (new MiniMaxService($configs)),
                'system'   => (new SystemService($configs)),
                default    => throw new Exception('模型配置错误了: ' . $channel)
            };
        } catch (Exception $e) {
            throw new  Exception($e->getMessage());
        }
    }
}