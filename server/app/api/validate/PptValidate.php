<?php

namespace app\api\validate;

use app\common\enum\PPTEnum;
use app\common\validate\BaseValidate;

/**
 * Ai-PPT参数验证器
 */
class PptValidate extends BaseValidate
{
    protected $rule = [
        'type'   => 'require|in:'
            . PPTEnum::TYPE_BASE
            . ',' . PPTEnum::TYPE_PLUS
            . ',' . PPTEnum::TYPE_DEEP,
        'prompt' => 'require|max:500',
    ];

    protected $message = [
        'type.require'   => '参数缺失',
        'type.in'        => '参数异常',
        'prompt.require' => '请输入PPT的主题描述',
        'prompt.max'     => 'PPT主题描述不能超出500个字符',
    ];
}