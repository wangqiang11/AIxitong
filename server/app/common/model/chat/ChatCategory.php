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

namespace app\common\model\chat;

use app\common\model\BaseModel;
use think\model\concern\SoftDelete;
use think\model\relation\HasMany;

/**
 * 问答分类模型类
 */
class ChatCategory extends BaseModel
{
    use SoftDelete;

    protected string $deleteTime = 'delete_time';

    /**
     * @notes 关联对话示例模型
     * @return HasMany
     * @author fzr
     */
    public function sample(): HasMany
    {
        return $this->hasMany(ChatSample::class, 'category_id')
            ->withoutField('delete_time');
    }
}