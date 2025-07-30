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

namespace app\api\logic\chat;

use app\common\enum\ChatRecordEnum;
use app\common\logic\BaseLogic;
use app\common\model\chat\ChatRecord;
use app\common\model\creation\CreationCategory;
use app\common\model\creation\CreationModel;
use app\common\model\creation\CreationModelCollect;
use app\common\service\FileService;

/**
 * 创作逻辑类
 */
class CreationLogic extends BaseLogic
{
    /**
     * @notes 创作分类
     * @param int $userId
     * @return array
     * @throws @\think\db\exception\DataNotFoundException
     * @throws @\think\db\exception\DbException
     * @throws @\think\db\exception\ModelNotFoundException
     * @author fzr
     */
    public static function category(int $userId): array
    {
        $lists = (new CreationCategory())
            ->where(['status' => 1])
            ->field('id,image,name')
            ->withCount('model')
            ->order('sort desc')
            ->select()
            ->toArray();

        // 全部模型数量
        $allModelCount = array_sum(array_column($lists,'model_count'));

        // 收藏模型数量
        $collectModelCount = 0;
        if($userId){
            $collectModelCount = (new CreationModelCollect())->where(['user_id'=>$userId])->count();
        }

        $shift = [
            [
                'id'            => 0,
                'image'         => FileService::getFileUrl('resource/image/creation/creation_category_all.png'),
                'name'          => '全部',
                'model_count'   => $allModelCount,
            ],[
                'id'            => -1,
                'image'         => FileService::getFileUrl('resource/image/creation/creation_category_collect.png'),
                'name'          => '我的收藏',
                'model_count'   => $collectModelCount,
            ]
        ];

        array_unshift($lists,...$shift);
        return $lists;
    }

    /**
     * @notes 创作模型列表
     * @param array $params
     * @param int $userId
     * @return array
     * @throws @\think\db\exception\DataNotFoundException
     * @throws @\think\db\exception\DbException
     * @throws @\think\db\exception\ModelNotFoundException
     * @author fzr
     */
    public static function lists(array $params, int $userId): array
    {
        $pageNo   = intval($params['page_no'] ?? 1);
        $pageSize = intval($params['page_size'] ?? 25);
        $where[] =['status','=',1];
        if (isset($params['keyword']) && $params['keyword']) {
            $where[] =['name', 'like', '%'.$params['keyword'].'%'];
        }
        $orderRaw = 'sort desc';
        if (isset($params['category_id']) && $params['category_id']) {
            // 收藏
            if (-1 == $params['category_id']) {
                $creationIds = (new CreationModelCollect())
                    ->where(['user_id'=>$userId])
                    ->order('id desc')
                    ->column('creation_id');
                $where[] = ['id', 'in', $creationIds];
                if($creationIds){
                    $orderRaw = 'FIELD(id,' . implode(',', $creationIds) . ')';
                }
            } else {
                $where[] = ['category_id', '=', $params['category_id']];
            }
        }
        $pageLists = (new CreationModel())
            ->where($where)
            ->field('id,category_id,name,image,tips,virtual_use_num')
            ->orderRaw($orderRaw)
            ->paginate([
                'page'      => $pageNo,
                'list_rows' => $pageSize,
                'var_page'  => 'page'
            ])
            ->toArray();

        // 获取收藏的模型
        $collectCreation = [];
        if ($userId) {
            $collectCreation = (new CreationModelCollect())->where(['user_id'=>$userId])->column('creation_id');
        }

        $lists = $pageLists['data'];
        // 获取使用的次数
        $creationIds = array_column($lists,'id');
        $countLists  = (new ChatRecord())->where(['other_id'=>$creationIds,'type'=> ChatRecordEnum::CHAT_CREATION])
            ->group('other_id')
            ->column('COUNT(DISTINCT user_id) AS user_count','other_id');

        foreach ($lists as $item => $value) {
            $lists[$item]['is_collect'] =  in_array($value['id'],$collectCreation) ? 1 : 0;
            $lists[$item]['use_num'] = ($countLists[$value['id']] ?? 0) + (empty($value['virtual_use_num']) ? 0 : $value['virtual_use_num']);
        }

        return [
            'page_no'   => $pageNo,
            'page_size' => $pageSize,
            'count'     => $pageLists['total'] ?? 0,
            'lists'     => $lists
        ];
    }

    /**
     * @notes 创作模型详情
     * @param int $id
     * @return array
     * @author fzr
     */
    public static function detail(int $id): array
    {
        return (new CreationModel())
            ->withoutField('update_time,delete_time')
            ->where(['id'=>$id])
            ->findOrEmpty()
            ->toArray();
    }

    /**
     * @notes 创作模型收藏
     * @param int $id
     * @param int $userId
     * @return bool|string
     * @author fzr
     */
    public static function collect(int $id, int $userId): bool|string
    {
        if (empty($id)) {
            self::$error = '请选择应用';
            return false;
        }

        $collect = (new CreationModelCollect())
            ->where(['user_id'=>$userId,'creation_id'=>$id])
            ->findOrEmpty();

        if($collect->isEmpty()){
            $creation = (new CreationModel())->where(['id'=>$id])->findOrEmpty();
            if ($creation->isEmpty()) {
                self::$error = '应用不存在';
                return false;
            }

            CreationModelCollect::create([
                'creation_id' => $id,
                'user_id'     => $userId
            ]);
            return '收藏成功';
        } else {
            $collect->delete();
            return '取消成功';
        }
    }
}