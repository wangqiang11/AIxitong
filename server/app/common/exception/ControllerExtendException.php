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

declare (strict_types=1);

namespace app\common\exception;

use think\Exception;

/**
 * 控制器继承异常
 * Class ControllerExtendException
 * @package app\common\exception
 */
class ControllerExtendException extends Exception
{
    /**
     * 构造方法
     * @access public
     * @param string $message
     * @param string $model
     * @param array $config
     */
    public function __construct(string $message, string $model = '', array $config = [])
    {
        $this->message = '控制器需要继承模块的基础控制器：' . $message;
        $this->model = $model;
    }
}