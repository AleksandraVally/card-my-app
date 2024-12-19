const path = require('path');

module.exports = {
    entry: './src/index.js', // Путь к вашему основному файлу
    output: {
        path: path.resolve(__dirname, 'dist'), // Директория для собранных файлов
        filename: 'bundle.js', // Имя выходного файла
    },
    mode: 'development', // Режим разработки. Измените на 'production' для сборки в продакшн
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
            {
                test: /\.css$/, // Обработка CSS файлов
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i, // Обработка изображений
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images', // Путь, по которому будут сохраняться изображения
                            name: '[name].[hash].[ext]', // Имя выходного файла
                        },
                    },
                ],
            },
        ],
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000, // Порт для dev-сервера
    },
    resolve: {
        extensions: ['.js', '.jsx'], // Поддержка файлов .jsx
    },
};
