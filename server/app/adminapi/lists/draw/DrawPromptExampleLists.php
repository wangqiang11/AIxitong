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

namespace app\adminapi\lists\draw;

use app\adminapi\lists\BaseAdminDataLists;
use app\common\enum\draw\DrawEnum;
use app\common\lists\ListsExcelInterface;
use app\common\lists\ListsSearchInterface;
use app\common\model\draw\DrawPromptExample;

/**
 * 绘图关键词示例
 * Class DrawPromptExampleLists
 * @package app\adminapi\lists\draw
 */
class DrawPromptExampleLists extends BaseAdminDataLists implements ListsSearchInterface,ListsExcelInterface
{

    /**
     * @notes 搜索条件
     * @return string[][]
     * @author 段誉
     * @date 2023/7/17 15:48
     */
    public function setSearch(): array
    {
       return [
           '=' => ['status']
       ];
    }

    public function queryWhere(): array
    {
        $drawModel = !empty($this->params['model']) ? $this->params['model'] : DrawEnum::API_SD;
        if (str_contains($drawModel, 'mj')){
            $where[] = ['model', 'like', 'mj%'];
        } else {
            $where[] = ['model', '=', $drawModel];
        }
        return $where;
    }

    /**
     * @notes 获取列表
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @author 段誉
     * @date 2023/6/27 18:51
     */
    public function lists(): array
    {
        $lists = DrawPromptExample::where($this->searchWhere)
            ->where($this->queryWhere())
            ->limit($this->limitOffset, $this->limitLength)
            ->order(['sort' => 'desc', 'id' => 'desc'])
            ->select()
            ->toArray();

        foreach ($lists as &$item) {
            $item['status_desc'] = $item['status'] == 1 ? '开启' : '关闭';
        }

        return $lists;
    }

    /**
     * @notes 获取数量
     * @return int
     * @author 段誉
     * @date 2023/6/27 18:51
     */
    public function count(): int
    {
        return DrawPromptExample::where($this->searchWhere)
            ->where($this->queryWhere())
            ->count();
    }

    /**
     * @notes 导出文件名
     * @return string
     * @author ljj
     * @date 2023/8/24 2:49 下午
     */
    public function setFileName(): string
    {
        return '绘画示例列表';
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
            'prompt' => '示例标题',
            'prompt_en' => '示例内容',
            'status_desc' => '状态',
            'sort' => '排序',
        ];
    }


}