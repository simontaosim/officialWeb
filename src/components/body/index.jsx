import React from 'react';
import ReactDOM from 'react-dom';
import { scrollScreen } from 'rc-scroll-anim';
import './less/common.less';
import Content2 from './Content2';
import Content0 from './Content0';
import Footer1 from './Footer';
import Banner0 from './Banner0';
import Content1 from './Content1';
import Content3 from './Content3';
import Content4 from './Content4';
import Content5 from './Content5';
import Content6 from './Content6';
import Point from './Point';

const props = [
  // content_2_5 区域
  {
    style: {
      height: '100%',
    },
    dataSource: {
      title: {
        title:'蚂蚁金融云提供专业的服务',
        content:'基于阿里云强大的基础资源',
      },
      block0: {
        iconImg:'https://zos.alipayobjects.com/rmsportal/ScHBSdwpTkAHZkJ.png',
        title:'企业资源管理',
        content:'云资源集中编排、弹性伸缩、持续发布和部署，高可用及容灾。',
      },
      block1: {
        iconImg:'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png',
        title:'云安全',
        content:'按金融企业安全要求打造的完整云上安全体系，全方位保障金融应用及数据安全。',
      },
      block2: {
        iconImg:'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png',
        title:'云监控',
        content:'分布式云环境集中监控，统一资源及应用状态视图，智能分析及故障定位。',
      },
      block3: {
        iconImg:'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png',
        title:'移动',
        content:'一站式移动金融APP开发及全面监控；丰富可用组件，动态发布和故障热修复。',
      },
      block4: {
        iconImg:'https://zos.alipayobjects.com/rmsportal/UsUmoBRyLvkIQeO.png',
        title:'分布式中间件',
        content:'金融级联机交易处理中间件，大规模分布式计算机，数万笔/秒级并发能力，严格保证交易数据统一性。',
      },
      block5: {
        iconImg:'https://zos.alipayobjects.com/rmsportal/ipwaQLBLflRfUrg.png',
        title:'大数据',
        content:'一站式、全周期大数据协同工作平台，PB级数据处理、毫秒级数据分析工具。',
      },
    },
  },
  // banner_0_1 区域
  {
    style: {
      height: '100%',
    },
    dataSource: {
      block1: {
        top:'25%',
        logo:'https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png',
        title:'',
        content:'一个高效的页面动画解决方案',
        button:'Learn More',
        bgImg:'https://zos.alipayobjects.com/rmsportal/gGlUMYGEIvjDOOw.jpg',
      },
    },
  },
  // content_0_0 区域
  {
    style: {
      height: '50%',
    },
    dataSource: {
      block1: {
        img:'https://zos.alipayobjects.com/rmsportal/nLzbeGQLPyBJoli.png',
        title:'企业资源管理',
        content:'云资源集中编排、弹性伸缩、持续发布和部署，高可用及容灾。云资源集中编排、弹性伸缩、持续发布和部署，高可用及容灾。云资源集中编排、弹性伸缩、持续发布和部署，高可用及容灾。',
      },
    },
  },
  // footer_1_10 区域
  {
    style: {
      height: '400px',
    },
    dataSource: {
      logo: {
        logo:'https://zos.alipayobjects.com/rmsportal/qqaimmXZVSwAhpL.svg',
        content:'A efficient motion design solutions',
      },
      block1: {
        title:'产品',
        content:'产品更新记录\nAPI文档\n快速入门\n参考指南',
        contentLink:'#\n#\n#\n#',
      },
      block2: {
        title:'关于',
        content:'FAQ\n联系我们',
        contentLink:'#\n#',
      },
      block3: {
        title:'资源',
        content:'Ant Design\nAnt Design Mobile\nAnt Cool\nAntD Library',
        contentLink:'#\n#\n#\n#',
      },
      block4: {
        title:'关注',
        content:'https://zos.alipayobjects.com/rmsportal/IiCDSwhqYwQHLeU.svg\nhttps://zos.alipayobjects.com/rmsportal/AXtqVjTullNabao.svg\nhttps://zos.alipayobjects.com/rmsportal/fhJykUTtceAhYFz.svg\nhttps://zos.alipayobjects.com/rmsportal/IDZTVybHbaKmoEA.svg',
        contentLink:'#\n#\n#\n#',
      },
      copyright: {
        content:'Copyright © 2016 The Project by <a href=\'#\'>Ant Motion</a>. All Rights Reserved',
      },
    },
  },
  // banner_0_2 区域
  {
    style: {
      height: '100%',
    },
    dataSource: {
      block1: {
        top:'25%',
        logo:'https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png',
        title:'',
        content:'一个高效的页面动画解决方案',
        button:'Learn More',
        bgImg:'https://zos.alipayobjects.com/rmsportal/gGlUMYGEIvjDOOw.jpg',
      },
    },
  },
  // banner_0_3 区域
  {
    style: {
      height: '100%',
    },
    dataSource: {
      block1: {
        top:'25%',
        logo:'https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png',
        title:'',
        content:'一个高效的页面动画解决方案',
        button:'Learn More',
        bgImg:'https://zos.alipayobjects.com/rmsportal/gGlUMYGEIvjDOOw.jpg',
      },
    },
  },
  // content_1_4 区域
  {
    style: {
      height: '50%',
    },
    dataSource: {
      block1: {
        img:'https://zos.alipayobjects.com/rmsportal/tvQTfCupGUFKSfQ.png',
        title:'分布式中间件',
        content:'金融级联机交易处理中间件，大规模分布式计算机，数万笔/秒级并发能力，严格保证交易数据统一性。金融级联机交易处理中间件，大规模分布式计算机，数万笔/秒级并发能力，严格保证交易数据统一性。',
      },
    },
  },
  // content_3_6 区域
  {
    style: {
      height: '100%',
    },
    dataSource: {
      block1: {
        video:'https://os.alipayobjects.com/rmsportal/EejaUGsyExkXyXr.mp4',
        title:'蚂蚁金融云提供专业的服务',
        content:'科技想象力，金融创造力',
      },
    },
  },
  // content_4_7 区域
  {
    style: {
      height: '100%',
    },
    dataSource: {
      title: {
        title:'客户案例',
        content:'在这里用一段话介绍服务的案例情况',
      },
      block1: {
        img:'https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg',
        content:'ant design',
      },
      block2: {
        img:'https://os.alipayobjects.com/rmsportal/IwAqwmFOJJVHsBY.svg',
        content:'ant motion',
      },
      block3: {
        img:'https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg',
        content:'ant design',
      },
      block4: {
        img:'https://os.alipayobjects.com/rmsportal/IwAqwmFOJJVHsBY.svg',
        content:'ant motion',
      },
      block5: {
        img:'https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg',
        content:'ant design',
      },
      block6: {
        img:'https://os.alipayobjects.com/rmsportal/IwAqwmFOJJVHsBY.svg',
        content:'ant motion',
      },
      block7: {
        img:'https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg',
        content:'ant design',
      },
      block8: {
        img:'https://os.alipayobjects.com/rmsportal/IwAqwmFOJJVHsBY.svg',
        content:'ant motion',
      },
    },
  },
  // content_5_8 区域
  {
    style: {
      height: '100%',
    },
    dataSource: {
      title: {
        title:'蚂蚁金融云提供专业的服务',
        content:'基于阿里云计算强大的基础资源',
      },
      img: {
        img:'https://zos.alipayobjects.com/rmsportal/VHGOVdYyBwuyqCx.png',
      },
      block1: {
        img:'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png',
        title:'技术',
        content:'丰富的技术组件，简单组装即可快速搭建金融级应用，丰富的技术组件，简单组装即可快速搭建金融级应用。',
      },
      block2: {
        img:'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png',
        title:'融合',
        content:'解放业务及技术生产力，推动金融服务底层创新，推动金融服务底层创新。\n解放业务及技术生产力，推动金融服务底层创新。',
      },
      block3: {
        img:'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png',
        title:'开发',
        content:'符合金融及要求的安全可靠、高可用、高性能的服务能力，符合金融及要求的安全可靠、高可用、高性能的服务能力。',
      },
    },
  },
  // content_6_9 区域
  {
    style: {
      height: '100%',
    },
    dataSource: {
      title: {
        title:'蚂蚁金融云提供专业的服务',
        content:'科技想象力，金融创造力',
      },
      block0: {
        tag:'PHONE',
        icon:'https://zos.alipayobjects.com/rmsportal/XnzcslQvRoBHMHd.svg',
        contentTitle:'技术\n融合\n开放',
        content:'丰富的技术组件，简单组装即可快速搭建金融级应用，丰富的技术组件，简单组装即可快速搭建金融级应用。\n解放业务及技术生产力，推动金融服务底层创新，推动金融服务底层创新。解放业务及技术生产力，推动金融服务底层创新。\n符合金融及要求的安全可靠、高可用、高性能的服务能力，符合金融及要求的安全可靠、高可用、高性能的服务能力。',
        img:'https://zos.alipayobjects.com/rmsportal/xBrUaDROgtFBRRL.png',
      },
      block1: {
        tag:'TABLET',
        icon:'https://zos.alipayobjects.com/rmsportal/XnzcslQvRoBHMHd.svg',
        contentTitle:'技术\n融合\n开放',
        content:'丰富的技术组件，简单组装即可快速搭建金融级应用，丰富的技术组件，简单组装即可快速搭建金融级应用。\n解放业务及技术生产力，推动金融服务底层创新，推动金融服务底层创新。解放业务及技术生产力，推动金融服务底层创新。\n符合金融及要求的安全可靠、高可用、高性能的服务能力，符合金融及要求的安全可靠、高可用、高性能的服务能力。',
        img:'https://zos.alipayobjects.com/rmsportal/xBrUaDROgtFBRRL.png',
      },
      block2: {
        tag:'DESKTOP',
        icon:'https://zos.alipayobjects.com/rmsportal/XnzcslQvRoBHMHd.svg',
        contentTitle:'技术\n融合\n开放',
        content:'丰富的技术组件，简单组装即可快速搭建金融级应用，丰富的技术组件，简单组装即可快速搭建金融级应用。\n解放业务及技术生产力，推动金融服务底层创新，推动金融服务底层创新。解放业务及技术生产力，推动金融服务底层创新。\n符合金融及要求的安全可靠、高可用、高性能的服务能力，符合金融及要求的安全可靠、高可用、高性能的服务能力。',
        img:'https://zos.alipayobjects.com/rmsportal/xBrUaDROgtFBRRL.png',
      },
    },
  },
];

class Home extends React.Component {
  componentDidMount() {
    // 点的位置居中
    const list = ReactDOM.findDOMNode(this.refs.list);
    const listHeight = list.getBoundingClientRect().height;
    list.style = `margin-top: -${listHeight / 2}px`;
    // 实现整屏滚动
    const docHeight = ReactDOM.findDOMNode(this).getBoundingClientRect().height;
    scrollScreen.init({ docHeight });
  }

  render() {
    const children = [
      <Banner0 key="banner_0_1" name="banner_0_1" {...props[1]} />,
      <Content0 key="content_0_0" name="content_0_0" {...props[2]} />,
      <Content1 key="content_1_4" name="content_1_4" {...props[6]} />,
      <Content2 key="content_2_5" name="content_2_5" {...props[0]} />,
      <Content3 key="content_3_6" name="content_3_6" {...props[7]} />,
      <Content4 key="content_4_7" name="content_4_7" {...props[8]} />,
      <Content5 key="content_5_8" name="content_5_8" {...props[9]} />,
      <Point key="list" ref="list" data={['banner_0_1', 'content_0_0', 'content_1_4', 'content_2_5', 'content_3_6', 'content_4_7', 'content_5_8']} />,
    ];
    return (
      <div className="templates-wrapper">
        {children}
      </div>
    );
  }
}

export default Home;
