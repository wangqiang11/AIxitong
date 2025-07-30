<?php
// +----------------------------------------------------------------------
// | 匿名开发者
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | gitee下载：
// | github下载：
// | 访问官网：
// | 访问社区：
// | 访问手册：
// | 微信公众号：
// | 在gitee、github等公开渠道开源版本可免费商用，未经许可不能去除前后端官方版权标识
// |  收费版本务必购买商业授权，购买去版权授权后，方可去除前后端官方版权标识
// | 禁止对系统程序代码以任何目的，任何形式的再发布
// | 版权所有并拥有最终解释权
// +----------------------------------------------------------------------
// | author: AI系统
// +----------------------------------------------------------------------

namespace app\adminapi\lists\member;


use app\adminapi\lists\BaseAdminDataLists;
use app\common\model\member\MemberPackage;
use app\common\model\member\UserMember;
use app\common\model\user\User;

class MemberPackageLists extends BaseAdminDataLists
{
    /**
     * @notes 会员套餐列表
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @author ljj
     * @date 2023/6/27 10:44 上午
     */
    public function lists(): array
    {
        $lists = MemberPackage::field('id,name,is_recommend,status,sort,create_time,describe')
            ->order(['sort'=>'desc','id'=>'desc'])
            ->limit($this->limitOffset, $this->limitLength)
            ->select()
            ->toArray();
        $ids = array_column($lists,'id');
       $packageNum = UserMember::where(['package_id'=>$ids])
           ->group('package_id')
           ->column('count(user_id) as count','package_id');
       foreach ($lists as $key => $list){
           $lists[$key]['package_num'] = $packageNum[$list['id']] ?? 0;
       }

        return $lists;
    }

    /**
     * @notes 会员套餐数量
     * @return int
     * @author ljj
     * @date 2023/6/27 10:44 上午
     */
    public function count(): int
    {
        return MemberPackage::count();
    }
}