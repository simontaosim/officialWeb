'use strict';

import React from 'react';
import MainNav from "../MainNav/MainNav";
import TopNav　from "../TopNav/TopNav";
import Media from 'react-media';

class MainHeader extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    return(
      <div>
      <Media query="(max-width: 959px)">
        {matches => matches ? (
            <div></div>

        ) : (
          <TopNav />
        )}
      </Media>
      <Media query="(max-width: 959px)">
        {matches => matches ? (
            <div></div>

        ) : (
          <div style={{textAlign: "center"}}>
                <br/>
            <h1>金莱蒂珠宝</h1>
            <h3>玩味在城市街巷的尊贵</h3>
                  <br/>
          </div>
        )}
      </Media>


      <MainNav />
      </div>
    );
  }
}

export default MainHeader;
