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

namespace app\api\service;

use app\api\logic\VideoLogic;
use app\common\enum\member\MemberPackageEnum;
use app\common\enum\user\AccountLogEnum;
use app\common\enum\VideoEnum;
use app\common\enum\YesNoEnum;
use app\common\logic\UserMemberLogic;
use app\common\model\user\User;
use app\common\model\user\UserAccountLog;
use app\common\model\video\VideoRecord;
use app\common\model\video\VideoStyle;
use app\common\service\ConfigService;
use app\common\service\FileService;
use app\common\service\video\GoApiService;
use app\common\service\video\KLingApiService;
use app\common\service\video\OpenaiHKService;
use app\common\service\WordsService;
use Exception;
use think\facade\Log;

/**
 * 视频服务类
 */
class VideoService
{
    protected int $genType;
    protected string $prompt;
    protected string $promptEn;
    protected string $styleId;
    protected string $styleTags = "";
    protected string $scale;
    protected string $image = '';

    protected string $price;
    protected string $channel;
    protected string $apiVersion;
    protected array $videoConfig = [];
    protected array $complexParams = [];

    protected int $recordId = 0;

    protected int $userId = 0;
    protected User|null $user = null;

    /**
     * @throws Exception
     */
    public function __construct(int $userId = 0, array $params = [])
    {
        // 渠道配置
        $channelConfigLists = $this->getVideoConfig();
        // 渠道
        $this->channel = !empty($params['channel']) ? $params['channel'] : $channelConfigLists['channel'];

        $this->videoConfig = $channelConfigLists['models'][$this->channel] ?? [];

        if (empty($this->videoConfig['status'])) {
            throw new Exception('配置异常');
        }

        $this->apiVersion = $this->videoConfig['version'] ?? 'pro';

        $this->setParamsAttr($params, $userId);
    }

    /**
     * @notes 设置参数属性
     * @param array $params
     * @param int $userId
     * @author mjf
     * @date 2024/5/29 16:31
     */
    public function setParamsAttr(array $params = [], int $userId = 0): void
    {
        $this->userId = $userId;
        $this->user = (new User())->where(['id' => $userId])->findOrEmpty();

        $this->genType    = $params['type'] ?? VideoEnum::TEXT_TO_VIDEO;
        $this->prompt     = $params['prompt'] ?? '';
        $this->styleId    = implode(',', $params['style_id'] ?? []);
        $this->scale      = $params['scale'] ?? '1:1';
        $this->image      = $params['image'] ?? '';

        // 可灵参数
        $this->complexParams = [
            'model_name'      => $params['model_name'] ?? 'kling-v1',
            'negative_prompt' => $params['negative_prompt'] ?? '',
            'cfg_scale'       => $params['cfg_scale'] ?? '0.5',
            'mode'            => $params['mode'] ?? 'std',
            'duration'        => $params['duration'] ?? 5,
            'camera_control'  => $params['camera_control'] ?? null,
        ];

        // 获取价格
        $this->price = $this->videoConfig['price'] ?? 0;
        // 会员价格
        if ($this->checkVip(MemberPackageEnum::APPLY_VIDEO)) {
            $this->price = 0;
        }
    }

    /**
     * @notes  设置风格
     * @author mjf
     * @date 2024/5/29 15:57
     */
    public function setStyle(): void
    {
        if (!empty($this->styleId)) {
            $model = new VideoStyle();
            $styleLists = $model->whereIn('id', $this->styleId)->select()->toArray();

            $styleArr = [];
            foreach ($styleLists as $style) {
                $styleArr[] = !empty($style['value']) ? $style['value'] : $style['name'];
            }
            $this->styleTags = implode(',', $styleArr);
        }
    }

    /**
     * @notes 任务id
     * @param int $recordId
     * @author mjf
     * @date 2024/5/29 17:26
     */
    public function setRecordId(int $recordId): void
    {
        $this->recordId = $recordId;
    }

    /**
     * @notes 提交任务
     * @throws Exception
     * @author mjf
     * @date 2024/5/29 16:21
     */
    public function video()
    {
        // 用户信息校验
        $this->checkUser();
        // 提示词校验
        $this->wordsAudit();
        // 风格设置
        $this->setStyle();

        $model = new User();
        $model->startTrans();
        try {
            // 翻译提示词
            $this->promptEn = $this->translatePrompt($this->prompt);
            // 扣除余额
            $this->decBalance();
            // 提交任务
            $this->submitTask();
            $model->commit();
        } catch (Exception $e) {
            $model->rollback();
            throw new Exception($e->getMessage());
        }
    }

    /**
     * @notes 提示词审核
     * @throws Exception
     * @author mjf
     * @date 2024/5/29 16:17
     */
    public function wordsAudit()
    {
        $checkContent = $this->prompt;
        // 敏感词验证
        WordsService::sensitive($checkContent);
        // 问题审核(百度)
        WordsService::askCensor($checkContent);
    }

    /**
     * @notes 用户校验
     * @throws Exception
     * @author mjf
     * @date 2024/5/29 15:50
     */
    public function checkUser()
    {
        if ($this->user->isEmpty()) {
            throw new Exception('非法会员');
        }

        if ($this->price && $this->user->balance < $this->price) {
            throw new Exception('余额不足');
        }

        if (YesNoEnum::YES == $this->user->is_blacklist) {
            throw new Exception('您已被管理员禁止操作,请联系客服详询原因。');
        }
    }

    /**
     * @notes 扣除余额
     * @author mjf
     * @date 2024/5/29 15:44
     */
    public function decBalance()
    {
        if ($this->price <= 0) {
            return;
        }

        // 账户扣费
        $changePrice = $this->user['balance'] - $this->price;
        $this->user->balance = max($changePrice, 0);
        $this->user->save();

        // 钱包变动
        $changeType   = AccountLogEnum::UM_DEC_VIDEO;
        $changeAction = AccountLogEnum::DEC;
        UserAccountLog::add($this->userId, $changeType, $changeAction, $this->price);
    }

    /**
     * @notes
     * @throws Exception
     * @author mjf
     * @date 2024/5/29 16:09
     */
    public function submitTask()
    {
        $image = '';
        if ($this->genType == VideoEnum::IMAGE_TO_VIDEO) {
            $image = FileService::setFileUrl($this->image);
        }

        $modelName = VideoEnum::LUMA;
        if ($this->channel == VideoEnum::KLING) {
            $modelName = $this->complexParams['model_name'] ?? VideoEnum::KLING;
            $cameraControl = $this->complexParams['camera_control'] ?? '';

            if (!empty($cameraControl['type']) && $cameraControl['type'] != 'simple') {
                if ($this->complexParams['mode'] != 'std' || $this->complexParams['duration'] != 5 || $this->complexParams['model_name'] != 'kling-v1') {
                    throw new Exception('非简单运镜镜头需选择kling-v1模型，高性能模型及5秒时长');
                }
            }
        }

        // 提交任务
        $record = VideoRecord::create([
            'user_id'       => $this->userId,
            'style_id'      => $this->styleId,
            'type'          => $this->genType,
            'tags'          => $this->styleTags,
            'scale'         => $this->scale,
            'image'         => $image,
            'channel'       => $this->channel,
            'model'         => $modelName,
            'prompt'        => $this->prompt,
            'prompt_en'     => $this->promptEn,
            'tokens'        => $this->price,
            'api_version'   => $this->apiVersion,
            'ip'            => request()->ip(),
            'status'        => VideoEnum::STATUS_WAIT,
            'complex_params' => json_encode($this->complexParams, JSON_UNESCAPED_UNICODE),
        ]);

        $this->setRecordId($record['id']);

        match ($this->channel) {
            VideoEnum::OPENAIHK => $this->submitOpenaiHk($record),
            VideoEnum::GOAPI => $this->submitGoApi($record),
            VideoEnum::KLING => $this->submitKeLing($record),
            default => throw new Exception("系统错误"),
        };
    }

    /**
     * @notes 提交任务（OpenAiHk渠道）
     * @param $record
     * @throws Exception
     * @author mjf
     * @date 2024/6/21 17:53
     */
    public function submitOpenaiHk($record): void
    {
        $this->image = empty($this->image) ? '' : imgToBase64($this->image, true);
        $videoService = new OpenaiHKService($this->videoConfig['version']);
        $response = $videoService->video([
            'user_prompt'   => trim($this->styleTags . $this->promptEn),
            'aspect_ratio'  => $this->scale,
            'image_url'     => $this->image,
        ]);

        if (empty($response['id'])) {
            throw new Exception($response['message'] ?? '视频任务提交失败');
        }

        // 更新任务
        VideoRecord::update([
            'task_id'   => $response['id'],
            'status'    => VideoEnum::STATUS_IN_PROGRESS,
        ], ['id' => $record['id']]);
    }

    /**
     * @notes 提交任务（GoApi渠道）
     * @param $record
     * @throws Exception
     * @author mjf
     * @date 2024/7/11 16:11
     */
    public function submitGoApi($record): void
    {
        $this->image = empty($this->image) ? '' : imgToBase64($this->image, true);

        $videoService = new GoApiService();
        $response = $videoService->video([
            'user_prompt'   => trim($this->styleTags . $this->promptEn),
            'aspect_ratio'  => $this->scale,
            'image_url'     => $this->image,
        ]);

        if (empty($response['task_id'])) {
            throw new Exception($response['message'] ?? '视频任务提交失败');
        }

        // 更新任务
        VideoRecord::update([
            'task_id'   => $response['task_id'],
            'status'    => VideoEnum::STATUS_IN_PROGRESS,
        ], ['id' => $record['id']]);
    }

    /**
     * @notes 可灵
     * @param $record
     * @throws Exception
     */
    public function submitKeLing($record): void
    {
        $this->image = empty($this->image) ? '' : imgToBase64($this->image, true);

        $videoService = new KLingApiService($this->videoConfig['proxy_url'] ?? '');

        $response = $videoService->video([
            'model_name'      => $this->complexParams['model_name'],
            'negative_prompt' => $this->complexParams['negative_prompt'],
            'cfg_scale'       => $this->complexParams['cfg_scale'],
            'mode'            => $this->complexParams['mode'],
            'duration'        => $this->complexParams['duration'],
            'camera_control'  => $this->complexParams['camera_control'],
            'prompt'   => trim($this->styleTags . $this->promptEn),
            'aspect_ratio'  => $this->scale,
            'image_url'     => $this->image,
        ]);

        if (empty($response['task_id'])) {
            throw new Exception($response['message'] ?? '视频任务提交失败');
        }

        // 更新任务
        VideoRecord::update([
            'task_id'   => $response['task_id'],
            'status'    => VideoEnum::STATUS_IN_PROGRESS,
        ], ['id' => $record['id']]);
    }

    /**
     * @notes 任务关联记录id
     * @return int
     * @author mjf
     * @date 2024/5/29 16:09
     */
    public function getTaskRecordId(): int
    {
        return $this->recordId;
    }

    /**
     * @notes 配置
     * @return array
     * @author mjf
     * @date 2024/5/28 18:30
     */
    public function getVideoConfig(): array
    {
        $defaultChannel = VideoEnum::getChannelDefaultConfig();
        $videoChannel   = ConfigService::get('video_model', 'channel', VideoEnum::OPENAIHK);
        $cacheConfigs   = ConfigService::get('video_model', 'configs', []);

        $config = [];
        foreach ($defaultChannel as $key => $item) {
            $cacheConfig = $cacheConfigs[$key] ?? [];
            $item = array_merge($item, $cacheConfig);
            unset($item['tips'], $item['website']);
            $item['status'] = $key == $videoChannel ? 1 : 0;
            if ($item['version'] == 'relax') {
                $item['version'] = 'pro';
            }
            $config[$key] = $item;
        }
        return [
            'channel'   => $videoChannel,
            'models'    => $config,
        ];
    }

    /**
     * @notes 会员
     * @param int $type
     * @return bool
     * @author mjf
     * @date 2024/6/4 11:28
     */
    public function checkVip(int $type): bool
    {
        // is_limit=false (无限制次数), surplus_num=剩余次数
        $vips = UserMemberLogic::getUserPackageApply($this->userId, $type);
        foreach ($vips as $item) {
            if (!$item['is_limit'] || $item['surplus_num']) {
                return true;
            }
        }
        return false;
    }

    /**
     * @notes 翻译
     * @param string $prompt
     * @return string
     * @author mjf
     * @date 2024/9/26 13:45
     */
    public function translatePrompt(string $prompt): string
    {
        $config = ConfigService::get('video_translate', 'data', VideoEnum::getTranslateDefault());
        if ($config['status'] != 1 || !isset($config['type']) || $config['type'] != 1) {
            return $prompt;
        }

        $translateReS = VideoLogic::translate($prompt);
        if ($translateReS === false || empty($translateReS['result'])) {
            Log::write('绘画翻译失败' . VideoLogic::getError());
            return $prompt;
        }

        return $translateReS['result'];
    }
}