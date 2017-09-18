module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname,
        publicPath: "/",
        filename: "bundle.js"
    },
    module: {
        rules: [{
            exclude: /node_modules/,
            loader: "babel-loader",
            options: {
                presets: ["react", "es2015", "env", "stage-1"]
            }
        },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(gif|png)$/,
                loader: 'url-loader?limit-200000'
            }
            ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './'
    }
};