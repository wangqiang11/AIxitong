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

namespace app\adminapi\logic\setting\dict;

use app\common\logic\BaseLogic;
use app\common\model\dict\DictData;
use app\common\model\dict\DictType;
use think\Model;

/**
 * 字典数据逻辑
 */
class DictDataLogic extends BaseLogic
{
    /**
     * @notes 添加编辑
     * @param array $params
     * @return DictData|Model
     * @author 段誉
     * @date 2022/6/20 17:13
     */
    public static function save(array $params): Model|DictData
    {
        $data = [
            'name'   => $params['name'],
            'value'  => $params['value'],
            'sort'   => $params['sort'] ?? 0,
            'status' => $params['status'],
            'remark' => $params['remark'] ?? '',
        ];

        if (!empty($params['id'])) {
            return (new DictData())->where(['id' => $params['id']])->update($data);
        } else {
            $dictType = (new DictType())->findOrEmpty($params['type_id']);
            $data['type_id'] = $params['type_id'];
            $data['type_value'] = $dictType['type'];
            return DictData::create($data);
        }
    }

    /**
     * @notes 删除字典数据
     * @param array $params
     * @return bool
     * @author 段誉
     * @date 2022/6/20 17:01
     */
    public static function delete(array $params): bool
    {
        return DictData::destroy($params['id']);
    }

    /**
     * @notes 获取字典数据详情
     * @param $params
     * @return array
     * @author 段誉
     * @date 2022/6/20 17:01
     */
    public static function detail($params): array
    {
        return (new DictData())->findOrEmpty($params['id'])->toArray();
    }
}