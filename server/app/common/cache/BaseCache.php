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

declare(strict_types=1);

namespace app\common\cache;

use think\App;
use think\Cache;

/**
 * 缓存基础类，用于管理缓存
 * Class BaseCache
 * @package app\common\cache
 */
abstract class BaseCache extends Cache
{
    /**
     * 缓存标签
     * @var string
     */
    protected string $tagName;

    /**
     * 初始化
     */
    public function __construct()
    {
        parent::__construct(app());
        $this->tagName = get_class($this);
    }

    /**
     * @notes 重写父类set，自动打上标签
     * @param string $key
     * @param mixed $value
     * @param null $ttl
     * @return bool
     * @author 段誉
     * @date 2021/12/27 14:16
     */
    public function set($key, $value, $ttl = null): bool
    {
        return $this->store()->tag($this->tagName)->set($key, $value, $ttl);
    }

    /**
     * @notes 清除缓存类所有缓存
     * @return bool
     * @author 段誉
     * @date 2021/12/27 14:16
     */
    public function deleteTag(): bool
    {
        return $this->tag($this->tagName)->clear();
    }
}