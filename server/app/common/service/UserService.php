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

namespace app\common\service;

use aip\AipContentCensor;
use app\common\enum\user\AccountLogEnum;
use app\common\enum\user\UserEnum;
use app\common\logic\BaseLogic;
use app\common\model\user\User;
use app\common\model\user\UserAccountLog;
use think\facade\Config;

class UserService extends BaseLogic
{
    /**
     * @notes 用户注册奖励
     * @param int $userId
     * @return void
     * @author caijianhao
     * @date 2023/9/1 11:47
     */
    public static function registerReward(int $userId){

        $user = (new User())->findOrEmpty($userId);
        if($user->isEmpty()){
            return ;
        }
        //是否自动成为分销商
        $is_open = ConfigService::get('distribution','is_open');
        $condition = ConfigService::get('distribution','condition',1);
        if ($is_open == 1 && $condition == 1) {
            $user->is_distribution = 1;
            $user->distribution_time = time();
        }
        $user->save();

        // 注册奖励
        $registerRewardStatus = ConfigService::get('register_reward', 'status', 1);
        if (0 == $registerRewardStatus) {
            return ;
        }

        // 赠送对话次数
        $defaultRewardChat = Config::get('project.register_rewards.reward_chat', 0);
        $balanceChat = ConfigService::get('register_reward', 'reward_chat', $defaultRewardChat);
        if ($balanceChat > 0) {
            $user->balance = $balanceChat;
        }

        // 赠送机器人
        $defaultRewardRobot = Config::get('project.register_rewards.reward_robot', 0);
        $robotNum = ConfigService::get('register_reward', 'reward_robot', $defaultRewardRobot);
        if ($robotNum > 0) {
            $user->robot_num = $robotNum;
        }

        // 赠送数字人时长 (这个暂时用不上了)
        $videoDuration = ConfigService::get('register_reward', 'reward_video', 0);
        if ($videoDuration > 0) {
            $user->video_num = $videoDuration;
        }

        // 保存赠送
        $user->save();

        // 记录对话流水
        if ($balanceChat > 0) {
            $changeType = AccountLogEnum::UM_INC_REGISTER;
            $changeRemark = AccountLogEnum::getChangeTypeDesc($changeType);
            UserAccountLog::add($userId, $changeType, AccountLogEnum::INC, $balanceChat, '', $changeRemark);
        }

        // 记录机器人流水
        if ($robotNum > 0) {
            $changeType = AccountLogEnum::ROBOT_INC_REGISTER;
            $changeRemark = AccountLogEnum::getChangeTypeDesc($changeType);
            UserAccountLog::add($userId, $changeType, AccountLogEnum::INC, $robotNum, '', $changeRemark);
        }

        // 记录数字人时长流水
        if ($videoDuration > 0) {
            $changeType = AccountLogEnum::VIDEO_INC_REGISTER;
            $changeRemark = AccountLogEnum::getChangeTypeDesc($changeType);
            UserAccountLog::add($userId, $changeType, AccountLogEnum::INC, $videoDuration, '', $changeRemark);
        }

        // 初始知识库空间数
        $space = ConfigService::get('know', 'space', '');
        if (!$space) {
            $space = $space == 0 ? 0 : -1;
        }
        User::update(['total_space'=>$space], ['id'=>$userId]);
    }


    /**
     * @notes 审核内容
     * @param AipContentCensor $client
     * @param $userInfo
     * @return array
     */
    public function censorUserInfo(AipContentCensor $client, $userInfo): array
    {
        $censorTextStatus  = $userInfo['censor_text_status'];
        $censorImageStatus = $userInfo['censor_image_status'];
        $textResult        = $userInfo['censor_text_result'];
        $imgResult         = $userInfo['censor_image_result'];

        // 审核用户昵称
        if (in_array($censorTextStatus, [UserEnum::CENSOR_STATUS_WAIT, UserEnum::CENSOR_STATUS_FAIL])) {
            $textResult = $client->textCensorUserDefined($userInfo['nickname']);
            if (isset($textResult['error_code'])) {
                $censorTextStatus = UserEnum::CENSOR_STATUS_FAIL;
                echo '审核用户昵称失败-' . json_encode($textResult, JSON_UNESCAPED_UNICODE) . PHP_EOL;
            }
            if (isset($textResult['conclusionType'])) {
                $censorTextStatus = $textResult['conclusionType'];
            }
        }

        // 审核用户头像
        if (in_array($censorImageStatus, [UserEnum::CENSOR_STATUS_WAIT, UserEnum::CENSOR_STATUS_FAIL])) {
            $imgResult = $client->imageCensorUserDefined(FileService::getFileUrl($userInfo['avatar']));
            if (isset($imgResult['error_code'])) {
                $censorImageStatus = UserEnum::CENSOR_STATUS_FAIL;
                echo '审核用户头像失败-' . json_encode($imgResult, JSON_UNESCAPED_UNICODE) . PHP_EOL;
            }
            if (isset($imgResult['conclusionType'])) {
                $censorImageStatus = $imgResult['conclusionType'];
            }
        }

        return [
            'censor_text_status'  => $censorTextStatus,
            'censor_text_result'  => is_array($textResult) ? json_encode($textResult, JSON_UNESCAPED_UNICODE) : $textResult,
            'censor_image_status' => $censorImageStatus,
            'censor_image_result' => is_array($imgResult) ? json_encode($imgResult, JSON_UNESCAPED_UNICODE) : $imgResult,
        ];
    }
}