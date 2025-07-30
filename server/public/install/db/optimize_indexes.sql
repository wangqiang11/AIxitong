-- 聊天记录表索引优化
ALTER TABLE `cw_chat_record` ADD INDEX `idx_user_type_create_time` (`user_id`, `type`, `create_time`);
ALTER TABLE `cw_chat_record` ADD INDEX `idx_user_type_category` (`user_id`, `type`, `category_id`);
ALTER TABLE `cw_chat_record` ADD INDEX `idx_user_other_id` (`user_id`, `other_id`);
ALTER TABLE `cw_chat_record` ADD INDEX `idx_censor_status` (`censor_status`);
ALTER TABLE `cw_chat_record` ADD INDEX `idx_creation_type` (`creation_type`);

-- 聊天记录收藏表索引优化
ALTER TABLE `cw_chat_record_collect` ADD INDEX `idx_user_records` (`user_id`, `records_id`);

-- 用户表索引优化
ALTER TABLE `cw_user` ADD INDEX `idx_nickname` (`nickname`);
ALTER TABLE `cw_user` ADD INDEX `idx_mobile` (`mobile`);
ALTER TABLE `cw_user` ADD INDEX `idx_channel` (`channel`);
ALTER TABLE `cw_user` ADD INDEX `idx_create_time` (`create_time`);

-- 订单表索引优化
ALTER TABLE `cw_recharge_order` ADD INDEX `idx_user_pay_status` (`user_id`, `pay_status`);
ALTER TABLE `cw_recharge_order` ADD INDEX `idx_order_sn` (`order_sn`);
ALTER TABLE `cw_recharge_order` ADD INDEX `idx_pay_time` (`pay_time`);

-- 会员订单表索引优化
ALTER TABLE `cw_member_order` ADD INDEX `idx_user_pay_status` (`user_id`, `pay_status`);
ALTER TABLE `cw_member_order` ADD INDEX `idx_order_sn` (`order_sn`);
ALTER TABLE `cw_member_order` ADD INDEX `idx_pay_time` (`pay_time`);

-- 分销订单表索引优化
ALTER TABLE `cw_distribution_order` ADD INDEX `idx_user_order_type` (`user_id`, `order_type`);
ALTER TABLE `cw_distribution_order` ADD INDEX `idx_first_user` (`first_user_id`);
ALTER TABLE `cw_distribution_order` ADD INDEX `idx_second_user` (`second_user_id`);
ALTER TABLE `cw_distribution_order` ADD INDEX `idx_order_sn` (`order_sn`);
ALTER TABLE `cw_distribution_order` ADD INDEX `idx_pay_time` (`pay_time`);

-- AI搜索记录表索引优化
ALTER TABLE `cw_ai_search_record` ADD INDEX `idx_user_channel_model` (`user_id`, `channel`, `model`);
ALTER TABLE `cw_ai_search_record` ADD INDEX `idx_user_type` (`user_id`, `type`);
ALTER TABLE `cw_ai_search_record` ADD INDEX `idx_create_time` (`create_time`);

-- 文章表索引优化
ALTER TABLE `cw_article` ADD INDEX `idx_cid_is_show` (`cid`, `is_show`);
ALTER TABLE `cw_article` ADD INDEX `idx_title` (`title`);

-- 文章收藏表索引优化
ALTER TABLE `cw_article_collect` ADD INDEX `idx_user_article_status` (`user_id`, `article_id`, `status`);

-- 卡密表索引优化
ALTER TABLE `cw_card_code` ADD INDEX `idx_type_relation` (`type`, `relation_id`);
ALTER TABLE `cw_card_code` ADD INDEX `idx_valid_time` (`valid_start_time`, `valid_end_time`);

-- 卡密记录表索引优化
ALTER TABLE `cw_card_code_record` ADD INDEX `idx_card_status` (`card_id`, `status`);
ALTER TABLE `cw_card_code_record` ADD INDEX `idx_user_use_time` (`user_id`, `use_time`);