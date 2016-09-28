'use strict';
import React from 'react';

import $ from "jquery";

class PageNotScroller extends React.Component{
  constructor(props){
    super(props);
  }
  renderContentByPath(pathname){
    switch (pathname) {
      case "/contact":
        return (<div>
          <div id="" className="pure-g" style={{textAlign: "center", color: "white"}} >
              <div className="pure-u-1-2">
                <h1 style={{display: "block"}}>电话:</h1>
              </div>
              <div className="pure-u-1-2" style={{textAlign: "left", color: "white"}} >
                <h1 style={{display: "block"}}>028-86928156</h1>
              </div>
          </div>
          <div id="" className="pure-g" style={{textAlign: "center", color: "white"}} >
              <div className="pure-u-1-2">
                <h1 style={{display: "block"}}>邮箱:</h1>
              </div>
              <div className="pure-u-1-2" style={{textAlign: "left", color: "white"}} >
                <h1 style={{display: "block"}}>support@kinglaidi.com</h1>
              </div>
          </div>
          <div id="" className="pure-g" style={{textAlign: "center", color: "white"}} >
              <div className="pure-u-1-2">
                <h1 style={{display: "block"}}>HR:</h1>
              </div>
              <div className="pure-u-1-2" style={{textAlign: "left", color: "white"}} >
                <h1 style={{display: "block"}}>hr@kinglaidi.com</h1>
              </div>
          </div>
          <div id="" className="pure-g" style={{textAlign: "center", color: "white"}} >
              <div className="pure-u-1-2">
                <h1 style={{display: "block"}}>地址:</h1>
              </div>
              <div className="pure-u-1-2" style={{textAlign: "left", color: "white"}} >
                <h1 style={{display: "block"}}>成都市锦江区上东大街139号四楼</h1>
              </div>
          </div>
        </div>);
        break;
      default:
        return (
          <div>
            <h1 style={{display: "block", textAlign: "center"}}>
              404页面没有找到
            </h1>

          </div>
        );

    }
  }
  render() {

    let height = $("body").height();
    let pageStyle = {
      overflowY: "auto", height: height*11/15, minHeight: height/2,
      position: "relative", top: "360px", color: "white"
    };

    let footerStyle= {
        textAlign: "center",
         backgroundColor: "rgba(53, 45, 45, 0.85)",
         fontSize: "16px",padding: "7px",position: "relative",
         bottom: "-30px"
       };
    let bgStyle = {backgroundColor: 'rgba(53, 45, 45, 0.85)', height: height, minHeight: "200%"}
    return (
      <div style={bgStyle}>
      <div style={pageStyle}>

      {this.renderContentByPath(this.props.location.pathname)}
      <div  style={footerStyle}><br/>
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
           <br/><br/><br/><br/>
       </div><br/><br/><br/><br/><br/>
       <hr style={{color: "grey", backgroundColor: "grey"}} /><br/>
       <div id="" className="pure-g"  style={{textAlign: "center"}} >
         <div className="pure-u-1-2">
           Copyright2016@成都金莱蒂珠宝首饰有限公司
         </div>
         <div className="pure-u-1-2">
           川ICP备案号　412341234143
         </div>
       </div>
      </div>

           <br/><br/><br/><br/><br/>

      </div>
      </div>

    );
  }
}

export default PageNotScroller;
