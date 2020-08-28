var HtmlWebpackPlugin = require("html-webpack-plugin");
  
let path = require('path');

let conf = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js',
        publicPath: 'dist/'
    },
    devServer: {
        overlay: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
            },
        
            {
                test: /\.css$/,
                use:[
                        {
                            loader: 'style-loader'
                        },
                        {
                            loader: 'css-loader'
                        }
                ]
            },

            {
                test: /\.(sass|scss)$/,
                use:[
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
                
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use:[
                    {
                        loader: 'file-loader'
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: 'file-loader',
                options: {
                    name: 'images/[name].[ext]'
                }
            }
         
            
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
          hash: false,
          title : 'Сайт',
          template : 'index.html'
        })
      ]
};

module.exports = (env, options) => {
    let production = options.mode === 'production';

    conf.devtool = production ? false : 'eval-sourcemap';
    
    return conf;
}