// import React from 'react';
import Loadable from 'react-loadable';
import { createBrowserHistory } from 'history';
export const browserHistory = createBrowserHistory();

/**
 * @typedef {object} Options
 * @property {Promise<Component>} loader 异步载入组件函数
 * @property {number} delay 延时时间(可选)
 */
/**
 * 生成异步组件
 * @param   {Options} options
 * @return  {Component}
 * @constructor
 */
const asyncComponent = (options) => {
    return Loadable({
        loading: (props) => {
            if (props.error) {
                console.error(props.error);
            }
            return null;
        },
        ...options
    });
};

export default asyncComponent;
