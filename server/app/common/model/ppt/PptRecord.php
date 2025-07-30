<?php

namespace app\common\model\ppt;

use app\common\model\BaseModel;
use app\common\service\FileService;
use think\model\concern\SoftDelete;

/**
 * Ai-PPT记录模型
 */
class PptRecord extends BaseModel
{
    use SoftDelete;

    protected $name = 'ppt_record';

    protected $json = ['preview', 'response'];
    protected $jsonAssoc = true;

    protected string $deleteTime = 'delete_time';

    /**
     * @notes 预览图
     * @param $value
     * @param $data
     * @return array
     * @author mjf
     * @date 2024/10/10 11:24
     */
    public function getPreviewAttr($value, $data): array
    {
        if (empty($value) || !is_array($value)) {
            return [];
        }

        foreach ($value as $key => $item) {
            $value[$key] = FileService::getFileUrl($item);
        }
        return $value;
    }

    /**
     * @notes 文件地址
     * @param $value
     * @param $data
     * @return string
     * @author mjf
     * @date 2024/10/10 14:26
     */
    public function setFileUrlAttr($value, $data): string
    {
        return trim($value) ? FileService::setFileUrl($value) : '';
    }

    /**
     * @notes 文件地址
     * @param $value
     * @param $data
     * @return string
     * @author mjf
     * @date 2024/10/10 14:26
     */
    public function getFileUrlAttr($value, $data): string
    {
        return trim($value) ? FileService::getFileUrl($value) : '';
    }
}