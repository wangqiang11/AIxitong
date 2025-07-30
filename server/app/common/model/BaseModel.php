<?php
// +----------------------------------------------------------------------
// | AI系统管理后台（PHP版）
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | 开源版本可自由商用，可去除界面版权logo
// | gitee下载：https://gitee.com/AI系统_gitee/likeadmin
// | github下载：/likeadmin
// | 访问官网：www.localhost.com
// | 匿名公司 版权所有 拥有最终解释权
// +----------------------------------------------------------------------
// | author: 匿名开发者
// +----------------------------------------------------------------------

namespace app\common\model;

use app\common\service\FileService;
use think\Model;

/**
 * 基础模型
 * Class BaseModel
 * @package app\common\model
 */
class BaseModel extends Model
{
    /**
     * @notes 公共处理图片,补全路径
     * @param $value
     * @return string
     * @author 张无忌
     * @date 2021/9/10 11:02
     */
    public function getImageAttr($value): string
    {
        return trim($value) ? FileService::getFileUrl($value) : '';
    }

    /**
     * @notes 公共图片处理,去除图片域名
     * @param $value
     * @return string|array
     * @author 张无忌
     * @date 2021/9/10 11:04
     */
    public function setImageAttr($value): string|array
    {
        return trim($value) ? FileService::setFileUrl($value) : '';
    }

    public function join($join, $condition): Model
    {
        unset($join);
        unset($condition);
        return $this;
    }

    public function leftJoin($join, $condition): Model
    {
        unset($join);
        unset($condition);
        return $this;
    }

    public function exp($field, $value): Model
    {
        unset($field);
        unset($value);
        return $this;
    }
}