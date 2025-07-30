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

namespace app\api\lists\article;

use app\api\lists\BaseApiDataLists;
use app\common\enum\YesNoEnum;
use app\common\model\article\Article;

/**
 * 文章收藏列表
 * Class ArticleCollectLists
 * @package app\api\lists\article
 */
class ArticleCollectLists extends BaseApiDataLists
{
    /**
     * @notes 获取收藏列表
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @author 段誉
     * @date 2022/9/20 16:29
     */
    public function lists(): array
    {
        $field = "c.id,c.article_id,a.title,a.image,a.desc,a.is_show,
        a.click_virtual, a.click_actual,a.create_time, c.create_time as collect_time";

        $lists = (new Article())
            ->alias('a')
            ->join('article_collect c', 'c.article_id = a.id')
            ->field($field)
            ->where([
                'c.user_id' => $this->userId,
                'c.status' => YesNoEnum::YES,
                'a.is_show' => YesNoEnum::YES,
            ])
            ->order(['sort' => 'desc', 'c.id' => 'desc'])
            ->limit($this->limitOffset, $this->limitLength)
            ->append(['click'])
            ->hidden(['click_virtual', 'click_actual'])
            ->select()
            ->toArray();

        foreach ($lists as &$item) {
            $item['collect_time'] = date('Y-m-d H:i', $item['collect_time']);
        }

        return $lists;
    }

    /**
     * @notes 获取收藏数量
     * @return int
     * @throws @\think\db\exception\DbException
     * @author 段誉
     * @date 2022/9/20 16:29
     */
    public function count(): int
    {
        return (new Article())
            ->alias('a')
            ->join('article_collect c', 'c.article_id = a.id')
            ->where([
                'c.user_id' => $this->userId,
                'c.status' => YesNoEnum::YES,
                'a.is_show' => YesNoEnum::YES,
            ])
            ->count();
    }
}