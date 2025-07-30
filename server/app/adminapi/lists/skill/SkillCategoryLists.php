<?php
// +----------------------------------------------------------------------
// | AI系统100%开源免费商用商城系统
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | 开源版本可自由商用，可去除界面版权logo
// | 商业版本务必购买商业授权，以免引起法律纠纷
// | 禁止对系统程序代码以任何目的，任何形式的再发布
// | gitee下载：https://gitee.com/AI系统_gitee
// | github下载：https://github.com/AI系统-github
// | 访问官网：
// | 访问社区：
// | 访问手册：
// | 微信公众号：
// |  版权所有 拥有最终解释权
// +----------------------------------------------------------------------
// | author: 匿名公司
// +----------------------------------------------------------------------
namespace app\adminapi\lists\skill;
use app\adminapi\lists\BaseAdminDataLists;
use app\common\lists\ListsExcelInterface;
use app\common\lists\ListsSearchInterface;
use app\common\model\skill\SkillCategory;

/**
 * 技能类别类
 * Class CreationCategoryLists
 * @package app\common\lists\creation
 */
class SkillCategoryLists extends BaseAdminDataLists implements ListsSearchInterface,ListsExcelInterface
{
    /**
     * @notes 实现数据列表
     * @return array
     * @author 令狐冲
     * @date 2021/7/6 00:33
     */
    public function lists(): array
    {
        $skillCategoryLists = SkillCategory::where($this->searchWhere)
            ->withCount('skill')
//            ->limit($this->limitOffset, $this->limitLength)
            ->withoutField('update_time,delete_time')
            ->order(['sort'=>'desc','id'=>'asc'])
            ->select()
            ->toArray();

        foreach ($skillCategoryLists as &$item) {
            $item['status_desc'] = $item['status'] == 1 ? '开启' : '关闭';
        }

        return $skillCategoryLists;
    }

    /**
     * @notes 实现数据列表记录数
     * @return int
     * @author 令狐冲
     * @date 2021/7/6 00:34
     */
    public function count(): int
    {
        return SkillCategory::where($this->searchWhere)->count();
    }

    /**
     * @notes 设置搜索条件
     * @return array
     * @author 令狐冲
     * @date 2021/7/7 19:44
     */
    public function setSearch(): array
    {
        return [
            '%like%' => ['name'],
            '=' => ['status']
        ];
    }

    /**
     * @notes 导出文件名
     * @return string
     * @author ljj
     * @date 2023/8/24 2:49 下午
     */
    public function setFileName(): string
    {
        return '技能分类列表';
    }

    /**
     * @notes 导出字段
     * @return string[]
     * @author ljj
     * @date 2023/8/24 2:49 下午
     */
    public function setExcelFields(): array
    {
        return [
            'name' => '类别名称',
            'skill_count' => '被使用数',
            'status_desc' => '状态',
            'sort' => '排序',
            'create_time' => '创建时间',
        ];
    }
}