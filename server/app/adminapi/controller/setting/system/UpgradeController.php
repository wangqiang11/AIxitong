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
namespace app\adminapi\controller\setting\system;

use app\adminapi\controller\BaseAdminController;
use app\adminapi\lists\setting\system\UpgradeLists;
use app\adminapi\logic\setting\system\UpgradeLogic;
use app\adminapi\validate\setting\upgrade\downloadPkgValidate;
use app\adminapi\validate\setting\upgrade\UpgradeValidate;
use think\response\Json;

/**
 * 系统更新
 */
class UpgradeController extends BaseAdminController
{
    /**
     * @notes 查看系统更新列表
     * @return Json
     * @author 段誉
     * @date 2021/8/14 17:17
     */
    public function lists(): Json
    {
        return $this->dataLists(new UpgradeLists());
    }

    /**
     * @notes 执行系统更新
     * @return Json
     * @author 段誉
     * @date 2021/8/14 16:51
     */
    public function upgrade(): Json
    {
        $params = (new UpgradeValidate())->post()->goCheck();
        $params['update_type'] = 1; // 一键更新类型
        if (true === UpgradeLogic::upgrade($params)) {
            return $this->success('更新成功', [], 1, 1);
        }
        return $this->fail('更新失败:'. UpgradeLogic::getError());
    }

    /**
     * @notes 下载更新包
     * @return Json
     * @author 段誉
     * @date 2021/10/8 14:23
     */
    public function downloadPkg(): Json
    {
        $params = (new downloadPkgValidate())->post()->goCheck();
        $result = UpgradeLogic::getPkgLine($params);
        if (false === $result) {
            return $this->fail(UpgradeLogic::getError());
        }
        return $this->success('', $result);
    }
}