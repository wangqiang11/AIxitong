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

namespace app\adminapi\validate;

use app\common\validate\BaseValidate;

/**
 * 文件验证
 */
class FileValidate extends BaseValidate
{
    protected $rule = [
        'id'   => 'require|number',
        'cid'  => 'require|number',
        'ids'  => 'require|array',
        'type' => 'require|in:10,20,30',
        'pid'  => 'require|number',
        'name' => 'require|max:20'
    ];

    protected $message = [
        'id.require'   => '缺少id参数',
        'cid.require'  => '缺少cid参数',
        'ids.require'  => '缺少ids参数',
        'type.require' => '缺少type参数',
        'pid.require'  => '缺少pid参数',
        'name.require' => '请填写分组名称',
        'name.max' => '分组名称长度须为20字符内',
    ];

    /**
     * @notes id验证场景
     * @return FileValidate
     * @author 段誉
     * @date 2021/12/29 14:32
     */
    public function sceneId(): FileValidate
    {
        return $this->only(['id']);
    }

    /**
     * @notes 重命名文件场景
     * @return FileValidate
     * @author 段誉
     * @date 2021/12/29 14:32
     */
    public function sceneRename(): FileValidate
    {
        return $this->only(['id', 'name']);
    }

    /**
     * @notes 新增分类场景
     * @return FileValidate
     * @author 段誉
     * @date 2021/12/29 14:33
     */
    public function sceneAddCate(): FileValidate
    {
        return $this->only(['type', 'pid', 'name']);
    }

    /**
     * @notes 编辑分类场景
     * @return FileValidate
     * @author 段誉
     * @date 2021/12/29 14:33
     */
    public function sceneEditCate(): FileValidate
    {
        return $this->only(['id', 'name']);
    }

    /**
     * @notes 移动场景
     * @return FileValidate
     * @author 段誉
     * @date 2021/12/29 14:33
     */
    public function sceneMove(): FileValidate
    {
        return $this->only(['ids', 'cid']);
    }

    /**
     * @notes 删除场景
     * @return FileValidate
     * @author 段誉
     * @date 2021/12/29 14:35
     */
    public function sceneDelete(): FileValidate
    {
        return $this->only(['ids']);
    }
}