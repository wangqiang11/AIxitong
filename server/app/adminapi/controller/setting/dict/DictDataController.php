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

namespace app\adminapi\controller\setting\dict;

use app\adminapi\controller\BaseAdminController;
use app\adminapi\lists\setting\dict\DictDataLists;
use app\adminapi\logic\setting\dict\DictDataLogic;
use app\adminapi\validate\dict\DictDataValidate;
use think\response\Json;

/**
 * 字典数据
 */
class DictDataController extends BaseAdminController
{
    /**
     * @notes 获取字典数据列表
     * @return Json
     * @author 段誉
     * @date 2022/6/20 16:35
     */
    public function lists(): Json
    {
        return $this->dataLists(new DictDataLists());
    }

    /**
     * @notes 添加字典数据
     * @return Json
     * @author 段誉
     * @date 2022/6/20 17:13
     */
    public function add(): Json
    {
        $params = (new DictDataValidate())->post()->goCheck('add');
        DictDataLogic::save($params);
        return $this->success('添加成功', [], 1, 1);
    }

    /**
     * @notes 编辑字典数据
     * @return Json
     * @author 段誉
     * @date 2022/6/20 17:13
     */
    public function edit(): Json
    {
        $params = (new DictDataValidate())->post()->goCheck('edit');
        DictDataLogic::save($params);
        return $this->success('编辑成功', [], 1, 1);
    }

    /**
     * @notes 删除字典数据
     * @return Json
     * @author 段誉
     * @date 2022/6/20 17:13
     */
    public function delete(): Json
    {
        $params = (new DictDataValidate())->post()->goCheck('id');
        DictDataLogic::delete($params);
        return $this->success('删除成功', [], 1, 1);
    }

    /**
     * @notes 获取字典详情
     * @return Json
     * @author 段誉
     * @date 2022/6/20 17:14
     */
    public function detail(): Json
    {
        $params = (new DictDataValidate())->goCheck('id');
        $result = DictDataLogic::detail($params);
        return $this->data($result);
    }
}