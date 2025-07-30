<?php
// +----------------------------------------------------------------------
// | AI系统管理后台（PHP版）
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | 开源版本可自由商用，可去除界面版权logo
// | gitee下载：/likeadmin
// | github下载：/likeadmin
// | 访问官网：www.localhost.com
// | 匿名公司 版权所有 拥有最终解释权
// +----------------------------------------------------------------------
// | author: 匿名开发者
// +----------------------------------------------------------------------

namespace app\common\model\article;

use app\common\model\BaseModel;
use think\db\exception\DbException;
use think\model\concern\SoftDelete;
use think\model\relation\HasMany;

/**
 * 资讯分类管理模型
 * Class ArticleCate
 * @package app\common\model\article;
 */
class ArticleCate extends BaseModel
{
    use SoftDelete;

    protected string $deleteTime = 'delete_time';

    /**
     * @notes 关联文章
     * @return HasMany
     * @author 段誉
     * @date 2022/10/19 16:59
     */
    public function article(): HasMany
    {
        return $this->hasMany(Article::class, 'cid', 'id');
    }

    /**
     * @notes 状态描述
     * @param $value
     * @param $data
     * @return string
     * @author 段誉
     * @date 2022/9/15 11:25
     */
    public function getIsShowDescAttr($value, $data): string
    {
        unset($value);
        return $data['is_show'] ? '启用' : '停用';
    }

    /**
     * @notes 文章数量
     * @param $value
     * @param $data
     * @return int
     * @throws DbException
     * @author 段誉
     * @date 2022/9/15 11:32
     */
    public function getArticleCountAttr($value, $data): int
    {
        unset($value);
        return (new Article())->where(['cid' => $data['id']])->count('id');
    }
}