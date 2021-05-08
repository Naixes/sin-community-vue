# 开发日志

Vue2+koa2

## 环境

使用 layui 框架完成样式布局

使用 mongoDB 作为数据库

使用 moment 处理时间

使用 showdoc 本地化部署接口文档管理

使用本地化部署的 gitlab 作为版本管理

使用本地化部署的 jenkins+dockerfile 作为 ci/cd 工具，对接 gitlab

## 登录注册模块

- 用户输入验证
- 拦截非正常登录请求
- 登录验证（token），统计信息

使用 svg-captcha 完成图形验证码

使用 vuelidate 或 veevalidate3（较简单，4 版本支持 vue3）数据校验

使用 nodemailer 完成邮件发送，qq 邮箱获取授权码，qq 等公共邮箱一般有一些限制，可以使用付费的邮件服务

使用 bcrypt 加密敏感数据

使用 jwt 方式鉴权：

- 前端生成唯一标识符（uuid），后端通过 redis 将标识符和验证码对应起来（存储），通过标识符进行鉴权

- 鉴权库：koa-jwt 库https://www.npmjs.com/package/koa-jwt

- common/errHandle 错误处理

- 产生校验 token：jsonwebtoken 库

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
- 前端校验，使用 vue 插件系统和自定义组件完成错误提示

> 调试小技巧：mounted 中 window.vue = this，就可以在浏览器查看或操作

- 注册用户

## 首页

### 业务功能

分类

状态

标签

### 数据库设计

签到记录

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

页面 header，footer 通用结构

侧边栏按功能拆分 links，sign...

列表 list，listItem，top

- 路由，高亮
- 长列表，loading
- 拦截器，取消请求（cancelToken）
- 避免 tab 点击重复执行

> Seo：搜索引擎优化
>
> 重要部分是网站的性能优化：
>
> - 资源压缩，请求压缩
> - 设置缓存，DNS预处理
> - CDN
>
> qs库：将对象转换为拼接字符串

### 后端

#### eslint

安装 eslint，`npx eslint --init //初始化eslint npx eslint src/**/*.js //校验指定文件`

安装 eslint-config-standard，`npm install --save-dev eslint-config-standard eslint-plugin-promise eslint-plugin-import eslint-plugin-node`

Then, add this to your `.eslintrc` file:

```
{
  "extends": "standard"
}
```

> npm-check-updates：依赖包升级

#### 接口

查询 List，联合查询

```js
// models/Post
import moment from 'dayjs';
import mongoose from '../config/DBHelper';

const Schema = mongoose.Schema;

const PostSchema = new Schema({
  // 链接到用户
  uid: { type: String, ref: 'users' },
  title: { type: String },
  content: { type: String },
  created: { type: Date },
  catalog: { type: String },
  points: { type: Number },
  isEnd: { type: String },
  reads: { type: Number },
  answers: { type: Number },
  status: { type: String },
  isTop: { type: String },
  sort: { type: String },
  tags: { type: Array },
});

// 钩子
PostSchema.pre('save', function(next) {
  this.created = moment().format('YYYY-MM-DD HH:mm:ss');
  next();
});

PostSchema.statics = {
  /**
   * 获取文章列表
   * @param {Object} options 筛选条件
   * @param {String} sort 排序
   * @param {Number} page 分页页数
   * @param {Number} limit 分页条数
   */
  getList: function(options, sort, page, limit) {
    return (
      this.find(options)
        .sort({ [sort]: -1 })
        .skip(page * limit)
        .limit(limit)
        // 联合查询
        .populate({
          path: 'uid',
          select: 'email',
        })
    );
  },
};

const PostModel = mongoose.model('post', PostSchema);

export default PostModel;

// api/ContentController
import Post from '../models/Post';

class ContentController {
  async getPostList(ctx) {
    const { query } = ctx.request;
    console.log('query', query);
    const options = {};

    const sort = query.sort ? query.sort : 'created';
    const page = query.page ? parseInt(query.page) : 0;
    const limit = query.limit ? parseInt(query.limit) : 20;

    if (typeof query.catalog !== 'undefined' && query.catalog !== '') {
      options.catalog = query.catalog;
    }
    if (typeof query.isTop !== 'undefined') {
      options.isTop = query.isTop;
    }
    if (typeof query.isEnd !== 'undefined') {
      options.isEnd = query.isEnd;
    }
    if (typeof query.tag !== 'undefined') {
      options.tags = {
        $elemMatch: { name: query.tag },
      };
    }

    console.log('options', options);

    const result = await Post.getList(options, sort, page, limit);

    ctx.body = {
      code: 200,
      data: result,
      msg: '获取文章列表成功',
    };
  }
}

export default new ContentController();
```

#### dayjs

移动端推荐 dayjs 代替 monentjs（体积过大）

插件

## 用户中心

### 前端

sass循环快速生成样式

```scss
@for $i from 0 to 5 {
  .pd#{$i} {
    padding: $i * 10 + px !important;
  }
  .pt#{$i} {
    padding-top: $i * 10 + px !important;
  }
  .pl#{$i} {
    padding-left: $i * 10 + px !important;
  }
  .pr#{$i} {
    padding-right: $i * 10 + px !important;
  }
  .pb#{$i} {
    padding-bottom: $i * 10 + px !important;
  }
  .mr#{$i} {
    margin-right: $i * 10 + px !important;
  }
  .mt#{$i} {
    margin-top: $i * 10 + px !important;
  }
  .ml#{$i} {
    margin-left: $i * 10 + px !important;
  }
}
```

@mixin

```scss
@mixin reset-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

@mixin horizontal-list {
  @include reset-list;

  li {
    display: inline-block;
    margin: {
      left: -2px;
      right: 2em;
    }
  }
}

nav ul {
  @include horizontal-list;
}
```

vscode插件：live sass compiler，实时查看编译结果

dart-sass：调试sass，sass包也可以执行调试语句，dart-sass快一些

```scss
@warn $test;
@debug 'xx#{$test}'
```

each&map-get&maps，应用：生成响应式样式或通用样式库

```scss
$icons: ("eye": "\f112", "start": "\f12e", "stop": "\f12f");

@each $name, $glyph in $icons {
  .icon-#{$name}:before {
    display: inline-block;
    font-family: "Icon Font";
    content: $glyph;
  }
}


@use "sass:map";

$font-weights: ("regular": 400, "medium": 500, "bold": 700);

@debug map.set($font-weights, "extra-bold", 900);
// ("regular": 400, "medium": 500, "bold": 700, "extra-bold": 900)
@debug map.set($font-weights, "bold", 900);
// ("regular": 400, "medium": 500, "bold": 900)

$light-weights: ("lightest": 100, "light": 300);
$heavy-weights: ("medium": 500, "bold": 700);

@debug map.merge($light-weights, $heavy-weights);
// ("lightest": 100, "light": 300, "medium": 500, "bold": 700)
```

全局路由守卫进行判断登录状态，校验登录信息是否过期

store保存在内存中刷新会被初始化

localStorage和sessionStorage，local会一直存在在缓存文件中，在浏览器中只有当前域可以获取，session会话期间存在

localStorage缓存登录信息

安全性：https

登录机制优化：jwt过期处理

签到机制，组件化，签到状态

个人设置

发帖，自定义编辑器

mixin封装验证码，属性方法会覆盖，钩子函数都会执行，先调用mixin后组件

详情列表，分页，全局filter

评论列表，评论，使用指令完成多个评论转换

编辑点赞回复评论，requestAnimationFrame

编辑帖子，路由跳转判断防止恶意跳转

收藏

发帖记录

用户中心

### 后端

签到接口

测试：冒烟测试（针对性），功能测试，临界测试

requie.context对routes入口优化

> 报错：require.context is not a function
>
> npm i -D babel-plugin-transform-require-context
>
> .babelrc：
>
> "plugins": ["transform-require-context"]

更新个人基本信息接口

更新邮箱时发送确认邮件，找回密码类似

文件上传，文件公共类（判路径，新建文件夹）

> fs模块的readfile（将文件直接读取到内存）和readstream（节约内存）

发帖

详情列表，分页

评论列表，新建编辑点赞回复评论

编辑帖子

收藏

发帖记录

用户中心

## 消息中心

websocket完成消息推送，鉴权，心跳检测，断线重连，使用vuex管理websocket