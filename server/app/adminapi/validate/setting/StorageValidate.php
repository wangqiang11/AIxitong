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

namespace app\adminapi\validate\setting;

use app\common\validate\BaseValidate;

/**
 * 存储引擎验证
 * Class StorageValidate
 * @package app\adminapi\validate\setting
 */
class StorageValidate extends BaseValidate
{
    protected $rule = [
        'engine' => 'require',
        'status' => 'require',
    ];

    /**
     * @notes 设置存储引擎参数场景
     * @return StorageValidate
     * @author 段誉
     * @date 2022/4/20 16:18
     */
    public function sceneSetup(): StorageValidate
    {
        return $this->only(['engine', 'status']);
    }

    /**
     * @notes 获取配置参数信息场景
     * @return StorageValidate
     * @author 段誉
     * @date 2022/4/20 16:18
     */
    public function sceneDetail(): StorageValidate
    {
        return $this->only(['engine']);
    }

    /**
     * @notes 切换存储引擎场景
     * @return StorageValidate
     * @author 段誉
     * @date 2022/4/20 16:18
     */
    public function sceneChange(): StorageValidate
    {
        return $this->only(['engine']);
    }
}