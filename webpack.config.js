const path = require('path')
const webpack = require('webpack')
const SitemapPlugin = require('sitemap-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const StatsPlugin = require('stats-webpack-plugin')
const WebpackSHAHash = require('webpack-sha-hash')
const ManifestPlugin = require('webpack-manifest-plugin')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const fs = require('fs')
const get = require('lodash.get')
const configPath = './config.prod.json'


const CONFIG = JSON.parse(fs.readFileSync(configPath))

console.log('CONFIG')
console.log(CONFIG)

const routes = [
  '/',
  '/join-us/',
  '/why-pledge/',
  '/partners/',
  '/support/'
]

const outputClient = process.env.NODE_ENV === 'production' ? 'assets/[chunkhash].[name].client.js' : 'client.js'
const outputServer = '[name].server.js'
const outputVendor = process.env.TARGET === 'server' ? 'vendor.server.js' : (process.env.NODE_ENV === 'production' ? 'assets/[chunkhash].[name].client.js' : 'vendor.js')

var plugins = [
                new webpack.IgnorePlugin(/vertx/),
                new StatsPlugin(`./stats-${process.env.TARGET}.json`, {
                  chunkModules: true,
                  exclude: [/node_modules[\\\/]react/]
                }),
                new webpack.LoaderOptionsPlugin({
                  options: {
                   postcss: function () {
                       return [autoprefixer, cssnano({reduceIdents: false, reduceInitial:false})]
                    }
                  },
                  minimize: true,
                  debug: false
                }),
                new ManifestPlugin()
              ]


if (process.env.TARGET !== 'server') {
  plugins = plugins.concat([
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: 2,
      filename: outputVendor
    }),
    new webpack.optimize.MinChunkSizePlugin({ minChunkSize: 80000 })
  ])
}

if (process.env.NODE_ENV === 'production') {
  plugins = plugins.concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: (process.env.NODE_ENV === 'production') ? '"production"' : '"development"',
        CONTENTFUL_API_TOKEN: JSON.stringify(get(CONFIG, 'contentful.contentDeliveryApiToken', null)),
        CONTENTFUL_SPACE_ID: JSON.stringify(get(CONFIG, 'contentful.spaceId', null))
      }
    }),
    new LodashModuleReplacementPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      debug: false,
      minimize: true,
      sourceMap: false,
      output: {
        comments: false
      },
      compress: {
        screw_ie8: true,
        warnings: false
      }
    }),
    new SitemapPlugin(process.env.npm_config_url, routes, 'sitemap.xml'),
    new CopyWebpackPlugin([
           { from: 'static', to: 'static' }
    ]),
    // new WebpackSHAHash()
  ])
}

const entry = {
  main: path.join(__dirname, `./src/${(process.env.TARGET === 'server') ? 'server' : 'client'}`)
}
if (process.env.TARGET !== 'server') {
  entry.vendor = [
    'react',
    'react-dom',
    'lodash.get',
    'lodash.has',
    'lodash.omit',
    'lodash.castarray',
    'isomorphic-style-loader/lib/withStyles',
    'marked',
    './components/molecules/block-grid/block-grid'
  ]
}


module.exports = {
  target: (process.env.TARGET === 'server') ? 'node' : 'web',
  devtool: (process.env.NODE_ENV === 'production') ? false : 'eval-source-map',
  context: path.join(__dirname, 'src'),
  bail: true,
  entry,
  output: {
    path: path.join(__dirname, '/'),
    publicPath: '/',
    filename: (process.env.TARGET === 'server') ? outputServer : outputClient,
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss/,
        loader: `isomorphic-style-loader!css-loader?${JSON.stringify({ sourceMap: false, minimize: true })}!postcss-loader!sass-loader`
      },
      {
        test: /\.(woff)$/,
        loader: 'file-loader?name=assets/fonts/[hash].[ext]'
      },
      {
        test: /\.(png|jpg|svg)$/,
        loader: 'url-loader?limit=30&name=assets/images/[hash].[ext]'
      },
      {
        test: /\.(mp4)$/,
        loader: 'file-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  plugins
}
