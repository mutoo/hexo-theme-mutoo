import SvgStore from 'webpack-svgstore-plugin';

export default () => ({
    plugins: [
        // create svgStore instance object
        new SvgStore({
            // svgo options
            svgoOptions: {
                plugins: [
                    {
                        removeTitle: true,
                    },
                ],
            },
            prefix: 'icon-',
        }),
    ],
});
