<?php

namespace app\api\controller;

use app\api\lists\ppt\PptRecordsLists;
use app\api\logic\PptLogic;
use app\api\validate\PptValidate;
use think\response\Json;

/**
 * AI-PPT控制器
 */
class PptController extends BaseApiController
{
    public array $notNeedLogin = ['config', 'example'];

    /**
     * @notes 配置
     * @return Json
     * @author mjf
     * @date 2024/9/29 11:59
     */
    public function config(): Json
    {
        $result = PptLogic::config($this->userId);
        return $this->success('', $result);
    }

    /**
     * @notes 搜索示例
     * @return Json
     * @author mjf
     * @date 2024/9/29 11:59
     */
    public function example(): Json
    {
        $lists = PptLogic::example();
        return $this->data($lists);
    }

    /**
     * @notes 提交任务
     * @return Json
     * @author mjf
     * @date 2024/10/8 15:23
     */
    public function submit(): Json
    {
        $params = (new PptValidate())->post()->goCheck();
        $result = PptLogic::submitTask($this->userId, $params);
        if (false === $result) {
            return $this->fail(PptLogic::getError());
        }
        return $this->success('', $result);
    }

    /**
     * @notes 获取模版列表
     * @return Json
     * @author mjf
     * @date 2024/10/8 17:35
     */
    public function cover(): Json
    {
        $params = $this->request->post();
        $result = PptLogic::getCoverLists($this->userId, $params);
        if (false === $result) {
            return $this->fail(PptLogic::getError());
        }
        return $this->success('', $result);
    }

    /**
     * @notes 生成大纲及标题
     * @return Json
     * @author mjf
     * @date 2024/10/8 17:45
     */
    public function structure(): Json
    {
        $params = $this->request->post();
        $result = PptLogic::getStructure($this->userId, $params);
        if (false === $result) {
            return $this->fail(PptLogic::getError());
        }
        return $this->success('', $result);
    }

    /**
     * @notes 列表
     * @return Json
     * @author mjf
     * @date 2024/10/10 11:14
     */
    public function lists():Json
    {
        return $this->dataLists(new PptRecordsLists());
    }

    /**
     * @notes 详情
     * @return Json
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @author mjf
     * @date 2024/10/10 11:43
     */
    public function detail(): Json
    {
        $params = $this->request->get();
        $result = PptLogic::detail($this->userId, $params);
        return $this->data($result);
    }

    /**
     * @notes 删除
     * @return Json
     * @author mjf
     * @date 2024/10/29 19:54
     */
    public function del(): Json
    {
        $params = $this->request->post();
        PptLogic::del($params, $this->userId);
        return $this->success();
    }

    /**
     * @notes 扣费，下载
     * @return Json
     * @author mjf
     */
    public function download(): Json
    {
        $id = $this->request->post('id/d', 0);
        $result = PptLogic::download($this->userId, $id);
        if (false === $result) {
            return $this->fail(PptLogic::getError());
        }
        return $this->success('', $result);
    }

}