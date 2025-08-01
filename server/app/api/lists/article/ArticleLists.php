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
use app\common\lists\ListsSearchInterface;
use app\common\model\article\Article;
use app\common\model\article\ArticleCollect;

/**
 * 文章列表
 * Class ArticleLists
 * @package app\api\lists\article
 */
class ArticleLists extends BaseApiDataLists implements ListsSearchInterface
{
    /**
     * @notes 搜索条件
     * @return string[][]
     * @author 段誉
     * @date 2022/9/16 18:54
     */
    public function setSearch(): array
    {
        return [
            '=' => ['cid']
        ]??[];
    }

    /**
     * @notes 自定查询条件
     * @return array
     * @author 段誉
     * @date 2022/10/25 16:53
     */
    public function queryWhere(): array
    {
        $where[] = ['is_show', '=', 1];
        if (!empty($this->params['keyword'])) {
            $where[] = ['title', 'like', '%' . $this->params['keyword'] . '%'];
        }
        return $where;
    }

    /**
     * @notes 获取文章列表
     * @return array
     * @author 段誉
     * @date 2022/9/16 18:55
     */
    public function lists(): array
    {
        $orderRaw = 'sort desc, id desc';
        $sortType = $this->params['sort'] ?? 'default';

        // 最新排序
        if ($sortType == 'new') {
            $orderRaw = 'id desc';
        }

        // 最热排序
        if ($sortType == 'hot') {
            $orderRaw = 'click_actual + click_virtual desc, id desc';
        }

        $field = 'id,cid,title,desc,image,click_virtual,click_actual,create_time';
        $result = (new Article())
            ->field($field)
            ->where($this->queryWhere())
            ->where($this->searchWhere)
            ->orderRaw($orderRaw)
            ->append(['click'])
            ->hidden(['click_virtual', 'click_actual'])
            ->limit($this->limitOffset, $this->limitLength)
            ->select()->toArray();

        $articleIds = array_column($result, 'id');

        $collectIds = (new ArticleCollect())
            ->where(['user_id' => $this->userId, 'status' => YesNoEnum::YES])
            ->whereIn('article_id', $articleIds)
            ->column('article_id');

        foreach ($result as &$item) {
            $item['collect'] = in_array($item['id'], $collectIds);
        }

        return $result;
    }

    /**
     * @notes 获取文章数量
     * @return int
     * @throws @\think\db\exception\DbException
     * @author 段誉
     * @date 2022/9/16 18:55
     */
    public function count(): int
    {
        return (new Article())
            ->where($this->searchWhere)
            ->where($this->queryWhere())
            ->count();
    }
}