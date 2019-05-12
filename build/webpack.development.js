import path from 'path';
import merge from 'webpack-merge';

export default merge([
    {
        devtool: 'eval-source-map',

        // Turn off minimize when running in development mode
        optimization: {
            minimize: false,
        },
    },
]);
