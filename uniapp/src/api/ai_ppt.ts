import request from '@/utils/request'

export function getPPTConfig() {
    return request.get({ url: '/ppt/config' })
}

export function getPPTExample() {
    return request.get({ url: '/ppt/example' })
}

export function getPPTLists(data: any) {
    return request.get({ url: '/ppt/lists', data })
}

export function getPPTDetail(data: any) {
    return request.get({ url: '/ppt/detail', data })
}

export function getPPTOutline(data: any) {
    return request.post({ url: '/ppt/structure', data })
}

export function getPPTTemplate(data: any) {
    return request.post({ url: '/ppt/cover', data })
}

export function genPPT(data: any) {
    return request.post({ url: '/ppt/submit', data })
}

export function delPPT(data: any) {
    return request.post({ url: '/ppt/del', data })
}

export function downloadPPT(data: any) {
    return request.post({ url: '/ppt/download', data })
}