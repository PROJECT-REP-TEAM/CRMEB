<?php
// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006~2018 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: liu21st <liu21st@gmail.com>
// +----------------------------------------------------------------------

// +----------------------------------------------------------------------
// | 多语言设置
// +----------------------------------------------------------------------

use think\facade\Env;

return [
    // 默认语言
    'default_lang'    => Env::get('lang.default_lang', 'zh-cn'),
    // 允许的语言列表
    'allow_lang_list' => ['zh-cn', 'en-us'],
    // 多语言自动侦测变量名
    'detect_var'      => 'lang',
    // 是否使用Cookie记录
    'use_cookie'      => true,
    // 多语言cookie变量
    'cookie_var'      => 'think_lang',
    // 扩展语言包
    'extend_list'     => [
        'zh-cn'    => [
            app()->getBasePath() . 'lang/zh-cn.php',
            app()->getBasePath() . 'adminapi/lang/zh-cn.php',
            app()->getBasePath() . 'api/lang/zh-cn.php',
        ],
        'en-us'    => [
            app()->getBasePath() . 'lang/zh-cn.php',
            app()->getBasePath() . 'adminapi/lang/zh-cn.php',
            app()->getBasePath() . 'api/lang/zh-cn.php',
        ],
    ],
    // Accept-Language转义为对应语言包名称
    'accept_language' => [
        'zh-hans-cn' => 'zh-cn',
        'en-hans-us' => 'en-us',
    ],
    // 是否支持语言分组
    'allow_group'     => true,
];
