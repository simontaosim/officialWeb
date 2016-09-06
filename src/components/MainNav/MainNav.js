'use strict';
import React from 'react';
import './MainNav.css';
import $ from "jquery";
import googlefonts from 'googlefonts';
import './Ionicons.min.css';
import Media from 'react-media';


class MainNav extends React.Component {
  constructor(props) {
    super(props);
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
    $("#shoresIntro").hide();
  }
  showBrandExpress(){
    $("#brandExpress").show();
    $("#brandIdea").hide();
    $("#shoresIntro").hide();
  }

  showBrandIdea(){
    $("#brandExpress").hide();
    $("#brandIdea").show();
    $("#shoresIntro").hide();
  }
  showShoresIntro(){
    $("#brandExpress").hide();
    $("#brandIdea").hide();
    $("#shoresIntro").show();
  }


  render() {
    const circleStytle = {
      borderRadius: '100px',
      WebkitBorderRadius: '100px',
      MozBorderRadius: '100px',
      background: "none !important"
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
                                <li onMouseOver={this.showBrandExpress.bind(this)}><a href="#">品牌历程</a></li>
                                <li onMouseOver={this.showBrandIdea.bind(this)}><a href="#">品牌理念</a></li>
                                <li onMouseOver={this.showShoresIntro.bind(this)}><a href="#">专卖店</a></li>

                              </ul>
                            </li>
                            <li  id="brandExpress" style={{position:"relative", top: "20px", width: "33%"}}>
                              <div  style={{float:"left", padding: "10px", color: "white"}}>
                                  <h2>品牌历程</h2>
                                  <hr/>
                                  <p>罗里吧嗦，balala</p>
                              </div>

                              <img src="/images/default.jpg" style={{width:"130px", float:"left"}} />
                            </li>


                            <li  id="brandIdea" style={{position:"relative", top: "20px", width: "33%"}}>
                              <div  style={{float:"left", padding: "10px", color: "white"}}>
                                  <h2>品牌理念</h2>
                                  <hr/>
                                  <p>罗里吧嗦，balala</p>
                              </div>

                              <img src="/images/default.jpg" style={{width:"130px", float:"left"}} />
                            </li>
                            <li  id="shoresIntro" style={{position:"relative", top: "20px", width: "33%"}}>
                              <div  style={{float:"left", padding: "10px", color: "white"}}>
                                  <h2>专卖店</h2>
                                  <hr/>
                                  <p>罗里吧嗦，balala</p>
                              </div>

                              <img src="/images/default.jpg" style={{width:"130px", float:"left"}} />
                            </li>



                        </ul>
                    </li>
                    <li><a href="#">联系我们</a>
                        <ul style={{color: "white",top: "62px"}}>
                            <li>
                              <ul>
                                <h3>Number</h3>
                                <p>12342134123421</p>
                              </ul>
                            </li>
                            <li>
                              <ul>
                                <h3>邮箱</h3>
                                <p>12342134123421</p>
                              </ul>
                            </li>
                            <li>
                              <ul>
                                <h3>HR</h3>
                                <p>hr@xxxx.com</p>
                              </ul>
                            </li>
                            <li>
                              <ul>
                                <h3>地址</h3>
                                <p>12342134123421</p>
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
                      <li><a href="#">优惠信息</a></li>

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
