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
// | author: AI系统Team
// +----------------------------------------------------------------------

namespace app\api\controller\draw;



use app\api\controller\BaseApiController;
use app\api\lists\draw\DrawSquareLists;
use app\api\logic\draw\DrawSquareLogic;
use app\api\validate\draw\DrawSquareValidate;
use app\common\logic\BaseLogic;

class DrawSquareController extends BaseApiController
{
    public array $notNeedLogin = ['lists','categoryLists','detail'];
    /**
     * @notes 绘画广场列表
     * @return \think\response\Json
     * @author ljj
     * @date 2023/8/31 4:10 下午
     */
    public function lists()
    {
        return $this->dataLists(new DrawSquareLists());
    }

    /**
     * @notes 分类列表
     * @return \think\response\Json
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @author ljj
     * @date 2023/8/31 4:22 下午
     */
    public function categoryLists()
    {
        $result = (new DrawSquareLogic())->categoryLists($this->userId);
        return $this->data($result);
    }

    /**
     * @notes 分享至绘画广场
     * @return \think\response\Json
     * @author ljj
     * @date 2023/8/31 4:59 下午
     */
    public function add()
    {
        $params = (new DrawSquareValidate())->post()->goCheck('add',['user_id'=>$this->userId]);
        $params['terminal'] = $this->userInfo['terminal'];
        $result = (new DrawSquareLogic())->add($params);
        if (true !== $result) {
            return $this->fail($result);
        }
        $tips = BaseLogic::getReturnData() ?: '分享成功';
        return $this->success($tips, [], 1, 1);
    }

    /**
     * @notes 点赞操作
     * @return \think\response\Json
     * @author ljj
     * @date 2024/1/25 6:14 下午
     */
    public function praise()
    {
        $params = (new DrawSquareValidate())->post()->goCheck('praise',['user_id'=>$this->userId]);
        $result = (new DrawSquareLogic())->praise($params);
        return $this->success($result, [],1,1);
    }

    /**
     * @notes 绘画详情
     * @return \think\response\Json
     * @author cjhao
     * @date 2024/8/30 11:11
     */
    public function detail()
    {
        $id = $this->request->get('id');
        $result = (new DrawSquareLogic())->detail($id,$this->userId);
        return $this->success('', $result);
    }

}