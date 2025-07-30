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

namespace app\adminapi\controller\setting;

use app\adminapi\controller\BaseAdminController;
use app\adminapi\logic\setting\StorageLogic;
use app\adminapi\validate\setting\StorageValidate;
use think\response\Json;

/**
 * 存储设置控制器
 */
class StorageController extends BaseAdminController
{
    /**
     * @notes 获取存储引擎列表
     * @return Json
     * @author 段誉
     * @date 2022/4/20 16:13
     */
    public function lists(): Json
    {
        return $this->success('获取成功', StorageLogic::lists());
    }

    /**
     * @notes 存储配置信息
     * @return Json
     * @author 段誉
     * @date 2022/4/20 16:19
     */
    public function detail(): Json
    {
        $param = (new StorageValidate())->get()->goCheck('detail');
        return $this->success('获取成功', StorageLogic::detail($param));
    }

    /**
     * @notes 设置存储参数
     * @return Json
     * @author 段誉
     * @date 2022/4/20 16:19
     */
    public function setup(): Json
    {
        $params = (new StorageValidate())->post()->goCheck('setup');
        $result = StorageLogic::setup($params);
        if (true === $result) {
            return $this->success('配置成功', [], 1, 1);
        }
        return $this->success($result, [], 1, 1);
    }

    /**
     * @notes 切换存储引擎
     * @return Json
     * @author 段誉
     * @date 2022/4/20 16:19
     */
    public function change(): Json
    {
        $params = (new StorageValidate())->post()->goCheck('change');
        StorageLogic::change($params);
        return $this->success('切换成功', [], 1, 1);
    }
}
