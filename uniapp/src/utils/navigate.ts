import { useNavigationBarTitleStore } from "@/stores/navigationBarTitle";
import { objectToQuery } from "./util";
import { parseQuery } from "uniapp-router-next";
// #ifdef H5
import wechat from "./wechat";
// #endif
import router from "@/router";

/**
 * @description 后台选择链接专用跳转
 */
interface Link {
    path: string;
    name?: string;
    type: string;
    isTab: boolean;
    query?: Record<string, any>;
}

export enum LinkTypeEnum {
    "SHOP_PAGES" = "shop",
    "CUSTOM_LINK" = "custom",
    "MINI_PROGRAM" = "mini_program",
}

export function navigateTo(link: Link) {
    let { path, query, type } = link;

    if (type === LinkTypeEnum.CUSTOM_LINK) {
        query = { url: path };
        path = "/pages/webview/webview";
    }

    // 如果是小程序跳转
    if (link.type === LinkTypeEnum.MINI_PROGRAM) {
        navigateToMiniProgram(link);
        return;
    }

    const navigationBarTitleStore = useNavigationBarTitleStore();
    navigationBarTitleStore.add({
        path: path,
        title: link.name as string,
    });
    const routeRaw = {
        path,
        query,
    };
    const route = router.resolve(routeRaw);
    if (route?.meta.isTab) {
        router.switchTab(routeRaw);
    } else if (link.isTab) {
        router.reLaunch(routeRaw);
    } else {
        router.navigateTo(routeRaw);
    }
}

/**
 * @description 小程序跳转
 * @param link 跳转信息，由装修数据进行输入
 */
export function navigateToMiniProgram(link: Link) {
    const query = link.query;
    // #ifdef H5
    window.open(
        `weixin://dl/business/?appid=${query?.appId}&path=${
            query?.path
        }&env_version=${query?.env_version}&query=${encodeURIComponent(
            query?.query || ""
        )}`
    );
    // #endif
    // #ifdef MP
    uni.navigateToMiniProgram({
        appId: query?.appId,
        path: query?.path,
        extraData: parseQuery(query?.query || ""),
        envVersion: query?.env_version,
    });
    // #endif
}

export function miniProgramNavigateTo(link: Link) {
    let { path, query, type } = link;
    if (type === LinkTypeEnum.CUSTOM_LINK) {
        query = { url: path };
        path = "/pages/webview/webview";
    }

    const navigationBarTitleStore = useNavigationBarTitleStore();
    navigationBarTitleStore.add({
        path: path,
        title: link.name as string,
    });
    const routeRaw = {
        path,
        query,
    };
    const route = router.resolve(routeRaw);
    // #ifdef H5
    if (route?.meta.isTab) {
        wechat.miniProgram.switchTab({
            url: routeRaw.path,
        });
    } else if (link.isTab) {
        wechat.miniProgram.reLaunch({
            url: routeRaw.path,
        });
    } else {
        wechat.miniProgram.navigateTo({
            url: routeRaw.path,
        });
    }
    // #endif
}
