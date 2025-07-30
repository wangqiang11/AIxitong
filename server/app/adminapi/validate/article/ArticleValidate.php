<?php
// +----------------------------------------------------------------------
// | AI系统管理后台（PHP版）
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | 开源版本可自由商用，可去除界面版权logo
// | gitee下载：https://gitee.com/AI系统_gitee/likeadmin
// | //
// | 访问官网：www.localhost.com
// | 匿名公司 版权所有 拥有最终解释权
// +----------------------------------------------------------------------
// | author: 匿名开发者
// +----------------------------------------------------------------------

namespace app\adminapi\validate\article;

use app\common\validate\BaseValidate;
use app\common\model\article\Article;

/**
 * 资讯管理验证
 */
class ArticleValidate extends BaseValidate
{
    protected $rule = [
        'id'      => 'require|checkArticle',
        'title'   => 'require|length:1,255',
        'cid'     => 'require',
        'is_show' => 'require|in:0,1',
    ];

    protected $message = [
        'id.require'    => '资讯id不能为空',
        'title.require' => '标题不能为空',
        'title.length'  => '标题长度须在1-255位字符',
        'cid.require'   => '所属栏目必须存在',
    ];

    /**
     * @notes 添加场景
     * @return ArticleValidate
     * @author heshihu
     * @date 2022/2/22 9:57
     */
    public function sceneAdd(): ArticleValidate
    {
        return $this->remove(['id'])
            ->remove('id','require|checkArticle');
    }

    /**
     * @notes 详情场景
     * @return ArticleValidate
     * @author heshihu
     * @date 2022/2/22 10:15
     */
    public function sceneDetail(): ArticleValidate
    {
        return $this->only(['id']);
    }

    /**
     * @notes  更改状态场景
     * @return ArticleValidate
     * @author heshihu
     * @date 2022/2/22 10:18
     */
    public function sceneStatus(): ArticleValidate
    {
        return $this->only(['id', 'is_show']);
    }

    /**
     * @notes  删除场景
     * @return ArticleValidate
     * @author heshihu
     * @date 2022/2/22 10:17
     */
    public function sceneDelete(): ArticleValidate
    {
        return $this->only(['id']);
    }

    /**
     * @notes  检查指定资讯是否存在
     * @param $value
     * @return bool|string
     * @author heshihu
     * @date 2022/2/22 10:11
     */
    public function checkArticle($value): bool|string
    {
        $article = (new Article())->findOrEmpty($value);
        if ($article->isEmpty()) {
            return '资讯不存在';
        }
        return true;
    }
}