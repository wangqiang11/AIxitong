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

namespace app\adminapi\logic\channel;

use app\common\enum\OfficialAccountEnum;
use app\common\logic\BaseLogic;
use app\common\service\ConfigService;
use app\common\service\wechat\WeChatOaService;
use Exception;

/**
 * 微信公众号菜单逻辑层
 * Class OfficialAccountMenuLogic
 * @package app\adminapi\logic\wechat
 */
class OfficialAccountMenuLogic extends BaseLogic
{
    /**
     * @notes 保存
     * @param $params
     * @return bool
     * @author 段誉
     * @date 2022/3/29 10:43
     */
    public static function save($params): bool
    {
        try {
            self::checkMenu($params);
            ConfigService::set('oa_setting', 'menu', $params);
            return true;
        } catch (Exception $e) {
            OfficialAccountMenuLogic::setError($e->getMessage());
            return false;
        }
    }

    /**
     * @notes 一级菜单校验
     * @param $menu
     * @throws Exception
     * @author 段誉
     * @date 2022/3/29 10:55
     */
    public static function checkMenu($menu)
    {
        if (empty($menu) || !is_array($menu)) {
            throw new Exception('请设置正确格式菜单');
        }

        if (count($menu) > 3) {
            throw new Exception('一级菜单超出限制(最多3个)');
        }

        foreach ($menu as $item) {
            if (!is_array($item)) {
                throw new Exception('一级菜单项须为数组格式');
            }

            if (empty($item['name'])) {
                throw new Exception('请输入一级菜单名称');
            }

            if (strlen($item['name']) > 16) {
                throw new Exception('一级菜单名称不能超过16个字节');
            }

            if (false == $item['has_menu']) {
                if (empty($item['type'])) {
                    throw new Exception('一级菜单未选择菜单类型');
                }
                if (!in_array($item['type'], OfficialAccountEnum::MENU_TYPE)) {
                    throw new Exception('一级菜单类型错误');
                }
                self::checkType($item);
            }

            if (true == $item['has_menu'] && empty($item['sub_button'])) {
                throw new Exception('请配置子菜单');
            }

            if (true == $item['has_menu'] && !empty($item['sub_button'])) {
                self::checkSubButton($item['sub_button']);
            }
        }
    }

    /**
     * @notes 二级菜单校验
     * @param $subButton
     * @throws Exception
     * @author 段誉
     * @date 2022/3/29 10:55
     */
    public static function checkSubButton($subButton)
    {
        if (!is_array($subButton)) {
            throw new Exception('二级菜单须为数组格式');
        }

        if (count($subButton) > 5) {
            throw new Exception('二级菜单超出限制(最多5个)');
        }

        foreach ($subButton as $subItem) {
            if (!is_array($subItem)) {
                throw new Exception('二级菜单项须为数组');
            }

            if (empty($subItem['name'])) {
                throw new Exception('请输入二级菜单名称');
            }

            if (strlen($subItem['name']) > 60) {
                throw new Exception('二级菜单名称不能超过60个字节');
            }

            if (empty($subItem['type']) || !in_array($subItem['type'], OfficialAccountEnum::MENU_TYPE)) {
                throw new Exception('二级未选择菜单类型或菜单类型错误');
            }

            self::checkType($subItem);
        }
    }

    /**
     * @notes 菜单类型校验
     * @param $item
     * @throws Exception
     * @author 段誉
     * @date 2022/3/29 10:55
     */
    public static function checkType($item)
    {
        switch ($item['type']) {
            // 关键字
            case 'click':
                if (empty($item['key'])) {
                    throw new Exception('请输入关键字');
                }
                break;
            // 跳转网页链接
            case 'view':
                if (empty($item['url'])) {
                    throw new Exception('请输入网页链接');
                }
                break;
            // 小程序
            case 'miniprogram':
                if (empty($item['url'])) {
                    throw new Exception('请输入网页链接');
                }
                if (empty($item['appid'])) {
                    throw new Exception('请输入appid');
                }
                if (empty($item['pagepath'])) {
                    throw new Exception('请输入小程序路径');
                }
                break;
        }
    }

    /**
     * @notes 保存发布菜单
     * @param $params
     * @return bool
     * @throws @\GuzzleHttp\Exception\GuzzleException
     * @author 段誉
     * @date 2022/3/29 10:55
     */
    public static function saveAndPublish($params): bool
    {
        try {
            foreach ($params as $paramsKey => $paramsVal) {
                if (false == $paramsVal['has_menu'] && !empty($paramsVal['sub_button'])) {
                    //不配置子菜单，清空子菜单数据
                    $params[$paramsKey]['sub_button'] = [];
                }
            }

            self::checkMenu($params);

            $result = (new WeChatOaService())->createMenu($params);
            if ($result['errcode'] == 0) {
                ConfigService::set('oa_setting', 'menu', $params);
                return true;
            }

            self::setError('保存发布菜单失败' . json_encode($result->getContent()));
            return false;

        } catch (Exception $e) {
            self::setError($e->getMessage());
            return false;
        }
    }

    /**
     * @notes 查看菜单详情
     * @return mixed
     * @author 段誉
     * @date 2022/3/29 10:56
     */
    public static function detail(): mixed
    {
        $data = ConfigService::get('oa_setting', 'menu', []);

        if (!empty($data)) {
            foreach ($data as &$item) {
                $item['has_menu'] = !empty($item['has_menu']);
            }
        }

        return $data;
    }
}