import { browserHistory } from 'Routers/utils';
/**
 * 拼接地址
 *
 * @param {[string]} pathArray 地址数组
 */
export const pathJoin = (pathArray) => {
    let conjunctPath = pathArray
        .map((path) => {
            if (!path) {
                return '';
            }
            if (path.indexOf('/') === -1) {
                return path;
            }
            return path.split('/').filter((item) => item);
        })
        .join()
        .split(',')
        .join('/');

    if (conjunctPath[0] === '/') {
        return conjunctPath;
    } else {
        return '/' + conjunctPath;
    }
}
/**
 * [serializeObject 以&连接对象的键值，并以字符串返回]
 *
 * @param   {Object}    obj        [输入对象]
 * @returns {String}               [返回转换后的字符串]
 */
export const serializeObject = (obj) => {
    if (Object.prototype.toString.call(obj) !== '[object Object]') return obj;
    let resultArray = [],
        separator = '&';
    for (let prop in obj) {
        if (Object.prototype.toString.call((obj[prop])) === '[object Array]') {
            let toPush = [];
            for (let i = 0; i < obj[prop].length; i++) {
                const value = obj[prop][i];
                toPush.push(prop + '=' + (value === undefined ? '' : value));
            }
            resultArray.push(toPush.join(separator));
        } else {
            const value = obj[prop];
            resultArray.push(prop + '=' + (value === undefined ? '' : value));
        }
    }
    return resultArray.join(separator);
}
// {route, params, type}
export const goto = (route, type = 1 ) => {
    console.log(browserHistory);
    switch (type) {
        case 1:
            browserHistory.push(route);
            break;
        case 2:
            window.location.href = route;
            break;
        default:
            break;
    }
    // function getTargetRoute({ route, params, type, project } = {}){
    //     let targetRoute = '', // 拼接好的path + query
    //         queryString = serializeObject(params); // params转字符串
    //     if (!window.path) { // 开发环境
    //         targetRoute = pathJoin(['/', route]);
    //     } else if (project === 'browser' && window.path === 'ksweb') { // m站 生产环境
    //         targetRoute = pathJoin(['/', route]);
    //     } else if (window.path === 'kspage' && project === 'story') { // 活动生产环境
    //         targetRoute = pathJoin(['/ksweb', route]);
    //     } else if (project === 'story' || project === 'browser') { // 所有项目的开发环境、公众号项目、m站项目gamma、test环境
    //         targetRoute = pathJoin([window.path, route]);
    //     } else if (project === 'fmxly') {
    //         if (window.fmxlyPathname) {
    //             targetRoute = pathJoin([window.fmxlyPathname, route]);
    //         } else {
    //             const fmxlyPathnameMAP = {
    //                 'mtest': '/fmxlytest',
    //                 'gtest': '/fmxlygtest',
    //                 'kspage': '/fmxly',
    //                 'ksweb': '/fmxly'
    //             };
    //             targetRoute = pathJoin([fmxlyPathnameMAP[window.path], route]);
    //             if (this.Adapter.getPlatform() === CLIENT.WX) {
    //                 // 非凯叔同学跳转至凯叔同学项目需要微信授权
    //                 const ouathMAP = {
    //                     'mtest': 'oauth_dev',
    //                     'gtest': 'oauth_gamma',
    //                     'kspage': 'oauth',
    //                     'ksweb': 'oauth',
    //                 };
    //                 const appidMAP = {
    //                     'mtest': 'wxb5efd33733b8c21e',
    //                     'gtest': 'wxbb22392b3fefd76f',
    //                     'kspage': 'wxbb22392b3fefd76f',
    //                     'ksweb': 'wxbb22392b3fefd76f'
    //                 };
    //                 targetRoute = `/mp/${ouathMAP[window.path]}`;
    //                 targetRoute += `?${serializeObject({
    //                     appid: appidMAP[window.path],
    //                     scope: 'snsapi_userinfo',
    //                     redirect_uri: `${origin}${pathJoin([fmxlyPathnameMAP[window.path], route])}`,
    //                     custom: encodeURIComponent(JSON.stringify(params))
    //                 })}`;
    //                 return targetRoute;
    //             }
    //         }
    //     } else if (project) { // h5, frequent, ks项目
    //         switch (project.type) {
    //             case 'ks':
    //                 targetRoute = pathJoin([`/${project.name}`, route]);
    //                 break;
    //             case 'frequent':
    //                 targetRoute = pathJoin([`/${project.type}/${project.name}`, window.pathname, route]);
    //                 break;
    //             default:
    //                 targetRoute = pathJoin([`/h5/${project}`, window.pathname, route]);
    //         }
    //     }

    //     targetRoute += `${queryString ? '?' + queryString : ''}`;
    //     return targetRoute;
    // }
   
};

// export const  