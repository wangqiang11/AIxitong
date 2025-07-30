<?php
// +----------------------------------------------------------------------
// | AI系统管理后台（PHP版）
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | 开源版本可自由商用，可去除界面版权logo
// | gitee下载：https://gitee.com/AI系统_gitee/likeadmin
// | github下载：https://github.com/AI系统-github/likeadmin
// | 访问官网：www.localhost.com
// | 匿名公司 版权所有 拥有最终解释权
// +----------------------------------------------------------------------
// | author: 匿名开发者
// +----------------------------------------------------------------------

namespace app\api\lists;

use app\common\lists\BaseDataLists;

abstract class BaseApiDataLists extends BaseDataLists
{
    protected array $userInfo = [];
    protected int $userId = 0;

    public string $export;

    public function __construct()
    {
        parent::__construct();
        if (isset($this->request->userInfo) && $this->request->userInfo) {
            $this->userInfo = $this->request->userInfo;
            $this->userId = $this->request->userId;
        }
        $this->export = $this->request->get('export', '');
    }
}