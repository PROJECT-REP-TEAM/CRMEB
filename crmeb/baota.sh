#!/bin/bash
PATH=/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin
export PATH

php_version='74'
mysql_version='5.7'
redis_version='6.2'
action_type='install'
root_path=$(cat /var/bt_setupPath.conf)
setup_path=$root_path/server

#宝塔是否已安装
if [ -z "$root_path" ]; then
    echo "请先安装宝塔"
    exit 1
fi

#nginx是否已安装
if [ ! -f "${setup_path}/nginx/sbin/nginx" ]; then
    echo "请先安装nginx并配置网站"
    exit 1
fi

#安装php
php_install=1
for phpVer in 71 72 73 74; do
    if [ -d "${setup_path}/php/${phpVer}/bin" ]; then
        php_version=${phpVer}
        php_install=0
    fi
done
if [ $php_install == 1 ]; then
. ${setup_path}/panel/install/install_soft.sh 1 $action_type php $php_version
fi
case "${php_version}" in
    '71')
        extFile="${setup_path}/php/71/lib/php/extensions/no-debug-non-zts-20160303"
    ;;
    '72')
        extFile="${setup_path}/php/72/lib/php/extensions/no-debug-non-zts-20170718"
    ;;
    '73')
        extFile="${setup_path}/php/73/lib/php/extensions/no-debug-non-zts-20180731"
    ;;
    '74')
        extFile="${setup_path}/php/74/lib/php/extensions/no-debug-non-zts-20190902"
    ;;
esac

#安装mysql
if [ ! -d "${setup_path}/mysql" ]; then
. ${setup_path}/panel/install/install_soft.sh 1 $action_type mysql $mysql_version
fi

#安装redis
if [ ! -d "${setup_path}/redis" ]; then
. ${setup_path}/panel/install/install_soft.sh 0 $action_type redis $redis_version
fi

#安装php-redis 插件
if [ ! -e "${extFile}/redis.so" ]; then
. ${setup_path}/panel/install/install_soft.sh 1 $action_type redis $php_version
fi

#安装php-swoole 插件
if [ ! -e "${extFile}/swoole.so" ]; then
. ${setup_path}/panel/install/install_soft.sh 1 $action_type swoole4 $php_version
fi

#安装swoole_loader授权
swoole_loader_name="swoole_loader${php_version}.so"
if [ ! -e "${extFile}${swoole_loader_name}" ];then
    cp help/swoole_loader/$swoole_loader_name $extFile
fi
isInstall=`cat ${setup_path}/php/$php_version/etc/php.ini|grep $swoole_loader_name`
if [ "${isInstall}" = "" ];then
    echo -e "extension = $extFile$swoole_loader_name" >> ${setup_path}/php/$php_version/etc/php.ini
    if [ -f ${setup_path}/php/$php_version/etc/php-cli.ini ];then
        echo -e "extension = $extFile$swoole_loader_name" >> ${setup_path}/php/$php_version/etc/php-cli.ini
    fi
fi
sed -i 's/,proc_open//' ${setup_path}/php/$php_version/etc/php.ini

#安装php-fileinfo 插件
if [ ! -e "${extFile}/swoole.so" ]; then
. ${setup_path}/panel/install/install_soft.sh 1 $action_type fileinfo $php_version
fi

#覆盖crmeb加密文件
vphp=${php_version:0:1}.${php_version:1:1}
cp -rf help/$vphp/ ./

#修改nginx配置
project_path=$(cd `dirname $0`; pwd)
project_name="${project_path##*/}"
if [ -e "${setup_path}/panel/vhost/nginx/${project_name}.conf" ]; then
echo -e "
server
{
    listen 80;
    server_name ${project_name};
    index index.php index.html index.htm default.php default.htm default.html;
    root /www/wwwroot/${project_name}/public;

    #SSL-START SSL相关配置，请勿删除或修改下一行带注释的404规则
    #error_page 404/404.html;
    #SSL-END

    #ERROR-PAGE-START  错误页配置，可以注释、删除或修改
    #error_page 404 /404.html;
    #error_page 502 /502.html;
    #ERROR-PAGE-END

    #PHP-INFO-START  PHP引用配置，可以注释或修改
    #清理缓存规则

    location ~ /purge(/.*) {
        proxy_cache_purge cache_one \$host\$1\$is_args\$args;
    }
    #引用反向代理规则，注释后配置的反向代理将无效
    include ${setup_path}/panel/vhost/nginx/proxy/${project_name}/*.conf;

	  include enable-php-00.conf;
    #PHP-INFO-END

    #REWRITE-START URL重写规则引用,修改后将导致面板设置的伪静态规则失效
    include ${setup_path}/panel/vhost/rewrite/${project_name}.conf;
    #REWRITE-END

    #禁止访问的文件或目录
    location ~ ^/(\.user.ini|\.htaccess|\.git|\.svn|\.project|LICENSE|README.md)
    {
        return 404;
    }

    #一键申请SSL证书验证目录相关设置
    location ~ \.well-known{
        allow all;
    }

    access_log  /www/wwwlogs/${project_name}.log;
    error_log  /www/wwwlogs/${project_name}.error.log;
}
" > ${setup_path}/panel/vhost/nginx/${project_name}.conf
fi

#==============以下为反向代理配置=====================

# if [ ! -d "${setup_path}/panel/vhost/nginx/proxy" ]; then
#     mkdir "${setup_path}/panel/vhost/nginx/proxy"
# fi

# if [ ! -d "${setup_path}/panel/vhost/nginx/proxy/${project_name}" ]; then
#     mkdir "${setup_path}/panel/vhost/nginx/proxy/${project_name}"
# fi
# echo -e "
#   #PROXY-START/
# location  ~* \.(php|jsp|cgi|asp|aspx)$
# {
#     proxy_pass http://127.0.0.1:20199;
#     proxy_set_header Host \$host;
#     proxy_set_header X-Real-IP \$remote_addr;
#     proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
#     proxy_set_header REMOTE-HOST \$remote_addr;
# }
# location /
# {
#     if (!-e \$request_filename) {
#          proxy_pass http://127.0.0.1:20199;
#     }
#     proxy_http_version 1.1;
#     proxy_read_timeout 360s;
#     proxy_redirect off;
#     proxy_set_header Upgrade \$http_upgrade;
#     proxy_set_header Connection \"upgrade\";
#     proxy_set_header Host \$host;
#     proxy_set_header X-Real-IP \$remote_addr;
#     proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
#     proxy_set_header REMOTE-HOST \$remote_addr;
#     add_header X-Cache \$upstream_cache_status;
#     #Set Nginx Cache
#        add_header Cache-Control no-cache;
#     expires 12h;
# }
# #PROXY-END/
# " > ${setup_path}/panel/vhost/nginx/proxy/${project_name}/proxy.conf

# 操作说明，进入程序根目录运行 ./baota.sh
