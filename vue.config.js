module.exports = {
  publicPath: process.env.GITHUB_ACTIONS ?
      '/' + process.env.GITHUB_REPOSITORY_NAME_PART + '/' :
      '/',
  outputDir: 'dist',
  assetsDir: 'assets',
  productionSourceMap: false
}
