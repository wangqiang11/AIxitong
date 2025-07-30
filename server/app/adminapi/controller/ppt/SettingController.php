<?php

namespace app\adminapi\controller\ppt;

use app\adminapi\controller\BaseAdminController;
use app\adminapi\logic\ppt\SettingLogic;
use think\response\Json;

/**
 * AI-PPT
 * Class SettingController
 * @package app\adminapi\controller\ppt
 */
class SettingController extends BaseAdminController
{
    /**
     * @notes 基础配置
     * @return Json
     * @author mjf
     * @date 2024/9/27 9:50
     */
    public function basisConfig(): Json
    {
        $result = SettingLogic::basisConfig();
        return $this->data($result);
    }

    /**
     * @notes 基础配置保存
     * @return Json
     * @author mjf
     * @date 2024/9/27 9:50
     */
    public function basisSave(): Json
    {
        $result = SettingLogic::basisSave($this->request->post());
        if ($result === false) {
            return $this->fail(SettingLogic::getError());
        }
        return $this->success('设置成功', [], 1, 1);
    }

    /**
     * @notes 示例配置详情
     * @return Json
     * @author mjf
     * @date 2024/9/27 9:51
     */
    public function exampleConfig(): Json
    {
        $result = SettingLogic::exampleConfig();
        return $this->data($result);
    }

    /**
     * @notes 示例配置保存
     * @return Json
     * @author mjf
     * @date 2024/9/27 9:51
     */
    public function exampleSave(): Json
    {
        SettingLogic::exampleSave($this->request->post());
        return $this->success('设置成功', [], 1, 1);
    }
}