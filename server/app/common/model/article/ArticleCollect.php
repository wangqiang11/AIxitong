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

namespace app\common\model\article;

use app\common\enum\YesNoEnum;
use app\common\model\BaseModel;
use think\model\concern\SoftDelete;

/**
 * 资讯收藏
 * Class ArticleCollect
 * @package app\common\model\article
 */
class ArticleCollect extends BaseModel
{
    use SoftDelete;

    protected string $deleteTime = 'delete_time';

    /**
     * @notes 是否已收藏文章
     * @param $userId
     * @param $articleId
     * @return bool (true=已收藏, false=未收藏)
     * @author 段誉
     * @date 2022/10/20 15:13
     */
    public static function isCollectArticle($userId, $articleId): bool
    {
        $collect = (new ArticleCollect())
            ->where([
                'user_id'    => $userId,
                'article_id' => $articleId,
                'status'     => YesNoEnum::YES
            ])->findOrEmpty();

        return !$collect->isEmpty();
    }
}