import React from 'react';


class FooterMenus extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="" className="pure-g" >
           <div className="pure-u-1-3">
             <div className="pure-menu pure-menu-open">
               <ul>
                   <li><a href="/#/contact">联系我们</a></li>
                   <li><a href="/#/aboutus">关于我们</a></li>
                   <li><a href="/#/">品牌介绍</a></li>
               </ul>
              </div>
           </div>
           <div className="pure-u-1-3">
             <div className="pure-menu pure-menu-open">
               <ul>

                   <li><a href="/#/fuwutiaokuan">服务条款</a></li>
                   <li><a href="/#/helpusing">使用帮助</a></li>
                   <li><a href="/#/shops">门店</a></li>
               </ul>
              </div>
           </div>
           <div className="pure-u-1-3">
             <div className="pure-menu pure-menu-open">
               <ul>
                   <li><a href="/#/contact">合作</a></li>
                   <li><a href="/#/maintain">商品保养</a></li>


               </ul>
              </div>
           </div>
           <br/><br/><br/><br/>
       </div>
    );
  }
}


export default FooterMenus;
