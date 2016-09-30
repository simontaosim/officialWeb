'use strict'

import React from 'react';

import FooterMenus from './FooterMenus';

class Footer extends React.Component {

  constructor(props) {
    super(props);
  }

  render(){

    const footerItemStyle = {

    };


    return (
      <div id="footer" style={{
        color: "white",
        position: "relative",
        top: "50%",
        textAlign: "center", margin: "15px", left: "-15%",  textAlign: "center",
           backgroundColor: "rgba(53, 45, 45, 0.85)",
           margin: "50px", height: "50%", width: "115%", padding: "50px", fontSize: "16px"}}>
           <FooterMenus />
              <br/>
       <hr/>
       <br/>
       <div id="" className="pure-g" >
         <div className="pure-u-1-2" style={{textAlign: "right"}}>
           Copyright2016@成都金莱蒂珠宝首饰有限公司
         </div>
         <div className="pure-u-1-2">
           川ICP备案号　412341234143
         </div>
       </div>
       </div>
    );
  }
}


export default Footer;
