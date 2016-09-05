'use strict';

import React from 'react';

import { Carousel, Button } from 'antd';
import ScrollAnim from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import Animate from 'rc-animate';
import { Parallax } from 'rc-scroll-anim';



import {ScrollSection, ScrollContainer} from './index.js'

import $ from "jquery";

$("._2dlB18uE5dNdFUyMetY79g").on("scroll", function(){
  // $("#page3").offset().top;
});








class OnePageSwitcher extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // let top = $("#page3").offset().top;
    // console.log(top);
  }

  handlePageShow(number){
    console.log(number);
    $("#page-section"+number).find(".pure-g").hide(function(){
      $(this).fadeIn("slow");
    });


  }

  render() {

    const contentStyle = {
      textAlign: "center",
       backgroundColor: "rgba(53, 45, 45, 0.5)",
       margin: "35px"
    }

    return (

          <ScrollContainer handlePageShow={this.handlePageShow.bind(this)}>
            <ScrollSection style={{background: 'url(/images/firstsail.jpg) no-repeat',
                                   backgroundSize: "100%", backgroundPosition: "center",backgroundColor: "#0e0d0b" }}
                                   pageId={0}>
                <a><img style={{position: 'absolute', top: 0, right: 0, border: 0, zIndex: 999}} src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png" alt="Fork me on GitHub"/>
              </a>
            </ScrollSection>

            <ScrollSection style={{backgroundImage: 'url(/images/second.jpg)',
                                   backgroundRepeat: 'no-repeat', backgroundSize: "100%", backgroundPosition: "center",backgroundColor: "#0e0d0b"}}
                                   pageId={1}>


                                    <div style={{ overflow: 'hidden' }}>

     </div>

            </ScrollSection>

            <ScrollSection  style={{backgroundImage: 'url(http://ww4.sinaimg.cn/large/95da7f3djw1ehw0a3et75j20hr0qo400.jpg)',
                                   backgroundRepeat: 'no-repeat', backgroundSize: "100%", backgroundPosition: "center", backgroundColor: "#0e0d0b"}}
                           pageId={2}>

                           <div id="" className="pure-g" style={{
                             color: "white",
                             position: "relative",
                             top: "36%",
                             textAlign: "center", margin: "15px"}}>
                                <div style={contentStyle} className="pure-u-1-4"><p>三分之一</p></div>
                                <div style={contentStyle} className="pure-u-1-4"><p>三分之一</p></div>
                                <div style={contentStyle} className="pure-u-1-4"><p>三分之一</p></div>
                            </div>


            </ScrollSection>
          </ScrollContainer>

    );
  }
}

export default OnePageSwitcher;
