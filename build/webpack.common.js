import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import scss from './parts/scss';
import javascript from './parts/javascript';
import svg from './parts/svg';

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
            new webpack.ProvidePlugin({
                $: 'jquery',
            }),

            // Use MiniCssExtractPlugin to generate a .css file
            new MiniCssExtractPlugin({
                filename: 'style.css',
            }),
        ],
    },
    javascript(),
    scss(),
    svg(),
]);
