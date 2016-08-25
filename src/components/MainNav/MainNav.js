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
        $(this).find('a:first').css("border-bottom","4px solid #828282");
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

  }


  render() {
    return(
      <div className="main-nav">
      <br/>
      <div className="menu-container">

            <div className="menu">
                <ul>
                    <li><a href="#">新闻动态</a></li>
                    <li><a href="#">黄金首饰</a>
                        <ul>
                            <li><a>类别</a>
                                <ul>
                                    <li><a href="#">耳钉</a></li>
                                    <li><a href="#">黄金项链</a></li>
                                    <li><a href="#">投资黄金</a></li>
                                    <li><a href="#">婚嫁套件</a></li>
                                    <li><a href="#">转运珠</a></li>
                                    <li><a href="#">黄金对戒</a></li>
                                    <li><a href="#">足金饰品</a></li>
                                    <li><a href="#">K金饰品</a></li>
                                </ul>
                            </li>
                            <li><a>系列</a>
                                <ul>
                                    <li><a href="#">耳钉</a></li>
                                    <li><a href="#">黄金项链</a></li>
                                    <li><a href="#">投资黄金</a></li>
                                    <li><a href="#">婚嫁套件</a></li>
                                    <li><a href="#">转运珠</a></li>
                                    <li><a href="#">黄金对戒</a></li>
                                    <li><a href="#">足金饰品</a></li>
                                    <li><a href="#">K金饰品</a></li>
                                </ul>
                            </li>

                        </ul>
                    </li>
                    <li><a href="#">钻石财宝</a>
                        <ul>
                            <li>
                              <ul>
                                <li><a href="#">结婚钻戒</a></li>
                                <li><a href="#">钻石耳饰</a></li>
                                <li><a href="#">钻石吊坠</a></li>
                                <li><a href="#">钻石手链</a></li>
                                <li><a href="#">裸钻定制</a></li>
                                <li><a href="#">红蓝宝石</a></li>
                                <li><a href="#">绿宝石</a></li>
                                <li><a href="#">坦桑石</a></li>
                                <li><a href="#">其他天然宝石</a></li>
                              </ul>
                            </li>
                            <li>
                              <ul>
                                <h2>这是展示</h2>
                              </ul>
                            </li>
                        </ul>
                    </li>
                    <li className="menu-logo">
                    <a　style={{color: "#43341B", fontSize: "1.4em", border: "none", fontWeight: "bolder", textAlign: "center"}}>
                      <img src="/images/logo.jpg" style={{width:"130px", position: "relative", top: "-41px"}} />
                    </a>
                    </li>
                    <li><a href="#">珍珠玉翠</a>
                        <ul>
                            <li>
                                <ul>
                                    <li><a href="#">珍珠项链</a></li>
                                    <li><a href="#">海水珍珠</a></li>
                                    <li><a href="#">和田玉</a></li>
                                    <li><a href="#">翡翠摆件</a></li>
                                    <li><a href="#">翡翠手镯</a></li>
                                    <li><a href="#">翡翠项链</a></li>
                                    <li><a href="#">琥珀手链</a></li>
                                    <li><a href="#">天然琥珀</a></li>
                                    <li><a href="#">原矿琥珀</a></li>
                                </ul>
                            </li>

                            <li><a href="#">Empty sub</a></li>
                        </ul>
                    </li>
                      <li><a href="#">专题</a></li>
                      <li><a href="#">专卖店</a></li>
                      <Media query="(max-width: 959px)">
                        {matches => matches ? (
                            <li><a href="#">心愿单</a></li>

                        ) : (
                            <div></div>
                        )}
                      </Media>
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
