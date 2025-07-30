<?php
// +----------------------------------------------------------------------
// | AI系统管理后台（PHP版）
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | 开源版本可自由商用，可去除界面版权logo
// | gitee下载：/likeadmin
// | github下载：/likeadmin
// | 访问官网：www.localhost.com
// | 匿名公司 版权所有 拥有最终解释权
// +----------------------------------------------------------------------
// | author: 匿名开发者
// +----------------------------------------------------------------------

namespace app\adminapi\controller\channel;

use app\adminapi\controller\BaseAdminController;
use app\adminapi\lists\channel\OfficialAccountReplyLists;
use app\adminapi\logic\channel\OfficialAccountReplyLogic;
use app\adminapi\validate\channel\OfficialAccountReplyValidate;

use think\Response;
use think\response\Json;

/**
 * 微信公众号回复控制器
 */
class OfficialAccountReplyController extends BaseAdminController
{
    public array $notNeedLogin = ['index'];

    /**
     * @notes 查看回复列表(关注/关键词/默认)
     * @return Json
     * @author 段誉
     * @date 2022/3/29 10:58
     */
    public function lists(): Json
    {
        return $this->dataLists(new OfficialAccountReplyLists());
    }

    /**
     * @notes 添加回复(关注/关键词/默认)
     * @return Json
     * @author 段誉
     * @date 2022/3/29 10:58
     */
    public function add(): Json
    {
        $params = (new OfficialAccountReplyValidate())->post()->goCheck('add');
        $result = OfficialAccountReplyLogic::add($params);
        if ($result) {
            return $this->success('操作成功', [], 1, 1);
        }
        return $this->fail(OfficialAccountReplyLogic::getError());
    }

    /**
     * @notes 查看回复详情
     * @return Json
     * @author 段誉
     * @date 2022/3/29 10:58
     */
    public function detail(): Json
    {
        $params = (new OfficialAccountReplyValidate())->goCheck('detail');
        $result = OfficialAccountReplyLogic::detail($params);
        return $this->data($result);
    }

    /**
     * @notes 编辑回复(关注/关键词/默认)
     * @return Json
     * @author 段誉
     * @date 2022/3/29 10:58
     */
    public function edit(): Json
    {
        $params = (new OfficialAccountReplyValidate())->post()->goCheck('edit');
        $result = OfficialAccountReplyLogic::edit($params);
        if ($result) {
            return $this->success('操作成功', [], 1, 1);
        }
        return $this->fail(OfficialAccountReplyLogic::getError());
    }

    /**
     * @notes 删除回复(关注/关键词/默认)
     * @return Json
     * @author 段誉
     * @date 2022/3/29 10:59
     */
    public function delete(): Json
    {
        $params = (new OfficialAccountReplyValidate())->post()->goCheck('delete');
        OfficialAccountReplyLogic::delete($params);
        return $this->success('操作成功', [], 1, 1);
    }

    /**
     * @notes 更新排序
     * @return Json
     * @author 段誉
     * @date 2022/3/29 10:59
     */
    public function sort(): Json
    {
        $params = (new OfficialAccountReplyValidate())->post()->goCheck('sort');
        OfficialAccountReplyLogic::sort($params);
        return $this->success('操作成功', [], 1, 1);
    }

    /**
     * @notes 更新状态
     * @return Json
     * @author 段誉
     * @date 2022/3/29 10:59
     */
    public function status(): Json
    {
        $params = (new OfficialAccountReplyValidate())->post()->goCheck('status');
        OfficialAccountReplyLogic::status($params);
        return $this->success('操作成功', [], 1, 1);
    }

    /**
     * @notes 微信公众号回调
     * @return Response
     * @author 段誉
     * @date 2022/3/29 10:59
     */
    public function index(): Response
    {
        $result = OfficialAccountReplyLogic::index();
        return response($result->getBody())->header([
            'Content-Type' => 'text/plain;charset=utf-8'
        ]);
    }
}