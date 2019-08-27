const rewireAliases = require('react-app-rewire-aliases');
const path = require('path');
module.exports = function override(config, env) {
    // 在这里添加配置
    config = rewireAliases.aliasesOptions({
        Utils: path.resolve(__dirname, './src/utils'),
        Modules: path.resolve(__dirname, './src/modules'),
        Components: path.resolve(__dirname, './src/components'),
        Routers: path.resolve(__dirname, './src/routers'),
        Medias: path.resolve(__dirname, './src/medias'),
    })(config, env);
    return config;
}