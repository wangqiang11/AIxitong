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

namespace app\api\validate;

use app\common\cache\UserAccountSafeCache;
use app\common\enum\LoginEnum;
use app\common\enum\notice\NoticeEnum;
use app\common\enum\user\UserTerminalEnum;
use app\common\enum\YesNoEnum;
use app\common\service\ConfigService;
use app\common\service\EmailService;
use app\common\service\sms\SmsDriver;
use app\common\validate\BaseValidate;
use app\common\model\user\User;
use think\facade\Config;

/**
 * 账号密码登录校验
 */
class LoginAccountValidate extends BaseValidate
{
    protected $rule = [
        'terminal' => 'require|in:' . UserTerminalEnum::WECHAT_MMP . ',' . UserTerminalEnum::WECHAT_OA . ','
            . UserTerminalEnum::H5 . ',' . UserTerminalEnum::PC . ',' . UserTerminalEnum::IOS .
            ',' . UserTerminalEnum::ANDROID,
        'scene' => 'require|in:' . LoginEnum::MOBILE_PASSWORD . ',' . LoginEnum::MOBILE_CAPTCHA .','.LoginEnum::EMAIL_CAPTCHA. ',' . LoginEnum::EMAIL_PASSWORD . '|checkConfig',
    ];

    protected $message = [
        'terminal.require' => '终端参数缺失',
        'terminal.in'      => '终端参数状态值不正确',
        'scene.require'    => '场景不能为空',
        'scene.in'         => '场景值错误'
    ];

    /**
     * @notes 登录场景相关校验
     * @param $scene
     * @param $rule
     * @param $data
     * @return bool|string
     * @author 段誉
     * @date 2022/9/15 14:37
     */
    public function checkConfig($scene, $rule, $data): bool|string
    {
        unset($rule);
        $config = ConfigService::get('login', 'login_way');
        $config[] = LoginEnum::MOBILE_CAPTCHA;//增加一个手机号验证码登录方式
        $config[] = LoginEnum::EMAIL_CAPTCHA;//增加一个手机号验证码登录方式
        if (!in_array($scene, $config)) {
            return '不支持的登录方式';
        }

        // 手机号密码登录
        if (LoginEnum::MOBILE_PASSWORD == $scene) {
            if (!isset($data['mobile']) || $data['mobile'] == '') {
                return '请输入手机号';
            }
            if (!isset($data['password']) || $data['password'] == '') {
                return '请输入密码';
            }
            return $this->checkPassword($data['password'], [], $data);
        }

        // 手机验证码登录
        if (LoginEnum::MOBILE_CAPTCHA == $scene) {
            if (!isset($data['mobile']) || $data['mobile'] == '') {
                return '请输入手机号';
            }
            if (!isset($data['code']) || $data['code'] == '') {
                return '请输入手机验证码';
            }
            $user = (new User())->where(['mobile' => $data['mobile']])->findOrEmpty();
            if ($user->isEmpty()) {
                return '账号不存在';
            }
            return $this->checkCode($data['code'], [], $data);
        }

        // 邮箱密码登录
        if (LoginEnum::EMAIL_PASSWORD == $scene) {
            if (!isset($data['email']) || $data['email'] == '') {
                return '请输入邮箱';
            }
            if (!isset($data['password']) || $data['password'] == '') {
                return '请输入密码';
            }
            return $this->checkPassword($data['password'], [], $data);
        }
        // 邮箱验证码登录
        if (LoginEnum::EMAIL_CAPTCHA == $scene) {
            if (!isset($data['email']) || $data['email'] == '') {
                return '请输入邮箱';
            }
            if (!isset($data['code']) || $data['code'] == '') {
                return '请输入验证码';
            }
            return $this->checkEmailCode($data['code'], [], $data);
        }

        return true;
    }

    /**
     * @notes 登录密码校验
     * @param $password
     * @param $other
     * @param $data
     * @return bool|string
     * @author 段誉
     * @date 2022/9/15 14:39
     */
    public function checkPassword($password, $other, $data): bool|string
    {
        unset($other);
        //账号安全机制，连续输错后锁定，防止账号密码暴力破解
        $userAccountSafeCache = new UserAccountSafeCache();
        if (!$userAccountSafeCache->isSafe()) {
            return '密码连续' . $userAccountSafeCache->count . '次输入错误，请' . $userAccountSafeCache->minute . '分钟后重试';
        }

        $where = [];
        if ($data['scene'] == LoginEnum::MOBILE_PASSWORD) {
            // 手机号密码登录
            $where = ['mobile' => $data['mobile']];
        }
        if ($data['scene'] == LoginEnum::EMAIL_PASSWORD) {
            // 邮箱密码登录
            $where = ['email' => $data['email']];
        }
        $userInfo = (new User())
            ->where($where)
            ->field(['id,password,is_disable'])
            ->findOrEmpty();
        if ($userInfo->isEmpty()) {
            return '用户不存在';
        }

        if ($userInfo['is_disable'] === YesNoEnum::YES) {
            return '用户已禁用';
        }

        if (empty($userInfo['password'])) {
//            $userAccountSafeCache->record();
            return '该账号未设置密码，请使用验证码登录';
        }

        $passwordSalt = Config::get('project.unique_identification');
        if ($userInfo['password'] !== create_password($password, $passwordSalt)) {
            $userAccountSafeCache->record();
            return '密码错误';
        }

        $userAccountSafeCache->relieve();

        return true;
    }

    /**
     * @notes 校验验证码
     * @param $code
     * @param $rule
     * @param $data
     * @return bool|string
     * @author Tab
     * @date 2021/8/25 15:43
     */
    public function checkCode($code, $rule, $data): bool|string
    {
        unset($rule);
        $smsDriver = new SmsDriver();
        $result = $smsDriver->verify($data['mobile'], $code, NoticeEnum::LOGIN_CAPTCHA);
        if ($result) {
            return true;
        }
        return '验证码错误';
    }

    /**
     * @notes 校验验证码
     * @param $code
     * @param $rule
     * @param $data
     * @return bool|string
     * @author Tab
     * @date 2021/8/25 15:43
     */
    public function checkEmailCode($code, $rule, $data): bool|string
    {
        $result = (new EmailService())
            ->verify($data['email'], $data['code'], NoticeEnum::LOGIN_CAPTCHA);
        if ($result) {
            return true;
        }
        return '验证码错误';
    }
}