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

namespace app\common\model\channel;

use app\common\enum\OfficialAccountEnum;
use app\common\enum\YesNoEnum;
use app\common\model\BaseModel;
use app\common\service\FileService;
use think\Collection;
use think\model\concern\SoftDelete;

/**
 * 微信公众号回复
 * Class OfficialAccountReply
 * @package app\common\model\channel
 */
class OfficialAccountReply extends BaseModel
{

    use SoftDelete;

    protected string $deleteTime = 'delete_time';

    /**
     * @notes 回复类型
     * @param $value
     * @return string
     * @author 段誉
     * @date 2022/7/25 15:43
     */
    public function getReplyTypeDescAttr($value): string
    {
        return OfficialAccountEnum::getReplyTypeDesc($value);
    }

    /**
     * @notes 匹配类型
     * @param $value
     * @return string
     * @author 段誉
     * @date 2022/7/25 15:43
     */
    public function getMatchingTypeDescAttr($value): string
    {
        return OfficialAccountEnum::getMatchingTypeDesc($value);
    }

    /**
     * @notes 内容类型
     * @param $value
     * @return string
     * @author 段誉
     * @date 2022/7/25 15:43
     */
    public function getContentTypeDescAttr($value,$data): string
    {
        return OfficialAccountEnum::getContentTypeDesc($data['content_type']);
    }

    /**
     * @notes 状态
     * @param $value
     * @return string
     * @author 段誉
     * @date 2022/7/25 15:44
     */
    public function getStatusDescAttr($value): string
    {
        return $value ? '开启' : '禁用';
    }

    /**
     * @notes 根据类型获取回复内容
     * @param $replyType
     * @return mixed
     * @author 段誉
     * @date 2022/7/25 16:04
     */
    public static function getReplyContentByType($replyType): mixed
    {
        $where = [
            'status' => YesNoEnum::YES,
            'reply_type' => $replyType
        ];
        return self::where($where)->value('content');
    }


    /**
     * @notes 根据类型获取回复内容列表
     * @param $replyType
     * @return OfficialAccountReply[]|array|Collection
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @author 段誉
     * @date 2022/7/25 16:06
     */
    public static function getReplyContentListsByType($replyType): Collection|array
    {
        $where = [
            'status' => YesNoEnum::YES,
            'reply_type' => $replyType,
        ];
        return self::where($where)->order('sort asc')->select();
    }

    /**
     * @notes 回复图片获取器
     * @param $value
     * @return string
     * @author ljj
     * @date 2023/6/13 5:27 下午
     */
    public function getContentImageAttr($value): string
    {
        return empty($value) ? '' : FileService::getFileUrl($value);
    }

    /**
     * @notes 回复图片修改器
     * @param $value
     * @return string
     * @author ljj
     * @date 2023/6/13 5:27 下午
     */
    public function setContentImageAttr($value): string
    {
        return empty($value) ? '' : FileService::setFileUrl($value);
    }
}