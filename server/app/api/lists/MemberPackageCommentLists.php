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

namespace app\api\lists;


use app\common\model\member\MemberPackageComment;

class MemberPackageCommentLists extends BaseApiDataLists
{
    /**
     * @notes 会员套餐评价列表
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @author ljj
     * @date 2023/4/20 5:19 下午
     */
    public function lists(): array
    {
        $lists = MemberPackageComment::field('id,member_package_id,image,name,comment_content,comment_level,create_time')
            ->where(['status'=>1])
            ->append(['member_package'])
            ->order('sort,desc,id desc')
            ->limit($this->limitOffset, $this->limitLength)
            ->select()
            ->toArray();

        return $lists;
    }

    /**
     * @notes 会员套餐评价数量
     * @return int
     * @author ljj
     * @date 2023/4/20 5:19 下午
     */
    public function count(): int
    {
        return MemberPackageComment::where(['status'=>1])->count();
    }
}