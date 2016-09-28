import React from 'react';
import { Button } from 'antd';
import styles from './NotFound.less';
import Footer from './Footer';

const NotFound = () => {
  return (
    <div className={styles.normal} style={{position: "relative", left: "0%", top:"-250px",background: 'url(/images/404.jpg) no-repeat',
                           backgroundSize: "110%", backgroundPosition: "center",backgroundColor: "#0e0d0b", height:"1300px"}}>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

      <div className={styles.container}>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <h1 className={styles.title} style={{fontSize: "16pt", color: "red"}}>404</h1>
        <p className={styles.desc}  style={{fontSize: "16pt", color: "red"}}>哦，页面被外星人带走啦</p>
        <a href="/"><Button style={{ marginTop: 5 }}>返回首页</Button></a>


      </div>
      <div style={{position: "relative",bottom:"-244px"}}><br/><br/><br/>
        <Footer />
      </div>
    </div>
  );
};

export default NotFound;
