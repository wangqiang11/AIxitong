<?php
// +----------------------------------------------------------------------
// | AI系统管理后台（PHP版）
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | 开源版本可自由商用，可去除界面版权logo
// | //
// | github下载：/likeadmin
// | 访问官网：www.localhost.com
// | 匿名公司 版权所有 拥有最终解释权
// +----------------------------------------------------------------------
// | author: 匿名开发者
// +----------------------------------------------------------------------

namespace app\api\controller;

use app\common\controller\BaseLikeAdminController;

/**
 * API基类
 */
class BaseApiController extends BaseLikeAdminController
{
    protected int $userId = 0;
    protected int $terminal = 0;
    protected array $userInfo = [];

    public function initialize()
    {
        $this->terminal = intval($this->request->header('terminal', 4));
        if (isset($this->request->userInfo) && $this->request->userInfo) {
            $this->userInfo = $this->request->userInfo;
            $this->userId = $this->request->userInfo['user_id'];
        }
    }
}