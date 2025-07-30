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

namespace app\api\lists\kb;

use app\api\lists\BaseApiDataLists;
use app\common\model\kb\KbDigital;
use app\common\service\FileService;

class KbDigitalLists extends BaseApiDataLists
{
    /**
     * @notes 数字人列表
     * @return array
     * @throws @\think\db\exception\DataNotFoundException
     * @throws @\think\db\exception\DbException
     * @throws @\think\db\exception\ModelNotFoundException
     * @author fzr
     */
    public function lists(): array
    {
        $model = new KbDigital();
        return $model
            ->field(['id,name,avatar,image,is_disable'])
            ->where(['user_id'=>$this->userId])
            ->order('id desc')
            ->limit($this->limitOffset, $this->limitLength)
            ->select()
            ->toArray();
    }

    /**
     * @notes 数字人统计
     * @return int
     * @throws @\think\db\exception\DbException
     * @author fzr
     */
    public function count(): int
    {
        $model = new KbDigital();
        return $model
            ->where(['user_id'=>$this->userId])
            ->count();
    }
}