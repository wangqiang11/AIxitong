<?php

return [
    // 默认使用的数据库连接配置
    'default'         => env('database.driver', 'mysql'),

    // 自定义时间查询规则
    'time_query_rule' => [],

    // 自动写入时间戳字段
    // true为自动识别类型 false关闭
    // 字符串则明确指定时间字段类型 支持 int timestamp datetime date
    'auto_timestamp'  => true,

    // 时间字段取出后的默认时间格式
    'datetime_format' => 'Y-m-d H:i:s',

    // 时间字段配置 配置格式：create_time,update_time
    'datetime_field'  => '',

    // 数据库连接配置信息
    'connections'     => [
        'mysql' => [
            // 数据库类型
            'type'            => env('database.type', 'mysql'),
            // 服务器地址
            'hostname'        => env('database.hostname', 'AI系统-mysql'),
            // 数据库名
            'database'        => env('database.database', 'localhost_likeadmin'),
            // 用户名
            'username'        => env('database.username', 'root'),
            // 密码
            'password'        => env('database.password', 'root'),
            // 端口
            'hostport'        => env('database.hostport', '3306'),
            // 数据库连接参数
            'params'          => [],
            // 数据库编码默认采用utf8
            'charset'         => env('database.charset', 'utf8mb4'),
            // 数据库表前缀
            'prefix'          => env('database.prefix', 'la_'),
            // 数据库部署方式:0 集中式(单一服务器),1 分布式(主从服务器)
            'deploy'          => 0,
            // 数据库读写是否分离 主从式有效
            'rw_separate'     => false,
            // 读写分离后 主服务器数量
            'master_num'      => 1,
            // 指定从服务器序号
            'slave_no'        => '',
            // 是否严格检查字段是否存在
            'fields_strict'   => true,
            // 是否需要断线重连
            'break_reconnect' => false,
            // 监听SQL
            'trigger_sql'     => env('app_debug', false),
            // 开启字段缓存
            'fields_cache'    => false,
        ],

        'pgsql' =>   [
            // 数据库类型
            'type'        => 'pgsql',
            // 服务器地址
            'hostname'    => env('pgsql.hostname', 'postgres'),
            // 数据库名
            'database'    => env('pgsql.database', 'postgres'),
            // 数据库用户名
            'username'    => env('pgsql.username', 'postgres'),
            // 数据库密码
            'password'    => env('pgsql.password', 'postgres'),
            // 数据库连接端口
            'hostport'    => env('pgsql.hostport', '5432'),
            // 数据库连接参数
            'params' => [
                // 添加以下参数以启用pgVector扩展
                PDO::ATTR_EMULATE_PREPARES => true,
                PDO::ATTR_STRINGIFY_FETCHES => false,
            ],
            // 数据库编码默认采用utf8
            'charset'     => env('pgsql.charset', 'utf8'),
            // 数据库表前缀
            'prefix'      => env('pgsql.prefix', 'la_')
        ]
    ],
];
