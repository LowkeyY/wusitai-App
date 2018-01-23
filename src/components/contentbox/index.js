import React from 'react'
import { WhiteSpace} from 'antd-mobile';
import {getLocalIcon } from 'utils'
import styles from './index.less'
const Css='contentbox'
const Contentbox = () => (
  <div>
    <WhiteSpace size="lg" />
      <div className={styles[`${Css}-contianer`]}>
        <div className={styles[`${Css}-contianer-left`]}>
          {/*<img src={require("./img/9.png")} alt=""/>*/}
        {/*<p className={styles[`${Css}-contianer-left-title`]}>每日一鲜</p>*/}
          <div className={styles[`${Css}-contianer-left-top`]}>
            <img src={require("./img/10.jpg")} alt=""/>
            <p className={styles[`${Css}-contianer-left-top-title`]}>每日一鲜</p>
          </div>
          <div className={styles[`${Css}-contianer-left-bottom`]}>
            <img src={require("./img/timg.jpg")} alt=""/>
            <p className={styles[`${Css}-contianer-left-bottom-title`]}>每日一鲜</p>
          </div>
      </div>
        <div className={styles[`${Css}-contianer-right`]}>
          <div className={styles[`${Css}-contianer-right-top`]}>
            <img src={require("./img/10.jpg")} alt=""/>
            <p className={styles[`${Css}-contianer-right-top-title`]}>每日一鲜</p>
          </div>
          <div className={styles[`${Css}-contianer-right-bottom`]}>
            <img src={require("./img/timg.jpg")} alt=""/>
            <p className={styles[`${Css}-contianer-right-bottom-title`]}>每日一鲜</p>
          </div>
        </div>
      </div>
  </div>
);
export default Contentbox
