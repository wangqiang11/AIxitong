#!/bin/bash
echo "开始拉取最新代码..."
git pull

echo "重启 Docker 容器：chatmoney-nginx"
docker restart chatmoney-nginx

echo "✅ 部署完成！"
