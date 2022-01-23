/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
    // ignore Stencil web components
    chainWebpack: config => {
        config.module
            .rule('vue')
            .use('vue-loader')
            .tap(options => {
                options.compilerOptions = {
                    ...options.compilerOptions,
                    isCustomElement: tag => tag === 'x3d' || tag === 'Inline' || tag === 'NavigationInfo' || tag === 'scene' || tag === 'appearance' || tag === 'shape' || tag === 'material' || tag === 'box'
                }
                return options
            })
    },
}
