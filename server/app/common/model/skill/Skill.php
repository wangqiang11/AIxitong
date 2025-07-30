<?php
// +----------------------------------------------------------------------
// | AI系统100%开源免费商用商城系统
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | 开源版本可自由商用，可去除界面版权logo
// | 商业版本务必购买商业授权，以免引起法律纠纷
// | 禁止对系统程序代码以任何目的，任何形式的再发布
// | gitee下载：
// | github下载：
// | 访问官网：
// | 访问社区：
// | 访问手册：
// | 微信公众号：
// |  版权所有 拥有最终解释权
// +----------------------------------------------------------------------
// | author: 匿名公司
// +----------------------------------------------------------------------
namespace app\common\model\skill;
use app\common\model\BaseModel;

/**
 * 技能模型类
 * Class CreationCategory
 * @package app\common\model\creation
 */
class Skill extends BaseModel
{


    public function category()
    {
        return $this->hasOne(SkillCategory::class,'id','category_id');
    }


    /**
     * @notes 词汇属性
     * @param $value
     * @param $data
     * @return float
     * @author ljj
     * @date 2023/6/8 2:32 下午
     */
    public function getTemperatureAttr($value,$data)
    {
        return floatval($value);
    }

    /**
     * @notes 随机属性
     * @param $value
     * @param $data
     * @return float
     * @author ljj
     * @date 2023/6/8 2:32 下午
     */
    public function getTopPAttr($value,$data)
    {
        return floatval($value);
    }

    /**
     * @notes 话题属性
     * @param $value
     * @param $data
     * @return float
     * @author ljj
     * @date 2023/6/8 2:32 下午
     */
    public function getPresencePenaltyAttr($value,$data)
    {
        return floatval($value);
    }

    /**
     * @notes 重复属性
     * @param $value
     * @param $data
     * @return float
     * @author ljj
     * @date 2023/6/8 2:32 下午
     */
    public function getFrequencyPenaltyAttr($value,$data)
    {
        return floatval($value);
    }

}