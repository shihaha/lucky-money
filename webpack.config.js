const path = require('path');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let entries = {},
    htmls = [];

glob.sync('./src/js/**/*.js').forEach(function(entry) {
    let pathname = entry.split('/').splice(-2).join('/').split('.')[0];
    entries[pathname] = [entry];
});

glob.sync('./src/html/**/*.html').forEach(function(html) {
    let pathname = html.split('/').splice(-2).join('/').split('.')[0];
    htmls.push(html);
});

let config = {
    entry: entries,
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.html?$/,
            loader: 'html-loader',
        }, {
            test: /\.(png|jpg|gif)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    outputPath: 'img/',
                    publicPath: '/img/'
                }
            }]
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.vue$/,
            use: ['vue-loader']
        }]
    },
    devServer: {
        contentBase: './dist'
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins: []
};

htmls.forEach(function(pathname) {
    let chunks = pathname.replace('./src/html/', 'js/').replace('.html', '');
    let conf = {
        filename: pathname.replace('src/', ''),
        template: pathname,
        chunks: [chunks]
    };
    config.plugins.push(new HtmlWebpackPlugin(conf));
});

module.exports = config;