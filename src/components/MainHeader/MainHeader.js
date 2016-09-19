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
          <div style={{textAlign: "center", color: "white"}}>
                <br/>
                  <QueueAnim delay={1000} animConfig={[
                      { opacity: [1, 0], translateY: [0, 50] },
                      { opacity: [1, 0], translateY: [0, -50] }
                    ]}

                    >
                    <TweenOne
                        animation={{ blur: '10px', yoyo: true, duration: 300, repeat: 1 }}
                        paused={false}
                        className="code-box-shape"
                        key="a"
                      >
                          <div key="a"   style={{position: "relative", left: "-1%"}}> <img src="/images/logoC.png" width="250" /></div>
                      </TweenOne>
                      <TweenOne
                          animation={{ blur: '10px', yoyo: true, duration: 500, repeat: 1 }}
                          paused={false}
                          className="code-box-shape"
                          key="b"
                        >
                          <div key="b"   style={{position: "relative", left: "-1%", fontSize: "18px"}}>
                            <br/>
                            <p style={{color: "#BDC0BA"}}>幸福一生&nbsp;&nbsp;快乐一世</p>
                          </div>
                    </TweenOne>
                      <br/>
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
