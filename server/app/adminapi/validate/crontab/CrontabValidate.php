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

namespace app\adminapi\validate\crontab;

use app\common\validate\BaseValidate;
use Cron\CronExpression;

/**
 * 定时任务验证器
 */
class CrontabValidate extends BaseValidate
{
    protected $rule = [
        'name'       => 'require',
        'type'       => 'require|in:1',
        'command'    => 'require',
        'status'     => 'require|in:1,2,3',
        'expression' => 'require|checkExpression',
        'id'         => 'require',
        'operate'    => 'require'
    ];

    protected $message = [
        'name.require'       => '请输入定时任务名称',
        'type.require'       => '请选择类型',
        'type.in'            => '类型值错误',
        'command.require'    => '请输入命令',
        'status.require'     => '请选择状态',
        'status.in'          => '状态值错误',
        'expression.require' => '请输入运行规则',
        'id.require'         => '参数缺失',
        'operate.require'    => '请选择操作'
    ];

    /**
     * @notes 添加定时任务场景
     * @return CrontabValidate
     * @author 段誉
     * @date 2022/3/29 14:39
     */
    public function sceneAdd(): CrontabValidate
    {
        return $this->remove('id', 'require')->remove('operate', 'require');
    }

    /**
     * @notes 查看定时任务详情场景
     * @return CrontabValidate
     * @author 段誉
     * @date 2022/3/29 14:39
     */
    public function sceneDetail(): CrontabValidate
    {
        return $this->only(['id']);
    }

    /**
     * @notes 编辑定时任务
     * @return CrontabValidate
     * @author 段誉
     * @date 2022/3/29 14:39
     */
    public function sceneEdit(): CrontabValidate
    {
        return $this->remove('operate', 'require');
    }

    /**
     * @notes 删除定时任务场景
     * @return CrontabValidate
     * @author 段誉
     * @date 2022/3/29 14:40
     */
    public function sceneDelete(): CrontabValidate
    {
        return $this->only(['id']);
    }

    /**
     * @notes CrontabValidate
     * @return CrontabValidate
     * @author 段誉
     * @date 2022/3/29 14:40
     */
    public function sceneOperate(): CrontabValidate
    {
        return $this->only(['id', 'operate']);
    }

    /**
     * @notes 获取规则执行时间场景
     * @return CrontabValidate
     * @author 段誉
     * @date 2022/3/29 14:40
     */
    public function sceneExpression(): CrontabValidate
    {
        return $this->only(['expression']);
    }

    /**
     * @notes 校验运行规则
     * @param $value
     * @return bool|string
     * @author 段誉
     * @date 2022/3/29 14:40
     */
    public function checkExpression($value): bool|string
    {
        if (CronExpression::isValidExpression($value) === false) {
            return '定时任务运行规则错误';
        }
        return true;
    }
}