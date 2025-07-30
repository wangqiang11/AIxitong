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

namespace app\api\logic\chat;

use app\common\logic\BaseLogic;
use app\common\model\chat\ChatCategory;
use think\db\Query;

/**
 * 问题示例逻辑类
 */
class ChatSampleLogic extends BaseLogic
{
    /**
     * @notes 问题示例列表
     * @return array
     * @throws @\think\db\exception\DataNotFoundException
     * @throws @\think\db\exception\DbException
     * @throws @\think\db\exception\ModelNotFoundException
     * @author cjhao
     * @date 2023/4/18 17:56
     */
    public function samplesLists(): array
    {
        return (new ChatCategory())
            ->with(['sample' => function(Query $query) {
                $query->field('id,content,category_id')
                    ->where(['status'=>1])
                    ->order(['sort'=>'desc','id'=>'desc'])
                    ->select();
            }])
            ->order(['sort'=>'desc','id'=>'desc'])
            ->where(['status'=>1])
            ->field('id,name,image')
            ->select()
            ->toArray();
    }
}