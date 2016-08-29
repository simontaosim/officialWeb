'use strict';

import React from 'react';

import { Carousel, Button } from 'antd';
import './OnePageSwitcher.css'


class OnePageSwitcher extends React.Component {
  constructor(props) {
    super(props);
  }

  handleScroll(){
    console.log("scroll happened");
  }
  render() {

    return (
      <div onScroll={this.handleScroll.bind(this)} style={{width: "100%", height: "100%", textAlign: "center"}}>
        <Carousel effect="fade" vertical={true}  onScroll={this.handleScroll.bind(this)}
         useCSS={true}
        dots={true}
        >
            <div style={{background: "blue", width: "100%"}}><h3>第一页</h3></div>
            <div style={{background: "red", width: "100%"}}><h3>第二页</h3></div>
            <div style={{background: "yellow", width: "100%"}}><h3>第三页</h3></div>
            <div style={{background: "grey", width: "100%"}}><h3>第四页</h3></div>
        </Carousel>
      </div>

    );
  }
}

export default OnePageSwitcher;
