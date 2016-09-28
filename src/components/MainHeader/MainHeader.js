'use strict';

import React from 'react';
import MainNav from "../MainNav/MainNav";
import TopNav　from "../TopNav/TopNav";
import Media from 'react-media';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';

import $ from 'jquery'


import './MainHeader.css';


class MainHeader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      titleShow: false,
      page: 0,
      subtitle: "幸福一生  快乐一世",
      title: "金莱蒂"

    }
  }
  componentDidMount() {



  }
  handleMainNavScale(e){
    console.log("onchange");
  }

  handleMenuClick(state){
    console.log(state);
  }

  componentWillReceiveProps(nextProps){
    console.log(nextProps);
    this.changeHeaderByPathName(nextProps.location.pathname);
  }

  changeHeaderByPathName(pathname){
    switch (pathname) {
      case "/shops":
        this.setState({title: "成都市门店地图"});
        break;
      case "/shops/1":
        this.setState({title: "草金立交正成广场家乐福店"});
        break;
      case "/shops/2":
        this.setState({title: "簇桥欧尚金大福"});
        break;
      case "/shops/3":
          this.setState({title: "华阳银泰城永辉店"});
          break;
      case "/shops/4":
        this.setState({title: "内江万达永辉店"});
        break;
      case "/shops/5":
          this.setState({title: "武侯祠茂业百货店"});
          break;
      case "/shops/6":
          this.setState({title: "草金立交正成广场家乐福店"});
          break;
      case "/shops/7":
          this.setState({title: "草金立交正成广场家乐福店"});
          break;
      case "/brandidea":
          this.setState({title: "品牌理念"});
          break;
      case "/brandprogress":
          this.setState({title: "品牌历程"});
          break;
      case "/contact":
          this.setState({title: "联系我们"});
          break;
      default:
        this.setState({title: "金莱蒂", subtitle: "幸福一生  快乐一世"});
        break;

    }
  }


  render() {
    let children = React.Children.map(this.props.children, function(){

  });
    const {pathname} = this.props.location.pathname;
    return(
      <div>

      <div  style={{position: "fixed", zIndex: "40000000", background: "white !important",width: "100%"}}>

      <Media query="(max-width: 959px)">
        {matches => matches ? (
            <div></div>

        ) : (
          <TopNav />
        )}
      </Media>
      <Media query="(max-width: 959px)">
        {matches => matches ? (
            <div>
                <MainNav key="c"/>
            </div>

        ) : (
          <div style={{textAlign: "center", color: "white"}}>
                <br/>
                  <QueueAnim delay={1000} animConfig={[
                      { opacity: [1, 0], translateY: [0, 50] },
                      { opacity: [1, 0], translateY: [0, -50] }
                    ]}

                    >
                    <TweenOne
                        animation={{ blur: '10px', yoyo: true, duration: 300, repeat: 1 }}
                        paused={false}
                        className="code-box-shape"
                        key="a"
                      >
                          <div key="a" style={{position: "relative", top: "0px", backgroundColor: 'rgba(86,63,46,0.54)'}}>
                          <h1 id="pageTitle" style={{display: "block", letterSpacing: "20px", fontSize: "xx-large"}}>{this.state.title}</h1></div>
                      </TweenOne>
                      <TweenOne
                          animation={{ blur: '10px', yoyo: true, duration: 500, repeat: 1 }}
                          paused={false}
                          className="code-box-shape"
                          key="b"
                        >
                          <div key="b"   style={{position: "relative", left: "-1%", fontSize: "18px", textAlign: "center"}}>
                            <br/>
                            <span id="pageSubtitle" style={{color: "#FBE251", backgroundColor: 'rgba(86,63,46,0.34)', width: "40%"}}>{this.state.subtitle}</span>
                          </div>
                    </TweenOne>
                      <br/>
                      <MainNav key="c" handleMenuClick={this.handleMenuClick.bind(this)}/>
                  </QueueAnim>



          </div>
        )}
      </Media>
      </div>

      <div style={{height: "100%", width: "100%"}}>
        {this.props.children}
      </div>

      </div>
    );
  }
}

export default MainHeader;
