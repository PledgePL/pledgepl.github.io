var path = require('path');
var glob = require('glob');
var ExtractTextPlugin = require("extract-text-webpack-plugin-webpack-2");
var CopyWebpackPlugin = require('copy-webpack-plugin');
var autoprefixer = require('autoprefixer');

module.exports = {
  title: 'PledgePL - Style Guide',
  highlightTheme: 'mdn-like',
  rootDir: __dirname,
  assetsDir: path.join(__dirname, './src/'),
  // components: function() {
  //   return glob.sync(path.resolve(__dirname, './src/components/**/*.js')).filter(function(module) {
  //     return /(\/(cards|atoms|molecules|organisms)\/)/.test(module);
  //   });
  // },
  sections: [
    {name: 'Atoms', components: './src/components/atoms/**/*.js'},
    {name: 'Molecules', components: './src/components/molecules/**/*.js'},
    {name: 'Organisms', components: './src/components/organisms/**/*.js'},
    {name: 'Templates', components: './src/components/templates/**/*.js'}
  ],
  template: './src/styleguide/template.html',
  styleguideDir: './dist/style-guide',
  skipComponentsWithoutExample: true,
  serverPort: 3001,
  updateWebpackConfig: function(webpackConfig, env) {
    // overriding this file didnt work for right now...
  //  webpackConfig.resolve.alias['rsg-components/Playground'] = path.join(__dirname, 'src/styleguide/Playground');
   webpackConfig.resolve.alias['rsg-components/Wrapper'] = path.join(__dirname, './src/styleguide.js');
  //  webpackConfig.output.publicPath = path.join(__dirname, './src/');
   webpackConfig.output.filename = "[name]-[hash].js"
   webpackConfig.plugins = webpackConfig.plugins.concat([
     new ExtractTextPlugin("[name]-[hash].css"),
     new CopyWebpackPlugin([
        // Copy directory contents to {output}/to/directory/
        { from: path.join(__dirname, 'src/static'), to: path.join(__dirname, 'dist/static') },
      ])
   ])
   webpackConfig.module.loaders.push(
     {
       include: __dirname,
       test: /\.jsx?$/,
       exclude: /(node_modules|bower_components)/,
       loader: 'babel',
       query: {
         presets: ['es2015', 'react', 'stage-0']
       }
     }
    ,
     {
       include: __dirname,
       test: /\.(scss|css)/,
       exclude: /(node_modules|bower_components)/,
       loader: 'style-loader!css-loader!autoprefixer-loader?{browsers:["last 3 version"]}!sass-loader'
     }
    ,
     {
       include: __dirname,
       test: /\.(woff)$/,
       exclude: /(node_modules|bower_components)/,
       loader: 'file-loader?name=assets/fonts/[hash].[ext]'
     }
    ,
     {
       include: __dirname,
       test: /\.(png|jpg|svg)$/,
       exclude: /(node_modules|bower_components)/,
       loader: 'url-loader?limit=300000&name=[hash].[ext]'
     }
   );
   return webpackConfig;
  }
  };
