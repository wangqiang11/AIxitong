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

namespace app\api\lists\music;

use app\api\lists\BaseApiDataLists;
use app\common\enum\YesNoEnum;
use app\common\model\music\MusicStyle;

/**
 * 音乐风格列表
 */
class MusicStyleLists extends BaseApiDataLists
{
    /**
     * @notes 获取列表
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @author mjf
     * @date 2024/5/29 17:40
     */
    public function lists(): array
    {
        $model = new MusicStyle();
        return $model
            ->field(['id,name,image'])
            ->where(['status'=>YesNoEnum::YES])
            ->order(['sort'=>'desc','id'=>'desc'])
            ->limit($this->limitOffset, $this->limitLength)
            ->select()
            ->toArray();
    }

    /**
     * @notes 获取数量
     * @return int
     * @throws \think\db\exception\DbException
     * @author mjf
     * @date 2024/5/29 17:40
     */
    public function count(): int
    {
        $model = new MusicStyle();
        return $model
            ->where(['status'=>YesNoEnum::YES])
            ->count();
    }
}