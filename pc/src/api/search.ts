export function getSearchExample() {
    return $request.get({ url: '/search/example' })
}

export function postSearch(params: any) {
    return $request.sse({ url: '/search/query', params, method: 'POST' })
}

export function getSearchConfig() {
    return $request.get({ url: '/search/config' })
}

export function getSearchLists(params: any) {
    return $request.get({ url: '/search/lists', params })
}

export function getSearchDetail(params: any) {
    return $request.get({ url: '/search/detail', params })
}
