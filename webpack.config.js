const path = require('path');

module.exports = {
    optimization: {
        minimize: false,
    },
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        globalObject: 'this',
        library: {
            name: 'Float',
            type: 'umd',
            export: 'default',
        },
    },
};