<?php
// +----------------------------------------------------------------------
// | AI系统管理后台（PHP版）
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | 开源版本可自由商用，可去除界面版权logo
// | //
// | github下载：/likeadmin
// | 访问官网：www.localhost.com
// | 匿名公司 版权所有 拥有最终解释权
// +----------------------------------------------------------------------
// | author: 匿名开发者
// +----------------------------------------------------------------------

namespace app\adminapi\validate\article;

use app\common\validate\BaseValidate;
use app\common\model\article\ArticleCate;
use app\common\model\article\Article;

/**
 * 资讯分类管理验证
 */
class ArticleCateValidate extends BaseValidate
{
    protected $rule = [
        'id'      => 'require|checkArticleCate',
        'name'    => 'require|length:1,90',
        'is_show' => 'require|in:0,1',
        'sort'    => 'egt:0',
    ];

    protected $message = [
        'id.require'   => '资讯分类id不能为空',
        'name.require' => '资讯分类不能为空',
        'name.length'  => '资讯分类长度须在1-90位字符',
        'sort.egt'     => '排序值不正确',
    ];

    /**
     * @notes  添加场景
     * @return ArticleCateValidate
     * @author heshihu
     * @date 2022/2/10 15:11
     */
    public function sceneAdd(): ArticleCateValidate
    {
        return $this->remove(['id'])
            ->remove('id', 'require|checkArticleCate');
    }

    /**
     * @notes  详情场景
     * @return ArticleCateValidate
     * @author heshihu
     * @date 2022/2/21 17:55
     */
    public function sceneDetail(): ArticleCateValidate
    {
        return $this->only(['id']);
    }

    /**
     * @notes  更改状态场景
     * @return ArticleCateValidate
     * @author heshihu
     * @date 2022/2/21 18:02
     */
    public function sceneStatus(): ArticleCateValidate
    {
        return $this->only(['id', 'is_show']);
    }

    /**
     * @notes  获取所有资讯分类场景
     * @return ArticleCateValidate
     * @author heshihu
     * @date 2022/2/15 10:05
     */
    public function sceneSelect(): ArticleCateValidate
    {
        return $this->only(['type']);
    }

    /**
     * @notes  删除场景
     * @return ArticleCateValidate
     * @author heshihu
     * @date 2022/2/21 17:52
     */
    public function sceneDelete(): ArticleCateValidate
    {
        return $this->only(['id'])
            ->append('id', 'checkDeleteArticleCate');
    }

    /**
     * @notes  检查指定资讯分类是否存在
     * @param $value
     * @return bool|string
     * @author heshihu
     * @date 2022/2/10 15:10
     */
    public function checkArticleCate($value): bool|string
    {
        $article_category = (new ArticleCate())->findOrEmpty($value);
        if ($article_category->isEmpty()) {
            return '资讯分类不存在';
        }
        return true;
    }

    /**
     * @notes  删除时验证该资讯分类是否已使用
     * @param $value
     * @return bool|string
     * @author heshihu
     * @date 2022/2/22 14:45
     */
    public function checkDeleteArticleCate($value): bool|string
    {
        $article = (new Article())->where('cid', $value)->findOrEmpty();
        if (!$article->isEmpty()) {
            return '资讯分类已使用，请先删除绑定该资讯分类的资讯';
        }
        return true;
    }
}