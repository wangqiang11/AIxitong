<?php
// +----------------------------------------------------------------------
// | AI系统管理后台（PHP版）
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | 开源版本可自由商用，可去除界面版权logo
// | gitee下载：/likeadmin
// | //
// | 访问官网：www.localhost.com
// | 匿名公司 版权所有 拥有最终解释权
// +----------------------------------------------------------------------
// | author: 匿名开发者
// +----------------------------------------------------------------------

namespace app\adminapi\controller;

use app\common\cache\ExportCache;
use app\common\service\JsonService;
use think\response\File;
use think\response\Json;

/**
 * 下载管理
 */
class DownloadController extends BaseAdminController
{
    public array $notNeedLogin = ['export'];

    /**
     * @notes 导出文件
     * @return File|Json
     * @author 段誉
     * @date 2022/11/24 16:10
     */
    public function export(): File|Json
    {
        // 获取文件缓存的key
        $fileKey = request()->get('file');

        // 通过文件缓存的key获取文件储存的路径
        $exportCache = new ExportCache();
        $fileInfo = $exportCache->getFile($fileKey);

        if (empty($fileInfo)) {
            return JsonService::fail('下载文件不存在');
        }

        // 下载前删除缓存
        $exportCache->delete($fileKey);

        return download($fileInfo['src'] . $fileInfo['name'], $fileInfo['name']);
    }
}