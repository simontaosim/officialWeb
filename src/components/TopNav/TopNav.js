import React from 'react';

import './TopNav.css';

class TopNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div style={{width: "100%", background: "#563F2E", height: "56px", zIndex: "10000"}}>&nbsp;
      <a href="#" style={{textDecoration: "none", position: "relative", top: "15px",left: "20px", fontWeight: "bolder", fontSize: "larger", color: "#FFFFFF"}}>King Lai Di</a>
      <div  style={{float: "right", background: "#563F2E", padding: "13px", zIndex: "330000"}}>
        <div className="pure-menu pure-menu-horizontal">
           <ul className="pure-menu-list">
               <li className="pure-menu-item"><a href="#" className="pure-menu-link custom-cover-menu-link" 　style={{color: "white"}}>心愿</a></li>
               <li className="pure-menu-item"><a href="#" className="pure-menu-link custom-cover-menu-link" 　style={{color: "white"}}>找寻</a></li>
               <li className="pure-menu-item"><a href="#" className="pure-menu-link custom-cover-menu-link" 　style={{color: "white"}}>我的账号</a></li>
           </ul>
        </div>
      </div>
      </div>
    );
  }
}

export default TopNav;
