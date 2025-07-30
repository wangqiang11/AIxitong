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

namespace app\adminapi\controller;

use app\common\service\UploadService;
use Exception;
use think\response\Json;

/**
 * 上传文件
 */
class UploadController extends BaseAdminController
{
    /**
     * @notes 上传图片
     * @return Json
     * @author 段誉
     * @date 2021/12/29 16:27
     */
    public function image(): Json
    {
        try {
            $cid = $this->request->post('cid', 0);
            $result = UploadService::image($cid);
            return $this->success('上传成功', $result);
        } catch (Exception $e) {
            return $this->fail($e->getMessage());
        }
    }

    /**
     * @notes 上传视频
     * @return Json
     * @author 段誉
     * @date 2021/12/29 16:27
     */
    public function video(): Json
    {
        try {
            $cid = $this->request->post('cid', 0);
            $result = UploadService::video($cid);
            return $this->success('上传成功', $result);
        } catch (Exception $e) {
            return $this->fail($e->getMessage());
        }
    }
}