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

namespace app\adminapi\controller\auth;

use app\adminapi\controller\BaseAdminController;
use app\adminapi\lists\auth\AdminLists;
use app\adminapi\validate\auth\AdminValidate;
use app\adminapi\logic\auth\AdminLogic;
use app\adminapi\validate\auth\editSelfValidate;
use think\response\Json;

/**
 * 管理员控制器
 */
class AdminController extends BaseAdminController
{
    /**
     * @notes 查看管理员列表
     * @return Json
     * @author 段誉
     * @date 2021/12/29 9:55
     */
    public function lists(): Json
    {
        return $this->dataLists(new AdminLists());
    }

    /**
     * @notes 添加管理员
     * @return Json
     * @author 段誉
     * @date 2021/12/29 10:21
     */
    public function add(): Json
    {
        $params = (new AdminValidate())->post()->goCheck('add');
        $result = AdminLogic::add($params);
        if (true === $result) {
            return $this->success('操作成功', [], 1, 1);
        }
        return $this->fail(AdminLogic::getError());
    }

    /**
     * @notes 编辑管理员
     * @return Json
     * @author 段誉
     * @date 2021/12/29 11:03
     */
    public function edit(): Json
    {
        $params = (new AdminValidate())->post()->goCheck('edit');
        $result = AdminLogic::edit($params);
        if (true === $result) {
            return $this->success('操作成功', [], 1, 1);
        }
        return $this->fail(AdminLogic::getError());
    }

    /**
     * @notes 删除管理员
     * @return Json
     * @author 段誉
     * @date 2021/12/29 11:03
     */
    public function delete(): Json
    {
        $params = (new AdminValidate())->post()->goCheck('delete');
        $result = AdminLogic::delete($params);
        if (true === $result) {
            return $this->success('操作成功', [], 1, 1);
        }
        return $this->fail(AdminLogic::getError());
    }

    /**
     * @notes 查看管理员详情
     * @return Json
     * @author 段誉
     * @date 2021/12/29 11:07
     */
    public function detail(): Json
    {
        $params = (new AdminValidate())->goCheck('detail');
        $result = AdminLogic::detail($params);
        return $this->data($result);
    }

    /**
     * @notes 获取当前管理员信息
     * @return Json
     * @author 段誉
     * @date 2021/12/31 10:53
     */
    public function mySelf(): Json
    {
        $result = AdminLogic::detail(['id' => $this->adminId], 'auth');
        return $this->data($result);
    }

    /**
     * @notes 编辑超级管理员信息
     * @return Json
     * @author 段誉
     * @date 2022/4/8 17:54
     */
    public function editSelf(): Json
    {
        $params = (new editSelfValidate())->post()->goCheck('', ['admin_id' => $this->adminId]);
        AdminLogic::editSelf($params);
        return $this->success('操作成功', [], 1, 1);
    }
}