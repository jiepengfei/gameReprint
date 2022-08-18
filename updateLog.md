### 初始化项目：create-react-app
react版本： 18.2.0

### 添加react-router
react-router版本： 6.3.0

### 添加Eslint规则
npm install eslint --save-dev 或 npm install eslint --save -g
eslint --init
![image](https://user-images.githubusercontent.com/92159727/185419840-33e7e847-0026-40a3-a999-809fa1fd6b08.png)

采用了standrad标准
[规则解析](https://blog.csdn.net/henouren/article/details/77961753)

四种标准的github地址：
[Airbnb](https://github.com/airbnb/javascriptStandard)[中文解析](https://developer.aliyun.com/article/908461#slide-2)
[standard](https://github.com/standard/standard)
[Google](https://github.com/google/eslint-config-google)
[XO](https://github.com/xojs/eslint-config-xo)

此外添加了三项规则：{
  semi: ['error', 'always'], // 分号
  'max-len': ['error', { code: 100 }], // 单行最大长度
  'comma-dangle': ['error', 'always-multiline'], // 拖尾逗号
}

保存自动修复同步到项目：.vscode/settings.json
配置方式：vscode左上角文件/首选项/设置/切换tab页为工作区/点击右上角切换到setting.json配置文件
