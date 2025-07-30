export function getPPTConfig() {
    return $request.get({ url: '/ppt/config' })
}

export function getPPTExample() {
    return $request.get({ url: '/ppt/example' })
}

export function getPPTLists(params: any) {
    return $request.get({ url: '/ppt/lists', params })
}

export function getPPTDetail(params: any) {
    return $request.get({ url: '/ppt/detail', params })
}

export function getPPTOutline(params: any) {
    return $request.post({ url: '/ppt/structure', params })
}

export function getPPTTemplate(params: any) {
    return $request.post({ url: '/ppt/cover', params })
}

export function genPPT(params: any) {
    return $request.post({ url: '/ppt/submit', params })
}

export function delPPT(params: any) {
    return $request.post({ url: '/ppt/del', params })
}

export function downloadPPT(params: any) {
    return $request.post({ url: '/ppt/download', params })
}