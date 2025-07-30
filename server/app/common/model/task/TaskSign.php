<?php
// +----------------------------------------------------------------------
// | 匿名开发者
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | gitee下载：
// | github下载：
// | 访问官网：
// | 访问社区：https://home.AI系统.cn
// | 访问手册：http://doc.AI系统.cn
// | 微信公众号：AI系统技术社区
// | AI系统系列产品在gitee、github等公开渠道开源版本可免费商用，未经许可不能去除前后端官方版权标识
// |  AI系统系列产品收费版本务必购买商业授权，购买去版权授权后，方可去除前后端官方版权标识
// | 禁止对系统程序代码以任何目的，任何形式的再发布
// | AI系统团队版权所有并拥有最终解释权
// +----------------------------------------------------------------------
// | author: AI系统.cn.team
// +----------------------------------------------------------------------

namespace app\common\model\task;


use app\common\enum\user\UserTerminalEnum;
use app\common\model\BaseModel;
use app\common\model\user\User;
use think\model\concern\SoftDelete;

class TaskSign extends BaseModel
{
    use SoftDelete;
    protected $deleteTime = 'delete_time';


    /**
     * @notes 关联用户模型
     * @return \think\model\relation\HasOne
     * @author ljj
     * @date 2024/2/27 10:58 上午
     */
    public function user()
    {
        return $this->hasOne(User::class,'id','user_id')
            ->field('id,avatar,nickname');
    }

    /**
     * @notes 签到渠道
     * @param $value
     * @param $data
     * @return array|mixed|string|string[]
     * @author ljj
     * @date 2024/2/27 10:58 上午
     */
    public function getChannelDescAttr($value,$data)
    {
        return UserTerminalEnum::getTermInalDesc($data['channel']);
    }
}