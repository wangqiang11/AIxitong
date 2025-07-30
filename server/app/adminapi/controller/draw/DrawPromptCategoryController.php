<?php
// +----------------------------------------------------------------------
// | AI系统100%开源免费商用商城系统
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | 开源版本可自由商用，可去除界面版权logo
// | 商业版本务必购买商业授权，以免引起法律纠纷
// | 禁止对系统程序代码以任何目的，任何形式的再发布
// | gitee下载：
// | github下载：
// | 访问官网：https://www.AI系统.cn
// | 访问社区：https://home.AI系统.cn
// | 访问手册：http://doc.AI系统.cn
// | 微信公众号：AI系统技术社区
// | AI系统团队 版权所有 拥有最终解释权
// +----------------------------------------------------------------------
// | author: AI系统Team
// +----------------------------------------------------------------------

namespace app\adminapi\controller\draw;

use app\adminapi\controller\BaseAdminController;
use app\adminapi\logic\draw\DrawPromptCategoryLogic;
use app\adminapi\validate\draw\DrawPromptCategoryValidate;


/**
 * DrawCategory控制器
 * Class DrawPromptCategoryController
 * @package app\adminapi\controller\draw
 */
class DrawPromptCategoryController extends BaseAdminController
{
    /**
     * @notes 列表
     * @return mixed
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @author 段誉
     * @date 2023/6/14 17:02
     */
    public function lists()
    {
        $params = $this->request->get();
        $result = DrawPromptCategoryLogic::lists($params);
        return $this->success('', $result);
    }

    /**
     * @notes 添加
     * @return mixed
     * @author 段誉
     * @date 2023/6/14 16:18
     */
    public function add()
    {
        $params = (new DrawPromptCategoryValidate())->post()->goCheck('add');
        DrawPromptCategoryLogic::add($params);
        return $this->success('添加成功', [], 1, 1);
    }

    /**
     * @notes 编辑
     * @return mixed
     * @author 段誉
     * @date 2023/6/14 16:18
     */
    public function edit()
    {
        $params = (new DrawPromptCategoryValidate())->post()->goCheck('edit');
        DrawPromptCategoryLogic::edit($params);
        return $this->success('编辑成功', [], 1, 1);
    }

    /**
     * @notes 删除
     * @return mixed
     * @author 段誉
     * @date 2023/6/14 16:18
     */
    public function delete()
    {
        $params = (new DrawPromptCategoryValidate())->post()->goCheck('delete');
        DrawPromptCategoryLogic::delete($params);
        return $this->success('删除成功', [], 1, 1);
    }

    /**
     * @notes 详情
     * @return mixed
     * @author 段誉
     * @date 2023/6/14 16:18
     */
    public function detail()
    {
        $params = (new DrawPromptCategoryValidate())->goCheck('id');
        $result = DrawPromptCategoryLogic::detail($params);
        return $this->data($result);
    }

    /**
     * @notes 状态切换
     * @return mixed
     * @author 段誉
     * @date 2023/6/15 10:55
     */
    public function status()
    {
        $post = (new DrawPromptCategoryValidate())->post()->goCheck('id');
        DrawPromptCategoryLogic::status($post['id']);
        return $this->success('修改成功', [], 1, 1);
    }

    /**
     * @notes 全部
     * @return mixed
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @author 段誉
     * @date 2023/6/28 10:15
     */
    public function all()
    {
        $params = $this->request->get();
        $result = DrawPromptCategoryLogic::all($params);
        return $this->success('', $result);
    }

}