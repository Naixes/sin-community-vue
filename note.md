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

![devops流程](./note.assets/devops流程.jpg)

详细流程

![devops全流程](./note.assets/devops全流程.png)

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

linux三种方式：

- 虚拟机自建环境（Parallels/Vmware/Hyperv）

- 云服务（一核2G以上）

- 安装Docker（轻量容器服务）

  在Linux安装参考docker-install仓库

  From `https://get.docker.com`:

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```
```
其他环境参考官网
- docker集合命令工具：docker compose，安装参考docker官网（安装，权限）
```
    # 安装
    sudo curl -L "https://github.com/docker/compose/releases/download/1.28.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    # 上面安装后执行docker-compose -v出错，可能是网络原因没有装完整，换一种安装方式
    wget https://github.com/docker/compose/releases/download/1.25.0/docker-compose-$(uname -s)-$(uname -m) -O /usr/local/bin/docker-compose
    # 权限
    sudo chmod +x /usr/local/bin/docker-compose
    # 查看版本
    docker-compose -v

  - docker中安装mongodb服务
  
    dockerhub中找到mondodb，查找到latest最新版本，安装指定版本`docker pull mongo:4`
  
    下载慢可配置中国源（参考[docker doc](https://docs.docker.com/registry/recipes/mirror/)），这里用到vi
> Either pass the `--registry-mirror` option when starting `dockerd` manually, or edit [`/etc/docker/daemon.json`](https://docs.docker.com/engine/reference/commandline/dockerd/#daemon-configuration-file) and add the `registry-mirrors` key and value, to make the change persistent.
>
> ```
> {
> "registry-mirrors": ["https://registry.docker-cn.com"]
> }
> ```

修改完之后重启docker`service docker restart`重新下载

> 报错：Error response from daemon: Get https://registry-1.docker.io/v2/: net/http: request canceled while waiting for connection (Client.Timeout exceeded while awaiting headers)
>
> 方法一：增加国内镜源（不起作用）
>
> 方法二：（可行）
>
> 第一步：通过`dig @114.114.114.114 registry-1.docker.io`找到可用IP地址
>
> 第二步：修改`/etc/hosts`强制docker.io相关的域名解析到其它可用IP
>
> 第三步：保存配置文件后进行多次重试可以成功下载镜像

启动服务（docker run -d --name some-mongo -p 10050:27017 mongo:4）

在测试之前，在宿主机防火墙放行10050端口（映射的容器中的27017端口）两种方式（1关闭防火情Ubuntu：service ufw stop CentOS：service firewalld stop，2将10050添加到放行规则Ubuntu：ufw allow Port10050 CentOS：firewall -cmd --zoom=public --add-port=10050/tcp --permanent 回车成功后 firewall-cmd reload 不成功时查看状态 firewall -cmd --state）

> 推荐远程mongo服务的工具：robo 3t，图形化界面

#### 开发系统环境

##### 虚拟机

- **windows：vmware，Hyper-V**

win10以上以及windows server都是有默认的hyper-v组件

- **mac：Parrallels Desktop，vmware**

安装centos7镜像7.6 1810 DVD版，ctrl+option释放光标：选择时区，选择语言，INSTALLATION（done），SOFTWARE（Virtualization Host全选），NETWORK（ON，Config配置网络默认），BEGIN INSTALL，设置密码（同本机密码），Rebot，登录输入root和密码

配置静态ip：https://www.cnblogs.com/itbsl/p/10998696.html

注意：最开始要选择英文

- **Linux：Hypervisor**

##### Linux

Linux是一种开源电脑操作系统内核，c语言编写，符合POSIX标准的类Unix操作系统

- **版本**

linux发行版：简单来说就是linux内核和应用软件的打包，常用linux发行版：CentOS，Ubuntu，redhat，Debain，Fedora等

CentOS：镜像下载推荐DVD，https://wiki.centos.org/zh/Download，选择镜站进行下载

Debain：系统资源占用少，社区维护，更新快

Ubuntu：基于Debain，桌面版新手友好

> Ubuntu:  <http://mirrors.aliyun.com/ubuntu-releases/>
>
> Centos: <https://mirrors.aliyun.com/centos/>
>
> 阿里云镜像：<https://opsx.alibaba.com/mirror>
>
> 清华镜像：<https://mirrors.tuna.tsinghua.edu.cn/>

- **目录结构**

  | 目录  | 应放置档案内容                                               |
  | ----- | ------------------------------------------------------------ |
  | /bin  | 命令，包含了大部分命令。系统有很多放置执行档的目录，但/bin⽐较特殊。因为/bin放置的是在单人维护模式 还能够被操作的指令。在/bin底下的指令可以被root与一般帐号所使用，主要有: cat,chmod(修改权限), chown, date, mv, mkdir, cp, bash等常用的指令。 |
  | /boot | 系统内核。主要放置开机会使用到的档案，包括Linux核心档案以及开机选单与开机所需设定档等 等。Linux kernel常用的档名为:vmlinuz ，如果使⽤用的是grub这个开机管理理程式，则 还会存在/boot/grub/这个目录。 |
  | /dev  | 设备，硬件。在Linux系统上，任何装置与周边设备都是以档案的型态存在于这个目录当中。 只要通 过存取这个目录下的某个档案，就等于存取某个装置。⽐比要重要的档案有/dev/null, /dev/zero, /dev/tty , /dev/lp*, / dev/hd*, /dev/sd*等等 |
  | /etc  | 配置文件。系统主要的设定档几乎都放置在这个⽬录内，例如人员的帐号密码档、各种服务的启始档等。 ⼀一般来说，这个⽬录下的各档案属性是可以让一般使用者查阅的，但是只有root有权⼒修改。 FHS建议不不要放置可执行档(binary)在这个⽬录中。 比较重要的档案有:/etc/inittab, /etc/init.d/, /etc/modprobe.conf, /etc/X11/, /etc/fstab, /etc/sysconfig/等等。 另外，其下重要的⽬录有:/etc/init.d/ :所有服务的预设启动 script都是放在这里的，例如要启动或者关闭iptables的话: /etc/init.d/iptables start、/etc/init.d/ iptables stop/etc/xinetd.d/ :这就是所谓的super daemon管理理的 各项服务的设定档目录。/etc/X11/ :与X Window有关的各种设定档都在这里，尤其 是xorg.conf或XF86Config这两个X Server的设定档。 |
  | /home | 用户：两类用户，root（专用目录root）/普通用户（每个目录对应一个普通用户），cd+会车返回当前用户的home目录，su+用户名切换用户。这是系统预设的使⽤者家目录(home directory)。 在你新增一个一般使⽤用者帐号时， 预设的使⽤者家⽬录都会规范到这里来。⽐较重要的是，家⽬录有两种代号: ~ :代 表当前使⽤者的家⽬录，而 ~guest:则代表用户名为guest的家目录。 |
  | /lib  | 公用函数库。系统的函式库⾮常的多，而/lib放置的则是在开机时会用到的函式库，以及在/bin 或/sbin底下的指令会呼叫的函式库而已 。 什么是函式库呢?妳可以将他想成是外挂， 某些指令必须要有这些外挂才能够顺利完成程式的执⾏行行之意。 尤其重要的 是/lib/modules/这个⽬录，因为该目录会放置核心相关的模组(驱动程式)。 |

  |        |                                                              |
  | ------ | ------------------------------------------------------------ |
  | /media | u盘等。media是媒体的英⽂，顾名思义，这个/media底下放置的就是可移除的装置。 包括软碟、光碟、DVD等等装置都暂时挂载于此。 常见的档名有:/media/floppy, /media/cdrom等等。 |
  | /mnt   | 如果妳想要暂时挂载某些额外的装置，⼀一般建议妳可以放置到这个⽬录中。在古早时候，这个⽬录的⽤用途与/media相同啦。 只是有了/media之后，这个目录就用来暂时挂载⽤了。 |
  | /opt   | 程序。这个是给第三方协力软体放置的⽬目录 。 什什么是第三⽅方协力软体啊?举例来说，KDE这 个桌面管理系统是⼀一个独⽴的计画，不不过他可以安装到Linux系统中，因此KDE的软体就建议放置到此⽬录下了了。 另外，如果妳想要自⾏安装额外的软体(⾮非原本的 distribution提供的)，那么也能够将你的软体安装到这⾥来。 不不过，以前的Linux系统 中，我们还是习惯放置在/usr/local⽬目录下。 |
  | /root  | 系统管理员(root)的家目录。 之所以放在这里，是因为如果进入单⼈维护模式⽽而仅挂载根⽬录时，该⽬目录就能够拥有root的家目录，所以我们会希望root的家⽬录与根⽬录放 置在同⼀个分区中。 |
  | /sbin  | 命令，->代表快捷方式，也叫链接，软链接，ls -l。Linux有⾮常多指令是⽤用来设定系统环境的，这些指令只有root才能够利利⽤用来设定系 统，其他使⽤者最多只能⽤来查询⽽已。放在/sbin底下的为开机过程中所需要的，里面包括了开机、修复、还原系统所需要的指令。⾄于某些伺服器软体程式，⼀一般则放 置到/usr/sbin/当中。⾄于本机⾃⾏安装的软体所产⽣的系统执行档(system binary)， 则放置到/usr/local/sbin/当中了。常⻅的指令包括:fdisk, fsck, ifconfig, init, mkfs等 等。 |
  | /srv   | srv可以视为service的缩写，是⼀些⽹路服务启动之后，这些服务所需要取⽤的资料⽬ 录。 常⻅的服务例如WWW, FTP等等。 举例来说，WWW伺服器器需要的⽹页资料就可 以放置在/srv/www/⾥⾯。呵呵，看来平时我们编写的代码应该放到这里了。 |
  | /tmp   | 这是让⼀般使用者或者是正在执行的程序暂时放置档案的地⽅方。这个⽬录是任何⼈都能够存取的，所以你需要定期的清理⼀下。当然，重要资料不可放置在此⽬录啊。 因为FHS甚⾄建议在开机时，应该要将/tmp下的资料都删除。 |

- **文件权限**

- **硬件/性能**

ssh链接远程系统

查看版本

查看硬件资源

测试硬件性能

```
ip addr # 查看ip
ssh -p 27822 name@xxx.xxx.cn
lsb_release -a # 查看版本，未找到lsb_release时，安装lsb：yum install redhat-lsb -y，切换root：su
uname -a # 查看内核版本

df # 查看磁盘空间
df -Th # 以G为单位查看磁盘空间

cd /
ls -la # 查看文件目录及权限
```

目录结构

```
...
home # 个人目录
etc # 软件的配置文件
sys # 系统目录
usr # 系统可执行文件
	sbin # 超级管理员可执行文件
	local # 本地可执行文件
	...
var # 日志文件
	www # 网站目录
```

cpu/内存/进程

```
top # 查看在运行的进程/cpu/内存使用情况 m # 查看内存使用情况 ctrl+c # 退出top命令
```

> mount，df，Top，性能测试方法（）好像有的没讲到。。。

#### Linux常见指令

文档型：文件相关命令（touch，cat，echo，rm，vi，cd）

硬件型：磁盘/进程/服务/网络

功能型：压缩/解压，下载，远程

##### 文件

增删改查，权限控制，路径

```
ls # 查看目录
mkdir # 新建目录
touch xxx # 新建xxx文件
vi xxx # 进入vim编辑器
i # insert状态
esc:wq # 保存退出
esc:q! # 不保存退出
cat xxx # 查看xxx文件内容
echo 'content' >> xxx # 在文件后面增加content内容
echo 'content' > xxx # 覆盖在文件内容
rm xxx # 删除文件
rm -r xxx # 删除目录
rm -rf xxx # 强制删除
```

##### 磁盘

```
pwd # 查看当前完整路径
```

##### 用户及组

##### 下载/压缩/解压

```
wget url # 下载
tar zxvf xxx # 解压 z 代表gz结尾，x解压缩 v显示解压过程 f使用归档的名字
tar zcvf 压缩后文件名 要压缩的目录 # 压缩
```

##### 进程/服务

```
ps -ef ｜ grep docker # 查看进程 grep 搜索进程
kill -9 进程id # 9 强制终止
service 服务名称（sshd） status # 查看系统服务状态
service 服务名称 stop # 关闭服务
service 服务名称 restart # 重启服务
systemctl status 服务名称（firewalld.service）
```

##### 网络

防火墙，IP DNS设置，下载，SSH远程

ssh远程连接Linux

ssh（Secure Shell安全外壳协议）加密，安全，默认22端口，容易受到攻击需要改默认端口

```
ssh -p 22 root（用户名）@（ip地址）
输入密码
cat /etc/hostname # 查看主机名

# 修改 ssh 默认端口
service sshd status # Ubuntu系统是 ssh 不是sshd
netstat -anlp ｜ grep sshd # 查看默认端口
vi /etc/ssh/sshd_config # vim打开配置文件
Port 10022 # 修改 Port
semanage port -a -t ssh_port_t -p tcp #PORTNUMBER # 通知 SELinux 端口已经改变，Ubuntu 不需要这一步
yum whatprovides semanage # 提示 semanage 不存在时，反查哪个包提供这个命令
yum insatll -y policycoreutils-pthon # 安装这个包，重复上面命令
semanage port -l ｜ grep ssh # 查看默认端口
semanage port -d  -t ssh_port_t -p tcp xxxxx # 删除多余端口号
service sshd restart # 重启 ssh

PasswordAuthentication no # 修改配置文件最后一句，使用 root 用户登录时不再验证密码

# ssh密钥登录，免密码登录
# 在本地
cd ~/.ssh
ls
ssh-keygen # 在本地生成ssh key，在id_rsa.pub文件中
vi config # 修改配置，没有文件时新建
Host naixes 
	Port 10022 
	HostName xx.xxx.xxx.xxx
	User root
	IdentityFile ~/.ssh/id_rsa
	IdentitiesOnly yes # 添加
# 在服务器
cd ~/.ssh # 如果没有该目录说明root没有登录过，执行ssh localhost即可
ls
mkdir -p ~/.ssh # 没有文件时新建
vi authorized_keys # 没有文件时新建，touch xx
# 添加一行，公钥的内容，即id_rsa.pub里面的内容，保存

ssh naixes # 登录服务器
```

#### Docker初识

##### 定义

为了解决环境配置问题，容器化应用

**Docker 属于 Linux 容器的一种封装，提供简单易用的容器使用接口。**它是目前最流行的 Linux 容器解决方案。

Docker 将应用程序与该程序的依赖，打包在一个文件里面。运行这个文件，就会生成一个虚拟容器。程序在这个虚拟容器里运行，就好像在真实的物理机上运行一样。有了 Docker，就不用担心环境问题。

总体来说，Docker 的接口相当简单，用户可以方便地创建和使用容器，把自己的应用放入容器。容器还可以进行版本管理、复制、分享、修改，就像管理普通的代码一样。

**vs虚拟机**

> docker：app1 app2 --- Docker --- 操作系统 --- 基础设施（共用操作系统和基础设施，由docker进程管理应用，比虚拟机快得多）
>
> 虚拟机：虚拟机1 --- 操作系统1 --- 虚拟化平台 --- 基础设施（占用系统资源多）

###### 虚拟机（virtual machine）

就是带环境安装的一种解决方案。它可以在一种操作系统里面运行另一种操作系统，比如在 Windows 系统里面运行 Linux 系统。应用程序对此毫无感知，因为虚拟机看上去跟真实系统一模一样，而对于底层系统来说，虚拟机就是一个普通文件，不需要了就删掉，对其他部分毫无影响。

虽然用户可以通过虚拟机还原软件的原始环境。但是，这个方案有几个缺点。

**（1）资源占用多**

虚拟机会独占一部分内存和硬盘空间。它运行的时候，其他程序就不能使用这些资源了。哪怕虚拟机里面的应用程序，真正使用的内存只有 1MB，虚拟机依然需要几百 MB 的内存才能运行。

**（2）冗余步骤多**

虚拟机是完整的操作系统，一些系统级别的操作步骤，往往无法跳过，比如用户登录。

**（3）启动慢**

启动操作系统需要多久，启动虚拟机就需要多久。可能要等几分钟，应用程序才能真正运行。

###### Linux 容器

由于虚拟机存在这些缺点，Linux 发展出了另一种虚拟化技术：**Linux 容器（Linux Containers，缩写为 LXC）**。

**Linux 容器不是模拟一个完整的操作系统，而是对进程进行隔离。**或者说，在正常进程的外面套了一个[保护层](https://opensource.com/article/18/1/history-low-level-container-runtimes)。对于容器里面的进程来说，它接触到的各种资源都是虚拟的，从而实现与底层系统的隔离。

由于容器是**进程级别的**，相比虚拟机有很多优势。

**（1）启动快**

容器里面的应用，直接就是底层系统的一个进程，而不是虚拟机内部的进程。所以，启动容器相当于启动本机的一个进程，而不是启动一个操作系统，速度就快很多。

**（2）资源占用少**

容器只占用需要的资源，不占用那些没有用到的资源；虚拟机由于是完整的操作系统，不可避免要占用所有资源。另外，多个容器可以共享资源，虚拟机都是独享资源。

**（3）体积小**

容器只要包含用到的组件即可，而虚拟机是整个操作系统的打包，所以容器文件比虚拟机文件要小很多。

总之，容器有点像轻量级的虚拟机，能够提供虚拟化的环境，但是成本开销小得多。

**特性**

文件，资源，网络隔离

变更管理：commit pull push等命令，日志记录

写时复制：用写时复制的方式创建根文件系统，而虚拟机要划分一部分系统资源

##### 安装

Docker 分为 CE 和 EE 两大版本。CE 即社区版（免费），EE 即企业版，强调安全，付费使用。Docker支持在主流的操作系统平台上使用，包括Ubuntu、Centos、Windows、MacOS系统等。
Docker CE 分为 stable, test, 和 nightly 三个更新频道。每六个月发布一个 stable 版本 (18.09, 19.03, 19.09...)。

Mac：安装docker.dmg，使用docker version 查看版本，自带docker compose集合命令工具

Linux：测试环境中的的方法是使用了官方提供的一套便捷的安装脚本

官方文档：https://docs.docker.com/engine/install/centos/

- 卸载之前安装的docker

```cmd
$ sudo yum remove docker \
docker-client \
docker-client-latest \
docker-common \
docker-latest \
docker-latest-logrotate \
docker-logrotate \
docker-selinux \
docker-engine-selinux \
docker-engine
# 报错 Error: Trying to remove "yum", which is protected
# 解决：忽略依赖只移除自己
rpm -e --nodeps docker \
docker-client \
docker-client-latest \
docker-common \
docker-latest \
docker-latest-logrotate \
docker-logrotate \
docker-selinux \
docker-engine-selinux \
docker-engine
```

- 安装依赖

```cmd
$ sudo yum install -y yum-utils \
device-mapper-persistent-data \
lvm2
```

添加stable的Docker-ce源

```cmd
$ sudo yum-config-manager \
--add-repo \
https://mirrors.ustc.edu.cn/docker-ce/linux/centos/docker-ce.repo
# 阿里源
sudo yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
# 官方源
$ sudo yum-config-manager \
--add-repo \
https://download.docker.com/linux/centos/docker-ce.repo
```

> 如果需要测试版本的 Docker CE 请使用以下命令：
>
> 1. `$ sudo yum-config-manager --enable docker-ce-test`
>
> 如果需要每日构建版本的 Docker CE 请使用以下命令：
>
> 1. `$ sudo yum-config-manager --enable docker-ce-nightly`
>
> 更新 yum 软件缓存：
>
> ```cmd
> sudo yum makecache fast
> ```

- 安装 Docker-ce：

```
sudo yum install docker-ce docker-ce-cli containerd.io
```

> 报错：获取 GPG 密钥失败
>
> 解决：看报错信息是超时就继续添加其他stable的Docker-ce源
>
> 其他原因就试一下：rpm --import http://mirrors.163.com/centos/RPM-GPG-KEY-CentOS-7

启动 Docker 后台服务

```
systemctl start docker
# 查看状态
systemctl status docker
# 启动hello-word
sudo docker run hello-world
# 报错：Unable to find image 'helle-word:latest' locally，提示本地没找到，然后开始从远程拉取
```

在`/etc/docker/daemon.json`中配置中国源

```cmd
{
	"registry-mirrors": ["https://registry.docker-cn.com","http://hub-mirror.c.163.com","https://docker.mirrors.ustc.edu.cn","https://docker.mirrors.ustc.edu.cn","https://cr.console.aliyun.com/"	]
}
# Docker中国区官方镜像:
# https://registry.docker-cn.com
# 网易:
# http://hub-mirror.c.163.com
# ustc:
# https://docker.mirrors.ustc.edu.cn
# 中国科技大学:
# https://docker.mirrors.ustc.edu.cn
# 阿里云:
# https://cr.console.aliyun.com/

# 配置完成后重启
systemctl daemon-reload
systemctl restart docker
```

> 报错：Job for docker.service failed because start of the service was attempted too often.
>
> 解决：mv /etc/docker/daemon.json /etc/docker/daemon.conf，修改名字

##### 命令

```cmd
docker run name # -p表示进行端口映射 外:内
docker start/stop/reatart
docker images # 查看当前下载了哪些镜像
docker ps # 查看当前运行的docker服务 docker ps -a 查看所有镜像
docker inspect
docker logs name # 打印日志 -f表示持续打印
docker rm name/id # 删除已经停止的容器
docker exec
docker logs -f name # 打印日志 -f持续打印
```

##### docker-compose工具

可以用一条命令运行多个镜像，docker的集合命令工具

安装参考测试环境

Using Compose is basically a three-step process:

1. Define your app’s environment with a `Dockerfile` so it can be reproduced anywhere.
2. Define the services that make up your app in `docker-compose.yml` so they can be run together in an isolated environment.
3. Run `docker-compose up` and Compose starts and runs your entire app.

A `docker-compose.yml` looks like this:

```
version: "3.9"  # optional since v1.27.0
services:
  web:
    build: .
    ports:
      - "5000:5000"
    volumes:
      - .:/code
      - logvolume01:/var/log
    links:
      - redis
  redis:
    image: redis
volumes:
  logvolume01: {}
```

使用：

```cmd
cd /home/
vi docker-compose.yml
# 操作文件
version: '3'
services:
	# mysql服务
  mysql1:
    image: mysql
    # 环境变量
    environment: 
    - MYSQL_ROOT_PASSWORD=123456
    # 端口映射
    ports: 
    - 28002:3306
    
    mysql2:
    image: mysql
    environment: 
    - MYSQL_ROOT_PASSWORD=123456
    ports: 
    - 28003:3306
:wq
# 启动docker-compose
docker-compose up -d
docker ps
docker logs -f home_mysql1_1
# 命令有start stop rm
```

##### docker仓库

###### docker gub

```
# 登录docker hub
docker login
# 提交自己的镜像
# 1.0是tag
docker commit [containerid] naixes/mysql:1.0
# 查看
docker images
# 推送到docker hub
docker push naixes/mysql:1.0
```

###### harbor建立私有仓库

#### Nodejs

##### 基础

##### nvm版本管理工具

安装

`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash`或`wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash`

> Failed connect to raw.githubusercontent.com:443; 拒绝连接
>
> 在https://www.ipaddress.com/查询raw.githubusercontent.com的真实IP。
>
> 通过修改`hosts`解决此问题
>
> `199.232.28.133 raw.githubusercontent.com`

将下面内容添加到~/.bash_profile

```
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

> 若安装后提示找不到nvm命令，则在~/.nvm中检查.bash_profile文件

命令：切换版本，安装新版本，设置默认版本

```
nvm list
nvm ls-remote # (mac)
nvm install v11.14.0 # nvm install stable
nvm --help
nvm use
```

nvm-windows

##### yarn/npm包管理工具

##### npm发布

#### 调试工具

##### Chrome调试工具DevTools

##### 真机调试方法

#### IDE

##### 插件环境

vue

##### 代码规范

eslint，空格设置

##### 调试设置

### UI框架

### 接口测试

#### Restful API

[RESTful](http://www.ruanyifeng.com/blog/2011/09/restful.html) 是目前最流行的 API 设计规范，用于 Web 数据接口的设计。

Fielding将他对互联网软件的架构原则，定名为REST，即Representational State Transfer的缩写。我对这个词组的翻译是"表现层状态转化"。如果一个架构符合REST原则，就称它为RESTful架构。

- 资源（Resources）

REST的名称"表现层状态转化"中，省略了主语。"表现层"其实指的是"资源"（Resources）的"表现层"。

**所谓"资源"，就是网络上的一个实体，或者说是网络上的一个具体信息。**它可以是一段文本、一张图片、一首歌曲、一种服务，总之就是一个具体的实在。你可以用一个URI（统一资源定位符）指向它，每种资源对应一个特定的URI。要获取这个资源，访问它的URI就可以，因此URI就成了每一个资源的地址或独一无二的识别符。

所谓"上网"，就是与互联网上一系列的"资源"互动，调用它的URI。

- 表现层（Representation）

"资源"是一种信息实体，它可以有多种外在表现形式。**我们把"资源"具体呈现出来的形式，叫做它的"表现层"（Representation）。**

比如，文本可以用txt格式表现，也可以用HTML格式、XML格式、JSON格式表现，甚至可以采用二进制格式；图片可以用JPG格式表现，也可以用PNG格式表现。

URI只代表资源的实体，不代表它的形式。严格地说，有些网址最后的".html"后缀名是不必要的，因为这个后缀名表示格式，属于"表现层"范畴，而URI应该只代表"资源"的位置。它的具体表现形式，应该在HTTP请求的头信息中用Accept和Content-Type字段指定，这两个字段才是对"表现层"的描述。

- 状态转化（State Transfer）

访问一个网站，就代表了客户端和服务器的一个互动过程。在这个过程中，势必涉及到数据和状态的变化。

互联网通信协议HTTP协议，是一个无状态协议。这意味着，所有的状态都保存在服务器端。因此，**如果客户端想要操作服务器，必须通过某种手段，让服务器端发生"状态转化"（State Transfer）。而这种转化是建立在表现层之上的，所以就是"表现层状态转化"。**

客户端用到的手段，只能是HTTP协议。具体来说，就是HTTP协议里面，四个表示操作方式的动词：GET、POST、PUT、DELETE。它们分别对应四种基本操作：**GET用来获取资源，POST用来新建资源（也可以用于更新资源），PUT用来更新资源，DELETE用来删除资源。**

#### Mock数据

#### 性能测试

## 敏捷流程

### 文档管理

文档分类：接口文档，项目文档，需求文档，规范类文档

- 文档管理工具

协同工具：钉钉，石墨，有道云等

接口文档：showdoc，apizza，eolinker，mindoc

其他：gitbook，blog（hexo，jekyll，hugo，wordpress），注释产出api文档（swagger，apidoc），mock（rap，apijson）

markdown工具：typora，偏好设置，图像，mdeditor

**接口文档管理工具**

- 可以私有化部署：showdoc，mindoc（文档，简洁）
- 云端：apizza，eolinker（文档+测试）

#### showDoc

功能：接口模版，分组，权限控制，团队协作，版本控制，本地部署，免费开源

##### 安装使用

###### 私有化部署

Docker方式安装

```cmd
# 原版官方镜像安装命令(中国大陆用户不建议直接使用原版镜像，可以用后面的加速镜像)
docker pull star7th/showdoc 
# 中国大陆镜像安装命令（安装后记得执行docker tag命令以进行重命名）
docker pull registry.cn-shenzhen.aliyuncs.com/star7th/showdoc
docker tag registry.cn-shenzhen.aliyuncs.com/star7th/showdoc:latest star7th/showdoc:latest 
##后续命令无论使用官方镜像还是加速镜像都需要执行
#新建存放showdoc数据的目录
mkdir -p /showdoc_data/html
chmod  -R 777 /showdoc_data
# 启动showdoc容器，官方提供的方式：
# docker run -d --name showdoc --user=root --privileged=true -p 4999:80 \
# -v /showdoc_data/html:/var/www/html/ star7th/showdoc

# -d后台执行，需要关闭防火墙和运营商的放行，-v数据映射
# 返回一个hash值
docker run -d --name showdoc_test -p 13500:80 -v /showdoc_data/html:/var/www/html/ star7th/showdoc
# 数据转移
docker exec showdoc_test \cp -fr /showdoc_data/html/ /var/www/html
chmod  -R 777 /showdoc_data
# 防火墙放行
firewall-cmd --add-port=13500/tcp --permanent
firewall-cmd --reload
# 然后就可以使用ip port的形式进行访问了：http://192.168.1.7:13500/
```

访问：http://192.168.1.7:13500/

> 安装成功！默认管理员账户密码是showdoc/123456。登录后，在右上角可以看到管理后台入口。此外，强烈建议修改管理员初始密码。若再遇到问题，可参考ShowDoc帮助文档：https://www.showdoc.cc/help
>
> [进入网站首页](http://192.168.1.7:13500/)

修改密码，新建用户，重新登录，新建项目等等

定义接口

#### 云笔记文档管理

印象笔记

onenote

有道云

#### Hexo

```cmd
npm install hexo-cli -g
hexo init blog
cd blog
npm install
hexo server
```

##### 部署到github pages

插件：hexo-deployer-git

配置：

仓库名：yonghuming.github.io拷贝ssh

添加ssh：

```cmd
# -b 4096增加安全性
ssh-keygen -t rsa -b 4096 -C "615411375@qq.com"
```

添加到github

```yml
# _config.yml
...
deploy:
  type: git
  repo: git@github.com:Naixes/Naixes.github.io.git,
  branch: master
  # token: ""
  # message: [message]
  name: Naixes
  email: 615411375@qq.com
  # extend_dirs: [extend directory]
  # ignore_hidden: false # default is true
  # ignore_pattern: regexp # whatever file that matches the regexp will be ignored when deploying
  
# 命令
hexo g # 产生静态文件

```

### 版本管理

语义化版本规范

主版本.次版本.修订号-先行版本.1+元数据：1.2.3-beta.1+meta

alpha -> beta -> rc -> release

内测版本 - 公测版本 - 发行候选版本

#### vs svn

git：分布式，本地可以不用联网进行一些操作，本地合并代码

svn：集中式，操作必须联网

#### git

git多密钥管理

```cmd
# ./.ssh/config中配置

Host xx
  Port xx
  HostName xx
  User xx
  # 鉴权方式
  PreferredAuthentications publickey
  # 指定本地使用的密钥路径
  IdentifyFile xx
  IdentitiesOnly true
```

https：需要输入用户名密码，access token的方式

ssh：使用密钥对，win需要使用gitbash进行创建，如果有共享需求建议设置passphrase进行加密

```cmd
git init
git add .
git commit -m ""
git remote add origin git@xxx # 添加origin，git clone会自动添加，可以使用任意名称，可以用来推送给多个仓库
git push -u origin master # -u 设置默认推送分支

git remote -v
```

快照

![git基础](note.assets/git基础.png)

```cmd
git log/reflog # 日志，reflog本地提交，分支切换等
git config --global --list # 查看全局配置
git config --global user.name "xxx"
git reset --hard 22c7f3a # 回退，reflog可以查看到日志
git branch xxx # 新建分支
git checkout xxx # 切换分支
git stash # 当前内容未完成暂时不做提交，可以用在查看其他分支前暂存当前分支修改内容
git stash apply # 找回之前暂存的内容
git diff
```

#### git flow

##### 模型

![note.assets/src=http___git.oschina.net_jacarrichan_gittest_raw_master_git-workflow-commands.png&refer=http___git.oschina](note.assets/src=http___git.oschina.net_jacarrichan_gittest_raw_master_git-workflow-commands.png&refer=http___git.oschina.jpeg)

经典模型的问题：

- 必须使用dev分支
- 复杂度高：hotfix和release分支
- 多次的merge合并

推荐模型：

适用于持续集成多环境场景，小版本迭代

上游分支向下游发展，master领先于预发布版本领先于发布版本

bug -> branch -> master -> pre branch -> target branch

<img src="note.assets/截屏2021-03-15 下午2.04.43.png" alt="截屏2021-03-15 下午2.04.43" style="zoom:50%;" />





适用于版本项目，比如vue，react

稳定版本从master检出bug修复在分支

master -> stable -> branch -> bugfix -> version

<img src="note.assets/截屏2021-03-15 下午2.28.24.png" alt="截屏2021-03-15 下午2.28.24" style="zoom:50%;" />

##### 分支管理和冲突处理

```cmd
git branch -D dev # 删除分支dev
git checkout -b dev # 创建并切换deb分支

# 发生冲突，修改文件，解决冲突重新提交

git fetch origin dev # 拉取远程dev分支更新，不更新本地，git pull 相当于git fetch + git merge
git reset --hard head^ # 回退到上一个提交
git merge xx # 将xx分支合并到当前分支
git tag v1.1.1 # -d删除 --list列表
git push origin master --tags
git push origin :refs/tags/v1.0.0
git checkout --test.txt # 丢弃文件改动
```

#### 搭建GitLab

类似的还有gitea

突破限制

**注意：需要两核两G以上的配置**

docker-compose快速创建

配置gitlab，备份/还原

其他配置：邮件，HTTPS

You can fine tune these directories to meet your requirements. Once you’ve set up the `GITLAB_HOME` variable, you can run the image:

```cmd
sudo docker run --detach \
  --hostname 192.168.1.7 \
  --publish 13880:80 --publish 13822:22 \
  --name gitlab \
  --restart always \
  gitlab/gitlab-ee:latest
  
# 查看
docker ps | grep gitlab

# 放行端口
firewall-cmd --add-port=13880/tcp --permanent
> success
firewall-cmd --reload
> success

# 查看日志
docker logs -f gitlab

# 打开http://192.168.1.7:13880/设置密码或者登录

```

##### 配置

密码：1-8

```cmd
# 配置参考docker-gitlab
# docker-compose.yml
version: '2.3'

services:
  redis:
    restart: always
    image: redis:5.0.9
    command:
    - --loglevel warning
    volumes:
    - redis-data:/var/lib/redis:Z

  postgresql:
    restart: always
    image: sameersbn/postgresql:12-20200524
    volumes:
    - postgresql-data:/var/lib/postgresql:Z
    environment:
    - DB_USER=gitlab
    - DB_PASS=password
    - DB_NAME=gitlabhq_production
    - DB_EXTENSION=pg_trgm,btree_gist

  gitlab:
    restart: always
    image: sameersbn/gitlab:13.9.3
    depends_on:
    - redis
    - postgresql
    ports:
    - "13880:80"
    - "13822:22"
    volumes:
    - gitlab-data:/home/git/data:Z
    healthcheck:
      test: ["CMD", "/usr/local/sbin/healthcheck"]
      interval: 5m
      timeout: 10s
      retries: 3
      start_period: 5m
    environment:
    - DEBUG=false

    - DB_ADAPTER=postgresql
    - DB_HOST=postgresql
    - DB_PORT=5432
    - DB_USER=gitlab
    - DB_PASS=password
    - DB_NAME=gitlabhq_production

    - REDIS_HOST=redis
    - REDIS_PORT=6379

    - TZ=Asia/Kolkata
    - GITLAB_TIMEZONE=Kolkata

    - GITLAB_HTTPS=true
    - SSL_SELF_SIGNED=true

    - GITLAB_HOST=192.168.1.7
    - GITLAB_PORT=13880
    - GITLAB_SSH_PORT=13822
    - GITLAB_RELATIVE_URL_ROOT=
    - GITLAB_SECRETS_DB_KEY_BASE=long-and-random-alphanumeric-string
    - GITLAB_SECRETS_SECRET_KEY_BASE=long-and-random-alphanumeric-string
    - GITLAB_SECRETS_OTP_KEY_BASE=long-and-random-alphanumeric-string

    - GITLAB_ROOT_PASSWORD=12345678
    - GITLAB_ROOT_EMAIL=615411375@qq.com

    - GITLAB_NOTIFY_ON_BROKEN_BUILDS=true
    - GITLAB_NOTIFY_PUSHER=false

    - GITLAB_EMAIL=notifications@example.com
    - GITLAB_EMAIL_REPLY_TO=noreply@example.com
    - GITLAB_INCOMING_EMAIL_ADDRESS=reply@example.com

    - GITLAB_BACKUP_SCHEDULE=daily
    - GITLAB_BACKUP_TIME=01:00

    - SMTP_ENABLED=false
    - SMTP_DOMAIN=www.example.com
    - SMTP_HOST=smtp.gmail.com
    - SMTP_PORT=587
    - SMTP_USER=mailer@example.com
    - SMTP_PASS=password
    - SMTP_STARTTLS=true
    - SMTP_AUTHENTICATION=login

    - IMAP_ENABLED=false
    - IMAP_HOST=imap.gmail.com
    - IMAP_PORT=993
    - IMAP_USER=mailer@example.com
    - IMAP_PASS=password
    - IMAP_SSL=true
    - IMAP_STARTTLS=false

    - OAUTH_ENABLED=false
    - OAUTH_AUTO_SIGN_IN_WITH_PROVIDER=
    - OAUTH_ALLOW_SSO=
    - OAUTH_BLOCK_AUTO_CREATED_USERS=true
    - OAUTH_AUTO_LINK_LDAP_USER=false
    - OAUTH_AUTO_LINK_SAML_USER=false
    - OAUTH_EXTERNAL_PROVIDERS=

    - OAUTH_CAS3_LABEL=cas3
    - OAUTH_CAS3_SERVER=
    - OAUTH_CAS3_DISABLE_SSL_VERIFICATION=false
    - OAUTH_CAS3_LOGIN_URL=/cas/login
    - OAUTH_CAS3_VALIDATE_URL=/cas/p3/serviceValidate
    - OAUTH_CAS3_LOGOUT_URL=/cas/logout

    - OAUTH_GOOGLE_API_KEY=
    - OAUTH_GOOGLE_APP_SECRET=
    - OAUTH_GOOGLE_RESTRICT_DOMAIN=

    - OAUTH_FACEBOOK_API_KEY=
    - OAUTH_FACEBOOK_APP_SECRET=

    - OAUTH_TWITTER_API_KEY=
    - OAUTH_TWITTER_APP_SECRET=

    - OAUTH_GITHUB_API_KEY=
    - OAUTH_GITHUB_APP_SECRET=
    - OAUTH_GITHUB_URL=
    - OAUTH_GITHUB_VERIFY_SSL=

    - OAUTH_GITLAB_API_KEY=
    - OAUTH_GITLAB_APP_SECRET=

    - OAUTH_BITBUCKET_API_KEY=
    - OAUTH_BITBUCKET_APP_SECRET=
    - OAUTH_BITBUCKET_URL=

    - OAUTH_SAML_ASSERTION_CONSUMER_SERVICE_URL=
    - OAUTH_SAML_IDP_CERT_FINGERPRINT=
    - OAUTH_SAML_IDP_SSO_TARGET_URL=
    - OAUTH_SAML_ISSUER=
    - OAUTH_SAML_LABEL="Our SAML Provider"
    - OAUTH_SAML_NAME_IDENTIFIER_FORMAT=urn:oasis:names:tc:SAML:2.0:nameid-format:transient
    - OAUTH_SAML_GROUPS_ATTRIBUTE=
    - OAUTH_SAML_EXTERNAL_GROUPS=
    - OAUTH_SAML_ATTRIBUTE_STATEMENTS_EMAIL=
    - OAUTH_SAML_ATTRIBUTE_STATEMENTS_NAME=
    - OAUTH_SAML_ATTRIBUTE_STATEMENTS_USERNAME=
    - OAUTH_SAML_ATTRIBUTE_STATEMENTS_FIRST_NAME=
    - OAUTH_SAML_ATTRIBUTE_STATEMENTS_LAST_NAME=

    - OAUTH_CROWD_SERVER_URL=
    - OAUTH_CROWD_APP_NAME=
    - OAUTH_CROWD_APP_PASSWORD=

    - OAUTH_AUTH0_CLIENT_ID=
    - OAUTH_AUTH0_CLIENT_SECRET=
    - OAUTH_AUTH0_DOMAIN=
    - OAUTH_AUTH0_SCOPE=

    - OAUTH_AZURE_API_KEY=
    - OAUTH_AZURE_API_SECRET=
    - OAUTH_AZURE_TENANT_ID=

volumes:
  redis-data:
  postgresql-data:
  gitlab-data:
  
# 关闭移除之前开启的gitlab
docker stop gitlab
docker rm gitlab

# 在tmp目录中进行测试，新建内容如上的docker-compose.yml文件
docker-compose up -d

# 查看
docker ps | grep tmp
docker logs -f tmp_gitlab_1

# 输入网址进行项目管理
```

##### 备份及恢复

手动备份：

Execute the rake task to create a backup.

```
docker run --name gitlab -it --rm [OPTIONS] \
    sameersbn/gitlab:13.9.3 app:rake gitlab:backup:create
```

using `docker-compose` you may use the following command to execute the backup.

```
docker-compose rm -sf gitlab
# yml配置文件目录下执行这句
docker-compose run --rm gitlab app:rake gitlab:backup:create
```

自动备份：

上面的配置已经设置了自动备份

```cmd
# 添加过期时间的配置
# backup过期时间按秒计算7 days (604800 seconds)
- GITLAB_BACKUP_EXPIRY=604800

# 更新配置文件
docker-compose up -d
```

恢复：

using `docker-compose` you may use the following command to execute the restore.



```cmd
docker-compose run --rm gitlab app:rake gitlab:backup:restore # List available backups
docker-compose run --rm gitlab app:rake gitlab:backup:restore BACKUP=1515629493_2020_12_06_13.9.3 # Choose to restore from 1515629493
```

**邮件服务配置，HTTPS配置，docker-compose配置文件参考见文档资料**

#### SSL证书申请

#### 云服务器

#### Git权限控制

- 以组为单元，设置管理员。角色：所属人，管理员，开发者，测试人员，访问者
- 熟悉merge request，写好git commit message
- 及时回收权限，设置过期时间

##### 以gitlab为例

偏好设置，本地化

成员权限设置：项目 -> 成员

一般不设置过期时间，成员不在了也不要删除成员，取消权限即可

组管理组权限：组 -> 成员

保护分支：项目 -> 设置 -> 仓库 

#### gitignore

常见问题：不好管理，冗余

1. 参考仓库：gitignore
2. 网站：gitignore.io
3. 插件：.gitignore generator，在项目目录下，输入快捷命令generate .gitignore file

已经被快照过的文件再想ignore的话：

```cmd
git rm -- cached -r ./ # 删除缓存，不会删除日志
```

#### git工具

gitbash

GUI

IDE

##### GUI

###### sourcetree

需要注册

vscode插件：gitlens

### 缺陷管理

#### 概念及方法

在项目的全生命周期旨在提高软件的质量

常见问题：需求不明确，进度超期，需求变更频繁，无codereview，协同有问题，工期紧

**最佳实践**

路径

- 质量
  - 预防
  - 监测
- 成本
  - 人工
  - 时间
  - 资源投入
- 进度

分析原因

办法

- 进度
  - 赶工
  - 资源协调
  - 客户沟通
  - 压缩工期
- 质量
  - 改进
  - 返工
  - 沟通
- 成本

#### 质量/进度管理工作流

![截屏2021-03-16 下午4.11.15](note.assets/截屏2021-03-16 下午4.11.15.png)

##### 质量管理

**需求阶段**：沟通，形成文档，客户确认

**开发阶段**

- lint
- codereview：小团队互相review，大团队专人review，自动化
- 规范
  - 运维
  - 开发
- 测试
  - 测试用例
  - 自动化

**运维阶段**

- 监控
- 日志
- 更新
  - 责任到人
  - 功能到店
  - 时间设限

##### 进度管理

需求阶段：从上至下分析，类比分析，经验分析

开发阶段

运维阶段

#### 缺陷控制工具

代码类：eslint，jslint，stylelint

流程类：jira，禅道，redmine

工具类：trello看板，teambition（比trello复杂一些），钉钉，石墨，worktile

##### eslint

1. npm安装

2. 初始化配置文件

运行 `npx eslint --init` 之后，`.eslintrc` 文件会在你的文件夹中自动创建。你可以在 `.eslintrc` 文件中看到许多像这样的规则：

```
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/essential"
    // '@vue/standard'
  ],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "semi": ["error", "always"],
    "quotes": ["error", "double"]
  }
};
```

`"semi"` 和 `"quotes"` 是 ESLint 中 [规则](https://cn.eslint.org/docs/rules) 的名称。第一个值是错误级别，可以使下面的值之一：

- `"off"` or `0` - 关闭规则
- `"warn"` or `1` - 将规则视为一个警告（不会影响退出码）
- `"error"` or `2` - 将规则视为一个错误 (退出码为1)

这三个错误级别可以允许你细粒度的控制 ESLint 是如何应用规则（更多关于配置选项和细节的问题，请查看[配置文件](https://cn.eslint.org/docs/user-guide/configuring)）

行内写法：`/* eslint no-unused: off */`

3. 编辑器错误提示插件

eslint需要配合eslint库使用

保存时自动修改：setting打开autofix

插件：settings sync

**配置settings sync**

下载公共gist，gist id：3defb19cd4f9b9d4f12d85dd74117de8

令牌：setting -> developer settings -> personal access tokens，如果没有设置token每次上传配置时都会产生新的gist

执行命令下载配置（下载失败），执行命令重制扩展设置，重新上传配置

分享配置：高级配置 -> 在公开gist上分享配置

我自己生成的gist：b6a6415fa2c67356f9461828e1e17da3

**extends**

使用plugin扩展规则，比如eslint-plugin-vue

### 前端自动化

前端自动化是指前端代码的自动化构建，打包（工程化），测试及部署等流程，通常与CI，CD流程结合

#### 持续集成

定义

推送代码后，执行一系列的构建打包测试，判断新代码是否能正常合并到原有代码中，保证程序能够正常运行

ci/cd流程：持续集成，持续部署

部署

分类：云部署，私有化部署

方案：

docker容器

- 私有仓库：harbor
- 公有仓库：aliyun，daocloud，docker hub

虚拟机环境

物理机环境

#### 工具

<img src="note.assets/截屏2021-03-17 下午10.28.13.png" alt="截屏2021-03-17 下午10.28.13" style="zoom:50%;" />

##### Circle ci

登录

配置：.circleci/config.yml

构建

```cmd
# 2.1版本不知道什么原因配置文件会报错
version: 2
    jobs:
      # - node/test
      build:
        docker:
          - image: circleci/node@14.15.5
        branches:
          only:
            - master
        steps:
          # 配置拉取方式，在circleci的项目配置中的ssh key授权github生成user key及fingerprints，目的是为了操作github的私有化项目
          - add_ssh_keys:
              fingerprints:
                - '4c:d9:43:37:e2:f3:a0:81:a9:98:63:be:b6:1b:ed:a9'
          # 拉取master的代码，
          - checkout
          # 注意缩进，不能使用tab缩进
          - run:
              name: Install
          	  command: yarn install
          - run: 
              name: Build
          	  command: yarn build

```

> git变基：
>
> git rebase -i head~3 # 按照注释修改弹出的内容，可以修改提交说明，可以合并提交
>
> git push origin master -f # 强制提交，覆盖掉上一次提交

优化：缓存node_modules

部署

```cmd
# 2.1版本不知道什么原因配置文件会报错
version: 2
jobs:
  build:
    docker:
      - image: circleci/node:10
    branches:
      only:
        - master
    steps:
      # 配置拉取方式，在circleci的项目配置中的ssh key授权github生成user key及fingerprints，目的是为了操作github的私有化项目
      - add_ssh_keys:
          fingerprints:
            - '4c:d9:43:37:e2:f3:a0:81:a9:98:63:be:b6:1b:ed:a9'
      # 拉取master的代码，
      - checkout
      # 使用缓存
        - restore_cache:
          keys:
            - dependencies_naixes
      # 注意缩进，不能使用tab缩进
      - run:
          name: Install
          command: yarn install
      # 添加缓存
      - save_cache:
          paths: 
            - node_modules
          key: dependencies_naixes
      - run:
          name: Build
          command: yarn build
      # 部署
      - run: 
          name: Prepare Deploy
          # shell chmod +x 赋予执行权限
          command: shell chmod +x scripts/deploy.sh
      - run: 
          name: Run Deploy to Github pages
          # 执行shell脚本
          command: ./scripts/deploy.sh

```

shell脚本

```sh
#!/bin/sh
# 构想 https://gist.github.com/motemen/8595451

# 基于 https://github.com/eldarlabs/ghpages-deploy-script/blob/master/scripts/deploy-ghpages.sh
# MIT许可 https://github.com/eldarlabs/ghpages-deploy-script/blob/master/LICENSE

# abort the script if there is a non-zero error
set -e

# 打印当前的工作路径
pwd
remote=$(git config remote.origin.url)

echo 'remote is: '$remote

# 新建一个发布的目录
mkdir gh-pages-branch
cd gh-pages-branch
# 创建的一个新的仓库
# 设置发布的用户名与邮箱
git config --global user.email "$GH_EMAIL" >/dev/null 2>&1
git config --global user.name "$GH_NAME" >/dev/null 2>&1
git init
git remote add --fetch origin "$remote"

echo 'email is: '$GH_EMAIL
echo 'name is: '$GH_NAME
echo 'sitesource is: '$siteSource

# 切换gh-pages分支
if git rev-parse --verify origin/gh-pages >/dev/null 2>&1; then
  git checkout gh-pages
  # 删除掉旧的文件内容
  git rm -rf .
else
  git checkout --orphan gh-pages
fi

# 把构建好的文件目录给拷贝进来
cp -a "../${siteSource}/." .

ls -la

# 把所有的文件添加到git
git add -A
# 添加一条提交内容
git commit --allow-empty -m "Deploy to GitHub pages [ci skip]"
# 推送文件
git push --force --quiet origin gh-pages
# 资源回收，删除临时分支与目录
cd ..
rm -rf gh-pages-branch

echo "Finished Deployment!"

```

在circleci中的项目设置中添加环境变量

配置vue项目的publicPath

```js
module.exports = {
  publicPath: process.env.NODE_ENV === 'prod' ? '/sin-community-vue-fe' : '',
  ...
};
```

##### Travis ci

官网授权登录，同步项目，支持的云平台比circle ci多

配置文件.travis.yml，配置比circle ci简洁

> 参考文档中job的生命周期，可以结合gulp使用

默认缓存npm，yarn需要设置

部署：设置token，根据文档配置deploy

```yml
language: node_js
node_js:
  - "10"

cache:
  yarn: true

install:
  - yarn install

script:
  - npm run build

deploy:
  provider: pages
  skip_cleanup: true
  local_dir: dist/
  github_token: $GITHUB_TOKEN # Set in the settings page of your repository, as a secure variable
  keep_history: false
  name: brian
  email: brian@toimc.com
  on:
    branch: master

```

##### jenkins

java编写，支持本地部署

持续集成持续交付，简易安装，配置简单，插件，扩展，分布式

blue ocean：jenkins流水线平台，图形化操作，有一定学习成本

docker hub中搜索jenkins，找到jenkins/jenkins

流程：正常情况下在三个机器中运行的

<img src="note.assets/截屏2021-03-18 下午3.37.04.png" alt="截屏2021-03-18 下午3.37.04" style="zoom:50%;" />

远程发布/部署：

- 远程使用shell脚本发布（镜像/rsync直传）
- docker远程发布/rancher集群管理/k8s高可用
- jenkins插件发布

**搭建要求**

测试：ram > 256m，DISK > 1G

团队：ram > 1G，DISK > 50G

docker包或者war包运行

###### 安装

docker安装：`docker run --name jenkins_naixes -p 13810:8080 -itd -p 50000:50000 jenkins/jenkins:lts // -itd增加交互式终端并且让这句docker命令在后台执行`

> docker ps -a | grep xxx # 检索xxx容器，-a在所有容器中检索，不加是在运行容器中检索
>
> docker rm xxx # 删除容器

```cmd
# 查看log，复制生成的密码：743eb4ad89134f998f6d6375cb47104f
docker logs -f jenkins_naixes
# 放行
firewall-cmd --add-port=13810/tcp --permanent
firewall-cmd --reload
# 在浏览器上访问，输入密码解锁jenkins
```

###### 插件安装

安装推荐插件，创建管理员用户（naixes+hkr），保存jenkins URL（http://192.168.1.7:13810/），开始使用jenkins

> 离线方式安装插件：
>
> manage jenkins -> manage plugins -> available
>
> 内网：
>
> 在官网下载插件，上传插件

配置加速源：https://mirrors.tuna.tsinghua.edu.cn/jenkins/updates/update-center.json

在advanced下面配置update site

安装常用插件：git client（已安装），gitlab

###### 备份还原

方式一：打包成镜像，包含数据

```cmd
docker commit dockerid outputname
docker images | grep putputname
# 运行并且映射数据目录
docker run -itd -v /tmp:/tmp putputname
# 交互式终端链接到容器，在容器内部拷贝文件到宿主机的tmp目录，dockername是随机名称需要docker ps | grep outputname自己查看
docker exec -it dockername cp -r /var/jenkins_home /tmp
# 切换到tmp目录，将数据移动到其他目录进行持久化
mv path
docker stop dockername && docker rm dockername
```

方式二：https://docs.docker.com/storage/volumes/

```cmd
docker run --rm --volumes-from jenkins_naixes -v /tmp/backup:/backup ubuntu tar cvf /backup/backup.tar /var/jenkins_home
# 进入目录/tmp/backup，解压
tar cvf /backup/backup.tar
# 移动
mv path
```

方式三：

```cmd
# 拷贝
docker cp dockerid:/var/jenkins_home /tmp/
```

###### 权限管理

系统管理 -> 全局安全配置 -> 安全域（能否访问权限）授权策略（访问内容权限）

使用插件：PAM Authentication，Matrix Authorization Strategy，Role-based Authorization Strategy，LDAP，Gitlab Authentication，GitHub

> 其他插件：SSH Build Agents（分布式管理），WMI Windows Agents，build timeout，Dashboard View（图形界面），folders，ThinBackup（备份jenkins），ansiColor， build with parameters

授权策略：

- 勾选 `Role-Based Strategy` 保存后进入 `manage and assign roles` 配置`Manage Roles`和`assign roles`

- 安全矩阵与项目矩阵授权策略类似（**选择这个注意必须添加当前用户！！！**）

- gitlab方式，不用单独配置权限，同时还要修改安全域，gitlab中设置 -> 新建应用 -> 重定向url`http://192.168.1.7:13810/securityRealm/finishLogin`参考https://plugins.jenkins.io/gitlab-oauth/，勾选api，复制id和密码填到jenkins配置中，GitLab Web URI和GitLab API URI都是gitlab的路径地址 -> 保存 -> gitlab设置网络

<img src="note.assets/截屏2021-03-18 下午6.54.23.png" alt="截屏2021-03-18 下午6.54.23" style="zoom:50%;" />

###### gitlab对接

**配置公私钥对**

生成ssh`ssh-keygen -t rsa -b 4096 -C "615411375@qq.com" # passphrase: naixes`

jenkins：添加全局凭据，配置私钥

![截屏2021-03-18 下午7.48.16](note.assets/截屏2021-03-18 下午7.48.16.png)

gitlab配置公钥：设置 -> 部署密钥 deploy -> 项目设置 仓库 -> Deploy keys 启用公开访问的部署密钥

**配置webhook**

jenkins：项目任务配置 -> 源码管理 git -> 输入gitlab项目的ssh对应的url选择前面配置的deploy，指定分支，配置构建触发，勾选build when a change is pushed to gitlab，高级配置，secret token点击generate，保存生成结果和webhook url

gitlab：项目设置 -> 集成，填入secret token和webhook url（http://192.168.1.7:13810/project/sin-community-vue-fe，保存失败时可以试试如上配置网络），取消ssl vertification -> add webhook -> 配置集成 -> 执行shell（shell脚本配合docker和dockerfile）

jenkins的流程就和配置显示的流程一致：

#### <img src="note.assets/截屏2021-03-19 下午3.37.41.png" alt="截屏2021-03-19 下午3.37.41" style="zoom:50%;" />

#### 实战

##### docker容器文件系统

分层系统，写时复制

一个命令就是一层，产生一些文件

<img src="note.assets/截屏2021-03-19 上午9.51.54.png" alt="截屏2021-03-19 上午9.51.54" style="zoom:50%;" />

##### docker file

- 用于产生docker镜像
- 按照步骤构建，产生文件系统
- 镜像的配置文件

https://docs.docker.com/engine/reference/builder/

.dockerignore file

Here is an example `.dockerignore` file:

```gitignore
# comment
*/temp*
*/*/temp*
temp?
```

some examples of Dockerfile syntax.

```cmd
# 1
# Nginx
#
# VERSION               0.0.1

# 基础镜像
FROM      ubuntu
LABEL Description="This image is used to start the foobar executable" Vendor="ACME Products" Version="1.0"
RUN apt-get update && apt-get install -y inotify-tools nginx apache2 openssh-server

# 2
# Firefox over VNC
#
# VERSION               0.3

FROM ubuntu

# Install vnc, xvfb in order to create a 'fake' display and firefox
RUN apt-get update && apt-get install -y x11vnc xvfb firefox
RUN mkdir ~/.vnc
# Setup a password
RUN x11vnc -storepasswd 1234 ~/.vnc/passwd
# Autostart firefox (might not be the best way, but it does the trick)
RUN bash -c 'echo "firefox" >> /.bashrc'

# 端口映射
EXPOSE 5900
# 执行脚本
CMD    ["x11vnc", "-forever", "-usepw", "-create"]


# 3
# Multiple images example
#
# VERSION               0.1

FROM ubuntu
RUN echo foo > bar
# Will output something like ===> 907ad6c2736f

FROM ubuntu
RUN echo moo > oink
# Will output something like ===> 695d7793cbe4

# You'll now have two images, 907ad6c2736f with /bar, and 695d7793cbe4 with
# /oink.
```

vue提供的docker file

https://cn.vuejs.org/v2/cookbook/dockerize-vuejs-app.html

Let’s start by creating a `Dockerfile` in the root folder of our project:

```cmd
FROM node:lts-alpine

# install simple http server for serving static content
RUN npm install -g http-server

# make the 'app' folder the current working directory
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# install project dependencies
RUN npm install

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# build app for production with minification
RUN npm run build

EXPOSE 8080
CMD [ "http-server", "dist" ]
```

真实例子，Let’s refactor our `Dockerfile` to use NGINX:

```cmd
# build stage
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

配置好docker file后测试：

```cmd
# 前端项目执行
# -t: tag
docker build -t web:1.0 .

docker images
docker run -itd --name web -p 11000:80 web:1.0
docker ps
docker logs -f web
# 浏览器中打开localhost:11000测试
```

配置gitlab和jenkins对接

配置shell脚本：

```shell
#!/bin/bash

CONTAINER=${container_name}
PORT=${port}

# 完成镜像构建
docker build --no-cache -t ${image_name}:${tag}


# 
RUNNING=${docker inspect --format="{{.State.Running}}" $CONTAINER 2 > /dev/null}


# 判断是否存在
if [ ! -n $RUNNING ]; then
 echo "$CONTAINER does not exit"
 return 1
fi

if ["$RUNNING" == "false"]; then
 echo "$CONTAINNER is not running"
 return 2
else 
 echo "$CONTAINER is running"
 # delete same name container
 matchingStarted=${docker ps --filter="name=$CONTAINER" -q | xargs}
 if [-n $matchingStarted]; then
  docker stop $matchingStarted
 fi
 
 matching=${docker ps -a --filter="name=$CONTAINER" -q | xargs}
 if [-n $matching]; then
  docker rm $matching
 fi
fi

echo "RUNNING is ${RUNNING}"

# 跑起来服务，.表示使用当前目录下的docker file文件
docker run -itd --name $CONTAINER -p $PORT:80 ${image_name}:${tag} .

```

## NoSQL

意义

- 易扩展（数据结构不固定），高性能，高可用
- 较容易映射复杂数据（key-value）
- 无事物特性要求（ACID特性：原子性，一致性，独立性，持久性，mondodb4以上有）

数据库分类

1. 文件型：简单，适合单机存储少量数据---access，sqlite
2. 关系型：采用关系模型来组织数据的数据库，功能强大，逻辑清晰，性能相对低---MySQL，Oracle，access，SQL server
3. 非关系型：---mongoDB（文档类型），memcache/redis（高速缓存，key/value类型）
4. 分布式：安全性高---mongoDB
5. NoSQL：对不同于传统的关系型数据库的统称，现在是指非关系型分布式不遵循ACID原则的数据库，简单功能性能高---memcache，redis

### **数据库设计**

错误：使用字符存日期，冗余记录，糟糕的索引，糟糕的文档，错误的命名约定，所有域值

设计工具：在线，dbdiagram，draw，lucidchart，sqldbm，quickdbd，客户端，sqlgate，dbeaver，mysql workbench，sql power architect

**常见场景及设计方法：内嵌，父/子引用，反范式**

#### 内嵌

存在关联关系的文档，放在同一文档中，以数组的形式存放，适用于一对少

减少了关联查询，适合于单类需要描述的属性，**不经常变化**的属性（扩展，嵌套关联）

#### 父/子引用

指在一对多的情况中，放在同一文档中，以数组的形式存放

指在一对非常多的情况中，放在同一文档中，由于文档存放限制，进行反向引用

引用数据非常多，引用数据量庞大，数据需要单独访问

#### 反范式

范式是一种公认的模型和模式，反范式一般是通过数据的冗余提高某些场景下的效率，缺点难以更新

是否需要提升性能，数据量的变化是否会庞大到影响更新性能，**先考虑读写比才考虑反范式**

#### 原则

- 优先考虑内嵌，单独访问不适合
- 单独的对象，不应该内嵌到其他对象中
- 数组不应该无限增长：考虑使用id引用，过多的引用需要考虑设计是否合理
- 多层级的join
- 确认读写比，考虑反范式
- 考虑应用场景

1对多场景

- 内嵌：1对多少，直接内嵌
- 子引用：1对多很多，反向嵌入
- 父引用：一对多且单独需要处理时
- 反范式：
  - 1:n：属性与名称，考虑读取开销
  - n:1：日志实例：ip，hostnanme，区域。考虑更新开销
  - 场景：更新变的更复杂开销更大，读>写
  - 优点：适合业务，某些场景效率更高
  - 缺点：数据冗余，难以更新

双向关联

- 优点：添加属性快速定位，方便业务组成，便于统计
- 缺点：无法保证原子性

原子性：冗余字段失去原子性，业务独立

### MongoDB

#### 安装

安装社区版mac：https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/

In addition, the installation creates the following files and directories at the location specified below, depending on your Apple hardware:

|                                                              | Intel Processor              | Apple M1 Processor              |
| :----------------------------------------------------------- | :--------------------------- | :------------------------------ |
| [configuration file](https://docs.mongodb.com/manual/reference/configuration-options/) | `/usr/local/etc/mongod.conf` | `/opt/homebrew/etc/mongod.conf` |
| [`log directory`](https://docs.mongodb.com/manual/reference/configuration-options/#systemLog.path) | `/usr/local/var/log/mongodb` | `/opt/homebrew/var/log/mongodb` |
| [`data directory`](https://docs.mongodb.com/manual/reference/configuration-options/#storage.dbPath) | `/usr/local/var/mongodb`     | `/opt/homebrew/var/mongodb`     |

```cmd
brew tap mongodb/brew
brew install mongodb-community@4.4
# 启动服务，默认配置
brew services start mongodb-community@4.4
# 关闭服务
brew services stop mongodb-community@4.4
# 指定配置文件启动，intel
mongod --config /usr/local/etc/mongod.conf --fork
# 连接
mongo
```

配置文件说明：https://docs.mongodb.com/manual/reference/configuration-options/

docker安装：dockerhub，https://hub.docker.com/_/mongo

```yml
# docker-compose.yml
version: '3.1'
services:
  mongo_community:
    image: mongo
    restart: always
    environment:
      MONGO_INITDB_ROOT_USERNAME: root
      MONGO_INITDB_ROOT_PASSWORD: mongopass
    ports:
      - 27017:27017
    # 持久化
    volumes:
      - /home/mongotest:/data/db

# =========================================== 
# 运行
docker-compose up -d
firewall-cmd --add-port=27017/tcp --permanent
firewall-cmd --reload
```

#### 初始化配置

```cmd
# mongodb 的容器名称 mongo 进入 mongoDB 的 shell 工具
$ docker exec -it mongotest_mongo_1 mongo

# 然后进入管理员
> use admin
switched to db admin

# 输入配置中的账户密码
> db.auth('root', 'example')
1

# 查看数据库
> show dbs
admin   0.000GB
config  0.000GB
local   0.000GB

# 创建一个新的数据库
> use testdb
switched to db testdb

# 创建一个新用户
# 用户名是 test，密码是 123456，角色是数据库拥有者，拥有的数据库是testdb
> db.createUser({user:'test',pwd:'123456',roles:[{role:'dbOwner', db:'testdb'}]})
Successfully added user: {
    "user" : "test",
    "roles" : [
        {
            "role" : "dbOwner",
            "db" : "testdb"
        }
    ]
}
```

角色相关官方说明 https://docs.mongodb.com/manual/reference/built-in-roles/index.html



然后我们重新登录一次

```cmd
$ docker exec -it mongomacos_mongo_1 mongo

> use testdb
switched to db testdb

> db.auth('test', '123456')
1

# 插入数据
> db.users.insertOne({name:'zws',age:'25',email:'zws@qq.com'})
{
    "acknowledged" : true,
  # 默认的ID值
    "insertedId" : ObjectId("603b3932b3ec63337b0050b4")
}

# 这里自动创建了名为users的集合，这个 collections 类似于MySQL的表
> show collections
users

# 查询数据
db.users.find({})
{ "_id" : ObjectId("5fafbfcfe8b2cc357c14a8de"), "name" : "zwx", "age" : "25", "email" : "work@zwx.ink" }

# 再插入一条模式不一样的数据
db.users.insertOne({name:'typ', age:26})
{
    "acknowledged" : true,
    "insertedId" : ObjectId("5fafc132e8b2cc357c14a8df")
}

# 再次查询数据
{ "_id" : ObjectId("5fafbfcfe8b2cc357c14a8de"), "name" : "zwx", "age" : "25", "email" : "work@zwx.ink" }
{ "_id" : ObjectId("5fafc132e8b2cc357c14a8df"), "name" : "typ", "age" : 26 }

# 更新数据 (查询条件,要更新的键值)
> db.users.updateOne({name:'typ'},{$set:{email:'test@test.com'}})
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }

# 查询看是否更新成功
db.users.find({name:'typ'})
{ "_id" : ObjectId("5fafc132e8b2cc357c14a8df"), "name" : "typ", "age" : 26, "email" : "test@test.com" }
```

增删改查官方文档说明 https://docs.mongodb.com/manual/crud/

#### Robo 3t

官网下载安装

create，输入name和address，勾选鉴权选项，数据库名称

#### 备份恢复

```cmd
# 备份
docker exec -it dockername mongodump -h localhost -u username -p password -o /tmp/test # 容器内部路径
docker cp dockerid:/tmp/test /tmp/test # 拷贝数据
# 恢复
docker exec -it dockername mongorestore -h localhost -u username -p password --dir /tmp/test # 宿主机路径，还需要挂载或者拷贝数据
```

#### mongoose

<img src="note.assets/截屏2021-03-21 下午4.30.29.png" alt="截屏2021-03-21 下午4.30.29" style="zoom:50%;" />

npm安装

使用：配置，核心API

核心概念：schema，model

```js
// getting-started.js
var mongoose = require('mongoose');
mongoose.connect('mongodb://username:psw@localhost/dbname', {useNewUrlParser: true, useUnifiedTopology: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

var kittySchema = mongoose.Schema({
  name: String
});
// 译者注：注意了， method 是给 document 用的
// NOTE: methods must be added to the schema before compiling it with mongoose.model()
kittySchema.methods.speak = function () {
  var greeting = this.name
    ? "Meow name is " + this.name
    : "I don't have a name";
  console.log(greeting);
}
var Kitten = mongoose.model('Kitten', kittySchema);

var felyne = new Kitten({ name: 'Felyne' });
console.log(felyne.name); // 'Felyne'

var fluffy = new Kitten({ name: 'fluffy' });
fluffy.speak(); // "Meow name is fluffy"
fluffy.save(function (err, fluffy) {
  if (err) return console.error(err);
  fluffy.speak();
});
Kitten.find(function (err, kittens) {
  if (err) return console.error(err);
  console.log(kittens);
})
// 这么写可以获取所有 name 为 "Fluff" 开头的数据
Kitten.find({ name: /^fluff/ }, callback);
```

查看警告，消除警告

优化结构

增删改查

排序

多表联合查询

#### 添加用户

#### 配置权限

### Redis

遵循BSD协议，高性能key-value数据库

高性能支持数据持久化，多数据结构，支持备份，支持事务数据的原子性

应用：缓存（读写性能好），计数&消息系统（高并发，发布/订阅阻塞队列功能），分布式会话session&分布式锁（秒杀）

对比

储存方式：key-value/document

使用方式&可靠性不一样：ACID支持/mongodb sql

应用场景：高性能缓存/海量数据分析

#### 安装

docker，dockerhub`docker-compose up -d`使用docker-compose安装

```yml
# docker run安装
# docker run -itd --restart=always -p 15001:6379 -v /home/redistest:/data redis

# /etc/community/redis/docker-compose.yml
version: '3.1'
services:
	redis-community:
		image: 'redis'
		restart: always
		container_name: 'redis_community'
		ports: 
		  - 15001:6379
		volumes: 
		  - /home/community/redis:/data
		# 设置默认密码
		command: ['redis-server', '--requirepass', 'redispass']
```

默认配置https://github.com/redis/redis/blob/unstable/redis.conf，默认6379port

```cmd
# 900秒，一个键值变化就会存储
save 900 1
save 300 10
save 60 10000
```

#### redis cli

命令参考：http://doc.redisfans.com/

```cmd
# 连接进启动好的redis服务中
docker exec -it redis-test /bin/bash
redis-cli 
# 另外一种方法
docker exec -it redis-test redis-cli
# 设置了密码的话要使用auth输入密码
auth 123456
# 其他的连接方面的命令 echo，ping，quit，select（切换到指定数据库）
# 其他常用命令
# 递增
INCR key
# 递减
DECR
# 匹配keys
KEYS /reg/
# 存在
EXISTS key1 key2 ...
del key
# hash
hset key field value
hget key field
hgetall key
hmset key field value field value field value
# list
lpop key
rpop key
lpush key value
# set
# 发布订阅
subscribe channel channel
publish channel massage
# 服务器相关
client list # 连接到服务的客户端，idle表示空闲时长
client kill client
# 用来记录查询时间的日志系统
config set slowlog-log-slower-than 1000 # 查询时间大于1000毫秒的记录
slowlog len # 查看日志数量
slowlog reset
# 清空数据库
flushall # 清空所有数据库，慎重！！
flushdb
# 备份/恢复
# SAVE 命令执行一个同步保存操作，将当前 Redis 实例的所有数据快照(snapshot)以 RDB 文件的形式保存到硬盘。一般来说，在生产环境很少执行 SAVE 操作，因为它会阻塞所有客户端，保存数据库的任务通常由 BGSAVE 命令异步地执行。然而，如果负责保存数据的后台子进程不幸出现问题时， SAVE 可以作为保存数据的最后手段来使用。
save
CONFIG get dir # 查看地址
quit
docker exec -it redis-test /bin/bash
ls
# rdb文件就是数据文件
# 重启docker服务
docker exec -it redis-test redis-cli -h 127.0.0.1 -a 123456
```

#### GUI

**another redis desktop manager**（免费）

medis（收费）

redis desktop manager（收费）

#### 集成redis

安装库：redis

https://github.com/NodeRedis/node-redis

有用的参数参数：...detect_buffers: true, retry_strategy

```js
import redis from 'redis'

const options = {
    host: '192.168.1.7',
    port: 15001,
    password: 'redispass',
    // If set to true, then replies will be sent to callbacks as Buffers. 
    detect_buffers: true,
    retry_strategy: function(options) {
        if (options.error && options.error.code === "ECONNREFUSED") {
            // End reconnecting on a specific error and flush all commands with
            // a individual error
            return new Error("The server refused the connection");
        }
        if (options.total_retry_time > 1000 * 60 * 60) {
            // End reconnecting after a specific timeout and flush all commands
            // with a individual error
            return new Error("Retry time exhausted");
        }
        if (options.attempt > 10) {
            // End reconnecting with built in error
            return undefined;
        }
        // reconnect after
        return Math.min(options.attempt * 100, 3000);
    },
}

const client = redis.createClient(options)

const setValue = (key, value) => {
    if(typeof value === 'undefined' || value == null || value === '') {
        return
    }
    if(typeof value === 'string') {
        client.set(key, value)
    }else if(typeof value === 'object') {
        Object.keys(value).forEach(item => {
            client.hset(key, item, value[item], redis.print)
        })
    }
}

const { promisify } = require("util");
const getAsync = promisify(client.get).bind(client);
const getValue = (key) => {
    return getAsync(key)
}

const getHValue = (key) => {
    return promisify(client.hgetall).bind(client)(key)
}

export {
    client,
    setValue,
    getValue,
    getHValue
}

```

将get转换为异步：方法一，util的proisify，方法二，bluebird

## JWT

### 鉴权

jwt

易扩展，支持移动设备，跨应用调用，安全，信息丰富

刷新与过期处理，payload不易过大（性能），中间人攻击

session/cookie

传统，后台系统常用，依赖koa-session，redis，bluebird

易扩展，简单

安全性低，性能低，服务端存储，多服务器同步困难，跨平台困难

oauth

第三方登录

开放，安全简单，权限指定

需要增加授权服务器，增加网络请求

### jwt原理

json web token，一个jwt由三部分组成：header加密方式及token类型，payload用户信息等，signature（加密header的base64+.+payload的base64+secret）

特点：防止csrf（防止伪造请求），适合移动端，无状态，

工具：jwt.io

客户端请求服务端login，验证后返回token，再请求时带上token，服务器验证token返回数据

保证安全：加密信道

#### API安全设计

通信信道加密：https（对称加密）

通信数据加密：密文+加密关键数据

通信安全策略：授权中间层，尝试次数，过期策略，多次鉴权...

### node集成

鉴权库：koa-jwt库https://www.npmjs.com/package/koa-jwt

common/errHandle错误处理：401，500

```js
export default (ctx, next) => {
    return next().catch((err) => {
        if (401 == err.status) {
          ctx = {
              code: '401',
              msg: 'Protected resource, use Authorization header to get access\n'
          };
        } else {
          // throw err;
          ctx.status = err.status || 500
          ctx.body = Object.assign({
            code: 500,
            msg: err.message
          }, process.env.NODE_ENV === 'development' ? { stack: err.stack } : {})
        }
      });
}
```

产生校验token：jsonwebtoken库

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

vscode调试配置

```json
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch via NPM",
      "runtimeExecutable": "npm",
      "restart": true,
      "console": "integratedTerminal",
      "runtimeArgs": ["run-script", "start:dist"],
      "port": 9229
    },
    {
      "type": "node",
      "request": "launch",
      "name": "nodemon",
      "runtimeExecutable": "${workspaceFolder}/node_modules/.bin/nodemon",
      "program": "${workspaceFolder}/src/index.js",
      "restart": true,
      "console": "integratedTerminal",
      "internalConsoleOptions": "neverOpen",
      "runtimeArgs": ["--exec", "babel-node"]
    }
  ]
}
```

> Lsof -i:3000 // 查看端口占用

VSCode支持alias：插件node module resolve，创建jsconfig.json

```json
{
  "compilerOptions": {
    "target": "es2017",
    "allowSyntheticDefaultImports": false,
    "baseUrl": "./",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "exclude": ["node_modules", "dist"]
}
```

Chrome 调试：使用Debugger

> 密码加密库：bcrypt
>
> 前端数据接口管理工具：doclever

## 业务逻辑

### 数据库设计

用户信息表

发帖信息

#### 网站SEO

Seo：搜索引擎优化

重要部分是网站的性能优化：

- 资源压缩，请求压缩
- 设置缓存，DNS预处理
- CDN

> qs库：将对象转换为拼接字符串