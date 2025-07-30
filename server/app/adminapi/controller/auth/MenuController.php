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

use app\adminapi\controller\BaseAdminController;
use app\adminapi\lists\auth\MenuLists;
use app\adminapi\logic\auth\MenuLogic;
use app\adminapi\validate\auth\MenuValidate;
use think\response\Json;

/**
 * 系统菜单权限
 */
class MenuController extends BaseAdminController
{
    /**
     * @notes 获取菜单路由
     * @return Json
     * @author 段誉
     * @date 2022/6/29 17:41
     */
    public function route(): Json
    {
        $result = MenuLogic::getMenuByAdminId($this->adminId);
        return $this->data($result);
    }

    /**
     * @notes 获取菜单列表
     * @return Json
     * @author 段誉
     * @date 2022/6/29 17:23
     */
    public function lists()
    {
        return $this->dataLists(new MenuLists());
    }

    /**
     * @notes 菜单详情
     * @return Json
     * @author 段誉
     * @date 2022/6/30 10:07
     */
    public function detail(): Json
    {
        $params = (new MenuValidate())->goCheck('detail');
        return $this->data(MenuLogic::detail($params));
    }

    /**
     * @notes 添加菜单
     * @return Json
     * @author 段誉
     * @date 2022/6/30 10:07
     */
    public function add(): Json
    {
        $params = (new MenuValidate())->post()->goCheck('add');
        MenuLogic::add($params);
        return $this->success('操作成功', [], 1, 1);
    }

    /**
     * @notes 编辑菜单
     * @return Json
     * @author 段誉
     * @date 2022/6/30 10:07
     */
    public function edit(): Json
    {
        $params = (new MenuValidate())->post()->goCheck('edit');
        MenuLogic::edit($params);
        return $this->success('操作成功', [], 1, 1);
    }

    /**
     * @notes 删除菜单
     * @return Json
     * @author 段誉
     * @date 2022/6/30 10:07
     */
    public function delete(): Json
    {
        $params = (new MenuValidate())->post()->goCheck('delete');
        MenuLogic::delete($params);
        return $this->success('操作成功', [], 1, 1);
    }

    /**
     * @notes 更新状态
     * @return Json
     * @author 段誉
     * @date 2022/7/6 17:04
     */
    public function updateStatus(): Json
    {
        $params = (new MenuValidate())->post()->goCheck('status');
        MenuLogic::updateStatus($params);
        return $this->success('操作成功', [], 1, 1);
    }

    /**
     * @notes 获取菜单数据
     * @return Json
     * @author 段誉
     * @date 2022/10/13 11:03
     */
    public function all(): Json
    {
        $result = MenuLogic::getAllData();
        return $this->data($result);
    }
}