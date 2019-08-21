# monitor
前端性能监控平台
### 为什么要监控性能？
“If you cannot measure it, you cannot improve it” ———— William Thomson

这是一个最基本的问题，为什么要关注和监控前端性能？对于公司来说，性能在一定程度上与利益直接相关。国外有很多这方面的调研数据：

性能	收益

Google 延迟 400ms	搜索量下降 0.59%

Bing 延迟 2s	收入下降 4.3%

Yahoo 延迟 400ms	流量下降 5-9%

Mozilla 页面打开减少 2.2s	下载量提升 15.4%

Netflix 开启 Gzip	性能提升 13.25% 带宽减少50%

数据来源：http://www.slideshare.net/bitcurrent/impact-of-web-latency-on-conversion-rates http://stevesouders.com/docs/jsdayit-20110511.pptx

为什么性能会影响公司的收益呢？根本原因还是在于性能影响了用户体验。加载的延迟、操作的卡顿等都会影响用户的使用体验。尤其是移动端，用户对页面响应延迟和连接中断的容忍度很低。想象一下你拿着手机打开一个网页想看到某个信息却加载半天的心情，你很可能选择直接离开换一个网页。谷歌也将页面加载速度作为 SEO 的一个权重，页面加载速度对用户体验和 SEO 的影响的调研有很多。

尽管性能很重要，开发迭代过程中难免会有所忽视，性能会伴随产品的迭代而有所衰减。特别在移动端，网络一直是一个很大的瓶颈，而页面却越来越大，功能越来越复杂。并没有简单的几条黄金规则就可以搞定性能优化工作，我们需要一套性能监控系统持续监控、评估、预警页面性能状况、发现瓶颈，指导优化工作的进行。

### 前置工作准备
本系统后端采用以node 采用 Eggjs 框架实现了对报错信息进行收集具体框架文档可访问 https://eggjs.org/zh-cn/intro/quickstart.html Eggjs 官方文档进行查阅

后端技术栈：eggjs+mysql

前端技术栈：yarn + webpack4 + ES6 + babel + Lodash + npx 等

开发工具：Visual Studio Code 、Navicat Premium、Postman等

依赖管理工具：yarn （yarn相比npm 个人强烈推荐使用yarn 在使用上无论是体验速度还是性能要优越于npm 具体参考文档 https://yarn.bootcss.com/）

####  后端项目地址：https://github.com/dyq086/monitor-server

1、将gti项目代码clone 至本地并安装依赖;

```
$ git clone https://github.com/dyq086/monitor-server
$ yarn install
```


2、确保本地环境已安装 MySql,然后我们通过 mysql 命令在本地快速创建一个名称为 monitor 的 database
```
$ mysql -u root -p 
 mysql> create DATABASE monitor;
```

3、我们会使用 sequelize 连接到 MySQL，在config/config.default.js 中完成 sequelize 配置
具体配置文档地址可访问:https://eggjs.org/zh-cn/tutorials/sequelize.html
```
 config.sequelize = {
        dialect: 'mysql',//驱动
        host: '127.0.0.1',//本机host
        port: 3306,//端口号
        database: 'monitor',//数据库名称
        username: 'root',//数据库用户名
        password: 'root'//数据库用户密码
    };
```

4、执行 migrate 进行数据库变更
```
 npx sequelize db:migrate
```

5、执行run

```
### Development
$ yarn run dev
$ open http://localhost:7001/
```

6、后端配置大功告成




