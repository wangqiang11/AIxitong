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

namespace app\adminapi\controller\crontab;

use app\adminapi\controller\BaseAdminController;
use app\adminapi\lists\crontab\CrontabLists;
use app\adminapi\logic\crontab\CrontabLogic;
use app\adminapi\validate\crontab\CrontabValidate;
use think\response\Json;

/**
 * 定时任务控制器
 */
class CrontabController extends BaseAdminController
{
    /**
     * @notes 定时任务列表
     * @return Json
     * @author 段誉
     * @date 2022/3/29 14:27
     */
    public function lists(): Json
    {
        return $this->dataLists(new CrontabLists());
    }

    /**
     * @notes 添加定时任务
     * @return Json
     * @author 段誉
     * @date 2022/3/29 14:27
     */
    public function add(): Json
    {
        $params = (new CrontabValidate())->post()->goCheck('add');
        $result = CrontabLogic::add($params);
        if($result) {
            return $this->success('添加成功', [], 1, 1);
        }
        return $this->fail(CrontabLogic::getError());
    }

    /**
     * @notes 查看定时任务详情
     * @return Json
     * @author 段誉
     * @date 2022/3/29 14:27
     */
    public function detail(): Json
    {
        $params = (new CrontabValidate())->goCheck('detail');
        $result = CrontabLogic::detail($params);
        return $this->data($result);
    }

    /**
     * @notes 编辑定时任务
     * @return Json
     * @author 段誉
     * @date 2022/3/29 14:27
     */
    public function edit(): Json
    {
        $params = (new CrontabValidate())->post()->goCheck('edit');
        $result = CrontabLogic::edit($params);
        if($result) {
            return $this->success('编辑成功', [], 1, 1);
        }
        return $this->fail(CrontabLogic::getError());
    }

    /**
     * @notes 删除定时任务
     * @return Json
     * @author 段誉
     * @date 2022/3/29 14:27
     */
    public function delete(): Json
    {
        $params = (new CrontabValidate())->post()->goCheck('delete');
        $result = CrontabLogic::delete($params);
        if($result) {
            return $this->success('删除成功', [], 1, 1);
        }
        return $this->fail('删除失败');
    }

    /**
     * @notes 操作定时任务
     * @return Json
     * @author 段誉
     * @date 2022/3/29 14:28
     */
    public function operate(): Json
    {
        $params = (new CrontabValidate())->post()->goCheck('operate');
        $result = CrontabLogic::operate($params);
        if($result) {
            return $this->success('操作成功', [], 1, 1);
        }
        return $this->fail(CrontabLogic::getError());
    }

    /**
     * @notes 获取规则执行时间
     * @return Json
     * @author 段誉
     * @date 2022/3/29 14:28
     */
    public function expression(): Json
    {
        $params = (new CrontabValidate())->goCheck('expression');
        $result = CrontabLogic::expression($params);
        return $this->data($result);
    }
}