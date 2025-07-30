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

namespace app\common\model\dept;

use app\common\model\BaseModel;
use think\model\concern\SoftDelete;

/**
 * 岗位模型
 * Class Jobs
 * @package app\common\model\dept
 */
class Jobs extends BaseModel
{
    use SoftDelete;

    protected string $deleteTime = 'delete_time';

    /**
     * @notes 状态描述
     * @param $value
     * @param $data
     * @return string
     * @author 段誉
     * @date 2022/5/25 18:03
     */
    public function getStatusDescAttr($value, $data): string
    {
        unset($value);
        return $data['status'] ? '正常' : '停用';
    }
}