import React from 'react'
import styles from '../index.less'
import { List,WhiteSpace} from 'antd-mobile';
const Item = List.Item;
const List3css ='list3'
function Imgbox() {
  return (
    <div>
      <div className={styles[`${List3css}-box-top`]}>
        <img src={require('../img/timgL3PXDZ5S.jpg')} alt=""/>
        <span className={styles[`${List3css}-box-top-text`]}>空气净化</span>
      </div>
    </div>
  )
}
export default Imgbox
