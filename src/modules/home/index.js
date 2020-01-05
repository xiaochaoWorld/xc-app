import React from 'react';
import { goto } from 'Utils/appFunc';
// import styled, { keyframes } from 'styled-components';
import './style.scss';
// 

import styled, { keyframes } from 'styled-components';
import { zoomInUp, bounceInLeft } from 'react-animations';
// import flash from 'react-animations/lib/flash';

// const bounceAnimation = ;
// const zoomAnimation = keyframes`${flash}`;

// const BouncyDiv = styled.div`
//     animation: 1s ${keyframes`${bounce}`};
// `;

// http://react-animations.herokuapp.com/
const ZoomInup = styled.div`
    animation: 1s ${ keyframes`${zoomInUp}`};
    fontSize: 46px;
`;
const BounceInLeft = styled.div`
    animation: 1s ${ keyframes`${bounceInLeft}`};
    width: 200px;
    height: 200px;
`;
export default class Home extends React.Component {
    gotoPage = () => {
        goto('world')
    }
    gotoPageFunc = () => {
        goto('https://baidu.com', 2);
    }
    render() {
        return (
            <div className="home-containner">
                <ZoomInup>
                    <div onClick={this.gotoPage} className="font">welcome to XCworld</div>
                </ZoomInup>
                <BounceInLeft>
                    <img src='../../medias/images/me.png'  alt='' className='bgimg' style={{width: '100%', height: '100%'}} />
                </BounceInLeft>
                {/* <ZoomInup>
                    <div onClick={this.gotoPageFunc}>奥恩阿里</div>
                </ZoomInup> */}
            </div>
        )
    }
}