# monitor-server
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

### 前置工作准备
本系统后端采用以node 采用 Eggjs 框架实现了对报错信息进行收集具体框架文档可访问 https://eggjs.org/zh-cn/intro/quickstart.html Eggjs 官方文档进行查阅

后端技术栈：eggjs+mysql


开发工具：Visual Studio Code 、Navicat Premium、Postman等

依赖管理工具：yarn （yarn相比npm 个人强烈推荐使用yarn 在使用上无论是体验速度还是性能要优越于npm 具体参考文档 https://yarn.bootcss.com/ ）

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


###  前端项目地址：https://github.com/dyq086/lessbug


### 参考

https://fex.baidu.com/blog/2014/05/build-performance-monitor-in-7-days/
