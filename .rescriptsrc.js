module.exports = {
  webpack: function(config) {
    const newConfig = {
      ...config,
      target: 'electron-renderer',
    }
    return newConfig
  },
  devServer: function(config) {
    const newConfig = {
      ...config,
      headers: { "Access-Control-Allow-Origin": "*" }
    }
    return newConfig
  },
}