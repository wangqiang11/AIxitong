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

namespace app\adminapi\logic\dept;

use app\common\enum\YesNoEnum;
use app\common\logic\BaseLogic;
use app\common\model\dept\Jobs;
use Exception;

/**
 * 岗位管理逻辑
 * Class JobsLogic
 * @package app\adminapi\logic\dept
 */
class JobsLogic extends BaseLogic
{
    /**
     * @notes 新增岗位
     * @param array $params
     * @author 段誉
     * @date 2022/5/26 9:58
     */
    public static function add(array $params)
    {
        Jobs::create([
            'name'   => $params['name'],
            'code'   => $params['code'],
            'sort'   => $params['sort'] ?? 0,
            'status' => $params['status'],
            'remark' => $params['remark'] ?? '',
        ]);
    }

    /**
     * @notes 编辑岗位
     * @param array $params
     * @return bool
     * @author 段誉
     * @date 2022/5/26 9:58
     */
    public static function edit(array $params) : bool
    {
        try {
            Jobs::update([
                'id'     => $params['id'],
                'name'   => $params['name'],
                'code'   => $params['code'],
                'sort'   => $params['sort'] ?? 0,
                'status' => $params['status'],
                'remark' => $params['remark'] ?? '',
            ]);
            return true;
        } catch (Exception $e) {
            self::setError($e->getMessage());
            return false;
        }
    }

    /**
     * @notes 删除岗位
     * @param array $params
     * @author 段誉
     * @date 2022/5/26 9:59
     */
    public static function delete(array $params)
    {
        Jobs::destroy($params['id']);
    }

    /**
     * @notes 获取岗位详情
     * @param $params
     * @return array
     * @author 段誉
     * @date 2022/5/26 9:59
     */
    public static function detail($params) : array
    {
        return (new Jobs())->findOrEmpty($params['id'])->toArray();
    }

    /**
     * @notes 岗位数据
     * @return array
     * @throws @\think\db\exception\DataNotFoundException
     * @throws @\think\db\exception\DbException
     * @throws @\think\db\exception\ModelNotFoundException
     * @author 段誉
     * @date 2022/10/13 10:30
     */
    public static function getAllData(): array
    {
        return (new Jobs())
            ->where(['status' => YesNoEnum::YES])
            ->order(['sort' => 'desc', 'id' => 'desc'])
            ->select()
            ->toArray();
    }
}