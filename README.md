# 开发日志

Vue2+koa2

## 环境



使用layui框架完成样式布局

使用mongoDB作为数据库

使用moment处理时间

使用showdoc本地化部署接口文档管理

使用本地化部署的gitlab作为版本管理

使用本地化部署的jenkins+dockerfile作为ci/cd工具，对接gitlab

## 登录注册模块

- 用户输入验证
- 拦截非正常登录请求
- 登录验证（token），统计信息

使用svg-captcha完成图形验证码

使用vuelidate或veevalidate3（较简单，4版本支持vue3）数据校验

使用nodemailer完成邮件发送，qq邮箱获取授权码，qq等公共邮箱一般有一些限制，可以使用付费的邮件服务

使用bcrypt加密敏感数据

使用jwt方式鉴权：

- 前端生成唯一标识符（uuid），后端通过redis将标识符和验证码对应起来（存储），通过标识符进行鉴权

- 鉴权库：koa-jwt库https://www.npmjs.com/package/koa-jwt

- common/errHandle错误处理

- 产生校验token：jsonwebtoken库

  请求头：Authorization: Bearer token

> npm-run-all：运行多个脚本
>
> 提供了三个命令
>
> npm-run-all：参数 -s，-p
>
> run-s：串行
>
> run-p：并行

- 验证验证码和用户名密码
- 前端校验，使用vue插件系统和自定义组件完成错误提示

> 调试小技巧：mounted中window.vue = this，就可以在浏览器查看或操作

- 注册用户

## 首页

### 业务功能

分类

状态

标签

### 数据库设计

<img src="README.assets/截屏2021-04-15 上午10.37.58.png" alt="截屏2021-04-15 上午10.37.58" style="zoom:50%;" />

<img src="README.assets/截屏2021-04-15 上午11.03.08.png" alt="截屏2021-04-15 上午11.03.08" style="zoom:50%;" />

<img src="README.assets/截屏2021-04-15 上午10.39.06.png" alt="截屏2021-04-15 上午10.39.06" style="zoom:50%;" />

<img src="README.assets/截屏2021-04-15 上午10.39.22.png" alt="截屏2021-04-15 上午10.39.22" style="zoom:50%;" />

### 接口设计

**接口设计原则**

简单：高内聚（一次请求获取业务相应的数据），与业务对应

高效：属性设计（起名），数据结构（减少嵌套），方法抽象（数据过滤，多余数据和敏感数据）

兼容：尽量保证兼容，进行版本与状态控制（通过文件夹路径区分版本等）

**组件拆分原则**

独立功能模块（松耦合，扁平化，提炼精华）

独立的状态变化（统一的状态管理）

从上而下的逻辑思考，从下而上的组件拆分

### 组件拆分

页面header，footer通用结构

侧边栏按功能拆分links，sign...

列表list，listItem，top

- 路由，高亮
- 长列表，loading
- 拦截器，取消请求（cancelToken）
- 避免tab点击重复执行



