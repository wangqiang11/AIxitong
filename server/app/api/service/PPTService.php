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

use app\common\enum\member\MemberPackageEnum;
use app\common\enum\PPTEnum;
use app\common\enum\user\AccountLogEnum;
use app\common\enum\YesNoEnum;
use app\common\logic\UserMemberLogic;
use app\common\model\ppt\PptRecord;
use app\common\model\user\User;
use app\common\model\user\UserAccountLog;
use app\common\service\ai\ppt\ChatPPTService;
use app\common\service\ConfigService;
use app\common\service\storage\Driver as StorageDriver;
use app\common\service\WordsService;
use Exception;
use think\facade\Log;

/**
 * PPT服务类
 */
class PPTService
{
    protected int $genType;
    protected string $prompt;
    protected string $title;
    protected string $coverId;
    protected array $catalogs;

    protected string $price;
    protected string $channel;
    protected array $channelConfig = [];

    protected int $recordId = 0;

    protected int $userId = 0;
    protected User|null $user = null;

    /**
     * @throws Exception
     */
    public function __construct(int $userId = 0, array $params = [])
    {
        // 渠道
        $this->channel = PPTEnum::CHAT_PPT;
        // 渠道配置
        $this->channelConfig = $this->getConfig();

        if (empty($this->channelConfig['status'])) {
            throw new Exception('AI-PPT功能已关闭');
        }

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
        $this->user   = (new User())->where(['id' => $userId])->findOrEmpty();

        $this->genType  = $params['type'] ?? PPTEnum::TYPE_BASE;
        $this->prompt   = $params['prompt'] ?? '';
        $this->title    = !empty($params['title']) ? $params['title'] : $this->prompt;
        $this->coverId  = $params['cover_id'] ?? '';
        $this->catalogs = $params['catalogs'] ?? [];

        // 获取价格
        $this->price = $this->channelConfig['price'] ?? 0;
        // 会员价格
        if ($this->checkVip(MemberPackageEnum::APPLY_PPT)) {
            $this->price = 0;
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
    public function submit(): void
    {
        // 用户信息校验
        $this->checkUser();
        // 提示词校验
        $this->wordsAudit();

        $model = new User();
        $model->startTrans();
        try {
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
    public function wordsAudit(): void
    {
        // 敏感词验证
        WordsService::sensitive($this->prompt);
        // 问题审核(百度)
        WordsService::askCensor($this->prompt);
    }

    /**
     * @notes 用户校验
     * @throws Exception
     * @author mjf
     * @date 2024/5/29 15:50
     */
    public function checkUser(): void
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
    public function decBalance(): void
    {
        if ($this->price <= 0) {
            return;
        }

        // 账户扣费
        $changePrice         = $this->user['balance'] - $this->price;
        $this->user->balance = max($changePrice, 0);
        $this->user->save();

        // 钱包变动
        $changeType   = AccountLogEnum::UM_DEC_PPT;
        $changeAction = AccountLogEnum::DEC;
        UserAccountLog::add($this->userId, $changeType, $changeAction, $this->price);
    }

    /**
     * @notes 提交任务
     * @throws Exception
     * @author mjf
     * @date 2024/5/29 16:09
     */
    public function submitTask(): void
    {
        // 提交任务
        $record = PptRecord::create([
            'user_id'  => $this->userId,
            'type'     => $this->genType,
            'channel'  => $this->channel,
            'prompt'   => $this->prompt,
            'title'    => $this->title,
            'cover_id' => $this->coverId,
            'catalog'  => json_encode($this->catalogs, JSON_UNESCAPED_UNICODE),
            'price'    => $this->price,
            'ip'       => request()->ip(),
            'status'   => PPTEnum::STATUS_WAIT,
        ]);

        $this->setRecordId($record['id']);

        // 根据类型处理: 基础类型直接提交生成ppt任务
        switch ($this->genType) {
            case PPTEnum::TYPE_BASE:
                $pptService = new ChatPPTService($this->userId);
                $response   = $pptService->create([
                    'prompt'    => $this->prompt,
                    'user_name' => $this->user['nickname'] ?? '',
                ]);
                break;
            case PPTEnum::TYPE_PLUS:
                $pptService = new ChatPPTService($this->userId);
                $response   = $pptService->create([
                    'cover_id'    => $this->coverId,
                    'custom_data' => [
                        'title'  => $this->title,
                        'author' => $this->user['nickname'] ?? '',
                    ],
                ]);
                break;
            case PPTEnum::TYPE_DEEP:
                $pptService = new ChatPPTService($this->userId);
                $response   = $pptService->create([
                    'cover_id'    => $this->coverId,
                    'custom_data' => [
                        'title'    => $this->title,
                        'author'   => $this->user['nickname'] ?? '',
                        'catalogs' => $this->catalogs,
                    ]
                ]);
                break;
        }

        if (empty($response['id'])) {
            throw new Exception($response['message'] ?? '任务提交失败');
        }

        // 更新任务
        PptRecord::update([
            'task_id' => $response['id'],
            'status'  => PPTEnum::STATUS_IN_PROGRESS,
        ], ['id' => $record['id']]);
    }

    /**
     * @notes 任务记录id
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
    public function getConfig(): array
    {
        $config  = ConfigService::get('ai_ppt');
        $default = PPTEnum::getChannelDefaultConfig(PPTEnum::CHAT_PPT);
        return [
            'status'  => intval($config['status'] ?? 0),
            'channel' => $config['channel'] ?? $default['channel'],
            'price'   => $config['price'] ?? $default['price']
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
     * @notes 价格
     * @return string
     * @author mjf
     */
    public function getPrice()
    {
        return $this->price;
    }

    /**
     * @notes 下载PPT
     * @param $recordId
     * @return string
     * @throws Exception
     * @author mjf
     */
    public function downloadPPT($recordId): string
    {
        $record = (new PptRecord())->findOrEmpty($recordId)->toArray();

        $pptService = new ChatPPTService($this->userId);
        $response   = $pptService->getDownLoadUrl($record['task_id']);

        $fileUrl = '';
        if (!empty($response['download_url'])) {
            $fileSavePath = 'uploads/ppt/' . date('Ymd') . '/' . $recordId . '/';
            $fileTitle    = $record['title'] . '.pptx';
            if (mb_strlen($fileTitle) > 30) {
                $fileTitle = mb_substr($fileTitle, 0, 30) . '.pptx';
            }
            $fileUrl = $this->downloadFile($response['download_url'], $fileSavePath, $fileTitle);
        }

        return $fileUrl;
    }

    /**
     * @notes 下载wenjain
     * @param $downloadUrl
     * @param string $saveDir
     * @param string $fileName
     * @return string
     * @author mjf
     */
    public function downloadFile($downloadUrl, string $saveDir, string $fileName = ''): string
    {
        if (empty($downloadUrl)) {
            return '';
        }

        try {
            // 存储引擎
            $config = [
                'default' => ConfigService::get('storage', 'default', 'local'),
                'engine'  => ConfigService::get('storage')
            ];

            // 文件名称
            $fileName = empty($fileName) ? $this->imageUrlTrim($downloadUrl) : $fileName;

            // 第三方存储
            if ($config['default'] == 'local') {
                $downSaveDir = app()->getRootPath() . 'public/' . $saveDir;
                $downRes     = download_file($downloadUrl, $downSaveDir, $fileName, false);
                if (empty($downRes)) {
                    throw new Exception('下载本地失败,地址-' . $downloadUrl);
                }
                return $saveDir . $fileName;
            } else {
                $localPath     = $saveDir . $fileName;
                $StorageDriver = new StorageDriver($config);
                if (!$StorageDriver->fetch($downloadUrl, $localPath)) {
                    throw new Exception('上传oss失败:' . $StorageDriver->getError() . $downloadUrl);
                }
                return $localPath;
            }

        } catch (\Exception $e) {
            Log::write('AI-PPT下载:' . $e->getMessage() . $e->getLine());
            return "";
        }
    }
    
    /**
     * @notes 文件名称
     * @param $image
     * @return string
     * @author mjf
     * @date 2024/10/9 16:34
     */
    public function imageUrlTrim($image): string
    {
        if (str_contains($image, '?')) {
            $image = strtok($image, '?');
        }
        return basename($image);
    }
}