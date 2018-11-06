const path = require('path');


module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: './src/index.tsx',
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, '..', 'build')
    },
    resolve: {
        modules: ['node_modules', path.resolve(__dirname, '..', 'src')],
        extensions: ['.ts', '.tsx', '.json']
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: 'awesome-typescript-loader', include: /src/, exclude: /node_modules/ },
            { enforce: 'pre', test: /\.jsx?$/, loader: 'source-map-loader', include: /src/, exclude: /node_modules/ }
        ]
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    }
}