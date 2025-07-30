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

namespace app\api\logic;

use app\common\enum\notice\NoticeEnum;
use app\common\logic\BaseLogic;
use app\common\service\EmailService;
use Exception;

class EmailLogic extends BaseLogic
{
    /**
     * @notes 发送邮箱验证码
     * @param $params
     * @return bool|string
     * @author ljj
     * @date 2023/7/19 2:37 下午
     */
    public function sendCode($params): bool|string
    {
        try {
            $scene = NoticeEnum::getSceneByTag($params['scene']);
            if (empty($scene)) {
                throw new Exception('场景值异常');
            }

            $result = (new EmailService())->sendCode($params['email'],$scene);
            if (true !== $result) {
                throw new Exception($result);
            }

            return true;
        } catch (Exception $e) {
            return $e->getMessage();
        }
    }
}