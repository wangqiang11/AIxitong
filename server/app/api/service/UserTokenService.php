<?php
// +----------------------------------------------------------------------
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

namespace app\api\service;

use app\common\cache\UserTokenCache;
use app\common\model\user\User;
use app\common\model\user\UserSession;
use think\facade\Config;

class UserTokenService
{
    /**
     * @notes 设置或更新用户token
     * @param $userId
     * @param $terminal
     * @return mixed
     * @throws @\think\db\exception\DataNotFoundException
     * @throws @\think\db\exception\DbException
     * @throws @\think\db\exception\ModelNotFoundException
     * @author 段誉
     * @date 2022/9/16 10:10
     */
    public static function setToken($userId, $terminal): mixed
    {
        $time = time();
        $modelUserSession = new UserSession();

        //获取token延长过期的时间
        $expireTime = $time + Config::get('project.user_token.expire_duration');
        $userTokenCache = new UserTokenCache();

        //是否支持多处登录 [1=支持, 0=不支持]
        $multipoint_login = (new User())->where(['id'=>$userId])->value('multipoint_login');
        if (!$multipoint_login) {
            $sessionList = $modelUserSession->where([['user_id', '=', $userId]])->select()->toArray();
            $modelUserSession->where([['user_id', '=', $userId]])->delete();
            foreach ($sessionList as $item) {
                $userTokenCache->deleteUserInfo($item['token']);
            }
        }

        //token处理
        $newToken = create_token($userId);
        $userSession = (new UserSession())->where([['user_id', '=', $userId], ['terminal', '=', $terminal]])->find();
        if ($userSession and !$multipoint_login) {
            //清空缓存
            $userTokenCache->deleteUserInfo($userSession->token);
            //重新获取token
            $userSession->token = $newToken;
            $userSession->expire_time = $expireTime;
            $userSession->update_time = $time;
            $userSession->save();
        } else {
            //找不到在该终端的token记录，创建token记录
            $userSession = UserSession::create([
                'user_id'     => $userId,
                'terminal'    => $terminal,
                'token'       => $newToken,
                'expire_time' => $expireTime
            ]);
        }

        return $userTokenCache->setUserInfo($newToken);
    }

    /**
     * @notes 延长token过期时间
     * @param $token
     * @return mixed
     * @throws @\think\db\exception\DataNotFoundException
     * @throws @\think\db\exception\DbException
     * @throws @\think\db\exception\ModelNotFoundException
     * @author 段誉
     * @date 2022/9/16 10:10
     */
    public static function overtimeToken($token): mixed
    {
        $time = time();
        $adminSession = (new UserSession())->where('token', '=', $token)->find();
        //延长token过期时间
        if ($adminSession) {
            $adminSession->expire_time = $time + Config::get('project.user_token.expire_duration');
            $adminSession->update_time = $time;
            $adminSession->save();
            return (new UserTokenCache())->setUserInfo($adminSession->token);
        }
        return false;
    }

    /**
     * @notes 设置token为过期
     * @param $token
     * @return bool
     * @throws @\think\db\exception\DataNotFoundException
     * @throws @\think\db\exception\DbException
     * @throws @\think\db\exception\ModelNotFoundException
     * @author 段誉
     * @date 2022/9/16 10:10
     */
    public static function expireToken($token): bool
    {
        $userSession = (new UserSession())->where('token', '=', $token)
            ->find();
        if (empty($userSession)) {
            return false;
        }

        $time = time();
        $userSession->expire_time = $time;
        $userSession->update_time = $time;
        $userSession->save();

        return (new  UserTokenCache())->deleteUserInfo($token);
    }
}