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
                            <li  id="brandExpress" style={{position:"relative", top: "20px", width: "33%", height:"300px"}}>
                              <div  style={{float:"left", padding: "10px", color: "white", wordWrap: "break-word", width: "50%", textAlign: "left"}}>

                                  金莱蒂品牌为顾客打造的华美珍贵宝石拥有内在品质、尺寸和来源上的保障，
                                  每一颗宝石都拥有来自美国宝石学院（Gemological Institute of America）的GIA证书。
                              </div>

                              <a style={{position:"relative", right: "-208px",top: "-140px",float:"left",padding: "10px", display:"block"}} href="#/brandprogress"><img style={{width:"180px"}} src="/images/brandprogress.jpeg" /></a>
                            </li>


                            <li  id="brandIdea" style={{position:"relative", top: "20px", width: "33%", height:"300px"}}>
                              <div  style={{ploat:"left", padding: "10px", color: "white", wordWrap: "break-word", width: "50%", textAlign: "left"}}>
                                  品牌经营者选择放弃商品单价的高利润，
                                  让金莱蒂的珠宝与更多人产生了一种特殊的关联，
                                  像穿梭在街巷的魔术师，将这些珍贵的珠宝和平凡美好的人们牢牢绑在一起，
                                  参与他们每一个生活的片段和幸福的时刻。
                              </div>

                              <a style={{position:"relative", right: "-208px",top: "-152px", float:"left",padding: "10px", display: "block"}} href="#/brandidea"><img style={{width:"180px"}} src="/images/brandidea.jpeg" /></a>
                            </li>
                            <li  className="shoresIntro">
                              <ul>
                                <li><a  href="/#/shops/1" style={shopAddressStyle}>草金立交正成广场家乐福店</a></li>
                                <li><a href="/#/shops/2" style={shopAddressStyle}>簇桥欧尚金大福</a></li>
                                <li><a href="/#/shops/3" style={shopAddressStyle}>华阳银泰城永辉店</a></li>

                              </ul>

                              {/* <img src="/images/default.jpg" style={{width:"130px", float:"left"}} /> */}

                            </li>
                            <li  className="shoresIntro">
                              <ul>
                                <li><a href="/#/shops/4" style={shopAddressStyle}>内江万达永辉店</a></li>
                                <li><a href="/#/shops/5" style={shopAddressStyle}>武侯祠茂业百货店</a></li>
                                <li><a href="/#/shops" style={shopAddressStyle}>成都市门店地图</a></li>
                              </ul>

                              {/* <img src="/images/default.jpg" style={{width:"130px", float:"left"}} /> */}

                            </li>
                            <li  className="shoresIntro">


                              {/* <img src="/images/default.jpg" style={{width:"130px", float:"left"}} /> */}


                            </li>




                        </ul>
                    </li>
                    <li><a href="/#/contact">联系我们</a>
                        <ul style={{color: "grey !important",top: "62px",
                        height: "200px",  background: "url(images/contact.jpg) no-repeat",
                        backgroundSize: "100%",
                        backgroundColor: "rgba(12,27,51,0.3)"
                        }}>
                            <li>
                              <ul>
                                <h2>Number:</h2>
                                <h3>028-86928156</h3>
                              </ul>
                            </li>
                            <li>
                              <ul>
                                <h2>邮箱:</h2>
                                <h3>support@kinglaidi.com</h3>
                              </ul>
                            </li>
                            <li>
                              <ul>
                                <h2>HR:</h2>
                                <h3>hr@kinglaidi.com</h3>
                              </ul>
                            </li>
                            <li>
                              <ul>
                                <h2>地址:</h2>
                                <h3>成都市锦江区上东大街139号四楼</h3>
                              </ul>
                            </li>
                        </ul>
                    </li>
                    <li className="menu-logo" style={circleStytle}>
                    <a　style={{color: "white", fontSize: "1.4em", border: "none", fontWeight: "bolder", textAlign: "center"}}>
                        <img src="/images/logoP.png" style={{width:"130px", position: "relative", top: "-10px", right: "8px"}} />
                    </a>
                    </li>
                    <li><a href="/#/hunjia">婚尚臻品</a>
                        <ul  style={{color: "white", height: "400px"}}>
                            <li>
                                <ul>
                                    <li><a href="/#/hunjia">婚嫁珠宝</a></li>
                                    <li><a href="/#/rings">戒指</a></li>
                                    <li><a href="/#/arts">定制</a></li>

                                </ul>
                            </li>
                            <li style={{position:"relative", top: "20px", width: "33%", borderRight:"inset white 1px", borderLeft:"inset white 1px", height: "270px", marginBottom: "20px",marginRight: "5px"}}>
                              <div  style={{float:"left", padding: "10px", marginRight: "-5px"}}>
                                  <h2>婚嫁珠宝</h2>
                                  <hr/>
                                  <p style={{wordBreak: "break-all", width: "200px"}}>金莱蒂甄选优质的、G级以上颜色的钻石，净度至少为VS级，即内含物仅限于为肉眼不可见范围。

金莱蒂宝石专家精心挑选每一颗钻石， 以国际公认的4C标准（切割、颜色、重量、净度）来甄别金莱蒂钻石品质， 所挑选的钻石仅限于D、E、F、G四个最高颜色级别、以及IF—VS2的高净度级别。 此外，金莱蒂精湛的切割工艺也为每颗钻石添亮增辉。

如同每个佩戴者一样，每颗钻石都是独一无二的，作为婚庆戒指主石的钻石，每颗0.20克拉以上的金莱蒂钻石都具备有GIA认证证书（美国宝石学院证书）。
</p>
                              </div>

                              <a href="/#/hunjia" style={{borderBottom: "none", textAlign:"center", position:"relative", right: "-5px",top: "0px", width:"32%", float:"left", padding: "10px", display: "block"}}>
                              <img src="/images/marry.jpeg" style={{width:"170px", float:"left", padding: "10px"}} /></a>
                            </li>
                            <li style={{position:"relative", top: "20px", width: "33%"}}>
                              <div  style={{float:"left", padding: "10px", color: "white", marginRight: "20px"}}>
                                  <h2>定制</h2>
                                  <hr/>
                                  <p style={{wordBreak: "break-all", width: "200px"}}>金莱蒂为你提供一个化梦想为现实的机会：
                                  打造真正属于你的订婚戒指。从无数的组合中挑选，无论是戒托，克拉，颜色或是纯度，
                                  从而创造出一枚独一无二的单钻戒指。King Lai Di Jewelry钻石，全部都符合“Conflict-free”标准，
                                  尊重联合国组织关于宝石来源的相关决议，遵循金伯利进程而且全都具备证书无数种组合搭配只为制造一枚永恒的，
                                  经典而又精致，大小完美的单钻戒指。一件属于一辈子的首饰。金莱蒂单钻。Heart-made. By you.</p>
                              </div>

                              <a href="/#/arts" style={{borderBottom: "none", textAlign:"center", position:"relative", right: "-10px",top: "0px", width:"32%", float:"left", padding: "10px", display: "block"}}>
                              <img src="/images/cust.jpeg" style={{width:"170px", float:"left", padding: "10px"}} /></a>
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
                      <li><a href="/#/activies">品牌活动</a></li>

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
