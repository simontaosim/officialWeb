'use strict';
import React from 'react';

import FooterMenus from './FooterMenus'

import Contract from './Contract';

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
      case "/fuwutiaokuan":
        return (
          <Contract />
        );
        break;
      case "/helpusing":
      return (<div style={{textAlign: "center"}}>
        <h2>本网站在chrome浏览器下，效果最佳，不兼容IE9及更旧版本的浏览器</h2>
      </div>);
      break;
      case "/hunjia":
        return (<div style={{paddingLeft: "10%", paddingRight: "10%"}}>
          <div id="" className="pure-g" style={{textAlign: "center", color: "white"}} >
              <div className="pure-u-1-2">
                <h1 style={{display: "block"}}>钻石</h1>
                <div style={{fontSize: "15px", textAlign: "left", lineHeight: "40px", padding: "20px"}}>
                  <p>钻石的璀璨光芒和稀有性使它成为人们心中的梦想。 钻石的超凡纯净，让人联想到永恒之爱， 钻石本身也拥有堪比永恒的恒定特性。</p><br/>
                  <p>这种以碳为主要成分的晶石，具有“4C”特质， “4C”也成为鉴定钻石品质的通用标准。</p>
                </div>
              </div>
              <div className="pure-u-1-2" style={{textAlign: "center", color: "white"}} >
                <img src="images/zuanshi2.png" style={{width: "100%"}}/>
              </div>
          </div>
          <div id="" className="pure-g" style={{textAlign: "center", color: "white"}} >
              <div className="pure-u-1-2">
                <img src="images/cut8.png" style={{width: "100%"}}/>
              </div>
              <div className="pure-u-1-2" style={{textAlign: "center", color: "white"}} >
              <h1 style={{display: "block"}}>CUT － 切割</h1>
              <div style={{fontSize: "15px", textAlign: "left", lineHeight: "40px", padding: "20px"}}>
                <p>钻石切割方式依据原石本身形状、大小和内含物而定。 钻石原石被切割成多个倾斜抛光的平面，以形成完美的光线折射比例，从而为钻石带来绚丽火彩。</p><br/>
                <p>婚庆戒指中最常用的是圆形切割钻石， 当然还有其他切割形状，它们各具特色，如： 榄尖形、椭圆形、梨形、祖母绿方形和心形等。 除了心形和榄尖形切割钻石而外，其他所有切割形状均为58个切面。
                </p><br/>
                <p>钻石的切割方式是经过精心考究而定的，能够最大程度优化其反射效果， 从而让钻石之光永久发散。</p>
              </div>
              </div>
          </div>
          <div id="" className="pure-g" style={{textAlign: "center", color: "white"}} >
              <div className="pure-u-1-2">
              <h1 style={{display: "block"}}>CLARITY – 净度</h1>
              <div style={{fontSize: "15px", textAlign: "left", lineHeight: "40px", padding: "20px"}}>
                <p>净度为光线穿透钻石、形成无阻碍的无穷反射提供必要条件。 鉴定钻石的净度，需看钻石内含物的数量和位置。 内含物源于钻石的形成过程，与钻石同质， 以结晶、固体、点状、絮状等形态存在。</p><br/>
                <p>钻石净度按照国际标准被评定为IF到SI的数个等级。
                </p><hr/>
                <img src="images/clarity.jpg" style={{width: "100%"}}/><hr/>
                <div className="pure-g">
                  <div className="pure-u-1-2">FL-IF:</div><div className="pure-u-1-2">- 无瑕疵或内部无瑕疵。 无内含物。</div>
                </div>
                <hr/>
                <div className="pure-g">
                  <div className="pure-u-1-2">VVS1-VVS2: </div><div className="pure-u-1-2">- 极轻微瑕疵。 在10倍放大镜下难以察觉
</div>
                </div><hr/>
                <div className="pure-g">
                  <div className="pure-u-1-2">VS1 - VS2: </div><div className="pure-u-1-2">- 轻微瑕疵。 在10倍放大镜下及某些情况下肉眼可见内含物。
</div>
                </div><hr/>
                <div className="pure-g">
                  <div className="pure-u-1-2">SI1-SI2:</div><div className="pure-u-1-2">- 微瑕疵。 在10倍放大镜下及肉眼可见内含物。</div>
                </div><hr/>
                <div className="pure-g">
                  <div className="pure-u-1-2">I1-I2-I3:</div><div className="pure-u-1-2">- 有瑕疵。 在10倍放大镜下及大多数情况下肉眼可见内含物。
</div>
                </div><hr/>
                 <img src="images/zuanshi1.jpeg" style={{width: "100%"}}/>
                 <h1 style={{display: "block"}}>COLOR - 颜色</h1>
                 <div style={{fontSize: "15px", textAlign: "left", lineHeight: "40px", padding: "20px"}}>
                   <p>钻石颜色按照美国宝石学院国际标准被评定为D到Z多个等级。 D级钻石完美无色，Z级钻石则偏黄，光泽亮度也偏差。 金莱蒂精心甄选颜色介于D与G之间的优质钻石， 追求纯净无瑕的效果。</p><br/>
                   <p>白色钻石是最常见的，然而还存在有近300种的彩色钻石， 彩色钻石被称为“神奇”之钻， 一万颗白钻中会出现一颗彩色钻石， 因此，彩色钻石堪比自然界的奇迹，因而也异常珍稀名贵。

                   </p><br/>
                   <p>无色接近无色极微黄微黄淡黄</p>
                  </div>
              </div>
              </div>
              <div className="pure-u-1-2" style={{textAlign: "center", color: "white", lineHeight: "40px", fontSize: "16pt"}} >
                <br/>    <img src="images/zuanshi3.jpg" style={{width: "100%"}}/><br/>
              <h2>金莱蒂的承诺</h2><br/>
                <p>金莱蒂品牌向顾客承诺提供品质最优的宝石和钻石。 然而，一颗钻石的真正价值在于它所凝聚的强烈的情感力量，当一名男子用钻石作为爱的承诺时，钻石就成了恒久爱情的象征。</p><br/>
                <p>1858年以来，无数王公贵族、君王、或坠入爱河的世间男子前来金莱蒂定制珠宝、饰物、戒指，用以表达他们澎湃的内心。</p><br/>
                <img src="images/marry-one.jpeg" style={{width: "100%"}}/><br/>
                <p>作为首家入驻旺多姆广场的现代珠宝商，金莱蒂一直以品质卓越的宝石和丰富创意来表达幸福与爱的情感，为顾客雕琢梦想。</p><br/>
                <br/>


              </div>
          </div>
          <div id="" className="pure-g" style={{textAlign: "center", color: "white"}} >
              <div className="pure-u-1-2">
              <h1 style={{display: "block"}}>CARAT - 重量</h1>
              <div style={{fontSize: "15px", textAlign: "left", lineHeight: "40px", padding: "20px"}}>
                <p>克拉是包括钻石在内的珍贵宝石的重量单位， 1克拉相当于0.20克。依据钻石重量判定钻石大小，但大小并不是鉴定其价值的唯一标准， 上述三个标准同样重要。
                </p><br/>
                <p>优质的钻石可以是大小不一的。

                </p><br/>
              </div>
              </div>
              <div className="pure-u-1-2" style={{textAlign: "center", color: "white"}} >
                <img src="images/carat.jpg" style={{width: "100%"}}/><br/>
              </div>

          </div>
        </div>);
        break;
      case "/rings":
        return (
          <div>
          <div id="" className="pure-g" style={{textAlign: "center", color: "white"}} >
              <div className="pure-u-1-1" style={{paddingLeft: "8%", paddingRight:"8%"}}>
                <img src="images/ring6.jpg" style={{width: "100%"}}/>
              </div>

          </div>
          <div id="" className="pure-g" style={{textAlign: "center", color: "white"}} >
              <div className="pure-u-1-2">
                <img src="images/ring1.png" style={{width: "100%"}}/>
              </div>
              <div className="pure-u-1-2" style={{textAlign: "center", color: "white"}} >
                <img src="images/ring2.png" style={{width: "100%"}}/>
              </div>
          </div>
          <div id="" className="pure-g" style={{textAlign: "center", color: "white"}} >
              <div className="pure-u-1-2">
                <img src="images/ring3.png" style={{width: "100%"}}/>
              </div>
              <div className="pure-u-1-2" style={{textAlign: "center", color: "white"}} >
                <img src="images/ring4.png" style={{width: "100%"}}/>
              </div>
          </div>
          <div id="" className="pure-g" style={{textAlign: "center", color: "white"}} >
              <div className="pure-u-1-2">
                <img src="images/ring5.png" style={{width: "100%"}}/>
              </div>
              <div className="pure-u-1-2" style={{textAlign: "center", color: "white"}} >

              </div>
          </div>
          </div>
        );
      break;
      case "/arts":
      return (
        <div style={{textAlign: "center", color: "white",paddingLeft: "8%", paddingRight:"8%"}} >
        <div id="" className="pure-g" >
            <div className="pure-u-1-2" >
              <h1 style={{display: "block"}}>第一步：从想法到模型。</h1><br/>
              <p>
              "金莱蒂实验室"收到了来自米兰的金莱蒂设计工作室的最新设计。这可能只是一张手绘草图，有时就是一张二维的透视图，又或者仅仅是一张钢笔或铅笔的素描。设计想法随后被公司的CAD设计师们用特别的电脑应用程序和铸模机器做成3D模型，这是精确的制造模型：设计想法被具象化了。

              </p>
            </div>
            <div className="pure-u-1-2" style={{textAlign: "center", color: "white"}} >
              <img src="images/artstep1.jpg" style={{width: "100%"}}/>
            </div>
        </div>

        <div id="" className="pure-g" style={{textAlign: "center", color: "white"}} >
            <div className="pure-u-1-2">
              <img src="images/artstep2.jpg" style={{width: "100%"}}/>
            </div>
            <div className="pure-u-1-2" style={{textAlign: "center", color: "white"}} >
            <h1 style={{display: "block"}}>第二步：从金莱蒂手工珠宝模型到批量生产。</h1><br/>
            <p>
            设计模型通常是由黄铜、腊或者树脂制成，这非常适用于批量生产：所有的橡胶模具，在保证其正确分工的前提下，都被标号、分类，然后储存在蜡型车间。


            </p>
            </div>
        </div>
        <div id="" className="pure-g" style={{textAlign: "center", color: "white"}} >
            <div className="pure-u-1-2">
            <h1 style={{display: "block"}}>第三步：蜡型车间，开始生产金莱蒂手工珠宝。</h1><br/>
            <p>
            真空密封的液体蜡注塑机在这个车间里被用来生产成批的生产需要的蜡状物。按照要求和数量分组，蜡状物被放置在一棵"蜡树"上：橡胶的底座支撑着蜡制"树干"，它的"枝干"伸向不同的方向，最后蜡在末端凝固。

            </p>
            </div>
            <div className="pure-u-1-2" style={{textAlign: "center", color: "white"}} >
              <img src="images/artstep3.jpg" style={{width: "100%"}}/>
            </div>
        </div>
        <div id="" className="pure-g" style={{textAlign: "center", color: "white"}} >
            <div className="pure-u-1-2">
              <img src="images/artstep4.jpg" style={{width: "100%"}}/>
            </div>
            <div className="pure-u-1-2" style={{textAlign: "center", color: "white"}} >
            <h1 style={{display: "block"}}>第四步：脱蜡铸造。</h1><br/>
            <p>
            一旦蜡树上布满了铸模，混合了铸模材料的蜡状物便开始加热然后融化。经过一个漫长的过程，真空铸造过程激活，液化的黄金源源不断地流入模具，填满每一个空隙。在冷却过程之后，进入手工台，这是金莱蒂珠宝将要面临的下一个步骤。

            </p>
            </div>
        </div>
        <div id="" className="pure-g" style={{textAlign: "center", color: "white"}} >
            <div className="pure-u-1-2">
            <h1 style={{display: "block"}}>第五步：手工台。</h1><br/>
            <p>
            当铸造完成之后，产品被收集起来按照要求分类，然后分发到负责抛光和用传统焊接工艺将之装配金莱蒂手工珠宝的珠宝制作师手中。所有的作品最后都会被加上身份证明的烙印、公司品牌，以及合金。


            </p><br/>
            <p>被装配好的金莱蒂珠宝稍后被交到抛光处和质量监控处，后者在生产过程的每一步都发挥着重要作用。
</p>
            </div>
            <div className="pure-u-1-2" style={{textAlign: "center", color: "white"}} >
              <img src="images/artstep5.jpg" style={{width: "100%"}}/>
            </div>
        </div>
        <div id="" className="pure-g" style={{textAlign: "center", color: "white"}} >
            <div className="pure-u-1-2">
              <img src="images/artstep6.jpg" style={{width: "100%"}}/>
            </div>
            <div className="pure-u-1-2" style={{textAlign: "center", color: "white"}} >
            <h1 style={{display: "block"}}>第六步：分发镶嵌。</h1><br/>
            <p>
            金莱蒂的宝石和钻石，在镶嵌之前都得到了细致的分析和挑选。最常用到的宝石包括蓝宝石、红宝石、绿宝石、海蓝宝石、缟玛瑙、紫水晶、石英、绿松石、白珍珠、黑珍珠、粉珍珠，当然，还有金莱蒂珠宝的终极象征——钻石。


            </p><br/>
            <h1 style={{display: "block"}}>第七步：镀铑。</h1><br/>
            <p>
            对于白金或者铂金的金莱蒂珠宝饰品来说，还有最后一个步骤就是镀铑：一层薄薄的铑金属膜覆盖着金属的表面，以提高白金和铂金的亮度及光芒。


            </p>
            </div>
        </div>
        <div id="" className="pure-g" style={{textAlign: "center", color: "white"}} >
            <div className="pure-u-1-2">

            </div>
            <div className="pure-u-1-2" style={{textAlign: "center", color: "white"}} >

            </div>
        </div>
        </div>
      );
      break;
      case "/activies":
      return(
        <div style={{paddingLeft: "8%", paddingRight:"8%"}}>
        <div id="" className="pure-g" style={{textAlign: "center", color: "white"}} >
            <div className="pure-u-1-1">
            <img src="images/act1.jpg" style={{width: "100%"}}/>
            </div>
        </div>
        <div id="" className="pure-g" style={{textAlign: "center", color: "white"}} >
            <div className="pure-u-1-1">
            <img src="images/act2.jpg" style={{width: "100%"}}/>
            </div>
        </div>
        <div id="" className="pure-g" style={{textAlign: "center", color: "white"}} >
            <div className="pure-u-1-1">
            <img src="images/act3.png" style={{width: "100%"}}/>
            </div>
        </div>
        <div id="" className="pure-g" style={{textAlign: "center", color: "white"}} >
            <div className="pure-u-1-3">
              <img src="images/act3-1.jpg" style={{width: "100%", padding: "10px"}}/>
            </div>
            <div className="pure-u-1-3">
              <img src="images/act3-2.jpg" style={{width: "100%", padding: "10px"}}/>
            </div>
            <div className="pure-u-1-3">
              <img src="images/act3-3.jpg" style={{width: "100%", padding: "10px"}}/>
            </div>
        </div>
        </div>
      );
      break;
      case "/maintain":
      return (
        <div style={{textAlign: "center", color: "white",paddingLeft: "8%", paddingRight:"8%"}} >
        <div id="" className="pure-g" style={{textAlign: "left", color: "white"}} >
            <div className="pure-u-1-1">
            <h1 style={{display: "block", textAlign: "center"}}>一般护理保养原则</h1><br/>
            <p>
            总的来说，珍贵珠宝无论其材质和成分组成，都需细心保养护理，避免不当损坏。以下介绍几个简单的措施和注意事项，使您的珠宝长期保持精美特质和迷人光彩。

            </p><br/>
            <p>
            在不佩戴的情况下，每件珠宝应该独立存放，以避免宝石、金属之间的摩擦。我们建议您把金莱蒂珠宝单独放入相应的珠宝盒存放。

            </p><br/>
            <p>
            佩戴珠宝时，应注意避免珠宝受到撞击，撞击容易损坏珠宝的品质。游泳、洗澡、去沙滩或做运动项目时也不宜佩戴珠宝。最好不要把珍贵宝石暴露于阳光下直晒，以免宝石色泽受影响。此外，珠宝还应远离热源、X光、和放射源等。


            </p><br/><img src="images/maintain.png" style={{width: "100%", padding: "10px"}}/>
            <br/>
            <p>
            戒指产品尤其需要细心维护：我们建议您在洗手或进行手工活动时都应取下手上的戒指，也不宜在同一手指上佩戴多枚戒指，以避免戒指间的摩擦。

            </p><br/>

            <p>
            我们建议您定期检查珠宝的状况，特别是宝石镶嵌部分是否稳固。后者可以通过用放大镜观察、或者将珠宝放在耳边轻摇测听是否有响声——这两种方式，来判断宝石和底座之间是否牢固。


            </p><br/>
            <p>
            大部分的珠宝都可以通过清洁的方式恢复其原有光泽：用软毛刷浸皂水轻轻刷洗后，再冲洗，最后用无绒布轻轻擦干。注意，此清洁方式并不适用于珍珠和其他硬度较高的宝石，如：青金石、绿松石、蛋白石、玉和祖母绿。以下会专门介绍祖母绿和珍珠的清洁方式。



            </p><br/>
            <p>
              如果对珠宝的状况有任何疑虑，我们建议您先不要佩戴，而向专业人员咨询，品牌非常乐意为您检查金莱蒂珠宝的状况。
            </p><br/>
            </div>
        </div>
        <div id="" className="pure-g" style={{textAlign: "left", color: "white"}} >
          <div className="pure-u-1-1">
            <h1 style={{display: "block", textAlign: "center"}}>祖母绿的护理保养</h1><br/>
            <p>
            内含物的存在使得祖母绿具有相当脆性，对碰撞也极为敏感，因此无论是佩戴，还是保存、护理都务必细致小心。不同于其他类宝石，祖母绿的护理方式比较特殊。
            </p><br/>
            <img src="images/green-maintain.jpg" style={{width: "100%", padding: "10px"}}/>
            <br/>
            <p>
            祖母绿应避免阳光直晒、高温环境、温差急变、以及与化学物品的接触，一般的护理产品也不适用于祖母绿。
            </p><br/>
            <p>
            为了恢复祖母绿原有的润泽，可以用甜杏仁油或檀香油轻拭宝石表面，当然，即使用油也要适量，动作也要轻柔。

            </p><br/>
          </div>
        </div>
        <div id="" className="pure-g" style={{textAlign: "left", color: "white"}} >
          <div className="pure-u-1-1">
            <h1 style={{display: "block", textAlign: "center"}}>珍珠的护理保养</h1><br/>
            <p>
            养殖珍珠是因空气接触而自然再生的有机体，珍珠有一定的抗碰撞耐性，但它的孔隙外层却异常脆弱敏感，需要小心护理，首先，应避免接触其他坚硬宝石、化学产品、或美容产品。

            </p><br/>
            <img src="images/perl.jpg" style={{width: "100%", padding: "10px"}}/>
            <br/>
            <p>
            建议用柔布定期擦拭珍珠，放入珠宝盒单独存放。

            </p><br/>

          </div>
        </div>
        <div id="" className="pure-g" style={{textAlign: "left", color: "white"}} >
          <div className="pure-u-1-1">
            <h1 style={{display: "block", textAlign: "center"}}>黄金、铂金镶座的护理保养</h1><br/>
            <p>
            黄金或铂金镶座，在佩戴时难免受到一些小小碰撞，长期积累下来也会受到损坏。因此，我们建议您，在做任何有可能损坏镶座的活动之前先取下所佩戴的珠宝。高居摩氏硬度系数顶端的宝石最易损坏镶座，因此在佩戴戒指时应尽量避免它们之间的直接接触，并作分别单独存放。


            </p><br/>

            <p>
            黄金和铂金均可用皂水清洁。

            </p><br/>
            <p>
            色泽暗淡、或出现划痕的黄金或铂金镶座可以进行重新抛光，以恢复其原有的光泽。白金抛光后还要进行镀铑处理，即覆盖上薄薄的一层铑金属镀层，使其更加莹亮。


            </p><br/>
            <p>
            除了汞而外，黄金耐受其他产品和酸性物质。

            </p><br/>

          </div>
        </div>
        </div>
      );
      case "/aboutus":
      return (
        <div  style={{textAlign: "center", color: "white",paddingLeft: "8%", paddingRight:"8%", fontSize: "16px"}} >
          <div id="" className="pure-g" style={{textAlign: "left", color: "white"}} >
          <div className="pure-u-1-1">
            <h1 style={{display: "block", textAlign: "center"}}>公司简介</h1><br/>
            <p>
            成都金莱蒂珠宝首饰有限公司是一家专业珠宝经营企业，主
          营：钻石为主、玉器、银饰、钯金、黄金、铂金、18K金等业务，
          主要客户为成都、深圳、广州等国内外大部分地区的金店、珠宝
          首饰店。与海内外研究、设计、生产制作、运输机构、院校、企
          事业长期保持合作。金莱蒂珠宝致力于打造平民化珠宝。金莱蒂
          珠宝不请明星代言，我们只为自己代言！为了保证每一家店的品
          质，我们不对外加盟，省去所有中间环节，将最大的优惠带到顾
          客的身边。在每一家店都可以享受最优质的服务，最温馨的环境

            </p><br/>


          </div>
          </div>
          <div id="" className="pure-g" style={{textAlign: "center", color: "white"}} >
          <div className="pure-u-1-1">
            <h1 style={{display: "block", textAlign: "center"}}>公司使命</h1><br/>
            <p>
            为社会进步创造价值；为行业发展做出贡献；为优秀人才搭
              建平台；为顾客生活增添色彩

            </p><br/>


          </div>
          </div>
          <div id="" className="pure-g" style={{textAlign: "center", color: "white"}} >
          <div className="pure-u-1-1">
            <h1 style={{display: "block", textAlign: "center"}}>企业理念</h1><br/>
            <p>
          幸福一生  快乐一世

            </p><br/>


          </div>
          </div>
        </div>
      );
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
        <FooterMenus /><br/>
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

           <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

      </div>
      </div>

    );
  }
}

export default PageNotScroller;
