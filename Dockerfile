# build stage
FROM node:14.15.5 as build-stage

# 设置维护者
LABEL maintainer=naixes

# 在镜像内部创建工作目录
WORKDIR /app
# 拷贝文件，用到了ignore文件的配置
COPY . .
RUN npm install --registry=https://registry.npm.taobao.org
# 构建
RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage
# 拷贝构建好的文件到nginx
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
# 运行nginx
CMD ["nginx", "-g", "daemon off;"]