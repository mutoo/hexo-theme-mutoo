import path from 'path';
import merge from 'webpack-merge';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import scss from './parts/scss';
import javascript from './parts/javascript';

export default merge([
    {
        entry: {
            'script': [
                path.resolve(__dirname, '../src/index.js'),
                path.resolve(__dirname, '../src/index.scss'),
            ],
        },
        output: {
            path: path.resolve(__dirname, '../source/assets'),
        },
        plugins: [
            // Use MiniCssExtractPlugin to generate a .css file
            new MiniCssExtractPlugin({
                filename: 'style.css',
            }),
        ],
    },
    javascript(),
    scss(),
]);
