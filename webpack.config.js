const path = require('path');

const config = {
    'mode': 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: 'build'
    },
    module: {
        rules: [
            {
               use: 'jsx-loader?harmony',
               test: /\.jsx$/ 
            }

        ]
    }
}

module.exports = config;