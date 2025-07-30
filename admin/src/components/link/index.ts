export enum LinkTypeEnum {
    'SHOP_PAGES' = 'shop',
    'CREATIVE_PICKER' = 'creative',
    'ROLE_PICKER' = 'role',
    'AGENT' = 'agent',
    'CUSTOM_LINK' = 'custom',
    'MINI_PROGRAM' = 'mini_program'
}

export interface Link {
    path: string
    name?: string
    type: string
    query?: Record<string, any>
}
