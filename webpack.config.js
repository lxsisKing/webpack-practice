const path = require("path");

module.exports = {
  module: {
    rules: [{ test: /\.css$/, use: ["style-loader", "css-loader"] }],
  },

  mode: "development", // 指定构建模式

  entry: "./src/index.js", // 指定构建入口文件

  devServer: {
    contentBase: path.resolve(__dirname, "dist"), // 开发服务器启动路径
  },

  output: {
    path: path.resolve(__dirname, "dist"), // 指定构建生成的文件所在路径
    filename: "bundle.js", // 指定构建生成的文件名
  },
};
