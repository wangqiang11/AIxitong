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

namespace app\common\cache;

/**
 * 后台账号安全机制，连续输错后锁定，防止账号密码暴力破解
 * Class AdminAccountSafeCache
 * @package app\common\cache
 */
class UserAccountSafeCache extends BaseCache
{
    private string $key;        // 缓存次数名称
    public int $minute = 15;    // 缓存设置为15分钟，即密码错误次数达到，锁定15分钟
    public int $count = 15;     // 设置连续输错次数，即15分钟内连续输错误15次后，锁定

    public function __construct()
    {
        parent::__construct();
        $this->key = $this->tagName . request()->ip();
    }

    /**
     * @notes 记录登录错误次数
     * @author 令狐冲
     * @date 2021/6/30 01:51
     */
    public function record()
    {
        if ($this->get($this->key)) {
            //缓存存在，记录错误次数
            $this->inc($this->key, 1);
        } else {
            //缓存不存在，第一次设置缓存
            $this->set($this->key, 1, $this->minute * 60);
        }
    }

    /**
     * @notes 判断是否安全
     * @return bool
     * @author 令狐冲
     * @date 2021/6/30 01:53
     */
    public function isSafe(): bool
    {
        $count = $this->get($this->key);
        if ($count >= $this->count) {
            return false;
        }
        return true;
    }

    /**
     * @notes 删除该ip记录错误次数
     * @author 令狐冲
     * @date 2021/6/30 01:55
     */
    public function relieve()
    {
        $this->delete($this->key);
    }
}