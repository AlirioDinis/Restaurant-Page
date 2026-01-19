const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin') // Adicione esta linha

const PUBLIC_DIR = 'public'
module.exports = {
  devServer: {
    static: {
      directory: path.join(__dirname, PUBLIC_DIR)
    },
    port: 8080
  }, 
  entry: path.resolve(__dirname, 'src', 'index.js'),
  mode: 'development',
  module: { 
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        type: 'javascript/auto',
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                modules: false
              }] 
            ]
          }
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  output: {
    filename: '[name]-[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true // Adicione isto para limpar a pasta dist automaticamente
  },
  plugins: [ // Adicione esta seção inteira
    new HtmlWebpackPlugin({
      template: './dist/index.html', // ou o caminho correto do seu HTML
      inject: 'body'
    })
  ],
  target: 'web'
}