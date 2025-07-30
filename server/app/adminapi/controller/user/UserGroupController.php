<?php
// +----------------------------------------------------------------------
// | AI系统管理后台（PHP版）
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | 开源版本可自由商用，可去除界面版权logo
// | gitee下载：https://gitee.com/AI系统_gitee/likeadmin
// | //
// | 访问官网：www.localhost.com
// | 匿名公司 版权所有 拥有最终解释权
// +----------------------------------------------------------------------
// | author: 匿名开发者
// +----------------------------------------------------------------------

namespace app\adminapi\controller\user;

use app\adminapi\controller\BaseAdminController;
use app\adminapi\logic\user\UserGroupLogic;
use app\adminapi\validate\IDMustValidate;
use think\response\Json;

/**
 * 用户分组管理
 */
class UserGroupController extends BaseAdminController
{
    /**
     * @notes 分组列表
     * @return Json
     * @author fzr
     */
    public function lists(): Json
    {
        return $this->data(UserGroupLogic::lists());
    }

    /**
     * @notes 分组详情
     * @return Json
     * @author fzr
     */
    public function detail(): Json
    {
        (new IDMustValidate())->get()->goCheck();
        $id = $this->request->get('id', 0);

        $detail = UserGroupLogic::detail($id);
        return $this->success('OK', $detail);
    }

    /**
     * @notes 分组新增
     * @return Json
     * @author fzr
     */
    public function add(): Json
    {
        $post = $this->request->post();
        $result = UserGroupLogic::add($post);
        if ($result === true) {
            return $this->success('新增成功', [], 1, 1);
        }

        return $this->fail(UserGroupLogic::getError());
    }

    /**
     * @notes 分组编辑
     * @return Json
     * @author fzr
     */
    public function edit(): Json
    {
        $post = $this->request->post();
        $result = UserGroupLogic::edit($post);
        if ($result === true) {
            return $this->success('编辑成功', [], 1, 1);
        }

        return $this->fail(UserGroupLogic::getError());
    }

    /**
     * @notes 分组删除
     * @return Json
     * @author fzr
     */
    public function del(): Json
    {
        $post = $this->request->post();
        $result = UserGroupLogic::del($post['id']??[]);
        if ($result === true) {
            return $this->success('删除成功', [], 1, 1);
        }

        return $this->fail(UserGroupLogic::getError());
    }
}