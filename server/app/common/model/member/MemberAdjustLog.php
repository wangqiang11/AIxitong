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
// |  务必购买商业授权，购买去版权授权后，方可去除前后端官方版权标识
// | 禁止对系统程序代码以任何目的，任何形式的再发布
// | AI系统团队版权所有并拥有最终解释权
// +----------------------------------------------------------------------
// | author: AI系统
// +----------------------------------------------------------------------

namespace app\common\model\member;


use app\common\model\BaseModel;
use think\model\concern\SoftDelete;

/**
 * 会员调整记录类
 * Class MemberAdjustLog
 * @package app\common\model\member
 */
class MemberAdjustLog extends BaseModel
{

    use SoftDelete;
    protected $deleteTime = 'delete_time';

    protected $json = ['package_snap'];

    // 设置JSON数据返回数组
    protected $jsonAssoc = true;
}