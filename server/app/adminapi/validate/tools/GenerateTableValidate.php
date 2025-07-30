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

namespace app\adminapi\validate\tools;

use app\common\model\tools\GenerateTable;
use app\common\validate\BaseValidate;
use think\facade\Db;

/**
 * 代码生成选择表验证
 */
class GenerateTableValidate extends BaseValidate
{
    protected $rule = [
        'id'    => 'require|checkTableData',
        'table' => 'require|array|checkTable',
        'file'  => 'require'
    ];

    protected $message = [
        'id.require'    => '参数缺失',
        'table.require' => '参数缺失',
        'table.array'   => '参数类型错误',
        'file.require'  => '下载失败'
    ];

    /**
     * @notes 选择数据表场景
     * @return GenerateTableValidate
     * @author 段誉
     * @date 2022/6/15 18:58
     */
    public function sceneSelect(): GenerateTableValidate
    {
        return $this->only(['table']);
    }

    /**
     * @notes 需要校验id的场景
     * @return GenerateTableValidate
     * @author 段誉
     * @date 2022/6/15 18:58
     */
    public function sceneId(): GenerateTableValidate
    {
        return $this->only(['id']);
    }

    /**
     * @notes 下载场景
     * @return GenerateTableValidate
     * @author 段誉
     * @date 2022/6/24 10:02
     */
    public function sceneDownload(): GenerateTableValidate
    {
        return $this->only(['file']);
    }

    /**
     * @notes 校验选择的数据表信息
     * @param $value
     * @return bool|string
     * @author 段誉
     * @date 2022/6/15 18:58
     */
    protected function checkTable($value): bool|string
    {
        foreach ($value as $item) {
            if (!isset($item['name']) || !isset($item['comment'])) {
                return '参数缺失';
            }
            $exist = Db::query("SHOW TABLES LIKE'" . $item['name'] . "'");
            if (empty($exist)) {
                return '当前数据库不存在' . $item['name'] . '表';
            }
        }
        return true;
    }

    /**
     * @notes 校验当前数据表是否存在
     * @param $value
     * @return bool|string
     * @author 段誉
     * @date 2022/6/15 18:58
     */
    protected function checkTableData($value): bool|string
    {
        if (!is_array($value)) {
            $value = [$value];
        }

        foreach ($value as $item) {
            $table = (new GenerateTable())->findOrEmpty($item);
            if ($table->isEmpty()) {
                return '信息不存在';
            }
        }

        return true;
    }
}