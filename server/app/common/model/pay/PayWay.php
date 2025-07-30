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

namespace app\common\model\pay;

use app\common\model\BaseModel;
use app\common\service\FileService;
use think\model\relation\HasOne;

class PayWay extends BaseModel
{
    protected $name = 'dev_pay_way';

    public function getIconAttr($value): string
    {
        return FileService::getFileUrl($value);
    }

    /**
     * @notes 关联支配配置模型
     * @return HasOne
     * @author ljj
     * @date 2021/10/11 3:04 下午
     */
    public function payConfig(): HasOne
    {
        return $this->hasOne(PayConfig::class,'id','pay_config_id');
    }
}