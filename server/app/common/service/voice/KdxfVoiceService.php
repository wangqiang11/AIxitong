<?php
// +----------------------------------------------------------------------
// | AI系统管理后台（PHP版）
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | 开源版本可自由商用，可去除界面版权logo
// | //
// | github下载：/likeadmin
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
use IFlytek\Xfyun\Speech\LfasrClient;
use IFlytek\Xfyun\Speech\TtsClient;
use WebSocket\Client;

class KdxfVoiceService
{
    /**
     * @notes 获取鉴权Url
     * @param $apiKeyArr
     * @return string
     * @author fzr
     */
    private function assembleAuthUrl($apiKeyArr): string
    {
        // 基础的参数
        $baseUrl   = 'wss://cbm01.cn-huabei-1.xf-yun.com/v1/private/mcd9m97e6';
        $apikey    = $apiKeyArr['key'];
        $apiSecret = $apiKeyArr['secret'];

        # 拼接字符串
        $ul = parse_url($baseUrl);
        $rfc1123For = gmdate('D, d M Y H:i:s \G\M\T', time());
        $signString = ['host: ' . $ul['host'], 'date: ' . $rfc1123For, 'GET' . ' ' . $ul['path'] . ' HTTP/1.1'];
        $sign = implode("\n", $signString);

        // 对签名字符串进行HMAC-SHA256加密,得到签名结果
        $signatureSha = hash_hmac('sha256', $sign, $apiSecret,true);
        $signatureShaBase64 = base64_encode($signatureSha);

        // 将API密钥、算法、头部信息和签名结果拼接成一个授权URL
        $authUrl = "api_key=\"$apikey\", algorithm=\"hmac-sha256\", headers=\"host date request-line\", signature=\"$signatureShaBase64\"";
        return $baseUrl . '?' . http_build_query([
                'host' => $ul['host'],
                'date' => $rfc1123For,
                'authorization' => base64_encode($authUrl),
            ]);
    }

    /**
     * @notes 语音合成
     * @param array $channelConfig
     * @param $filename
     * @param string $content
     * @return void
     * @throws Exception
     * @author fzr
     */
    public function voiceGenerate(array $channelConfig, $filename, string $content): void
    {
        // 文档: https://www.xfyun.cn/doc/spark/%E8%B6%85%E6%8B%9F%E2%BC%88%E5%90%88%E6%88%90%E5%8D%8F%E8%AE%AE.htm
        // 获取密钥
        $keyPoolCache = (new KeyPoolCache(VoiceEnum::KDXF, PoolEnum::TYPE_VOICE_OUTPUT, 'kdxf'));
        $apiKey = $keyPoolCache->getKey();
        if (empty($apiKey)) {
            throw new Exception('请在后台配置key');
        }

        // 请求参数
        $body = [
            'header' => [
                'app_id' => $apiKey['appid'],
                'status' => 0
            ],
            'parameter' => [
                'oral' => [
                    'spark_assist' => 1,
                    'oral_level'   => 'mid'
                ],
                'tts' => [
                    'vcn'   => $channelConfig['pronounce'],
                    'speed' => (int)$channelConfig['speed'],
                    'audio' => [
                        'encoding'    => 'lame',
                        'sample_rate' => 16000,
                        'channels'    => 1,
                        'bit_depth'   => 16,
                        'frame_size'  => 0
                    ],
                    'pybuf' => [
                        'encoding' => 'utf8',
                        'compress' => 'raw',
                        'format'   => 'plain'
                    ]
                ]
            ],
            'payload' => [
                'text' => [
                    'encoding' => 'utf8',
                    'compress' => 'raw',
                    'format'   => 'json',
                    'status'   => 2,
                    'seq'      => 0,
                    'text'     => base64_encode($content)
                ]
            ]
        ];

        // 发送Websocket
        $websocket = new Client($this->assembleAuthUrl($apiKey), ['timeout'=>200]);
        try {
            $websocket->send(json_encode($body));
            while (true) {
                $response = $websocket->receive();
                $resp = json_decode($response, true);

                $code = $resp['header']['code']??0;

                if ($code !== 0) {
                    // 合成出错
                    throw new Exception($code.': '.$resp['header']['message']??'合成失败');
                } else {
                    $payload = $resp['payload'] ?? null;
                    $status = $resp['header']['status']??2;

                    // 合成完成
                    if ($status === 2) {
                        $websocket->close();
                        break;
                    }

                    // 写入文件
                    if ($payload) {
                        $audio = $payload['audio'] ?? null;
                        if ($audio) {
                            $audioDecoded = base64_decode($audio['audio']);
                            $file = fopen($filename, 'ab');
                            if ($file) {
                                fwrite($file, $audioDecoded);
                                fclose($file);
                            } else {
                                throw new Exception('语音合成无法打开文件写入');
                            }
                        }
                    }
                }
            }
        } catch (Exception $e) {
            $keyPoolCache->takeDownKey($e->getMessage(), '');
            throw new Exception($e->getMessage());
        } finally {
            $websocket->close();
        }
    }

    /**
     * @notes 语音转写
     * @param string $fileUrl
     * @return string
     * @throws Exception
     * @author fzr
     */
    public function voiceTransfer(string $fileUrl): string
    {
        $keyPoolCache = (new KeyPoolCache(VoiceEnum::KDXF,PoolEnum::TYPE_VOICE_INPUT, 'kdxf'));
        try {
            $apiKey = $keyPoolCache->getKey();
            if (empty($apiKey)){
                throw new Exception('请在后台配置key');
            }

            $client = new LfasrClient($apiKey['appid'], $apiKey['key']);
            $taskId = $client->combineUpload($fileUrl);
            do {
                $progress = json_decode($client->getProgress($taskId)->getBody()->getContents(), true);
                if ($progress['ok'] !== 0) {
                    throw new Exception('音频识别失败:'.$progress['failed']);
                }
                $data = json_decode($progress['data'], true);
                if (9 == $data['status']) {
                    break;
                }

            } while (true);

            $result = $client->getResult($taskId)->getBody()->getContents();
            $result = json_decode($result,true);
            $transferData = json_decode($result['data'],true);
            $transferText = '';
            foreach ($transferData as $data) {
                $transferText .= $data['onebest'];
            }
            return $transferText;
        } catch (Exception $e) {
            $errorData = json_decode($e->getMessage(),true);
            $message = $e->getMessage();
            if(is_array($errorData)){
                $message = $errorData['message'] ?? '';
                $keyPoolCache->takeDownKey($errorData['message'] ?? '', '');
            }
            throw new Exception($message);
        }
    }

    /**
     * @notes 语音合成 (这是旧的 已被弃用 2024年04月09日)
     * @param array $channelConfig
     * @param string $content
     * @return string
     * @throws Exception
     * @author fzr
     */
    private function __voiceGenerate(array $channelConfig, string $content): string
    {
        $keyPoolCache = (new KeyPoolCache(VoiceEnum::KDXF,PoolEnum::TYPE_VOICE_OUTPUT, 'kdxf'));
        try {
            $apiKey = $keyPoolCache->getKey();
            if (empty($apiKey)) {
                throw new Exception('请在后台配置key');
            }

            // 参数
            $client = new TtsClient($apiKey['appid'], $apiKey['key'], $apiKey['secret'], [
                'aue'   => 'lame',
                'vcn'   => $channelConfig['pronounce'],
                'speed' => (int)$channelConfig['speed'],
            ]);

            // 返回格式为音频文件的二进制数组,可以直接通过file_put_contents存入本地文件
            return $client->request($content)->getBody()->getContents();
        } catch (Exception $e) {
            $errorData = json_decode($e->getMessage(),true);
            $message = $e->getMessage();
            if(is_array($errorData)){
                $message = $errorData['message'] ?? '';
                $keyPoolCache->takeDownKey($errorData['message'] ?? '', '');
            }
            throw new Exception($message);
        }
    }
}