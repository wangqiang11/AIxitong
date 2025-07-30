import type { WidgetMeta } from '../material'
import { createField, createIsRequired, createTitle } from './_public'

const meta: WidgetMeta = {
    name: 'WidgetTextarea',
    title: '多行文本',
    props: [
        createField(),
        createTitle(),
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
            name: 'rows',
            label: '默认行数',
            type: 'number',
            setter: {
                name: 'Number',
                props: {
                    min: 0
                }
            },
            defaultValue: 4
        },
        {
            name: 'defaultValue',
            label: '默认值',
            type: 'string',
            condition: () => false,
            setter: 'String',
            defaultValue: ''
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
        {
            name: 'autosize',
            label: '高度自适应',
            type: 'boolean',
            setter: {
                name: 'Bool'
            },
            defaultValue: false
        },
        createIsRequired()
    ],
    sort: 2
}

export default meta
