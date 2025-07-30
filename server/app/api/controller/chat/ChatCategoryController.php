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

namespace app\api\controller\chat;

use app\api\controller\BaseApiController;
use app\api\lists\chat\ChatCategoryLists;
use app\api\logic\chat\ChatCategoryLogic;
use app\api\validate\chat\ChatCategoryValidate;
use think\response\Json;

/**
 * 对话分类管理
 */
class ChatCategoryController extends BaseApiController
{
    public array $notNeedLogin = ['lists'];

    /**
     * @notes 对话分类列表
     * @return Json
     * @author fzr
     */
    public function lists(): Json
    {
        return $this->dataLists(new ChatCategoryLists());
    }

    /**
     * @notes 对话分类新增
     * @return Json
     * @author fzr
     */
    public function add(): Json
    {
        $result = ChatCategoryLogic::add($this->userId);
        if ($result === false) {
            return $this->fail(ChatCategoryLogic::getError());
        }
        return $this->success();
    }

    /**
     * @notes 对话分类编辑
     * @return Json
     * @author fzr
     */
    public function edit(): Json
    {
        $params = (new ChatCategoryValidate())->post()->goCheck();
        $params['user_id'] = $this->userId;
        $result = ChatCategoryLogic::edit($params);
        if ($result === false) {
            return $this->fail(ChatCategoryLogic::getError());
        }
        return $this->success('修改成功');
    }

    /**
     * @notes 对话分类删除
     * @return Json
     * @author fzr
     */
    public function del(): Json
    {
        $params = (new ChatCategoryValidate())->post()->goCheck('id');
        $params['user_id'] = $this->userId;
        $result = ChatCategoryLogic::del($params);
        if ($result === false) {
            return $this->fail(ChatCategoryLogic::getError());
        }
        return $this->success('删除成功', [], 1, 1);
    }

    /**
     * @notes 对话分类清除
     * @return Json
     * @author fzr
     */
    public function clear(): Json
    {
        $result = ChatCategoryLogic::clear($this->userId);
        if ($result === false) {
            return $this->fail(ChatCategoryLogic::getError());
        }
        return $this->success('清除成功', [], 1, 1);
    }
}