import request from '@/utils/request'

// 用户列表
export function getUserList(params: any) {
    return request.get({ url: '/user.user/lists', params }, { ignoreCancelToken: true })
}

// 用户列表
export function getUserGroupAll(params?: any) {
    return request.get({ url: '/user.userGroup/all', params })
}

// 用户详情
export function getUserDetail(params: any) {
    return request.get({ url: '/user.user/detail', params })
}

// 用户编辑
export function userEdit(params: any) {
    return request.post({ url: '/user.user/edit', params })
}

// 用户编辑
export function adjustMoney(params: any) {
    return request.post({ url: '/user.user/adjustAccount', params })
}

// 用户编辑会员时间
export function adjustMember(params: any) {
    return request.post({ url: '/user.user/adjustMember', params })
}

//会员列表
export function getMemberList(params?: any) {
    return request.get({ url: '/member.member_package/commonLists', params })
}

// 调整用户视频合成时长
export function adjustVideo(params: any) {
    return request.post({ url: '/user.user/adjustAccount', params })
}

//创建用户
export function addUser(params: any) {
    return request.post({ url: '/user.user/add', params })
}

//黑名单
export function blackList(params: any) {
    return request.post({ url: '/user.user/blacklist', params })
}

//重置密码
export function resetPassword(params: any) {
    return request.post({ url: '/user.user/rePassword', params })
}

//会员开通记录
export function getOpenVipRecord(params: { user_id: number }) {
    return request.get({ url: '/user.user/buyLog', params })
}

// 注销账号
export function userCancelled(params: { user_id: number }) {
    return request.post({ url: '/user.user/cancelled', params })
}

export function setRegisterReward(params: any) {
    return request.post({ url: '/market.regReward/save', params })
}

export function getRegisterReward() {
    return request.get({ url: '/market.regReward/detail' })
}

//用户分组列表
export function userGroupingList(params: any) {
    return request.get({ url: '/user.userGroup/lists', params })
}

//用户分组新增
export function userGroupingAdd(params: any) {
    return request.post({ url: '/user.userGroup/add', params })
}
//用户分组编辑
export function userGroupingEdit(params: any) {
    return request.post({ url: '/user.userGroup/edit', params })
}
//用户分组删除
export function userGroupingDel(params: any) {
    return request.post({ url: '/user.userGroup/del', params })
}

//设置分组
export function userGroupingset(params: any) {
    return request.post({ url: '/user.user/setGroup', params })
}

//调整智能体
export function adjustRobot(params: any) {
    return request.post({ url: '/user.user/adjustRobot', params })
}

//调整智能体
export function adjustKb(params: any) {
    return request.post({ url: '/user.user/adjustKb', params })
}

// 调整分销
export function adjustLeader(params?: any) {
    return request.post({ url: '/user.user/adjustLeader', params })
}
