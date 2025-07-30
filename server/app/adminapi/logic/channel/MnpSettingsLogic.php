<?php
// +----------------------------------------------------------------------
// | AI系统管理后台（PHP版）
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | 开源版本可自由商用，可去除界面版权logo
// | gitee下载：https://gitee.com/AI系统_gitee/likeadmin
// | //
// | 访问官网：www.localhost.com
// | 匿名公司 版权所有 拥有最终解释权
// +----------------------------------------------------------------------
// | author: 匿名开发者
// +----------------------------------------------------------------------

namespace app\adminapi\logic\channel;

use app\common\logic\BaseLogic;
use app\common\service\ConfigService;
use app\common\service\FileService;

/**
 * 小程序设置逻辑
 * Class MnpSettingsLogic
 * @package app\adminapi\logic\channel
 */
class MnpSettingsLogic extends BaseLogic
{
    /**
     * @notes 获取小程序配置
     * @return array
     * @author ljj
     * @date 2022/2/16 9:38 上午
     */
    public function getConfig(): array
    {
        $domainName = $_SERVER['SERVER_NAME'];
        $qrCode = ConfigService::get('mnp_setting', 'qr_code', '');
        $qrCode = empty($qrCode) ? $qrCode : FileService::getFileUrl($qrCode);
        return [
            'name'                  => ConfigService::get('mnp_setting', 'name', ''),
            'original_id'           => ConfigService::get('mnp_setting', 'original_id', ''),
            'qr_code'               => $qrCode,
            'app_id'                => ConfigService::get('mnp_setting', 'app_id', ''),
            'app_secret'            => ConfigService::get('mnp_setting', 'app_secret', ''),
            'request_domain'        => 'https://'.$domainName,
            'socket_domain'         => 'wss://'.$domainName,
            'upload_file_domain'    => 'https://'.$domainName,
            'download_file_domain'  => 'https://'.$domainName,
            'udp_domain'            => 'udp://'.$domainName,
            'business_domain'       => $domainName,
            'private_key'           => ConfigService::get('mnp_setting', 'private_key', ''),
        ];
    }

    /**
     * @notes 设置小程序配置
     * @param $params
     * @author ljj
     * @date 2022/2/16 9:51 上午
     */
    public function setConfig($params): void
    {
        $qrCode = isset($params['qr_code']) ? FileService::setFileUrl($params['qr_code']) : '';

        ConfigService::set('mnp_setting','name', $params['name'] ?? '');
        ConfigService::set('mnp_setting','original_id',$params['original_id'] ?? '');
        ConfigService::set('mnp_setting','qr_code',$qrCode);
        ConfigService::set('mnp_setting','app_id',$params['app_id']);
        ConfigService::set('mnp_setting','app_secret',$params['app_secret']);
        if (isset($params['private_key']) && !empty($params['private_key'])) {
            $saveDir = '../extend/miniprogram-ci/';
            if (!file_exists($saveDir)) {
                mkdir($saveDir, 0775, true);
            }
            //保存文件
            $savePath = $saveDir.'private.'.$params['app_id'].'.key';
            $f = fopen($savePath, 'w');
            fwrite($f, $params['private_key']);
            fclose($f);

            ConfigService::set('mnp_setting','private_key',$params['private_key']);
        }
    }

    /**
     * @notes 上传小程序代码
     * @param $params
     * @return array|bool
     * @author ljj
     * @date 2023/12/7 11:55 上午
     */
    public function uploadMnp($params)
    {
        try {
            //校验是否已安装miniprogram-ci工具
            if (!file_exists('../extend/miniprogram-ci/node_modules/miniprogram-ci')) {
                throw new \think\Exception('请先安装miniprogram-ci工具');
            }

            //更换小程序域名
            $baseUrl = 'weapp/config/index.js';
            $baseUrlData = file_get_contents($baseUrl);
            $domain = request()->domain(true).'/';
            $baseUrlData = str_replace("[baseUrl]",$domain,$baseUrlData);
            $f = fopen($baseUrl,"w");
            fwrite($f,$baseUrlData);
            fclose($f);

            //上传小程序代码
            $data = [
                'version' => config('project.version'),
                'desc' => $params['upload_desc'] ?? '',
                'appid' => ConfigService::get('mnp_setting', 'app_id', ''),
            ];
            $json_data = json_encode($data);
            $command = 'node ../extend/miniprogram-ci/upload.js '.escapeshellarg($json_data).' 2>&1';
            $output=null;
            $retval = null;
            exec($command, $output, $retval);
            if ($retval) {
                //错误
                $result = ['code'=>0,'msg'=>$output];
            } else {
                //成功
                $result = ['code'=>1,'msg'=>'上传成功'];
            }

            return $result;
        } catch (\Exception $e) {
            self::$error = $e->getMessage();
            return false;
        }
    }
}