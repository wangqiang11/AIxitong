<?php

namespace app\common\service\draw;

use app\common\enum\draw\DrawEnum;
use app\common\service\ConfigService;
use app\common\service\draw\engine\DrawAceData;
use app\common\service\draw\engine\DrawBase;
use app\common\service\draw\engine\DrawDalle3;
use app\common\service\draw\engine\DrawDoubao;
use app\common\service\draw\engine\DrawMj;
use app\common\service\draw\engine\DrawSd;
use Exception;

class DrawDriver
{
    protected DrawBase|null $engine;

    /**
     * @throws Exception
     */
    public function __construct(string $model = '')
    {
        match ($model) {
            DrawEnum::API_SD => $this->drawSdConfig(),
            DrawEnum::API_DALLE3 => $this->drawDalleConfig(),
            DrawEnum::API_MJ_GOAPI => $this->drawMjGoApiConfig(),
            DrawEnum::API_MJ_ACEDATA => $this->drawMjAceDataConfig(),
            DrawEnum::API_DOUBAO => $this->drawDoubaoConfig(),
            default => throw new Exception("绘画模型异常"),
        };
    }

    public function drawSdConfig(): void
    {
        // 绘画开关
        $openConfig = ConfigService::get('draw_config', 'sd', 0);
        if ($openConfig['status'] != 1) {
            throw new Exception("绘画功能已关闭");
        }

        $apiConfig = ConfigService::get('draw_config', DrawEnum::API_SD, []);
        if (empty($apiConfig['proxy_url'])) {
            throw new Exception('请联系管理员完善绘画配置');
        } else {
            $this->engine = new DrawSd($apiConfig['proxy_url']);
        }
    }

    /**
     * @notes dalle3
     * @throws Exception
     * @author mjf
     * @date 2024/8/5 11:56
     */
    public function drawDalleConfig(): void
    {
        $apiConfig = ConfigService::get('draw_config', DrawEnum::API_DALLE3, []);
        if ($apiConfig['status'] != 1) {
            throw new Exception("绘画功能已关闭");
        }

        $proxyUrl     = !empty($apiConfig['proxy_url']) ? $apiConfig['proxy_url'] : '';
        $this->engine = new DrawDalle3($proxyUrl);
    }

    /**
     * @notes midjourney
     * @throws Exception
     * @author mjf
     * @date 2024/8/14 11:43
     */
    public function drawMjGoApiConfig(): void
    {
        $apiConfig = ConfigService::get('draw_config', DrawEnum::API_MJ, []);
        if (empty($apiConfig['status'])) {
            throw new Exception("绘画功能已关闭");
        }
        $this->engine = new DrawMj();
    }

    /**
     * @notes midjourney
     * @throws Exception
     * @author mjf
     * @date 2025/1/6 16:55
     */
    public function drawMjAceDataConfig(): void
    {
        $apiConfig = ConfigService::get('draw_config', DrawEnum::API_MJ, []);
        if (empty($apiConfig['status'])) {
            throw new Exception("绘画功能已关闭");
        }
        $this->engine = new DrawAceData();
    }

    /**
     * @notes 豆包
     * @throws Exception
     * @author mjf
     */
    public function drawDoubaoConfig(): void
    {
        $apiConfig = ConfigService::get('draw_config', DrawEnum::API_DOUBAO, []);
        if (empty($apiConfig['status'])) {
            throw new Exception("绘画功能已关闭");
        }
        $this->engine = new DrawDoubao();
    }

    /**
     * @notes 文生图/图生图
     * @param array $params
     * @return array
     * @throws Exception
     * @author JXDN
     * @date 2024/06/05 10:19
     */
    public function imagine(array $params): array
    {
        try {
            return $this->engine->imagine($params);
        } catch (Exception $e) {
            throw new Exception($e->getMessage());
        }
    }

    // 变大，变换
    public function imagineUv(array $params): ?array
    {
        return $this->engine->imagineUv($params);
    }

}