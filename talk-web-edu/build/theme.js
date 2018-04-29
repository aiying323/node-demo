'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const config_env = process.env.NODE_ENV === 'test' ? config.test : config.build
const theme = JSON.parse(config_env.env.THEME)
const entry = theme.LIST.reduce((previous, current) => {
  previous[current] = theme.PATH + current + '.scss';
  return previous
}, {})

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry,
  module: {
    rules: utils.styleLoaders({
      sourceMap: config_env.productionSourceMap,
      extract: true,
      usePostCSS: true
    })
  },
  plugins: [
    // extract css into its own file
    new ExtractTextPlugin({
      filename: utils.assetsPath(`dist/css/theme/[name].${theme.VERSION}.css`),
      // Setting the following option to `false` will not extract CSS from codesplit chunks.
      // Their CSS will instead be inserted dynamically with style-loader when the codesplit chunk has been loaded by webpack.
      // It's currently set to `true` because we are seeing that sourcemaps are included in the codesplit bundle as well when it's `false`,
      // increasing file size: https://github.com/vuejs-templates/webpack/issues/1110
      allChunks: true,
    }),
    new OptimizeCSSPlugin({
      cssProcessorOptions: config_env.productionSourceMap
        ? { safe: true, map: { inline: false } }
        : { safe: true }
    })
  ]
}

