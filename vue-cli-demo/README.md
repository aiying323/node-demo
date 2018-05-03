# edu

> this is edu1.0.0

## Build Setup

``` bash
# install dependencies
yarn add node-sass
yarn upgrade

# npm install

# serve with hot reload at localhost:8080
yarn run dev
#npm run dev

# build for production with minification
npm run build

# build for test with minification
npm run test

```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# 脚手架相关文件夹说明：
	项目下Build：用于存放项目运行相关文件，包括webpack、主题、vue-loader、版本检查等文件
 	项目下Config：运行环境配置文件
 	项目-Src下：Assets：项目静态资源如图片、字体等
 	Componets：公共组件相关文件
 	private-component：存放业务类组件
 	Json：存放本地json文件
	Router：业务路由相关配置
 	Scss：存放主题相关文件
 	Store：用于存放全局变量、全局枚举类文件
 	Utils：用于存放工具类如时间格式处理、字符串格式处理、请求拦截处理之类的脚本文件
 	Views：用于存放业务页面相关逻辑代码文件
 	项目下static：用于存放外部插件文件

# cnpm安装：
 npm install -g cnpm --registry=https://registry.npm.taobao.org
 cnpm install --registry=https://registry.npm.taobao.org
# ios 下如果 安装没有报错即不需要执行 如果安装babel-runtime报错了还需要安装 npm i babel-runtime -S
# 安装之后如果运行报错则删掉node-modules文件夹 用cnpm 重新安装一次即可

# 如果cnpm安装nodemodule失败 请安装yarn-0.21.3.msi
# 执行一下命令：
# 1、 yarn add node-sass@4.9.0
# 2、 yarn upgrade
#注意：如果后期开发过程中，团队有人添加了插件上去 更新了package.json文件，则需要大家cnpm install 一下将新的依赖文件下载下来



