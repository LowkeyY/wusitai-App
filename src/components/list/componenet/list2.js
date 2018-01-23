import React from 'react'
import { List,WhiteSpace} from 'antd-mobile';
import styles from '../index.less'
const Item = List.Item;
const Brief = Item.Brief;
const List2css ='list2'
function List2() {
  return (
    <div>
      <Item>
        <div className={styles[`${List2css}-box`]}>
          <div className={styles[`${List2css}-box-left`]}>
            <img src={require('../img/9.png')} alt=""/>
            <p className={styles[`${List2css}-box-text`]}>
              <span className={styles[`${List2css}-box-text-type`]}>影鉴剧评|</span>
              怪！徐克的奇思妙想电影世界
            </p>
          </div>
          <div className={styles[`${List2css}-box-right`]}>
            <img src={require('../img/10.jpg')} alt=""/>
            <p  className={styles[`${List2css}-box-text`]}>
              <span className={styles[`${List2css}-box-text-type`]}>影鉴剧评|</span>
            怪！徐克的奇思妙想电影世界
            </p>
          </div>
        </div>
      </Item>
    </div>
  )
}
export default List2
