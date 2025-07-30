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

namespace app\adminapi\controller\dept;

use app\adminapi\controller\BaseAdminController;
use app\adminapi\lists\dept\JobsLists;
use app\adminapi\logic\dept\JobsLogic;
use app\adminapi\validate\dept\JobsValidate;
use think\response\Json;

/**
 * 岗位管理控制器
 */
class JobsController extends BaseAdminController
{
    /**
     * @notes 岗位列表
     * @return Json
     * @author 段誉
     * @date 2022/5/26 10:00
     */
    public function lists(): Json
    {
        return $this->dataLists(new JobsLists());
    }

    /**
     * @notes 添加岗位
     * @return Json
     * @author 段誉
     * @date 2022/5/25 18:40
     */
    public function add(): Json
    {
        $params = (new JobsValidate())->post()->goCheck('add');
        JobsLogic::add($params);
        return $this->success('添加成功', [], 1, 1);
    }

    /**
     * @notes 编辑岗位
     * @return Json
     * @author 段誉
     * @date 2022/5/25 18:41
     */
    public function edit(): Json
    {
        $params = (new JobsValidate())->post()->goCheck('edit');
        $result = JobsLogic::edit($params);
        if (true === $result) {
            return $this->success('编辑成功', [], 1, 1);
        }
        return $this->fail(JobsLogic::getError());
    }

    /**
     * @notes 删除岗位
     * @return Json
     * @author 段誉
     * @date 2022/5/25 18:41
     */
    public function delete(): Json
    {
        $params = (new JobsValidate())->post()->goCheck('delete');
        JobsLogic::delete($params);
        return $this->success('删除成功', [], 1, 1);
    }

    /**
     * @notes 获取岗位详情
     * @return Json
     * @author 段誉
     * @date 2022/5/25 18:41
     */
    public function detail(): Json
    {
        $params = (new JobsValidate())->goCheck('detail');
        $result = JobsLogic::detail($params);
        return $this->data($result);
    }

    /**
     * @notes 获取岗位数据
     * @return Json
     * @author 段誉
     * @date 2022/10/13 10:31
     */
    public function all(): Json
    {
        $result = JobsLogic::getAllData();
        return $this->data($result);
    }
}