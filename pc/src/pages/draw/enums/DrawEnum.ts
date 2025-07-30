export enum DrawModeEnum {
    SD = 'sd',
    MJ = 'mj',
    DALLE3 = 'dalle3',
    DOUBAO = 'doubao'
}

export const DrawLink: Record<string, string> = {
    [DrawModeEnum.SD]: '/draw/sd',
    [DrawModeEnum.MJ]: '/draw/mj',
    [DrawModeEnum.DALLE3]: '/draw/dalle',
    [DrawModeEnum.DOUBAO]: '/draw/doubao'
}

export enum DrawTypeEnum {
    txt2img = 'txt2img',
    img2img = 'img2img',
    SCALE2D = 'scale2d'
}

export const DrawResultTypeEnum = {
    1: '文生图',
    2: '图生图',
    3: '选中放大',
    4: '选中变换'
}
