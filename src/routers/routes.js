
import asyncComponent from './utils';

const routes = [
    {
        path: '/',
        component: asyncComponent({
            loader: () => import('Modules/home')
        })
    }, {
        path: '/home', // 首页
        component: asyncComponent({
            loader: () => import('Modules/home')
        })
    }, {
        path: '/detail', // 详情页
        component: asyncComponent({
            loader: () => import('Modules/detail')
        })
    }, {
        path: '/world', // 详情页
        component: asyncComponent({
            loader: () => import('Modules/world')
        })
    }
];

export default routes;