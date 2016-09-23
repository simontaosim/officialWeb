'use strict';
import React from 'react';
import './MainNav.css';
import $ from "jquery";
import './Ionicons.min.css';
import Media from 'react-media';
import { Link } from 'react-router';


class MainNav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 0,
    }
  }


  componentDidMount() {

    //=================================
    // // 百度地图API功能
    // var map = new BMap.Map("allmap");
    // map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
    // var local = new BMap.LocalSearch(map, {
    //   renderOptions:{map: map}
    // });
    // local.search("景点");
    //===================================
    $('.menu > ul > li:has( > ul)').addClass('menu-dropdown-icon');
    //Checks if li has sub (ul) and adds class for toggle icon - just an UI


    $('.menu > ul > li > ul:not(:has(ul))').addClass('normal-sub');
    //Checks if drodown menu's li elements have anothere level (ul), if not the dropdown is shown as regular dropdown, not a mega menu (thanks Luka Kladaric)

    $(".menu > ul").before("<a href=\"#\" class=\"menu-mobile\"><img src=\"/images/logo.jpg\" style=\"width: 210px; height: 68px; position: relative; left: -83px; top: -14px;\" /></a>");

    //Adds menu-mobile class (for mobile toggle menu) before the normal menu
    //Mobile menu is hidden if width is more then 959px, but normal menu is displayed
    //Normal menu is hidden if width is below 959px, and jquery adds mobile menu
    //Done this way so it can be used with wordpress without any trouble

    $(".menu > ul > li").hover(function (e) {
      if ($(this).attr("class") !== "menu-logo") {
        $(this).find('a:first').css("color","#43341B");
        $(this).find('a:first').css("border-bottom","2px solid #828282");
      }

        if ($(window).width() > 943) {
            $(this).children("ul").stop(true, false).fadeToggle(150);
            e.preventDefault();
        }
    }, function(e){

        if ($(this).attr("class") !== "menu-logo") {
          $(this).find('a:first').css("color","#96632E");
          $(this).find('a:first').css("border-bottom","none");
        }

      if ($(window).width() > 943) {
          $(this).children("ul").stop(true, false).fadeToggle(150);
          e.preventDefault();

      }
    });

    //If width is more than 943px dropdowns are displayed on hover

    $(".menu > ul > li").click(function (e) {
        if ($(window).width() <= 943) {
            $(this).children("ul").fadeToggle(150);
            e.preventDefault();
        }
    });
    //If width is less or equal to 943px dropdowns are displayed on click (thanks Aman Jain from stackoverflow)

    $(".menu-mobile").click(function (e) {
        $(".menu > ul").toggleClass('show-on-mobile');
        e.preventDefault();
    });
    //when clicked on mobile-menu, normal menu is shown as a list, classic rwd menu story (thanks mwl from stackoverflow)
    $("#brandExpress").show();
    $("#brandIdea").hide();
    $(".shoresIntro").hide();
  }
  showBrandExpress(){
    $("#brandExpress").show();
    $("#brandIdea").hide();
    $(".shoresIntro").hide();
  }

  showBrandIdea(){
    $("#brandExpress").hide();
    $("#brandIdea").show();
    $(".shoresIntro").hide();
  }
  showShoresIntro(){
    $("#brandExpress").hide();
    $("#brandIdea").hide();
    $(".shoresIntro").show();
  }

  handleShopsClick() {
    this.setState({page: 0});
    console.log("state");
    this.props.handleMenuClick(this.state);
  }




  render() {
    const circleStytle = {
      borderRadius: '100px',
      WebkitBorderRadius: '100px',
      MozBorderRadius: '100px',
      background: "none !important"
    }
    const shopAddressStyle = {
      color: "white",
      fontSize: "16px"
    }
    return(
      <div className="main-nav">
      <br/>
      <div className="menu-container">

            <div className="menu">
                <ul>
                    <li><a href="#">KLD NOW</a></li>
                    <li><a href="#">金莱蒂世界</a>
                        <ul>
                            <li>
                              <ul>
                                <li onMouseOver={this.showBrandExpress.bind(this)}><a href="#/brandprogress">品牌历程</a></li>
                                <li onMouseOver={this.showBrandIdea.bind(this)}><a href="#/brandidea">品牌理念</a></li>
                                <li onMouseOver={this.showShoresIntro.bind(this)}><a  href="#/shops" className="page-active0">专卖店</a></li>

                              </ul>
                            </li>
                            <li  id="brandExpress" style={{position:"relative", top: "20px", width: "33%"}}>
                              <div  style={{float:"left", padding: "10px", color: "white", wordWrap: "break-word", width: "50%", textAlign: "left"}}>

                                  金莱蒂品牌为顾客打造的华美珍贵宝石拥有内在品质、尺寸和来源上的保障，
                                  每一颗宝石都拥有来自美国宝石学院（Gemological Institute of America）的GIA证书。
                              </div>

                              <img src="/images/default.jpg" style={{width:"130px", float:"left"}} />
                            </li>


                            <li  id="brandIdea" style={{position:"relative", top: "20px", width: "33%"}}>
                              <div  style={{float:"left", padding: "10px", color: "white", wordWrap: "break-word", width: "50%", textAlign: "left"}}>
                                  品牌经营者选择放弃商品单价的高利润，
                                  让金莱蒂的珠宝与更多人产生了一种特殊的关联，
                                  像穿梭在街巷的魔术师，将这些珍贵的珠宝和平凡美好的人们牢牢绑在一起，
                                  参与他们每一个生活的片段和幸福的时刻。
                              </div>

                              <img src="/images/default.jpg" style={{width:"130px", float:"left"}} />
                            </li>
                            <li  className="shoresIntro">
                              <ul>
                                <li><a  href="/#/shops/1" style={shopAddressStyle}>草金立交正成广场家乐福店</a></li>
                                <li><a href="/#/shops/2" style={shopAddressStyle}>簇桥欧尚金大福</a></li>
                                <li><a href="/#/shops/3" style={shopAddressStyle}>华阳银泰城永辉店</a></li>

                              </ul>

                              {/* <img src="/images/default.jpg" style={{width:"130px", float:"left"}} /> */}
                                <div id="allmap"></div>
                            </li>
                            <li  className="shoresIntro">
                              <ul>
                                <li><a href="/#/shops/4" style={shopAddressStyle}>内江万达永辉店</a></li>
                                <li><a href="/#/shops/5" style={shopAddressStyle}>武侯祠茂业百货店</a></li>
                              </ul>

                              {/* <img src="/images/default.jpg" style={{width:"130px", float:"left"}} /> */}
                                <div id="allmap"></div>
                            </li>




                        </ul>
                    </li>
                    <li><a href="#">联系我们</a>
                        <ul style={{color: "white",top: "62px"}}>
                            <li>
                              <ul>
                                <h3>Number</h3>
                                <p>028-86928156</p>
                              </ul>
                            </li>
                            <li>
                              <ul>
                                <h3>邮箱</h3>
                                <p>support@kinglaidi.com</p>
                              </ul>
                            </li>
                            <li>
                              <ul>
                                <h3>HR</h3>
                                <p>hr@kinglaidi.com</p>
                              </ul>
                            </li>
                            <li>
                              <ul>
                                <h3>地址</h3>
                                <p>成都市锦江区上东大街139号四楼</p>
                              </ul>
                            </li>
                        </ul>
                    </li>
                    <li className="menu-logo" style={circleStytle}>
                    <a　style={{color: "white", fontSize: "1.4em", border: "none", fontWeight: "bolder", textAlign: "center"}}>
                        <img src="/images/logoP.png" style={{width:"130px", position: "relative", top: "-10px", right: "8px"}} />
                    </a>
                    </li>
                    <li><a href="#">婚尚臻品</a>
                        <ul  style={{color: "white"}}>
                            <li>
                                <ul>
                                    <li><a href="#">婚嫁珠宝</a></li>
                                    <li><a href="#">戒指</a></li>
                                    <li><a href="#">定制</a></li>

                                </ul>
                            </li>
                            <li style={{position:"relative", top: "20px", width: "33%"}}>
                              <div  style={{float:"left", padding: "10px"}}>
                                  <h2>婚嫁珠宝</h2>
                                  <hr/>
                                  <p>罗里吧嗦，balala</p>
                              </div>

                              <img src="/images/default.jpg" style={{width:"130px", float:"left"}} />
                            </li>
                            <li style={{position:"relative", top: "20px", width: "33%"}}>
                              <div  style={{float:"left", padding: "10px", color: "white"}}>
                                  <h2>定制</h2>
                                  <hr/>
                                  <p>罗里吧嗦，balala</p>
                              </div>

                              <img src="/images/default.jpg" style={{width:"130px", float:"left"}} />
                            </li>
                        </ul>
                    </li>
                      <li><a href="#">臻美宝石</a>
                        <ul   style={{color: "white"}}>
                          <li>
                              <ul>
                                  <li><a href="#">珍珠</a></li>
                                  <li><a href="#">水晶</a></li>
                                  <li><a href="#">彩色宝石</a></li>

                              </ul>
                           </li>

                             <li style={{position:"relative", top: "20px", width: "50%"}}>
                               <div  style={{float:"left", padding: "20px"}}>
                                   <h2>珍珠</h2>
                                   <hr/>
                                   <p>快看，暴大的珍珠</p>
                               </div>

                               <img src="/images/default.jpg" style={{width:"130px", float:"left"}} />
                             </li>

                          </ul>
                      </li>
                      <li><a href="#">品牌活动</a></li>

                      <Media query="(max-width: 959px)">
                        {matches => matches ? (
                            <li><a href="#">搜索</a></li>

                        ) : (
                            <div></div>
                        )}
                      </Media>
                      <Media query="(max-width: 959px)">
                        {matches => matches ? (
                            <li><a href="#">我的账号</a></li>

                        ) : (
                            <div></div>
                        )}
                      </Media>


                </ul>

            </div>
        </div>

        </div>
    );
  }

}

export default MainNav;
