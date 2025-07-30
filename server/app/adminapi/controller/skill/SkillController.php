<?php
// +----------------------------------------------------------------------
// | AI系统100%开源免费商用商城系统
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | 开源版本可自由商用，可去除界面版权logo
// | 商业版本务必购买商业授权，以免引起法律纠纷
// | 禁止对系统程序代码以任何目的，任何形式的再发布
// | gitee下载：
// | github下载：
// | 访问官网：
// | 访问社区：https://home.AI系统.cn
// | 访问手册：http://doc.AI系统.cn
// | 微信公众号：AI系统技术社区
// | AI系统团队 版权所有 拥有最终解释权
// +----------------------------------------------------------------------
// | author: 匿名公司
// +----------------------------------------------------------------------
namespace app\adminapi\controller\skill;
use app\adminapi\controller\BaseAdminController;
use app\adminapi\logic\skill\SkillLogic;
use app\adminapi\validate\skill\SkillValidate;

/**
 * 技能控制器类
 * Class CreationCategoryController
 * @package app\adminapi\controller\creation
 */
class SkillController extends BaseAdminController
{

    public array $notNeedLogin = ['downExcelTemplate'];

    /**
     * @notes 列表
     * @return \think\response\Json
     * @author cjhao
     * @date 2023/4/14 11:44
     */
    public function lists()
    {
        return $this->dataLists();
    }


    /**
     * @notes 添加
     * @return \think\response\Json
     * @author cjhao
     * @date 2023/4/14 15:23
     */
    public function add()
    {
        $post = (new SkillValidate())->post()->goCheck('add');
        (new SkillLogic())->add($post);
        return $this->success('添加成功',[],1,1);
    }

    /**
     * @notes 修改
     * @return \think\response\Json
     * @author cjhao
     * @date 2023/4/14 15:24
     */
    public function edit()
    {
        $post = (new SkillValidate())->post()->goCheck();
        (new SkillLogic())->edit($post);
        return $this->success('修改成功',[],1,1);

    }

    /**
     * @notes 删除
     * @return \think\response\Json
     * @author cjhao
     * @date 2023/4/14 15:27
     */
    public function del()
    {
        $post = (new SkillValidate())->post()->goCheck('id');
        (new SkillLogic())->del($post['id']);
        return $this->success('删除成功',[],1,1);
    }


    /**
     * @notes 状态修改成功
     * @return \think\response\Json
     * @author cjhao
     * @date 2023/4/14 15:29
     */
    public function status()
    {
        $post = (new SkillValidate())->post()->goCheck('id');
        (new SkillLogic())->status($post['id']);
        return $this->success('修改成功',[],1,1);
    }

    /**
     * @notes 获取详情
     * @return \think\response\Json
     * @author cjhao
     * @date 2023/4/17 10:08
     */
    public function detail()
    {
        $post = (new SkillValidate())->goCheck('id');
        $detail = (new SkillLogic())->detail($post['id']);
        return $this->success('',$detail);
    }


    /**
     * @notes 导入数据
     * @return \think\response\Json
     * @throws \PhpOffice\PhpSpreadsheet\Reader\Exception
     * @author cjhao
     * @date 2024/4/11 17:10
     */
    public function import()
    {
        $file = $this->request->file('file');
        $result = (new SkillLogic())->import($file);
        if(false === $result){
            return $this->fail(SkillLogic::getError());
        }
        return $this->success($result,[],1,1);

    }

    /**
     * @notes 下载模板
     * @return \think\response\File
     * @author cjhao
     * @date 2024/4/15 11:19
     */
    public function downExcelTemplate()
    {
        return (new SkillLogic())->downExcelTemplate();
    }

    /**
     * @notes 导出
     * @return \think\response\Json
     * @author cjhao
     * @date 2024/4/12 11:49
     */
//    public function export()
//    {
//        $params = $this->request->get();
//        $data = (new SkillLogic())->export($params);
//        return $this->success('',$data);
//    }
}