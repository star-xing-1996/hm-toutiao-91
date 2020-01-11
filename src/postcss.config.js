module.exports = {
  plugins: {
    'autoprefixer': {},
    'postcss-pxtorem': {
      rootValue: 37.5, // 因为主要做的是手机，手机以iphone6为主要适配
      propList: ['*']
    }
  }
}
