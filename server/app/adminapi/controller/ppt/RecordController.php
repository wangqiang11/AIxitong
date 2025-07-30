<?php

namespace app\adminapi\controller\ppt;

use app\adminapi\controller\BaseAdminController;
use app\adminapi\lists\ppt\PptRecordLists;
use app\adminapi\logic\ppt\RecordLogic;
use think\response\Json;

/**
 * AI-PPT记录控制器
 */
class RecordController extends BaseAdminController
{

    /**
     * @notes 列表
     * @return Json
     * @author mjf
     * @date 2024/9/27 10:27
     */
    public function lists(): Json
    {
        return $this->dataLists(new PptRecordLists());
    }

    /**
     * @notes  详请
     * @return Json
     * @author mjf
     * @date 2024/9/27 10:28
     */
    public function detail(): Json
    {
        $id = intval($this->request->get('id'));
        $result = RecordLogic::detail($id);
        if (!$result) {
            return $this->fail('找不到数据');
        }
        return $this->data($result);
    }

    /**
     * @notes 删除
     * @return Json
     * @author mjf
     * @date 2024/9/27 10:28
     */
    public function del(): Json
    {
        $ids = $this->request->post('id', []);
        $result = RecordLogic::del($ids);
        if (!$result) {
            return $this->fail(RecordLogic::getError());
        }
        return $this->success('删除成功', [], 1, 1);
    }
}