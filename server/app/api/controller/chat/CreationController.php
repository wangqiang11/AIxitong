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

use app\adminapi\validate\IDMustValidate;
use app\api\controller\BaseApiController;
use app\api\logic\chat\CreationLogic;
use think\response\Json;

/**
 * 创作模型管理
 */
class CreationController extends BaseApiController
{
    public array $notNeedLogin = ['category', 'lists'];

    /**
     * @notes 分类列表
     * @return Json
     * @author fzr
     */
    public function category(): Json
    {
        $lists = CreationLogic::category($this->userId);
        return $this->data($lists);
    }

    /**
     * @notes 创作模型列表
     * @return Json
     * @author fzr
     */
    public function lists(): Json
    {
        $lists = CreationLogic::lists($this->request->get(), $this->userId);
        return $this->data($lists);
    }

    /**
     * @notes 创作模型详情
     * @return Json
     */
    public function detail(): Json
    {
        (new IDMustValidate())->get()->goCheck();
        $id    = intval($this->request->get('id', 0));
        $lists = CreationLogic::detail($id);
        return $this->data($lists);
    }

    /**
     * @notes 创作模型收藏
     * @return Json
     * @author fzr
     */
    public function collect(): Json
    {
        (new IDMustValidate())->post()->goCheck();
        $id  = intval($this->request->post('id', 0));
        $result = CreationLogic::collect($id, $this->userId);
        if ($result === false) {
            return $this->fail(CreationLogic::getError());
        }
        return $this->success($result, [], 1, 1);
    }


}