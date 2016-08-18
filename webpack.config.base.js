module.exports = {
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules)/,
            loader: 'babel'
        }]
    },
    output: {
        library: 'MediumEditorAutofocus',
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: [
            '',
            '.js'
        ]
    }
};

