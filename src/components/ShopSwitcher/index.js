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
  }

  handlePageShow(number){

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
                                   <div className="main-desc0">
                                    <p>品牌经营者选择放弃商品单价的高利润，</p>
                                    <p>让金莱蒂的珠宝与更多人产生了一种特殊的关联，</p>
                                    <p>像穿梭在街巷的魔术师，</p>
                                    <p>将这些珍贵的珠宝和平凡美好的人们牢牢绑在一起，</p>
                                    <p>参与他们每一个生活的片段和幸福的时刻。</p>
                                   </div>

            </ScrollSection>

            <ScrollSection style={{backgroundImage: 'url(/images/shop2.jpg)',
                                   backgroundRepeat: 'no-repeat', backgroundSize: "cover", backgroundPosition: "center",backgroundColor: "#0e0d0b"}}
                                   pageId={1}>


                                   <div className="main-desc1">
                                    <p>金莱蒂品牌为顾客打造的华美珍贵宝石拥有内在品质、尺寸和来源上的保障，</p>
                                    <p>每一颗宝石都拥有来自美国宝石学院（Gemological Institute of America）的GIA证书。</p>
                                   </div>

            </ScrollSection>
            <ScrollSection style={{backgroundImage: 'url(/images/shop3.jpg)',
                                   backgroundRepeat: 'no-repeat', backgroundSize: "cover", backgroundPosition: "center",backgroundColor: "#0e0d0b"}}
                                   pageId={2}>


                                   <div className="main-desc1">
                                    <p>金莱蒂品牌为顾客打造的华美珍贵宝石拥有内在品质、尺寸和来源上的保障，</p>
                                    <p>每一颗宝石都拥有来自美国宝石学院（Gemological Institute of America）的GIA证书。</p>
                                   </div>

            </ScrollSection>
            <ScrollSection style={{backgroundImage: 'url(/images/shop4.jpg)',
                                   backgroundRepeat: 'no-repeat', backgroundSize: "cover", backgroundPosition: "center",backgroundColor: "#0e0d0b"}}
                                   pageId={3}>


                                   <div className="main-desc1">
                                    <p>金莱蒂品牌为顾客打造的华美珍贵宝石拥有内在品质、尺寸和来源上的保障，</p>
                                    <p>每一颗宝石都拥有来自美国宝石学院（Gemological Institute of America）的GIA证书。</p>
                                   </div>

            </ScrollSection>
            <ScrollSection style={{backgroundImage: 'url(/images/shop5.jpg)',
                                   backgroundRepeat: 'no-repeat', backgroundSize: "cover", backgroundPosition: "center",backgroundColor: "#0e0d0b"}}
                                   pageId={4}>


                                   <div className="main-desc1">
                                    <p>金莱蒂品牌为顾客打造的华美珍贵宝石拥有内在品质、尺寸和来源上的保障，</p>
                                    <p>每一颗宝石都拥有来自美国宝石学院（Gemological Institute of America）的GIA证书。</p>
                                   </div>

            </ScrollSection>
            <ScrollSection style={{backgroundImage: 'url(/images/shop6.jpg)',
                                   backgroundRepeat: 'no-repeat', backgroundSize: "cover", backgroundPosition: "center",backgroundColor: "#0e0d0b"}}
                                   pageId={5}>


                                   <div className="main-desc1">
                                    <p>金莱蒂品牌为顾客打造的华美珍贵宝石拥有内在品质、尺寸和来源上的保障，</p>
                                    <p>每一颗宝石都拥有来自美国宝石学院（Gemological Institute of America）的GIA证书。</p>
                                   </div>

            </ScrollSection>
            <ScrollSection style={{backgroundImage: 'url(/images/shop7.jpg)',
                                   backgroundRepeat: 'no-repeat', backgroundSize: "cover", backgroundPosition: "center",backgroundColor: "#0e0d0b"}}
                                   pageId={6}>


                                   <div className="main-desc1">
                                    <p>金莱蒂品牌为顾客打造的华美珍贵宝石拥有内在品质、尺寸和来源上的保障，</p>
                                    <p>每一颗宝石都拥有来自美国宝石学院（Gemological Institute of America）的GIA证书。</p>
                                   </div>

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