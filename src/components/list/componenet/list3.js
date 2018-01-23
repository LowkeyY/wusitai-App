import React from 'react'
import { List,WhiteSpace,Grid} from 'antd-mobile';
import Imgbox from './imgbox'
import styles from '../index.less'
const Item = List.Item;
const Brief = Item.Brief;
const List3css ='list3'
const data = [
  {id:1,text:"日常清洁" , icon : require("themes/images/01.jpeg")},
  {id:2,text:"保姆" , icon : require("themes/images/02.jpeg")},
  {id:3,text:"家电清洗" , icon : require("themes/images/03.jpg")},
  {id:4,text:"深度保洁" , icon : require("themes/images/04.jpg")},
];
function List3() {
  return (
    <div>
      <Item>
        <div className={styles[`${List3css}-box`]}>
           <Imgbox/>
          <div className={styles[`${List3css}-box-bottom`]}>
            <Grid data={data} hasLine={false} columnNum={4} />
          </div>
        </div>
      </Item>
    </div>
  )
}
export default List3
