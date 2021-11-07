const path = require('path');

module.exports = {
    devtools: 'cheap-module-evel-source-map',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '',
    }
};