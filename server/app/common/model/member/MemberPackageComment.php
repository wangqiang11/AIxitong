<?php
// +----------------------------------------------------------------------
// | 匿名开发者
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | gitee下载：https://gitee.com/AI系统_gitee
// | github下载：https://github.com/AI系统-github
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

namespace app\common\model\member;


use app\common\enum\member\MemberPackageEnum;
use app\common\model\BaseModel;
use think\model\concern\SoftDelete;

class MemberPackageComment extends BaseModel
{
    use SoftDelete;
    protected $deleteTime = 'delete_time';


    /**
     * @notes 评价类型
     * @param $value
     * @param $data
     * @return string|string[]
     * @author ljj
     * @date 2023/4/14 3:12 下午
     */
    public function getTypeDescAttr($value,$data)
    {
        return MemberPackageEnum::getTypeDesc($data['type']);
    }

    /**
     * @notes 评价套餐
     * @param $value
     * @param $data
     * @return mixed
     * @author ljj
     * @date 2023/4/14 3:13 下午
     */
    public function getMemberPackageAttr($value,$data)
    {
        return MemberPackage::where('id',$data['member_package_id'])->value('name');
    }

    /**
     * @notes 评价等级
     * @param $value
     * @param $data
     * @return string
     * @author ljj
     * @date 2023/4/14 3:15 下午
     */
    public function getCommentLevelDescAttr($value,$data)
    {
        $result = '';
        switch ($data['comment_level']) {
            case 5:
            case 4:
                $result = '好评';
                break;
            case 3:
                $result = '中评';
                break;
            case 2:
            case 1:
                $result = '差评';
                break;
        }

        return $result;
    }

    /**
     * @notes 状态
     * @param $value
     * @param $data
     * @return string
     * @author ljj
     * @date 2023/8/25 2:41 下午
     */
    public function getStatusDescAttr($value,$data)
    {
        return $data['status'] == 1 ? '显示' : '隐藏';
    }
}