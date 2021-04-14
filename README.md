# 开发日志

Vue2+koa2

## 登录注册模块

- 用户输入验证
- 拦截非正常登录请求
- 登录验证（token），统计信息

使用layui框架完成样式布局

使用svg-captcha完成图形验证码

使用vuelidate或veevalidate3（较简单，4版本支持vue3）数据校验

使用nodemailer完成邮件发送，qq邮箱获取授权码，qq等公共邮箱一般有一些限制，可以使用付费的邮件服务

使用moment处理时间

使用showdoc本地化部署接口文档管理

使用本地化部署的gitlab作为版本管理

使用本地化部署的jenkins+dockerfile作为ci/cd工具，对接gitlab

使用mongoDB作为数据库

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