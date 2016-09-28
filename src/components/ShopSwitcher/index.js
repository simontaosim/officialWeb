'use strict';

import React from 'react';

import './OnePageSwitcher.css';

import Footer from '../Footer';
import { connect } from 'react-redux';



import {ScrollSection, ScrollContainer} from '../OnePage/index.js'

import $ from "jquery";



class ShopSwitcher extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    // let top = $("#page3").offset().top;
    // console.log(top);
    $("#pageTitle").html("成都市内门店");
    $("#allmap").ready(function(){
      //=================================
      // 百度地图API功能
      var map = new BMap.Map("allmap");
      map.centerAndZoom("成都", 15);
      var local = new BMap.LocalSearch(map, {
        renderOptions:{map: map}
      });
      local.search("金莱蒂");
      //===================================
    });
  }

  handlePageShow(number){
    switch (number) {
      case 0:
        $("#pageTitle").html("成都市内门店");
        break;
      case 1:
        $("#pageTitle").html("草金立交正成广场家乐福店");
        break;
      case 2:
        $("#pageTitle").html("华阳银泰城永辉店");
        break;
      case 3:
        $("#pageTitle").html("内江万达永辉店");
        break;
      case 4:
        $("#pageTitle").html("武侯祠茂业百货店");
        break;
      case 5:
        $("#pageTitle").html("华阳银泰城永辉店");
        break;
      case 6:
        $("#pageTitle").html("武侯祠茂业百货店");
        break;
      default:
          $("#pageTitle").html("金莱蒂");
          break;

    }

    let queue = $("#page-section"+number).find(".main-desc"+number).find("p");
    let footer = $("#footer");

    queue.hide();
    var index = 0;
    let showOff = function(index){
      if (index >= queue.length ) {
        footer.hide();
        footer.fadeIn("slow");
        index = 0;
        return;
      }
      $(queue[index]).fadeIn("2500", function(){
        index = index + 1
        showOff(index);
      })
    }
    showOff(index);

  }

  render() {
    const {pathname} = this.props;
    console.log(pathname);


    return (

          <ScrollContainer handlePageShow={this.handlePageShow.bind(this)} pathname={pathname}>
            <ScrollSection style={{background: 'url(/images/shop1.jpg) no-repeat',
                                   backgroundSize: "cover", backgroundPosition: "center",backgroundColor: "#0e0d0b" }}
                                   pageId={0}>

                                     <div id="allmap">html</div>

            </ScrollSection>

            <ScrollSection style={{backgroundImage: 'url(/images/shop2.jpg)',
                                   backgroundRepeat: 'no-repeat', backgroundSize: "cover", backgroundPosition: "center",backgroundColor: "#0e0d0b"}}
                                   pageId={1}>




            </ScrollSection>
            <ScrollSection style={{backgroundImage: 'url(/images/shop3.jpg)',
                                   backgroundRepeat: 'no-repeat', backgroundSize: "cover", backgroundPosition: "center",backgroundColor: "#0e0d0b"}}
                                   pageId={2}>




            </ScrollSection>
            <ScrollSection style={{backgroundImage: 'url(/images/shop4.jpg)',
                                   backgroundRepeat: 'no-repeat', backgroundSize: "cover", backgroundPosition: "center",backgroundColor: "#0e0d0b"}}
                                   pageId={3}>




            </ScrollSection>
            <ScrollSection style={{backgroundImage: 'url(/images/shop5.jpg)',
                                   backgroundRepeat: 'no-repeat', backgroundSize: "cover", backgroundPosition: "center",backgroundColor: "#0e0d0b"}}
                                   pageId={4}>




            </ScrollSection>
            <ScrollSection style={{backgroundImage: 'url(/images/shop6.jpg)',
                                   backgroundRepeat: 'no-repeat', backgroundSize: "cover", backgroundPosition: "center",backgroundColor: "#0e0d0b"}}
                                   pageId={5}>




            </ScrollSection>
            <ScrollSection style={{backgroundImage: 'url(/images/shop7.jpg)',
                                   backgroundRepeat: 'no-repeat', backgroundSize: "cover", backgroundPosition: "center",backgroundColor: "#0e0d0b"}}
                                   pageId={6}>




            </ScrollSection>


            <ScrollSection  style={{backgroundImage: 'url(/images/third.jpg)',
                                   backgroundRepeat: 'no-repeat', backgroundSize: "cover", backgroundPosition: "center", backgroundColor: "#0e0d0b",
                                    textAlign: "center"
                                 }}
                           pageId={7}>

                           <Footer />


            </ScrollSection>
          </ScrollContainer>

    );
  }
}
function mapStateToProps(state) {
  return {
      pathname: state.routing.locationBeforeTransitions.pathname
   };
}

export default connect(mapStateToProps)(ShopSwitcher);
