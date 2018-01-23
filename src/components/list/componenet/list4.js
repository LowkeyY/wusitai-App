import React from 'react'
import { List,WhiteSpace} from 'antd-mobile';
import styles from '../index.less'
import Imgbox from './imgbox'
import Imgbox2 from './imgbox2'
const Item = List.Item;
const Brief = Item.Brief;
const List4css ='list4'
function List4() {
  return (
    <div>
      <Item>
        <Imgbox/>
        <WhiteSpace/>
        <div className={styles[`${List4css}-box`]}>
          <Imgbox2 width="90%" height="100px"/>
          <Imgbox2 width="90%" height="100px"/>
        </div>
      </Item>
    </div>
  )
}
export default List4
