import React from "react";
import { Link, Element } from 'rc-scroll-anim';

class ScrollDemo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <div className="nav">
          <Link className="nav-list" location="page0">nav0</Link>
          <Link className="nav-list" location="page1">nav1</Link>
        </div>
        <Element className="pack-page" scrollName="page0">示例</Element>
        <Element className="pack-page" scrollName="page1">示例</Element>
      </div>
    );
  }
}

export default ScrollDemo;
