const CameraOptions = [
    {
        label: '简单运镜',
        value: 'simple'
    },
    {
        label: '下移拉远',
        value: 'down_back'
    },
    {
        label: '推进上移',
        value: 'forward_up'
    },
    {
        label: '右旋推进',
        value: 'right_turn_forward'
    },
    {
        label: '左旋推进',
        value: 'left_turn_forward'
    }
]

const DurationOptions = [
    {
        label: '5秒',
        value: 5
    },
    {
        label: '10秒',
        value: 10
    }
]

const ModeOptions = [
    {
        label: '高性能',
        value: 'std'
    },
    {
        label: '高表现',
        value: 'pro'
    }
]

enum ChannelToken {
    OPEN_AI = 'openai_hk',
    GO_API = 'go_api',
    K_LING = 'k_ling'
}

const defaultModel = ModeOptions[0].value

const defaultCameraValue = CameraOptions[0].value

const defaultDurationValue = DurationOptions[0].value

export {
    ChannelToken,
    ModeOptions,
    defaultModel,
    defaultCameraValue,
    defaultDurationValue,
    CameraOptions,
    DurationOptions
}
