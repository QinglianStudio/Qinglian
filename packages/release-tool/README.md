### @qinglian/release-tool

发包构建工具

#### 功能

- [x] 支持 workspace 与单包场景
- [x] 支持多个包同时发布
- [x] 支持自定义 prerelease
- [ ] 支持生成 changelog
- [ ] 支持 plugin 例如：自动提交变更日志

#### 用法

##### 安装

```shell
npm i @qinglian/release-tool
```

##### 用法

新建`release.js`文件，内容如下

```js
// release.js
const { release } = require("@qinglian/release-tool");
release();
```

执行命令`node release.js`
