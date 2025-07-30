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
// | 访问官网：https://www.AI系统.cn
// | 访问社区：https://home.AI系统.cn
// | 访问手册：http://doc.AI系统.cn
// | 微信公众号：AI系统技术社区
// | AI系统团队 版权所有 拥有最终解释权
// +----------------------------------------------------------------------
// | author: AI系统Team
// +----------------------------------------------------------------------
namespace app\adminapi\logic\setting;
use app\common\service\ConfigService;
use app\common\service\FileService;

/**
 * 分享设置逻辑类
 * Class ShareSettingLogic
 * @package app\adminapi\logic\setting
 */
class ShareSettingLogic
{

    /**
     * @notes 获取分享设置
     * @return array
     * @author cjhao
     * @date 2023/4/19 11:49
     */
    public function getConfig():array
    {
        $share_image = ConfigService::get('share', 'share_image',ConfigService::get('website', 'shop_logo'));
        $share_image = empty($share_image) ? '' : FileService::getFileUrl($share_image);
        return [
            'share_page'       => ConfigService::get('share', 'share_page',2),
            'share_title'       => ConfigService::get('share', 'share_title',''),
            'share_content'     => ConfigService::get('share', 'share_content',''),
            'share_image'       => $share_image,
        ];
    }

    /**
     * @notes 设置分享
     * @return array
     * @author cjhao
     * @date 2023/4/19 11:49
     */
    public function setConfig(array $params):bool
    {
        ConfigService::set('share', 'share_page',$params['share_page']);
        ConfigService::set('share', 'share_title',$params['share_title']);
        ConfigService::set('share', 'share_content',$params['share_content']);
        ConfigService::set('share', 'share_image',FileService::setFileUrl($params['share_image']));
        return true;
    }

}