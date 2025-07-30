<?php
// +----------------------------------------------------------------------
// | AI系统管理后台（PHP版）
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | 开源版本可自由商用，可去除界面版权logo
// | gitee下载：/likeadmin
// | //
// | 访问官网：www.localhost.com
// | 匿名公司 版权所有 拥有最终解释权
// +----------------------------------------------------------------------
// | author: 匿名开发者
// +----------------------------------------------------------------------

namespace app\api\controller;

use app\api\lists\AccountLogLists;
use app\common\enum\user\AccountLogEnum;

/**
 * 账户流水
 * Class AccountLogController
 * @package app\api\controller
 */
class AccountLogController extends BaseApiController
{
    /**
     * @notes 账户流水
     * @return \think\response\Json
     * @author 段誉
     * @date 2023/2/24 14:34
     */
    public function lists()
    {
        return $this->dataLists(new AccountLogLists());
    }


    /**
     * @notes 对话余额明细变动类型
     * @return \think\response\Json
     * @author 段誉
     * @date 2023/2/24 15:25
     */
    public function getUmChangeType()
    {
        return $this->data(AccountLogEnum::getBalanceChangeTypeDesc());
    }


    /**
     * @notes 佣金明细变动类型
     * @return mixed
     * @author ljj
     * @date 2023/5/24 6:25 下午
     */
    public function getMoneyChangeType()
    {
        return $this->data(AccountLogEnum::getUserMoneyChangeTypeDesc());
    }


//    /**
//     * @notes 佣金余额明细变动类型
//     * @return mixed
//     * @author ljj
//     * @date 2023/6/28 3:22 下午
//     */
//    public function getDrawChangeType()
//    {
//        return $this->data(AccountLogEnum::getBalanceDrawChangeTypeDesc());
//    }
}