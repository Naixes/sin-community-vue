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

使用jwt方式鉴权