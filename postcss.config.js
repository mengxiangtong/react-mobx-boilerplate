module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-plugin-px2rem')({
      rootValue: 100,
      unitPrecision: 5,
      propWhiteList: [],
      propBlackList: [
        'font-size'
      ],
      exclude: false,
      selectorBlackList: [
        'html'
      ],
      ignoreIdentifier: false,
      replace: true,
      mediaQuery: false,
      minPixelValue: 0
    })
  ],
  remove: false
}
