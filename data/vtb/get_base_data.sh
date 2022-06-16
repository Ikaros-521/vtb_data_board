#!/bin/bash
#下载
wget https://api.asdanmaku.com/channel/2051555906/clips -O /usr/local/nginx/html/data/vtb/base_data/2051555906
usleep 500
wget https://api.asdanmaku.com/channel/125979457/clips -O /usr/local/nginx/html/data/vtb/base_data/125979457
usleep 500
wget https://api.asdanmaku.com/channel/1300421811/clips -O /usr/local/nginx/html/data/vtb/base_data/1300421811
usleep 500
wget https://api.matsuri.icu/channel/1569389574/clips -O /usr/local/nginx/html/data/vtb/base_data/1569389574
usleep 500
wget https://api.asdanmaku.com/channel/2094031249/clips -O /usr/local/nginx/html/data/vtb/base_data/2094031249

#打包
tar -czvf /usr/local/nginx/html/data/vtb/vtb_base_data.tar.gz /usr/local/nginx/html/data/vtb/base_data/
