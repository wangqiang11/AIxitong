import request from '@/utils/request'

export function getPPTRecord(params?: any) {
    return request.get({ url: '/ppt.record/lists', params })
}

export function delPPTRecord(params?: any) {
    return request.post({ url: '/ppt.record/del', params })
}

export function getPPTConfig() {
    return request.get({ url: '/ppt.setting/basisConfig' })
}

export function setPPTConfig(params: any) {
    return request.post({ url: '/ppt.setting/basisSave', params })
}

export function getPPTExample() {
    return request.get({ url: '/ppt.setting/exampleConfig' })
}

export function setPPTExample(params: any) {
    return request.post({ url: '/ppt.setting/exampleSave', params })
}
