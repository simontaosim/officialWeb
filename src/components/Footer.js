'use strict'

import React from 'react';

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
      <div id="" className="pure-g" >
           <div className="pure-u-1-3">
             <div className="pure-menu pure-menu-open">
               <ul>
                   <li><a href="#">联系我们</a></li>
                   <li><a href="#">关于我们</a></li>
                   <li><a href="#">友情链接</a></li>
                   <li><a href="#">品牌介绍</a></li>
               </ul>
              </div>
           </div>
           <div className="pure-u-1-3">
             <div className="pure-menu pure-menu-open">
               <ul>

                   <li><a href="#">服务条款</a></li>
                   <li><a href="#">使用帮助</a></li>
                   <li><a href="#">客户关怀</a></li>
                   <li><a href="#">门店</a></li>
               </ul>
              </div>
           </div>
           <div className="pure-u-1-3">
             <div className="pure-menu pure-menu-open">
               <ul>
                   <li><a href="#">合作</a></li>
                   <li><a href="#">商品保养</a></li>
                   <li><a href="#">企业动态</a></li>

               </ul>
              </div>
           </div>

       </div>
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
