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

namespace app\common\command;

use aip\AipContentCensor;
use app\common\enum\user\UserEnum;
use app\common\model\user\User;
use app\common\service\ConfigService;
use app\common\service\UserService;
use Exception;
use think\console\Command;
use think\console\Input;
use think\console\Output;

class UserInfoCensor extends Command
{
    protected function configure(): void
    {
        $this->setName('user_info_censor')
            ->setDescription('用户信息审核');
    }

    /**
     * @notes 执行百度审核
     * @param Input $input
     * @param Output $output
     * @return bool
     * @throws @\think\db\exception\DataNotFoundException
     * @throws @\think\db\exception\DbException
     * @throws @\think\db\exception\ModelNotFoundException
     * @throws Exception
     */
    protected function execute(Input $input, Output $output): bool
    {
        // 百度内容审核配置
        $userOpen = ConfigService::get('content_censor', 'user_open', 0);
        if ($userOpen != 1) {
            echo '后台-AI设置-内容审核中用户信息审核未开启' . PHP_EOL;
            return true;
        }

        $APP_ID     = ConfigService::get('content_censor', 'app_id');
        $API_KEY    = ConfigService::get('content_censor', 'api_key');
        $SECRET_KEY = ConfigService::get('content_censor', 'secret_key');
        if (!$APP_ID || !$API_KEY || !$SECRET_KEY) {
            throw new Exception('内容审核配置缺失', 10006);
        }

        // 查询未审核的用户
        $userLists = User::where('censor_text_status', 'in', [UserEnum::CENSOR_STATUS_WAIT, UserEnum::CENSOR_STATUS_FAIL])
            ->whereOr('censor_image_status', 'in', [UserEnum::CENSOR_STATUS_WAIT, UserEnum::CENSOR_STATUS_FAIL])
            ->limit(500)
            ->select()
            ->toArray();

        if (empty($userLists)) {
            echo '暂无需审核用户信息' . PHP_EOL;
            return true;
        }

        $userService = new UserService();
        $client      = new AipContentCensor($APP_ID, $API_KEY, $SECRET_KEY);

        $defaultAvatar = config('project.default_image.user_avatar');
        $defaultAvatar = ConfigService::get('user', 'default_avatar', $defaultAvatar);

        $updateData = [];
        foreach ($userLists as $userItem) {
            // 审核内容
            $censorRes = $userService->censorUserInfo($client, $userItem);

            $updateItem = [
                'id'                  => $userItem['id'],
                'censor_text_status'  => $censorRes['censor_text_status'],
                'censor_text_result'  => $censorRes['censor_text_result'],
                'censor_image_status' => $censorRes['censor_image_status'],
                'censor_image_result' => $censorRes['censor_image_result'],
            ];

            if ($censorRes['censor_text_status'] == UserEnum::CENSOR_STATUS_NON_COMPLIANCE) {
                $updateItem['nickname'] = '用户' . $userItem['sn'];
            }

            if ($censorRes['censor_image_status'] == UserEnum::CENSOR_STATUS_NON_COMPLIANCE) {
                $updateItem['avatar'] = $defaultAvatar;
            }

            $updateData[] = $updateItem;
        }

        if (!empty($updateData)) {
            (new User())->saveAll($updateData);
        }

        echo '审核完成' . PHP_EOL;
        return true;
    }


}