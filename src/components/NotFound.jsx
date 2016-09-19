import React from 'react';
import { Button } from 'antd';
import styles from './NotFound.less';

const NotFound = () => {
  return (
    <div className={styles.normal} style={{position: "relative", left: "-1%", background: "black"}}>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

      <div className={styles.container}>
        <h1 className={styles.title}>404</h1>
        <p className={styles.desc}>哦，页面被外星人带走啦</p>
        <a href="/"><Button type="primary" style={{ marginTop: 5 }}>返回首页</Button></a>
      </div>
    </div>
  );
};

export default NotFound;
