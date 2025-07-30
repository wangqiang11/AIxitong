<?php
// +----------------------------------------------------------------------
// | AI系统管理后台（PHP版）
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | 开源版本可自由商用，可去除界面版权logo
// | gitee下载：/likeadmin
// | //
// | 访问官网：www.localhost.com
// | 匿名公司 版权所有 拥有最终解释权
// +----------------------------------------------------------------------
// | author: 匿名开发者
// +----------------------------------------------------------------------

namespace app\adminapi\controller\auth;

use app\adminapi\{
    logic\auth\RoleLogic,
    lists\auth\RoleLists,
    validate\auth\RoleValidate,
    controller\BaseAdminController
};
use think\response\Json;

/**
 * 角色控制器
 */
class RoleController extends BaseAdminController
{
    /**
     * @notes 查看角色列表
     * @return Json
     * @author 段誉
     * @date 2021/12/29 11:49
     */
    public function lists(): Json
    {
        return $this->dataLists(new RoleLists());
    }
    
    /**
     * @notes 添加权限
     * @return Json
     * @author 段誉
     * @date 2021/12/29 11:49
     */
    public function add(): Json
    {
        $params = (new RoleValidate())->post()->goCheck('add');
        $res = RoleLogic::add($params);
        if (true === $res) {
            return $this->success('添加成功', [], 1, 1);
        }
        return $this->fail(RoleLogic::getError());
    }
    
    /**
     * @notes 编辑角色
     * @return Json
     * @author 段誉
     * @date 2021/12/29 14:18
     */
    public function edit(): Json
    {
        $params = (new RoleValidate())->post()->goCheck('edit');
        $res = RoleLogic::edit($params);
        if (true === $res) {
            return $this->success('编辑成功', [], 1, 1);
        }
        return $this->fail(RoleLogic::getError());
    }
    
    /**
     * @notes 删除角色
     * @return Json
     * @author 段誉
     * @date 2021/12/29 14:18
     */
    public function delete(): Json
    {
        $params = (new RoleValidate())->post()->goCheck('del');
        RoleLogic::delete($params['id']);
        return $this->success('删除成功', [], 1, 1);
    }

    /**
     * @notes 查看角色详情
     * @return Json
     * @author 段誉
     * @date 2021/12/29 14:18
     */
    public function detail(): Json
    {
        $params = (new RoleValidate())->goCheck('detail');
        $detail = RoleLogic::detail($params['id']);
        return $this->data($detail);
    }

    /**
     * @notes 获取角色数据
     * @return Json
     * @author 段誉
     * @date 2022/10/13 10:39
     */
    public function all(): Json
    {
        $result = RoleLogic::getAllData();
        return $this->data($result);
    }
}