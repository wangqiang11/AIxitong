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

namespace app\common\service\voice;

use app\common\cache\KeyPoolCache;
use app\common\enum\PoolEnum;
use app\common\enum\VoiceEnum;
use Exception;
use think\facade\Log;
use WpOrg\Requests\Requests;

class DoubaoVoiceService
{

    /**
     * @notes 语音合成
     * @param int $userId
     * @param string $saveFileDir
     * @param string $content
     * @throws Exception
     * @author mjf
     * @date 2024/12/17 11:56
     */
    public function voiceGenerate(array $channelConfig, int $userId, string $saveFileDir, string $content): void
    {
        $keyPoolCache = (new KeyPoolCache(VoiceEnum::DOUBAO, PoolEnum::TYPE_VOICE_OUTPUT, VoiceEnum::DOUBAO));
        $keyData      = $keyPoolCache->getKey();
        if (empty($keyData)) {
            throw new Exception('请在后台配置key');
        }

        // 请求参数
        $data = [
            "app"     => [
                "appid"   => $keyData['appid'],
                "token"   => "token",
                "cluster" => "volcano_tts",
            ],
            "user"    => [
                "uid" => md5($userId),
            ],
            "audio"   => [
                "voice_type"  => $channelConfig['pronounce'] ?? "zh_male_M392_conversation_wvae_bigtts",
                "encoding"    => "mp3",
                "speed_ratio" => $channelConfig['speed'] ?? 1.0,
            ],
            "request" => [
                "reqid"     => uniqid() . time(),
                "text"      => $content,
                "operation" => "query",
            ],
        ];

        $headers = [
            'Content-Type'  => 'application/json; charset=utf-8',
            'Authorization' => 'Bearer; ' . $keyData['key'],
        ];
        $baseUrl = 'https://openspeech.bytedance.com/api/v1/tts';

        $options = [
            'timeout' => 60,
            'verify'  => false,
        ];

        $response     = Requests::post($baseUrl, $headers, json_encode($data), $options);
        $responseData = json_decode($response->body, true);
        if ($responseData['code'] != 3000) {
            $keyPoolCache->takeDownKey($responseData['message'] ?? '', $baseUrl);
            throw new Exception($responseData['message'] ?: json_encode($responseData, true));
        }

        file_put_contents($saveFileDir, base64_decode($responseData['data']));
    }

    /**
     * @notes 语音转写
     * @param int $userId
     * @param string $fileUrl
     * @return string
     * @throws Exception
     * @author mjf
     * @date 2024/12/17 18:13
     */
    public function voiceTransfer(int $userId, string $fileUrl): string
    {
        $keyPoolCache = (new KeyPoolCache(VoiceEnum::DOUBAO, PoolEnum::TYPE_VOICE_INPUT, VoiceEnum::DOUBAO));
        $keyData      = $keyPoolCache->getKey();
        if (empty($keyData)) {
            throw new Exception('请在后台配置key');
        }

        try {
            // 提交任务
            $requestId = $this->voiceTransferSubmit($userId, $fileUrl, $keyData);

            // 任务查询
            $endTime = time() + 60;
            while (time() < $endTime) {
                $query = $this->voiceTransferQuery($keyData, $requestId);
                if (empty($query)) {
                    continue;
                }
                return $query;
            }

            throw new Exception('音频识别失败-requestId=' . $requestId);

        } catch (Exception $e) {
            $errorData = json_decode($e->getMessage(), true);
            $message   = $e->getMessage();
            if (is_array($errorData)) {
                $message = $errorData['message'] ?? '';
                $keyPoolCache->takeDownKey($errorData['message'] ?? '', '');
            }
            Log::write('语音转写错误' . $e->getMessage() . $e->getFile() . $e->getLine());
            throw new Exception($message);
        }
    }

    /**
     * @notes 语音识别提交
     * @param string $fileUrl
     * @param array $keyData
     * @return string
     * @throws Exception
     * @author mjf
     * @date 2024/12/17 18:03
     */
    public function voiceTransferSubmit(int $userId, string $fileUrl, array $keyData): string
    {
        $requestId = uniqid() . time();
        $url       = 'https://openspeech.bytedance.com/api/v3/auc/bigmodel/submit';
        $headers   = [
            'X-Api-App-Key'     => $keyData['appid'],
            'X-Api-Access-Key'  => $keyData['key'],
            'X-Api-Resource-Id' => 'volc.bigasr.auc',
            'X-Api-Request-Id'  => $requestId,
            'X-Api-Sequence'    => -1,
        ];
        $data      = [
            "user"    => [
                "uid" => md5($userId),
            ],
            "audio"   => [
                "format" => "mp3",
                "url"    => $fileUrl
            ],
            "request" => [
                "model_name" => "bigmodel",
                "enable_itn" => true
            ]
        ];

        $options = [
            'timeout' => 60,
            'verify'  => false,
        ];

        $response = Requests::post($url, $headers, json_encode($data), $options);
        if ($response->headers['X-Api-Status-Code'] != 20000000) {
            $errMsg = $response->headers['X-Api-Status-Message'] ?? '音频识别失败';
            throw new Exception($errMsg);
        }

        return $requestId;
    }

    /**
     * @notes 语音识别查询
     * @param array $keyData
     * @param string $requestId
     * @return string
     * @throws Exception
     * @author mjf
     * @date 2024/12/17 18:03
     */
    public function voiceTransferQuery(array $keyData, string $requestId): string
    {
        $url      = 'https://openspeech.bytedance.com/api/v3/auc/bigmodel/query';
        $headers  = [
            'X-Api-App-Key'     => $keyData['appid'],
            'X-Api-Access-Key'  => $keyData['key'],
            'X-Api-Resource-Id' => 'volc.bigasr.auc',
            'X-Api-Request-Id'  => $requestId,
        ];
        $options  = [
            'timeout' => 60,
            'verify'  => false,
        ];
        $response = Requests::post($url, $headers, '{}', $options);

        $codeArr = [
            20000000, 20000001, 20000002
        ];

        if (isset($response->headers['x-api-status-code']) && !in_array($response->headers['x-api-status-code'], $codeArr)) {
            $errMsg = $response->headers['x-api-message'] ?? '失败';
            if (str_contains($errMsg, 'Normal silence audio')) {
                throw new Exception('静音音频无法识别');
            }
            throw new Exception($errMsg);
        }

        $response = json_decode($response->body, true);

        return $response['result']['text'] ?? '';
    }


}