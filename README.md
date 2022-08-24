# 经典小游戏复刻

如果你是想玩一玩这些小游戏，可以在clone项目后运行npm start或yarn start命令；
或者在对应游戏目录下使用浏览器打开游戏名.html文件。

如果你是想参与开发或是有什么好的建议，欢迎提issues或pr。
这个项目没有兼容性的考虑，你可以使用class组件，也可以使用hooks。
你也可以使用ES2022语法，或是最新的CSS特性。
使用Class实现面向对象风格或是使用函数式风格都是可以的。

## 开始游戏

## 参与项目

## 项目文件目录

```
gameReprint
│   README.md
│   package.json
│   ...
└───src
│   │   App.js // 入口文件
│   │   index.js // 入口文件
│   └───ajax  // axios封装 暂无
│   │
│   └───games // 存放游戏
|           └─── index // 首页/游戏入口
|           └─── gameName/gameName.html // 可直接打开的对应的游戏html文件
│   │
│   └───images // 静态图片目录
│   │
│   └───router.js // 路由配置文件
│   │
│   └───store // redux相关 暂无
│
└───public  // 入口文件
│      index.html
│      favicon.ico
│      ...
└───dist  // 打包生成地址
|
|____node_modules  依赖包

```

## License

Licensed under the [MIT](LICENSE.txt) license.
