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

namespace app\common\service;

use aip\AipContentCensor;
use app\common\enum\ChatRecordEnum;
use app\common\enum\draw\DrawRecordEnum;
use app\common\model\SensitiveWord;
use DfaFilter\SensitiveHelper;
use Exception;

/**
 * 敏感词服务类
 */
class WordsService
{
    /**
     * @notes 敏感词验证 (本地)
     * @param string $content
     * @throws @\DfaFilter\Exceptions\PdsBusinessException
     * @throws @\DfaFilter\Exceptions\PdsSystemException
     * @author fzr
     */
    public static function sensitive(string $content): void
    {
        // 内置敏感词
        $isSensitive = ConfigService::get('chat', 'is_sensitive', 1);
        // 系统敏感词
        $isSensitiveSystem = ConfigService::get('chat', 'is_sensitive_system', 1);

        $systemSensitiveArr = [];
        if ($isSensitiveSystem) {
            // 获取数据库敏感词
            $sensitiveWord = (new SensitiveWord())->where(['status' => 1])->column('word');
            // 一条数据可能含有多个敏感词, '；' 分隔开
            foreach ($sensitiveWord as $sensitiveWordValue) {
                $systemSensitiveArr = array_merge($systemSensitiveArr, explode('；', $sensitiveWordValue));
            }
        }

        $fileSensitiveArr = [];
        if ($isSensitive) {
            // 读取敏感词文件, 加密的密钥
            $file = fopen("../extend/sensitive_key.bin", "rb");
            $key  = fread($file, 32);
            $iv   = fread($file, 16);
            fclose($file);
            // 读取加密的数据
            $ciphertext = file_get_contents("../extend/sensitive_data.bin");
            // 使用 CBC 模式解密数据
            $plaintext = openssl_decrypt($ciphertext, 'aes-256-cbc', $key, OPENSSL_RAW_DATA, $iv);
            // 过滤敏感词
            $fileSensitiveArr = explode(PHP_EOL, trim($plaintext));
        }

        if (empty($systemSensitiveArr) && empty($fileSensitiveArr)) {
            return;
        }

        $sensitiveWord      = array_merge($fileSensitiveArr, $systemSensitiveArr);
        $sensitiveWordArr   = array_chunk($sensitiveWord, 20000);//拆分数组
        $sensitiveWordGroup = [];

        foreach ($sensitiveWordArr as $sensitiveWordArrValue) {
            $handle             = SensitiveHelper::init()->setTree($sensitiveWordArrValue);
            $badWordList        = $handle->getBadWord($content);// 获取内容中所有的敏感词
            $sensitiveWordGroup = array_merge($sensitiveWordGroup, $badWordList);
        }

        $sensitiveWordGroup = array_unique($sensitiveWordGroup);
        if (!empty($sensitiveWordGroup)) {
            throw new Exception('提问存在敏感词：' . implode(',', $sensitiveWordGroup));
        }
    }

    /**
     * @notes 问题审核 (百度)
     * @param string $content
     * @throws Exception
     * @author fzr
     */
    public static function askCensor(string $content):void
    {
        $ask_open = ConfigService::get('content_censor','ask_open',0);
        if (!$ask_open) {
            return ;
        }

        self::contentCensor($content);
    }

    /**
     * @notes 绘画审核
     * @param string $content
     * @param int $type
     * @throws Exception
     * @author mjf
     * @date 2024/8/1 16:16
     */
    public static function drawCensor(string $content, int $type = DrawRecordEnum::TYPE_TEXT): void
    {
        if ($type == DrawRecordEnum::TYPE_TEXT) {
            $promptOpen = ConfigService::get('content_censor', 'prompt_open', 0);
            if (!$promptOpen) {
                return;
            }
            self::contentCensor($content);
        } else {
            $imageOpen = ConfigService::get('content_censor', 'image_open', 0);
            if (!$imageOpen) {
                return;
            }
            self::contentCensor($content, 'image');
        }
    }

    /**
     * @notes 内容审核
     * @param string $content
     * @param string $type
     * @throws Exception
     * @author mjf
     * @date 2024/8/1 15:15
     */
    public static function contentCensor(string $content, string $type = 'text'): void
    {
        $APP_ID     = ConfigService::get('content_censor','app_id');
        $API_KEY    = ConfigService::get('content_censor','api_key');
        $SECRET_KEY = ConfigService::get('content_censor','secret_key');
        if (!$APP_ID || !$API_KEY || !$SECRET_KEY) {
            throw new Exception('内容审核配置缺失', 10006);
        }

        $client = new AipContentCensor($APP_ID, $API_KEY, $SECRET_KEY);
        if ($type == 'text') {
            $result = $client->textCensorUserDefined($content);
        } else {
            $result = $client->imageCensorUserDefined($content);
        }

        if (isset($result['error_code'])) {
            throw new Exception($result['error_msg'] ?? '审核错误', 10006);
        }

        $data = [];
        if ($result['conclusionType'] > ChatRecordEnum::CENSOR_STATUS_COMPLIANCE) {
            if (!empty($result['data'])) {
                foreach ($result['data'] as $key=>$val) {
                    if (isset($val['msg'])) {
                        $data[$key] = $val['msg'].'：';
                    }
                    if (!empty($val['hits'])) {
                        foreach ($val['hits'] as $hits_val) {
                            if (isset($hits_val['words'])) {
                                $data[$key] .= implode('、',$hits_val['words']);
                            }
                        }
                    }
                }
            }
        }

        if (!empty($data)) {
            throw new Exception('百度审核: '. implode('、',$data), 10006);
        }
    }

}