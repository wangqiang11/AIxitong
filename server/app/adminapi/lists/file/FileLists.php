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

namespace app\adminapi\lists\file;

use app\adminapi\lists\BaseAdminDataLists;
use app\common\enum\FileEnum;
use app\common\lists\ListsSearchInterface;
use app\common\model\file\File;
use app\common\service\FileService;

/**
 * 文件列表
 * Class FileLists
 * @package app\adminapi\lists\file
 */
class FileLists extends BaseAdminDataLists implements ListsSearchInterface
{
    /**
     * @notes 文件搜索条件
     * @return string[][]
     * @author 段誉
     * @date 2021/12/29 14:27
     */
    public function setSearch(): array
    {
        return [
            '=' => ['type', 'cid'],
            '%like%' => ['name']
        ]??[];
    }

    /**
     * @notes 获取文件列表
     * @return array
     * @throws @\think\db\exception\DataNotFoundException
     * @throws @\think\db\exception\DbException
     * @throws @\think\db\exception\ModelNotFoundException
     * @author 段誉
     * @date 2021/12/29 14:27
     */
    public function lists(): array
    {
        $lists = (new File())
            ->field(['id,cid,type,name,uri,create_time'])
            ->order('id', 'desc')
            ->where($this->searchWhere)
            ->where('source', FileEnum::SOURCE_ADMIN)
            ->limit($this->limitOffset, $this->limitLength)
            ->select()
            ->toArray();

        foreach ($lists as &$item) {
            $item['url'] = $item['uri'];
            $item['uri'] = FileService::getFileUrl($item['uri']);
        }

        return $lists;
    }

    /**
     * @notes 获取文件数量
     * @return int
     * @throws @\think\db\exception\DbException
     * @author 段誉
     * @date 2021/12/29 14:29
     */
    public function count(): int
    {
        return (new File())
            ->where($this->searchWhere)
            ->where('source', FileEnum::SOURCE_ADMIN)
            ->count();
    }
}