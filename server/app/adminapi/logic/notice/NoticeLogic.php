<?php
// +----------------------------------------------------------------------
// | AI系统管理后台（PHP版）
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | 开源版本可自由商用，可去除界面版权logo
// | gitee下载：https://gitee.com/AI系统_gitee/likeadmin
// | github下载：/likeadmin
// | 访问官网：www.localhost.com
// | 匿名公司 版权所有 拥有最终解释权
// +----------------------------------------------------------------------
// | author: 匿名开发者
// +----------------------------------------------------------------------

namespace app\adminapi\logic\notice;

use app\common\enum\notice\NoticeEnum;
use app\common\logic\BaseLogic;
use app\common\model\notice\NoticeSetting;
use Exception;

/**
 * 通知逻辑层
 */
class NoticeLogic extends BaseLogic
{
    /**
     * @notes 查看通知设置详情
     * @param $params
     * @return array
     * @author 段誉
     * @date 2022/3/29 11:34
     */
    public static function detail($params): array
    {
        $field = 'id,type,scene_id,scene_name,scene_desc,system_notice,sms_notice,oa_notice,mnp_notice,email_notice,support';
        $noticeSetting = (new NoticeSetting())->field($field)->findOrEmpty($params['id'])->toArray();
        if (empty($noticeSetting)) {
            return [];
        }

        // 系统通知
        if (empty($noticeSetting['system_notice'])) {
            $noticeSetting['system_notice'] = [
                'title'   => '',
                'content' => '',
                'status'  => 0
            ];
        }
        $noticeSetting['system_notice']['tips'] = NoticeEnum::getOperationTips(NoticeEnum::SYSTEM, $noticeSetting['scene_id']);
        $noticeSetting['system_notice']['is_show'] = in_array(NoticeEnum::SYSTEM, explode(',', $noticeSetting['support']));

        // 短信通知
        if (empty($noticeSetting['sms_notice'])) {
            $noticeSetting['sms_notice'] = [
                'template_id' => '',
                'content'     => '',
                'status'      => 0
            ];
        }
        $noticeSetting['sms_notice']['tips'] = NoticeEnum::getOperationTips(NoticeEnum::SMS, $noticeSetting['scene_id']);
        $noticeSetting['sms_notice']['is_show'] = in_array(NoticeEnum::SMS, explode(',', $noticeSetting['support']));

        // 公众号通知
        if (empty($noticeSetting['oa_notice'])) {
            $noticeSetting['oa_notice'] = [
                'template_id' => '',
                'template_sn' => '',
                'name'        => '',
                'first'       => '',
                'remark'      => '',
                'tpl'         => [],
                'status'      => 0
            ];
        }
        $noticeSetting['oa_notice']['tips'] = NoticeEnum::getOperationTips(NoticeEnum::MNP, $noticeSetting['scene_id']);
        $noticeSetting['oa_notice']['is_show'] = in_array(NoticeEnum::OA, explode(',', $noticeSetting['support']));

        // 小程序通知
        if (empty($noticeSetting['mnp_notice'])) {
            $noticeSetting['mnp_notice'] = [
                'template_id' => '',
                'template_sn' => '',
                'name'        => '',
                'tpl'         => [],
                'status'      => 0
            ];
        }
        $noticeSetting['mnp_notice']['tips'] = NoticeEnum::getOperationTips(NoticeEnum::MNP, $noticeSetting['scene_id']);
        $noticeSetting['mnp_notice']['is_show'] = in_array(NoticeEnum::MNP, explode(',', $noticeSetting['support']));


        // 邮箱通知
        if (empty($noticeSetting['email_notice'])) {
            $noticeSetting['email_notice'] = [
                'type'    => 'email',
                'title'   => '',
                'content' => '',
                'status'  => 0,
            ];
        }

        $noticeSetting['email_notice']['tips'] = NoticeEnum::getOperationTips(NoticeEnum::EMAIL, $noticeSetting['scene_id']);
        $noticeSetting['email_notice']['is_show'] = in_array(NoticeEnum::EMAIL, explode(',', $noticeSetting['support']));

        $noticeSetting['default'] = '';
        $noticeSetting['type'] = NoticeEnum::getTypeDesc($noticeSetting['type']);
        return $noticeSetting;
    }

    /**
     * @notes 通知设置
     * @param $params
     * @return bool
     * @author 段誉
     * @date 2022/3/29 11:34
     */
    public static function set($params): bool
    {
        try {
            // 校验参数
            self::checkSet($params);
            // 拼装更新数据
            $updateData = [];
            foreach ($params['template'] as $item) {
                $updateData[$item['type'] . '_notice'] = json_encode($item, JSON_UNESCAPED_UNICODE);
            }
            // 更新通知设置
            (new NoticeSetting())->where('id', $params['id'])->update($updateData);
            return true;
        } catch (Exception $e) {
            self::setError($e->getMessage());
            return false;
        }
    }

    /**
     * @notes 校验参数
     * @param $params
     * @throws Exception
     * @author 段誉
     * @date 2022/3/29 11:35
     */
    public static function checkSet($params)
    {
        $noticeSetting = (new NoticeSetting())->findOrEmpty($params['id'] ?? 0);
        if ($noticeSetting->isEmpty()) {
            throw new Exception('通知配置不存在');
        }

        if (!isset($params['template']) || !is_array($params['template']) || count($params['template']) == 0) {
            throw new Exception('模板配置不存在或格式错误');
        }

        // 通知类型
        $noticeType = ['system', 'sms', 'oa', 'mnp', 'email'];

        foreach ($params['template'] as $item) {
            if (!is_array($item)) {
                throw new Exception('模板项格式错误');
            }

            if (!isset($item['type']) || !in_array($item['type'], $noticeType)) {
                throw new Exception('模板项缺少模板类型或模板类型有误');
            }

            switch ($item['type']) {
                case 'system';
                    self::checkSystem($item);
                    break;
                case 'sms';
                    self::checkSms($item);
                    break;
                case 'oa';
                    self::checkOa($item);
                    break;
                case 'mnp';
                    self::checkMnp($item);
                    break;
                case "email";
                    self::checkEmail($item);
                    break;
            }
        }
    }

    /**
     * @notes 校验系统通知参数
     * @param $item
     * @throws Exception
     * @author 段誉
     * @date 2022/3/29 11:35
     */
    public static function checkSystem($item)
    {
        if (!isset($item['title']) || !isset($item['content']) || !isset($item['status'])) {
            throw new Exception('系统通知必填参数：title、content、status');
        }
    }

    /**
     * @notes 校验短信通知必填参数
     * @param $item
     * @throws Exception
     * @author 段誉
     * @date 2022/3/29 11:35
     */
    public static function checkSms($item)
    {
        if (!isset($item['template_id']) || !isset($item['content']) || !isset($item['status'])) {
            throw new Exception('短信通知必填参数：template_id、content、status');
        }
    }

    /**
     * @notes 校验微信模板消息参数
     * @param $item
     * @throws Exception
     * @author 段誉
     * @date 2022/3/29 11:35
     */
    public static function checkOa($item)
    {
        if (!isset($item['template_id']) || !isset($item['template_sn']) || !isset($item['name']) || !isset($item['first']) || !isset($item['remark']) || !isset($item['tpl']) || !isset($item['status'])) {
            throw new Exception('微信模板消息必填参数：template_id、template_sn、name、first、remark、tpl、status');
        }
    }

    /**
     * @notes 校验微信小程序提醒必填参数
     * @param $item
     * @throws Exception
     * @author 段誉
     * @date 2022/3/29 11:35
     */
    public static function checkMnp($item)
    {
        if (!isset($item['template_id']) || !isset($item['template_sn']) || !isset($item['name']) || !isset($item['tpl']) || !isset($item['status'])) {
            throw new Exception('微信模板消息必填参数：template_id、template_sn、name、tpl、status');
        }
    }

    /**
     * @notes 校验邮箱通知参数
     * @param $item
     * @throws Exception
     * @author ljj
     * @date 2023/7/20 3:00 下午
     */
    public static function checkEmail($item)
    {
        if (!isset($item['title']) || !isset($item['content']) || !isset($item['status'])) {
            throw new Exception('邮箱通知必填参数：title、content、status');
        }
    }
}