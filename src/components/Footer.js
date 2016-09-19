'use strict'

import React from 'react';

class Footer extends React.Component {

  constructor(props) {
    super(props);
  }

  render(){

    return (
      <div id="" className="pure-g" style={{
        color: "white",
        position: "relative",
        top: "50%",
        textAlign: "center", margin: "15px", left: "3%",  textAlign: "center",
           backgroundColor: "rgba(53, 45, 45, 0.5)",
           margin: "50px", height: "50%", width: "87%", padding: "50px"}}>
           <div className="pure-u-1-4">
              <p>联系我们</p>
              <p>金莱蒂世界</p>
              <p>优惠信息</p>
              <p>关于我们</p>
           </div>
           <div className="pure-u-1-4"><p>三分之一</p></div>
           <div className="pure-u-1-4"><p>三分之一</p></div>
       </div>
    );
  }
}


export default Footer;
