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
namespace app\common\service\ai\chat;

use app\common\service\ai\ChatService;

/**
 * 系统对话服务类
 * Class MddChatServer
 * @package app\common\service\chatai
 */
class SystemService
{
    protected array $config = [];
    protected string $chatKey = 'system';

    protected string $reasoning = '';  // 思考的过程

    public function __construct(array $config)
    {
        $this->config = $config;
    }

    /**
     * @notes 发起对话
     * @param array $messages
     * @return mixed
     * @author cjhao
     * @date 2023/10/23 17:59
     */
    public function chatSseRequest(array $messages=[]):self
    {
        $defaultReply = $this->config['default_reply'];
        $defaultReplyList = mb_str_split($defaultReply, 1, 'UTF-8');
        $count = count($defaultReplyList) - 1;
        foreach ($defaultReplyList as $key => $reply){
            $event = 'chat';
            if($count == $key){
                $event = 'finish';
            }
            ChatService::parseReturnSuccess($event,1,$reply,0,$this->chatKey);
        }
        return $this;
    }

    /**
     * @notes 设置上下文
     * @return mixed
     * @author cjhao
     * @date 2023/10/23 17:59
     */
    public function getReplyContent(string $type = 'content'): mixed
    {
        // 思考过程
        if ($type == 'reasoning') {
            return $this->reasoning;
        }
        return [$this->config['default_reply']];
    }

    /**
     * @notes 获取上下文
     * @return mixed
     * @author cjhao
     * @date 2023/10/23 18:13
     */
    public function setContextNum($contextNum):self
    {
        return $this;
    }

    /**
     * @notes 设置温度
     * @param $temperature
     * @return mixed
     * @author cjhao
     * @date 2023/10/23 18:11
     */
    public function setTemperature($temperature):self
    {
        return $this;
    }

    /**
     * @notes 获取上下文
     * @return mixed
     * @author cjhao
     * @date 2023/10/23 18:13
     */
    public function getContextNum():int
    {
        return 0;
    }

    /**
     * @notes 获取对话模型
     * @return string
     * @author cjhao
     * @date 2023/10/23 18:52
     */
    public function getModel(): string
    {
        return  '';
    }


    public function getUsage(): array
    {
        return [
            'prompt_tokens'     => 0,
            'completion_tokens' => 0,
            'total_tokens'      => 0,
            'str_length'        => 0
        ];
    }
}