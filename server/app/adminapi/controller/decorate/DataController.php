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

namespace app\adminapi\controller\decorate;

use app\adminapi\controller\BaseAdminController;
use app\adminapi\logic\decorate\DecorateDataLogic;
use think\response\Json;

/**
 * 装修-数据
 */
class DataController extends BaseAdminController
{
    /**
     * @notes 文章列表
     * @return Json
     * @author 段誉
     * @date 2022/9/22 16:50
     */
    public function article(): Json
    {
        $limit = $this->request->get('limit/d', 10);
        $result = DecorateDataLogic::getArticleLists($limit);
        return $this->success('获取成功', $result);
    }
}