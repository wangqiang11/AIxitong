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
 * 资讯管理模型
 * Class Article
 * @package app\common\model\article;
 */
class Article extends BaseModel
{
    use SoftDelete;

    protected string $deleteTime = 'delete_time';

    /**
     * @notes  获取分类名称
     * @param $value
     * @param $data
     * @return mixed
     * @author heshihu
     * @date 2022/2/22 9:53
     */
    public function getCateNameAttr($value, $data): mixed
    {
        unset($value);
        return (new ArticleCate())->where('id', $data['cid'])->value('name');
    }

    /**
     * @notes 浏览量
     * @param $value
     * @param $data
     * @return mixed
     * @author 段誉
     * @date 2022/9/15 11:33
     */
    public function getClickAttr($value, $data): mixed
    {
        unset($value);
        return $data['click_actual'] + $data['click_virtual'];
    }

    /**
     * @notes 设置图片域名
     * @param $value
     * @return array|string|null
     * @author 段誉
     * @date 2022/9/28 10:17
     */
    public function getContentAttr($value): array|string|null
    {
        return get_file_domain($value);
    }

    /**
     * @notes 清除图片域名
     * @param $value
     * @return array|string
     * @author 段誉
     * @date 2022/9/28 10:17
     */
    public function setContentAttr($value): array|string
    {
        return clear_file_domain($value);
    }

    /**
     * @notes 获取文章详情
     * @param int $id
     * @return array
     * @author 段誉
     * @date 2022/10/20 15:23
     */
    public static function getArticleDetailArr(int $id): array
    {
        $article = (new Article())->where(['id' => $id, 'is_show' => YesNoEnum::YES])->findOrEmpty();
        if ($article->isEmpty()) {
            return [];
        }

        // 增加点击量
        $article->click_actual += 1;
        $article->save();

        return $article->append(['click'])
            ->hidden(['click_virtual', 'click_actual'])
            ->toArray();
    }
}