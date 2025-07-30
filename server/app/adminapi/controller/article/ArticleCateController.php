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

namespace app\adminapi\controller\article;

use app\adminapi\controller\BaseAdminController;
use app\adminapi\lists\article\ArticleCateLists;
use app\adminapi\logic\article\ArticleCateLogic;
use app\adminapi\validate\article\ArticleCateValidate;
use think\response\Json;

/**
 * 资讯分类管理控制器
 */
class ArticleCateController extends BaseAdminController
{
    /**
     * @notes 查看资讯分类列表
     * @return Json
     * @author heshihu
     * @date 2022/2/21 17:11
     */
    public function lists(): Json
    {
        return $this->dataLists(new ArticleCateLists());
    }

    /**
     * @notes 添加资讯分类
     * @return Json
     * @author heshihu
     * @date 2022/2/21 17:31
     */
    public function add(): Json
    {
        $params = (new ArticleCateValidate())->post()->goCheck('add');
        ArticleCateLogic::add($params);
        return $this->success('添加成功', [], 1, 1);
    }

    /**
     * @notes 编辑资讯分类
     * @return Json
     * @author heshihu
     * @date 2022/2/21 17:49
     */
    public function edit(): Json
    {
        $params = (new ArticleCateValidate())->post()->goCheck('edit');
        $result = ArticleCateLogic::edit($params);
        if (true === $result) {
            return $this->success('编辑成功', [], 1, 1);
        }
        return $this->fail(ArticleCateLogic::getError());
    }

    /**
     * @notes 删除资讯分类
     * @return Json
     * @author heshihu
     * @date 2022/2/21 17:52
     */
    public function delete(): Json
    {
        $params = (new ArticleCateValidate())->post()->goCheck('delete');
        ArticleCateLogic::delete($params);
        return $this->success('删除成功', [], 1, 1);
    }

    /**
     * @notes 资讯分类详情
     * @return Json
     * @author heshihu
     * @date 2022/2/21 17:54
     */
    public function detail(): Json
    {
        $params = (new ArticleCateValidate())->goCheck('detail');
        $result = ArticleCateLogic::detail($params);
        return $this->data($result);
    }

    /**
     * @notes 更改资讯分类状态
     * @return Json
     * @author heshihu
     * @date 2022/2/21 10:15
     */
    public function updateStatus(): Json
    {
        $params = (new ArticleCateValidate())->post()->goCheck('status');
        $result = ArticleCateLogic::updateStatus($params);
        if (true === $result) {
            return $this->success('修改成功', [], 1, 1);
        }
        return $this->fail(ArticleCateLogic::getError());
    }

    /**
     * @notes 获取文章分类
     * @return Json
     * @author 段誉
     * @date 2022/10/13 10:54
     */
    public function all(): Json
    {
        $result = ArticleCateLogic::getAllData();
        return $this->data($result);
    }
}