const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	devtool: 'eval-source-map',
  entry:  __dirname + "/app/index.js",//已多次提及的唯一入口文件
  output: {
    path: __dirname + "/build",//打包后的文件存放的地方
    filename: "bundle.js"//打包后输出文件的文件名
  },
  devServer: {
    contentBase: "./public",//本地服务器所加载的页面所在的目录
    historyApiFallback: true,//不跳转
    inline: true,//实时刷新
    port:8003,
    // host:'192.168.0.137'
    host:'192.168.0.128'
  },
  module: {
  	rules: [
	  	{
	  		test: /(\.jsx|\.js)$/,
	  		use: {
	  			loader: "babel-loader"
	  		},
	  		exclude: /node_modules/
	  	},
	  	{
        test: /\.css$/,
        use: [
            {
                loader: "style-loader"
            }, {
                loader: "css-loader",
                options: {
                    modules: true
                }
            },{
                loader: "postcss-loader"
            }
        ]
    	},
    	{
        test: /\.less$/,
        use: [
            {
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                loader: "postcss-loader"
            },{
            		loader: "less-loader"
            }
        ]
    	},{
          test: /\.(eot|woff|svg|ttf|woff2|appcache|mp3)(\?|$)/,
          exclude: /node_modules/,
          use: ['file-loader?name=[name].[ext]']
      }, {
          test: /\.(png|jpg|gif|jpeg)$/,
          exclude: /node_modules/,
          use: ['url-loader?limit=81920&name=images/[hash:8].[name].[ext]']
    	}

  	]
  },
  plugins: [
      new webpack.BannerPlugin('版权所有，翻版必究'),
      new HtmlWebpackPlugin({
          template: __dirname + "/app/index.tmpl.html"//new 一个这个插件的实例，并传入相关的参数
      }),
      new webpack.HotModuleReplacementPlugin(),//热加载插件
      new webpack.NoEmitOnErrorsPlugin() // 即使有错误也不中断运行
  ],
  resolve: {
      extensions: ['.js', '.jsx', '.less', '.css'], //后缀名自动补全
  }
};