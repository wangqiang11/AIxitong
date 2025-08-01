<?php
// +----------------------------------------------------------------------
// | AI系统100%开源免费商用商城系统
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | 开源版本可自由商用，可去除界面版权logo
// | 商业版本务必购买商业授权，以免引起法律纠纷
// | 禁止对系统程序代码以任何目的，任何形式的再发布
// | gitee下载：
// | github下载：
// | 访问官网：
// | 访问社区：https://home.AI系统.cn
// | 访问手册：http://doc.AI系统.cn
// | 微信公众号：AI系统技术社区
// | AI系统团队 版权所有 拥有最终解释权
// +----------------------------------------------------------------------
// | // +----------------------------------------------------------------------
// | AI系统管理后台（PHP版）
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | 开源版本可自由商用，可去除界面版权logo
// | gitee下载：/likeadmin
// | //
// | 访问官网：www.localhost.com
// | 匿名公司 版权所有 拥有最终解释权
// +----------------------------------------------------------------------
// | author: 匿名开发者
// +----------------------------------------------------------------------
// +----------------------------------------------------------------------
namespace app\common\service\sms;

use app\common\enum\notice\NoticeEnum;
use app\common\enum\notice\SmsEnum;
use app\common\enum\YesNoEnum;
use app\common\model\Notice;
use app\common\model\notice\SmsLog;
use app\common\service\ConfigService;
use Exception;

/**
 * 短信驱动
 * Class SmsDriver
 * @package app\common\service\sms
 */
class SmsDriver
{
    /**
     * 错误信息
     * @var
     */
    protected $error = null;

    /**
     * 默认短信引擎
     * @var
     */
    protected mixed $defaultEngine;

    /**
     * 短信引擎
     * @var
     */
    protected mixed $engine;

    /**
     * 架构方法
     * SmsDriver constructor.
     */
    public function __construct()
    {
        // 初始化
        $this->initialize();
    }

    /**
     * @notes 初始化
     * @return bool
     * @author 段誉
     * @date 2022/9/15 16:29
     */
    public function initialize(): bool
    {
        try {
            $defaultEngine = ConfigService::get('sms', 'engine', false);
            if($defaultEngine === false) {
                throw new Exception('请开启短信配置');
            }
            $this->defaultEngine = $defaultEngine;
            $classSpace = __NAMESPACE__ . '\\engine\\' . ucfirst(strtolower($defaultEngine)) . 'Sms';
            if (!class_exists($classSpace)) {
                throw new Exception('没有相应的短信驱动类');
            }
            $engineConfig = ConfigService::get('sms', strtolower($defaultEngine), false);
            if($engineConfig === false) {
                throw new Exception($defaultEngine . '未配置');
            }
            if ($engineConfig['status'] != 1) {
                throw new Exception('短信服务未开启');
            }
            $this->engine = new $classSpace($engineConfig);
            if(!is_null($this->engine->getError())) {
                throw new Exception($this->engine->getError());
            }
            return true;
        } catch (Exception $e) {
            $this->error = $e->getMessage();
            return false;
        }
    }


    /**
     * @notes 获取错误信息
     * @return null
     * @author 段誉
     * @date 2022/9/15 16:29
     */
    public function getError()
    {
        return $this->error;
    }

    /**
     * @notes 发送短信
     * @param $mobile
     * @param $data
     * @return bool|array
     * @author 段誉
     * @date 2022/9/15 16:29
     */
    public function send($mobile, $data): bool|array
    {
        try {
            // 发送频率限制
            $this->sendLimit($mobile);
            // 开始发送
            $result = $this->engine
                ->setMobile($mobile)
                ->setTemplateId($data['template_id'])
                ->setTemplateParams($data['params'])
                ->send();
            if(false === $result) {
                throw new Exception($this->engine->getError());
            }

            return $result;
        } catch(Exception $e) {
            $this->error = $e->getMessage();
            return false;
        }
    }

    /**
     * @notes 发送频率限制
     * @param $mobile
     * @throws Exception
     * @author 段誉
     * @date 2022/9/15 16:29
     */
    public function sendLimit($mobile)
    {
        $smsLog = SmsLog::where([
            ['mobile', '=', $mobile],
            ['send_status', '=', SmsEnum::SEND_SUCCESS],
            ['scene_id', 'in', NoticeEnum::SMS_SCENE],
            ])
            ->order('send_time', 'desc')
            ->findOrEmpty()
            ->toArray();
        if(!empty($smsLog) && ($smsLog['send_time'] > time() - 60)) {
            throw new Exception('同一手机号1分钟只能发送1条短信');
        }
    }

    /**
     * @notes 校验手机验证码
     * @param $mobile
     * @param $code
     * @param int $sceneId
     * @return bool
     * @author 段誉
     * @date 2022/9/15 16:29
     */
    public function verify($mobile, $code, int $sceneId = 0): bool
    {
        $where = [
            ['mobile', '=', $mobile],
            ['send_status', '=', SmsEnum::SEND_SUCCESS],
            ['scene_id', 'in', NoticeEnum::SMS_SCENE],
            ['is_verify', '=', YesNoEnum::NO],
        ];

        if (!empty($sceneId)) {
            $where[] = ['scene_id', '=', $sceneId];
        }

        $smsLog = (new SmsLog())->where($where)
            ->order('send_time', 'desc')
            ->findOrEmpty();

        // 没有验证码 或 最新验证码已校验 或 已过期(有效期：5分钟)
        if($smsLog->isEmpty() || $smsLog->is_verify || ($smsLog->send_time < time() - 5 * 60) ) {
            return false;
        }

        // 更新校验状态
        if($smsLog->code == $code) {
            $smsLog->check_num = $smsLog->check_num + 1;
            $smsLog->is_verify = YesNoEnum::YES;
            $smsLog->save();
            return true;
        }

        // 更新验证次数
        $smsLog->check_num = $smsLog->check_num + 1;
        $smsLog->save();
        return false;
    }
}