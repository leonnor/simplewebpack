# simplewebpack
a simple demo of webpack

# 一个简易的 webpack 需要支持以下特性：

- 支持将 es6 转换成 es5。

  - 通过 parse 生成 AST。

  - 通过 transformFromAstSync 将 AST 重新生成 es5 源码。


- 可以分析模块之间的依赖关系。

  - 通过 traverse 的 ImportDeclaration 方法获取依赖属性。


- 生成的 js 文件可以在浏览器中运行。

# 编写步骤

1.编写 minipack.config.js。

2.编写 parser.js，实现将 es6 的代码转换成 AST，然后分析依赖，将 AST 转换成 es5 代码。

3.编写 compiler.js，实现开始构建、构建模块、将结果输出到磁盘功能。
