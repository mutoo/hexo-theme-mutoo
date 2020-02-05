'use strict';

import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const isDevMode = process.env.NODE_ENV !== 'production';

export default () => ({
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    // extract css to file
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    // css-loader - Translates CSS into CommonJS
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: isDevMode,
                            url: false,
                            // Apply previous loader (postcss-loader) to imported .css files
                            importLoaders: 2,
                        },
                    },

                    // postcss-loader - Runs the CSS through 'post-css' which
                    // adds auto-prefixing and logs CSS errors to the console
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: isDevMode,
                            // see more options in postcss.config.js
                        },
                    },

                    // sass-loader - Compiles Scss into CSS
                    {
                        loader: 'sass-loader',
                        options: {
                            // Minify if using a production build
                            sassOptions: {
                                outputStyle: isDevMode ? 'nested' : 'compressed',
                            },
                            sourceMap: isDevMode,
                        },
                    },
                ],
            },
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/',
                    }
                }],
            },
        ],
    },
});
