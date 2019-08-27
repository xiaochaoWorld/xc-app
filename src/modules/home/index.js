import React from 'react';
import { goto } from 'Utils/appFunc';
import './style.scss';
export default class Home extends React.Component {
    gotoPage = () => {
        goto('detail')
    }
    gotoPageFunc = () => {
        goto('https://baidu.com', 2);
    }
    render() {
        return (
            <div className="home-containner">
                <div onClick = {this.gotoPage}>爱老婆</div>
                <div onClick = {this.gotoPageFunc}>这是首页去百度页面</div>
            </div>
        )
    }
}