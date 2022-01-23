/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */

const x3dTags = ['x3d', 'Inline', 'NavigationInfo', 'scene', 'appearance', 'shape', 'material', 'box', 'transform', 'timeSensor', 'positionInterpolator', 'orientationInterpolator', 'route']

module.exports = {
    // ignore Stencil web components
    chainWebpack: config => {
        config.module
            .rule('vue')
            .use('vue-loader')
            .tap(options => {
                options.compilerOptions = {
                    ...options.compilerOptions,
                    isCustomElement: (tag) => x3dTags.includes(tag) || tag === 'appearance' // Ja nie wiem czemu bez tej alternatywy nie działa XD
                }
                return options
            })
    },
}
