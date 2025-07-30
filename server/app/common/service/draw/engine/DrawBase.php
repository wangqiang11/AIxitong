<?php
// +----------------------------------------------------------------------
// | AI系统有特色的全开源社交分销电商系统
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | 商业用途务必购买系统授权，以免引起不必要的法律纠纷
// | 禁止对系统程序代码以任何目的，任何形式的再发布
// | 微信公众号：好象科技
// | 访问官网：http://www.likemarket.net
// | 访问社区：http://bbs.likemarket.net
// | 访问手册：http://doc.likemarket.net
// | 好象科技开发团队 版权所有 拥有最终解释权
// +----------------------------------------------------------------------
// | Author: 匿名公司
// +----------------------------------------------------------------------

namespace app\common\service\draw\engine;

abstract class DrawBase
{
    // 绘图请求基础域名
    protected string $baseUrl;

    // 请求头
    protected array $headers;

    // 回调地址
    protected string $notifyHook;

    // 任务id
    protected string $taskId;

    // 图片id (一般为第一次提交绘图时,绘图平台返回的图片id)
    protected string $imageId;

    // 垫图地址
    protected string $imageBase;

    // 文生图，图生图
    abstract public function imagine(array $params);

    // 图片放大变换
    abstract public function imagineUv(array $params);
}