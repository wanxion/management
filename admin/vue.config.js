module.exports = {
  //打包文件输出目录
  outputDir: __dirname + '/../server/admin',
  //生产环境 静态文件目录
  publicPath: process.env.NODE_ENV === 'production' ? '/admin/' : '/'
}