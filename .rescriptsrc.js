module.exports = {
  webpack: function(config) {
    return {
      ...config,
      target: 'electron-renderer',
    }
  },
  devServer: function(config) {
    return {
      ...config,
      headers: {"Access-Control-Allow-Origin": "*"}
    }
  },
}