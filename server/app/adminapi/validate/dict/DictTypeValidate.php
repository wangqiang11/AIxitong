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

namespace app\adminapi\validate\dict;

use app\common\model\dict\DictData;
use app\common\model\dict\DictType;
use app\common\validate\BaseValidate;

/**
 * 字典类型验证
 */
class DictTypeValidate extends BaseValidate
{
    protected $rule = [
        'id'     => 'require|checkDictType',
        'name'   => 'require|length:1,255',
        'type'   => 'require|unique:' . DictType::class,
        'status' => 'require|in:0,1',
        'remark' => 'max:200',
    ];

    protected $message = [
        'id.require'     => '参数缺失',
        'name.require'   => '请填写字典名称',
        'name.length'    => '字典名称长度须在1~255位字符',
        'type.require'   => '请填写字典类型',
        'type.unique'    => '字典类型已存在',
        'status.require' => '请选择状态',
        'remark.max'     => '备注长度不能超过200'
    ];

    /**
     * @notes 添加场景
     * @return DictTypeValidate
     * @author 段誉
     * @date 2022/6/20 16:00
     */
    public function sceneAdd(): DictTypeValidate
    {
        return $this->remove('id', true);
    }

    /**
     * @notes 详情场景
     * @return DictTypeValidate
     * @author 段誉
     * @date 2022/6/20 16:00
     */
    public function sceneDetail(): DictTypeValidate
    {
        return $this->only(['id']);
    }

    /**
     * @notes 删除场景
     * @return DictTypeValidate
     * @author 段誉
     * @date 2022/6/20 16:03
     */
    public function sceneDelete(): DictTypeValidate
    {
        return $this->only(['id'])
            ->append('id', 'checkAbleDelete');
    }

    /**
     * @notes 检查字典类型是否存在
     * @param $value
     * @return bool|string
     * @author 段誉
     * @date 2022/6/20 16:04
     */
    protected function checkDictType($value): bool|string
    {
        $dictType = (new DictType())->findOrEmpty($value);
        if ($dictType->isEmpty()) {
            return '字典类型不存在';
        }
        return true;
    }

    /**
     * @notes 验证是否可删除
     * @param $value
     * @return bool|string
     * @throws @\think\db\exception\DataNotFoundException
     * @throws @\think\db\exception\DbException
     * @throws @\think\db\exception\ModelNotFoundException
     * @author 段誉
     * @date 2022/6/20 16:04
     */
    protected function checkAbleDelete($value): bool|string
    {
        $dictData = (new DictData())->whereIn('type_id', $value)->select();

        foreach ($dictData as $item) {
            if (!empty($item)) {
                return '字典类型已被使用，请先删除绑定该字典类型的数据';
            }
        }

        return true;
    }
}