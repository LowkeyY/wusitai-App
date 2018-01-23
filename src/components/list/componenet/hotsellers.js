import React from 'react'
import styles from '../index.less'
import { List,WhiteSpace} from 'antd-mobile';
const Hotsellers ='Hotsellers'
const Item = List.Item;
function HotSellers() {
  return (
    <div>
      <Item>
      <div className={styles[`${Hotsellers}-box-content`]}>
        <div className={styles[`${Hotsellers}-box-content-left`]}>
          <img src={require("../img/timg0IEGFXNC.jpg")} alt=""/>
          <p className={styles[`${Hotsellers}-box-content-title`]}>干丁专享阳澄湖大闸蟹D1 <span>(尊享纸质券)</span></p>
          <p className={styles[`${Hotsellers}-box-content-price`]}>$900</p>
          <p className={styles[`${Hotsellers}-box-content-sold`]}>已售<span>199</span></p>
        </div>
        <div className={styles[`${Hotsellers}-box-content-right`]}>
          <img src={require("../img/timg0IEGFXNC.jpg")} alt=""/>
          <p className={styles[`${Hotsellers}-box-content-title`]}>干丁专享阳澄湖大闸蟹D1 <span>(尊享纸质券)</span></p>
          <p className={styles[`${Hotsellers}-box-content-price`]}>$900</p>
          <p className={styles[`${Hotsellers}-box-content-sold`]}>已售<span>199</span></p>
        </div>
    </div>
      </Item>
    </div>
  )
}
export default HotSellers
