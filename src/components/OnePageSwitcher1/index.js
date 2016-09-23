'use strict';

import React from 'react';

import './OnePageSwitcher.css';

import Footer from '../Footer';



import {ScrollSection, ScrollContainer} from '../OnePage/index.js'

import $ from "jquery";



class OnePageSwitcher1 extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {

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



    return (

          <ScrollContainer handlePageShow={this.handlePageShow.bind(this)}>
            <ScrollSection style={{background: 'url(/images/firstsail.jpg) no-repeat',
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

            <ScrollSection style={{backgroundImage: 'url(/images/second.jpg)',
                                   backgroundRepeat: 'no-repeat', backgroundSize: "cover", backgroundPosition: "center",backgroundColor: "#0e0d0b"}}
                                   pageId={1}>


                                   <div className="main-desc1">
                                    <p>金莱蒂品牌为顾客打造的华美珍贵宝石拥有内在品质、尺寸和来源上的保障，</p>
                                    <p>每一颗宝石都拥有来自美国宝石学院（Gemological Institute of America）的GIA证书。</p>
                                   </div>

            </ScrollSection>

            <ScrollSection  style={{backgroundImage: 'url(/images/third.jpg)',
                                   backgroundRepeat: 'no-repeat', backgroundSize: "cover", backgroundPosition: "center", backgroundColor: "#0e0d0b",
                                    textAlign: "center"
                                 }}
                           pageId={2}>

                           <Footer />


            </ScrollSection>
          </ScrollContainer>

    );
  }
}

export default OnePageSwitcher1;
