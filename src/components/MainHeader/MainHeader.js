'use strict';

import React from 'react';
import MainNav from "../MainNav/MainNav";
import TopNav　from "../TopNav/TopNav";
import Media from 'react-media';
import {Button} from 'antd'
import QueueAnim from 'rc-queue-anim';
import Animate from 'rc-animate';
import TweenOne from 'rc-tween-one';


import './MainHeader.css';






class MainHeader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      titleShow: false
    }
  }
  componentDidMount() {

  }
  handleMainNavScale(e){
    console.log("onchange");
  }


  render() {
    return(
      <div>

      <div  style={{position: "fixed", zIndex: "40000000", background: "white !important",width: "100%"}}>

      <Media query="(max-width: 959px)">
        {matches => matches ? (
            <div></div>

        ) : (
          <TopNav />
        )}
      </Media>
      <Media query="(max-width: 959px)">
        {matches => matches ? (
            <div>
                <MainNav key="c"/>
            </div>

        ) : (
          <div style={{textAlign: "center", color: "white", height:"137px"}}>
                <br/>
                  <QueueAnim delay={1000} animConfig={[
                      { opacity: [1, 0], translateY: [0, 50] },
                      { opacity: [1, 0], translateY: [0, -50] }
                    ]}>
                    <TweenOne
                        animation={{ blur: '10px', yoyo: true, duration: 300, repeat: 1 }}
                        paused={false}
                        className="code-box-shape"
                        key="a"
                      >
                          <div key="a">  <h1>金莱蒂</h1></div>
                      </TweenOne>
                      <TweenOne
                          animation={{ blur: '10px', yoyo: true, duration: 500, repeat: 1 }}
                          paused={false}
                          className="code-box-shape"
                          key="b"
                        >
                          <div key="b">  <h3>玩味在城市街巷的尊贵</h3></div>
                    </TweenOne>
                      <br/><br/>
                      <MainNav key="c"/>
                  </QueueAnim>



          </div>
        )}
      </Media>
      </div>

      <div style={{position: "relative", top: "55px", height: "100%"}}>
        {this.props.children}
      </div>

      </div>
    );
  }
}

export default MainHeader;
