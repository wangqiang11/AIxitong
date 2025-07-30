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

namespace app\common\cache;

class ExportCache extends BaseCache
{
    protected string $uniqid = '';

    public function __construct()
    {
        parent::__construct();
        //以微秒计的当前时间，生成一个唯一的 ID,以tagName为前缀
        $this->uniqid = md5(uniqid($this->tagName,true).mt_rand());
    }

    /**
     * @notes 获取excel缓存目录
     * @return string
     * @author 令狐冲
     * @date 2021/7/28 17:36
     */
    public function getSrc(): string
    {
        return app()->getRootPath() . 'runtime/file/export/'.date('Y-m').'/'.$this->uniqid.'/';
    }

    /**
     * @notes 设置文件路径缓存地址
     * @param $fileName
     * @return string
     * @author 令狐冲
     * @date 2021/7/28 17:36
     */
    public function setFile($fileName): string
    {
        $src = $this->getSrc();
        $key = md5($src . $fileName) . time();
        $this->set($key, ['src' => $src, 'name' => $fileName], 300);
        return $key;
    }

    /**
     * @notes 获取文件缓存的路径
     * @param $key
     * @return mixed
     * @author 令狐冲
     * @date 2021/7/26 18:36
     */
    public function getFile($key): mixed
    {
        return $this->get($key);
    }
}