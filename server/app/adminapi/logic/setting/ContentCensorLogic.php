<?php
// +----------------------------------------------------------------------
// | AI系统管理后台（PHP版）
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | 开源版本可自由商用，可去除界面版权logo
// | gitee下载：/likeadmin
// | github下载：/likeadmin
// | 访问官网：www.localhost.com
// | 匿名公司 版权所有 拥有最终解释权
// +----------------------------------------------------------------------
// | author: 匿名开发者
// +----------------------------------------------------------------------

namespace app\adminapi\logic\setting;

use app\common\logic\BaseLogic;
use app\common\service\ConfigService;

class ContentCensorLogic extends BaseLogic
{
    /**
     * @notes 审核配置详情
     * @return array
     * @author fzr
     */
    public static function detail(): array
    {
        return [
            'is_open'    => ConfigService::get('content_censor', 'is_open', 0),
            'app_id'     => ConfigService::get('content_censor', 'app_id', ''),
            'api_key'    => ConfigService::get('content_censor', 'api_key', ''),
            'secret_key' => ConfigService::get('content_censor', 'secret_key', ''),
            'ask_open'   => ConfigService::get('content_censor', 'ask_open', 0),
            'prompt_open' => ConfigService::get('content_censor','prompt_open',0), // 绘画提示词审核
            'image_open' => ConfigService::get('content_censor','image_open',0), // 绘画图片审核
            'user_open' => ConfigService::get('content_censor','user_open',0), //  用户信息审核
            'upload_image_open' => ConfigService::get('content_censor','upload_image_open',0), //  上传图片审核
        ] ?? [];
    }

    /**
     * @notes 审核配置保存
     * @param array $params
     * @author fzr
     */
    public static function save(array $params)
    {
        ConfigService::set('content_censor','is_open', $params['is_open']??0);
        ConfigService::set('content_censor','ask_open', $params['ask_open']??0);
        ConfigService::set('content_censor','app_id', $params['app_id']??'');
        ConfigService::set('content_censor','api_key', $params['api_key']??'');
        ConfigService::set('content_censor','secret_key', $params['secret_key']??'');
        ConfigService::set('content_censor','prompt_open',$params['prompt_open'] ?? 0);
        ConfigService::set('content_censor','image_open',$params['image_open'] ?? 0);
        ConfigService::set('content_censor','user_open',$params['user_open'] ?? 0);
        ConfigService::set('content_censor','upload_image_open',$params['upload_image_open'] ?? 0);
    }
}