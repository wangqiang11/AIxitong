import type { WidgetMeta } from '../material'
import { createField, createIsRequired, createTitle } from './_public'

const meta: WidgetMeta = {
    name: 'WidgetInput',
    title: '单行文本',
    props: [
        createField(),
        createTitle(),
        {
            name: 'defaultValue',
            label: '默认值',
            type: 'string',
            condition: () => false,
            setter: 'String',
            defaultValue: ''
        },
        {
            name: 'placeholder',
            label: '示例文字',
            type: 'string',
            setter: {
                name: 'String',
                props: {
                    placeholder: '请输入'
                }
            }
        },
        {
            name: 'maxlength',
            label: '最大输入长度',
            type: 'number',
            setter: {
                name: 'Number',
                props: {
                    min: 0
                }
            },
            defaultValue: 200
        },
        createIsRequired()
    ],
    sort: 1
}

export default meta
