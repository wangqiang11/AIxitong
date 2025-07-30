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

namespace app\common\model\pay;

use app\common\enum\PayEnum;
use app\common\model\BaseModel;
use app\common\service\FileService;


class PayConfig extends BaseModel
{
    protected $name = 'dev_pay_config';

    // 设置json类型字段
    protected $json = ['config'];

    // 设置JSON数据返回数组
    protected $jsonAssoc = true;

    /**
     * @notes 支付图标获取器 - 路径添加域名
     * @param $value
     * @return string
     * @author ljj
     * @date 2021/7/28 2:12 下午
     */
    public function getIconAttr($value): string
    {
        return empty($value) ? '' : FileService::getFileUrl($value);
    }

    /**
     * @notes 支付方式名称获取器
     * @param $value
     * @param $data
     * @return string|string[]
     * @author ljj
     * @date 2021/7/31 2:24 下午
     */
    public function getPayWayNameAttr($value, $data): array|string
    {
        unset($value);
        return PayEnum::getPayDesc($data['pay_way']);
    }

    /**
     * @notes 处理支付默认配置
     * @param $value
     * @param $data
     * @return array|string
     * @author cjhao
     * @date 2024/7/4 16:37
     */
    public function getConfigAttr($value, $data): array|string
    {
        $mode= $value['mode'] ?? '';
        if(3 == $data['id'] && 'normal_mode' == $mode){
            $value['mode'] = 'secret_key';
        }
        return $value;
    }
}