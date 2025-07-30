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

namespace app\adminapi\controller\chat;

use app\adminapi\controller\BaseAdminController;
use app\adminapi\logic\chat\ChatRecordLogic;
use app\adminapi\lists\chat\ChatRecordLists;
use think\response\Json;

/**
 * 对话记录管理
 */
class ChatRecordController extends BaseAdminController
{
    /**
     * @notes 对话记录列表
     * @return Json
     * @author fzr
     */
    public function lists(): Json
    {
        return $this->dataLists(new ChatRecordLists());
    }

    /**
     * @notes 对话记录删除
     * @return Json
     * @author fzr
     */
    public function del(): Json
    {
        $params = $this->request->post();
        ChatRecordLogic::del($params);
        return $this->success('操作成功', [], 1, 1);
    }
}