const path = require("path");

module.exports = {
    mode: "production",

    devtool: "source-map",

    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },

    output: {
        path: path.join(__dirname, '/dist/'),
        filename: 'main.js',
        publicPath: '/dist/',
    },

    devServer: {
        watchContentBase: true
    },

    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    },

    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
};