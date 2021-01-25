## 大前端

### 项目流程

#### 敏捷开发(agile development)

##### 迭代开发

**敏捷开发的核心是迭代开发（iterative development）。敏捷一定是采用迭代开发的方式。**

迭代的英文是 iterative，直译为"重复"，迭代开发其实就是"重复开发"。

对于大型软件项目，传统的开发方式是采用一个大周期进行开发；迭代开发的方式则不一样，它将开发过程拆分成多个小周期，即一次"大开发"变成多次"小开发"，每次小开发都是同样的流程，所以看上去就好像重复在做同样的步骤。

**迭代开发将一个大任务，分解成多次连续的开发，本质就是逐步改进。**开发者先快速发布一个有效但不完美的最简版本，然后不断迭代。每一次迭代都包含规划、设计、编码、测试、评估五个步骤，不断改进产品，添加新功能。通过频繁的发布，以及跟踪对前一次迭代的反馈，最终接近较完善的产品形态。

##### 增量开发

怎么划分迭代，哪个任务在这个迭代，哪个任务在下个迭代？这时，一般采用"增量开发"（incremental development）划分迭代。

**所谓"增量开发"，指的是软件的每个版本，都会新增一个用户可以感知的完整功能。也就是说，按照新增功能来划分迭代。**

**增量开发加上迭代开发，才算真正的敏捷开发。**

##### 敏捷开发的好处

- 早期交付

**敏捷开发的第一个好处，就是早期交付，从而大大降低成本。**

- 降低风险

**敏捷开发的第二个好处是，及时了解市场需求，降低产品不适用的风险。**

由于敏捷开发可以不断试错，找出对业务最重要的功能，然后通过迭代，调整软件方向。相比传统方式，大大增加了产品成功的可能性。如果市场需求不确定，或者你对该领域不熟悉，那么敏捷开发几乎是唯一可行的应对方式。

##### 如何进行每一次迭代

虽然敏捷开发将软件开发分成多个迭代，但是也要求，**每次迭代都是一个完整的软件开发周期，必须按照软件工程的方法论，进行正规的流程管理。**

具体来说，每次迭代都必须依次完成以下五个步骤。

> 1. 需求分析（requirements analysis）
> 2. 设计（design）
> 3. 编码（coding）
> 4. 测试（testing）
> 5. 部署和评估（deployment / evaluation）

每个迭代大约持续2~6周。

##### 敏捷开发的价值观

《敏捷软件开发宣言》里面提到四个价值观。

> - 程序员的主观能动性，以及程序员之间的互动，优于既定流程和工具。
> - 软件能够运行，优于详尽的文档。
> - 跟客户的密切协作，优于合同和谈判。
> - 能够响应变化，优于遵循计划。

##### 十二条原则

该宣言还提出十二条敏捷开发的原则。

1. 通过早期和持续交付有价值的软件，实现客户满意度。
2. 欢迎不断变化的需求，即使是在项目开发的后期。要善于利用需求变更，帮助客户获得竞争优势。
3. 不断交付可用的软件，周期通常是几周，越短越好。
4. 项目过程中，业务人员与开发人员必须在一起工作。
5. 项目必须围绕那些有内在动力的个人而建立，他们应该受到信任。
6. 面对面交谈是最好的沟通方式。
7. 可用性是衡量进度的主要指标。
8. 提倡可持续的开发，保持稳定的进展速度。
9. 不断关注技术是否优秀，设计是否良好。
10. 简单性至关重要，尽最大可能减少不必要的工作。
11. 最好的架构、要求和设计，来自团队内部自发的认识。
12. 团队要定期反思如何更有效，并相应地进行调整。

#### DevOps流程

计划---编码---打包---发布测试---发布正式版本---运维---监控

![devops流程](/Users/huangsiying/project/01 mk-bigFrontend/images/devops流程.jpg)

详细流程

![devops全流程](/Users/huangsiying/project/01 mk-bigFrontend/images/devops全流程.png)

#### 需求分析

全局思维，重难点分析，工具使用，制作需求文档原型图流程图等

**分类**

业务需求：业务痛点挖掘，用户业务建模，明确业务流程，输出分析结论

用户需求：理论（马斯洛需求理论）方法（场景分析，用户分析，行为分析）

系统需求：规范，性能，硬件环境（升级，平台），非功能性，异常处理

**工作流**

定义（idea）---捕获（沟通了解用户需求）---分析/建模（流程图，原型图，表格，说明文档等）---验证（用户确认，技术评审，项目评审：包括时间，质量，资源投入等）---跟踪（反馈，变更）---形成文档

##### 前期考虑

- **业务类型**

业务型（无纸化带来的效率提升），痛点型（市场决定的风口）功能性（企业&客户需求，解决流量入口）

- **需求分析痛点**

不想就做，照单全收，未沟通确认，放羊管理（项目经理确认跟踪沟通）

- **需求分析难点**

同时考虑功能，时间和成本

形成需求文档，用户回馈确认

引导用户需求，创造用户需求---往熟悉或发展的地方靠

- **需求分析的组成部分**

以本项目为例

项目需求：全栈，前端痛点，对接企业，全周期，跨端，多场景

业务需求：社区应用，登陆鉴权，用户体系，积分系统，发帖收藏，点赞回复，内容管理

用户需求：交互简单，界面美观，运行流畅，功能实用，定制需求，其他需求

具体产出：需求文档，项目选型，技术栈选型，开发周期预估，项目进度预估，分项原型图，分项流程图

##### 需求变更

经过和用户的沟通和确认之后用户提出来的需求

1. 变更是否合理---工期，费用，技术
2. 是否项目范围内变更，对主体业务是否有影响
3. 明确需求变更流程，确定需求变更

对于产品经理的变更

沟通---提出要求---引导需求---自我挑战

##### 核心业务需求分析

前端：页面/交互---组件化，代码复用---工程化，接口定义---标准化

后台：接口开发---自动化，管理后台---模块化，缺陷管理---流程化

业务：登陆鉴权---前后分离，内容展示---多场景，个人中心---用户体系

功能：筛选---搜索，统计---积分系统，评论---消息

整体需求分析：

前后端分离---接口鉴权---数据通用性---数据库设计

内容管理---搜索---筛选---积分管理体系

社区业务---权限---积分---用户体系

##### 原型设计

用线条图形描绘产品框架，也叫线框图

**目标**

- 展示布局逻辑结构
- 表明状态关系和跳转关系（部分使用流程图）
- 低成本快速修改

##### 需求分析

**PC需求分析**

> 遇到不确定的需求问题：借鉴（设计网站花瓣，站酷，蓝色理想或类似的产品），专业人士（同事）沟通，客户沟通

内容展示：列表，交互

回复点赞

用户体系与用户体系

> Axure原型图：
>
> 版本说明---更新日志（包含时间和更新内容，A新增C样式变更D准备移除R移除M逻辑变更）
>
> 业务模块。。。

文档产出：重要页面原型图，主体页面流程图，说明文档.md

**服务端需求分析**

用户/权限管理，内容管理，首页管理，其他功能（日志，多语言等）

**webapp和小程序原型**

- 主体功能

- 技术实现/交互体验

- 用户数据和流量入口（是否有必要开发webapp或小程序）

文档产出：重要页面原型图，主体页面流程图，说明文档.md

##### 工具

原型类：Axure，Ps，墨刀（在线，模版丰富，更加高保真），蓝湖，MockPlus

功能类：脑图（Xmind，MindNode（Mac），MindManager）

流程图：Visio（Win）/OmniGraffle（Mac）/processOn（在线）

**Axure**

设置默认保存时间，生成html文件，默认组件，流程图，预览，浏览器插件，模块化设计，锁定模块，组件对齐方式，交互

**墨刀（在线，模版丰富，更加高保真）**

free.modao.cc

**Process**

processon.com

##### 技术栈

团队技术实力和业务需求结合

能复用不造轮，需造轮不牵强

怎么简单怎么来，考虑时间进度成本质量因素

前端：

响应式，LayUI，Vuejs，Vuex，Vue-router

WebApp，Mint，Sass/Scss，iScroll

小程序，MINA，mpvue

Web服务：Nginx+HTTPS/Caddy，RESTful API，WebSocket（消息）

业务层服务层CI/CD流程：koa，iVew-admin，日志服务，文档管理，版本控制，接口测试，持续集成等

存储层：MongoDB，Redis

运行环境：Docker/自定义Dockerfile/私有仓库Harbor

## 环境搭建

### 开发环境搭建

**准备三个环境**

本地环境：nodejs，IDE，vue-cli

测试环境：Linux环境（三选一：虚拟机，云服务1c+2G，安装Docker）

数据库服务：Mongodb

#### 简版

##### 本地环境

**Nodejs12.16.3（npm6.14.4/yarn1.22.10）+nvm0.37.2**

yarn：安装参考官方仓库

nvm：mac使用nvm，win使用nvm-windows，安装参考官方仓库`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash`

> 安装报错：Failed to connect to raw.githubusercontent.com port 443: Connection refused
>
> 解决：点击如下网址`https://www.ipaddress.com/`来查询raw.githubusercontent.com的真实ip，然后在用sudo vim /etc/hosts修改hosts`199.232.28.133 raw.githubusercontent.com`不成功的话试试151.101.76.133
>
> 再次安装后报：
>
> Resolving deltas: 100% (38/38), done.
>
> => Compressing and cleaning up git repository
>
> 
>
> => Profile not found. Tried ~/.bashrc, ~/.bash_profile, ~/.zshrc, and ~/.profile.
>
> => Create one of them and run this script again
>
>   OR
>
> => Append the following lines to the correct file yourself:
>
> 
>
> export NVM_DIR="$HOME/.nvm"
>
> [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
>
> 
>
> npm ERR! peer dep missing: vue@3.0.5, required by @vue/compiler-sfc@3.0.5
>
> => You currently have modules installed globally with `npm`. These will no
>
> => longer be linked to the active version of Node when you install a new node
>
> => with `nvm`; and they may (depending on how you construct your `$PATH`)
>
> => override the binaries of modules installed with `nvm`:
>
> 
>
> /usr/local/lib
>
> ├── @vue/cli@4.5.11
>
> ├── create-react-app@3.4.1
>
> ├── typescript@4.1.3
>
> └── yarn@1.22.10
>
> => If you wish to uninstall them at a later point (or re-install them under your
>
> => `nvm` Nodes), you can remove them from the system Node as follows:
>
> 
>
>    $ nvm use system
>
>    $ npm uninstall -g a_module
>
> 
>
> => Close and reopen your terminal to start using nvm or run the following to use it now:
>
> 
>
> export NVM_DIR="$HOME/.nvm"
>
> [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
>
> 解决：
>
> 1、cd ~ ( 进入当前用户的home目录)
>
> 2、open .bash_profile (打开.bash_profile文件，如果文件不存在就 创建文件：touch .bash_profile 编辑文件：open -e .bash_profile)
>
> 3、直接更改弹出的.bash_profile文件内容,把以下内容粘贴进去（添加环境变量）：
>
> ```
> export NVM_DIR="$HOME/.nvm"
> [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
> ```
>
> 4、command + s 保存文件，然后关闭 。
>
> 5、在terminal(终端)中输入 source .bash_profile (使用刚才更新之后的内容)。
>
> 6、nvm --version
>
> 7、0.37.2～成功～

```cmd
nvm list
nvm use xxx
```

**IDE（vscode，webstorm，atom）**

**Vue-Cli**

安装：npm i -g @vue/cli

快速原型开发：npm i -g @vue/cli-service-global（未安装，需要时再安装，比如vue serve不能运行vue文件）

##### 测试环境及mongo数据库环境

三种方式：

- 虚拟机自建环境（Parallels/Vmware/Hyperv）

- 云服务（一核2G以上）

- 安装Docker（轻量容器服务）

  在Linux安装参考docker-install仓库

  其他环境参考官网

  - docker集合命令工具：docker compose，安装参考官网（安装，权限）

  - docer中安装mongodb服务

    dockerhub中找到mondodb，下载慢可配置中国源，这里用到vi

    安装完之后重启docker，启动服务（docker run -d --name some-mongo -p 10050:27017 mongo:4）

    在测试之前，在宿主机防火墙放行10050端口（映射的容器中的27017端口）两种方式（1关闭防火情Ubuntu：service ufw stop CentOS：service firewalld stop，2将10050添加到放行规则Ubuntu：ufw allow Port10050 CentOS：firewall -cmd --zoom=public --add-port=10050/tcp --permanent 回车成功后 firewall-cmd reload 不成功时查看状态 firewall -cmd --state）

    > 推荐远程mongo服务的工具：robo 3t，图形化界面

#### 开发系统环境

##### 虚拟机

windows：vmware，Hyper-V

mac：Parrallels Desktop

Linux：Hypervisor

##### Linux

版本

目录结构

文件权限

硬件/性能：

mount，df，Top，性能测试方法（）

#### Linux常见指令

##### 文件

增删改查，权限控制，路径

##### 磁盘

##### 用户及组

##### 压缩与解压

##### 进程/服务

##### 网络

防火墙，IP DNS设置，下载，SSH远程

#### Docker初识

##### 定义

##### 安装

##### 命令

docker run

docker start/stop/reatart

docker images 查看当前下载了哪些镜像

docker ps 查看当前运行的docker服务

docker inspect

docker logs

docker exec

##### docer-compose工具

##### docker仓库

docker gub

harbor建立私有仓库

#### Nodejs

##### 基础

##### nvm版本管理工具

安装

命令：切换版本，安装新版本，设置默认版本

##### yarn/npm包管理工具

##### npm发布

#### 调试工具

##### Chrome调试工具DevTools

##### 真机调试方法

#### IDE

##### 插件环境：vue

##### 代码规范：eslint，空格设置

##### 调试设置

### UI框架

### 接口测试

### 前端工程化

#### webpack

