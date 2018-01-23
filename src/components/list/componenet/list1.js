import React from 'react'
import { List,WhiteSpace} from 'antd-mobile';
import styles from '../index.less'
const Item = List.Item;
const Brief = Item.Brief;
function List1() {
  return (
    <div>
      <Item extra={<img className={styles['life-list-img']} src={require("../img/pexels-photo-325867.jpeg")} alt=""/>}
            multipleLine onClick={() => {}}
            wrap
      >
        “力度最大”关税下降 海淘没省多少钱 <Brief>便民信息</Brief>
      </Item>
    </div>
  )
}
export default List1
