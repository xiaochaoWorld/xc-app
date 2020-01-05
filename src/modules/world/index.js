import React from 'react';
// import {
//     Nav
// } from './components/mixin';
import './style.scss';
const LIST = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
export default class World extends React.Component {

    render() {
        return (
            <div className="containner">
                {/* <Nav /> */}
                <div className="list">
                    {
                        LIST.map((item, index) => {
                            return (
                                <div key={index} className="list-item">
                                    {item}
                                </div>
                            );
                        })
                    }

                </div>
            </div>
        )
    }
}