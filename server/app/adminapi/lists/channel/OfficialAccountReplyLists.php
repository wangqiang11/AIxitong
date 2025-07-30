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

namespace app\adminapi\lists\channel;

use app\adminapi\lists\BaseAdminDataLists;
use app\common\lists\ListsSearchInterface;
use app\common\model\channel\OfficialAccountReply;

/**
 * 微信公众号回复列表
 * Class OfficialAccountLists
 * @package app\adminapi\lists
 */
class OfficialAccountReplyLists extends BaseAdminDataLists implements ListsSearchInterface
{
    /**
     * @notes 设置搜索
     * @return string[][]
     * @author 段誉
     * @date 2022/3/30 15:02
     */
    public function setSearch(): array
    {
        return [
            '=' => ['reply_type']
        ]??[];
    }

    /**
     * @notes 回复列表
     * @return array
     * @throws @\think\db\exception\DataNotFoundException
     * @throws @\think\db\exception\DbException
     * @throws @\think\db\exception\ModelNotFoundException
     * @author 段誉
     * @date 2022/3/30 15:02
     */
    public function lists(): array
    {
        $field = 'id,name,keyword,matching_type,content,content_type,status,sort,content_image';
        $field .= ',matching_type as matching_type_desc,content_type as content_type_desc,status as status_desc';

        return (new OfficialAccountReply())
            ->field($field)
            ->where($this->searchWhere)
            ->order(['sort' => 'desc', 'id' => 'desc'])
            ->limit($this->limitOffset, $this->limitLength)
            ->select()
            ->toArray();
    }

    /**
     * @notes 回复记录数
     * @return int
     * @throws @\think\db\exception\DbException
     * @author 段誉
     * @date 2022/3/30 15:02
     */
    public function count(): int
    {
        return (new OfficialAccountReply())->where($this->searchWhere)->count();
    }
}