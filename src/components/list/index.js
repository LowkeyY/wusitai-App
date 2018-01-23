import React from 'react'
import { List,WhiteSpace} from 'antd-mobile';
import List1 from './componenet/list1'
import List2 from './componenet/list2'
import List3 from './componenet/list3'
import List4 from './componenet/list4'
import HotSellers from './componenet/hotsellers'
import Slidebox from './componenet/slidebox'
import Imgbox from './componenet/imgbox'
const Item = List.Item;
const Brief = Item.Brief;
function LifeList() {
  return (
    <div>
      <WhiteSpace size="lg" />
      <List>
        <Item extra={'更多'}>社区生活</Item>
        <List1/>
        <List1/>
        <List2 />
      </List>
      <WhiteSpace size="lg" />
      <List>
        <Item >居家生活</Item>
        <List3 />
      </List>
      <WhiteSpace size="lg" />
      <List>
        <Item>福利铺</Item>
        <Item><Imgbox /></Item>

      </List>
      <WhiteSpace size="lg" />
      <List>
        <Item >出游玩乐</Item>
        <List4 />
      </List>
      <WhiteSpace size="lg" />
      <List>
        <Item>千丁精选</Item>
        <Slidebox />
      </List>
      <WhiteSpace size="lg" />
      <List>
        <Item >同城热卖</Item>
        <HotSellers />
      </List>
      <WhiteSpace size="lg" />
      <WhiteSpace size="lg" />
      <WhiteSpace size="lg" />
      <WhiteSpace size="lg" />
      <WhiteSpace size="lg" />
      <WhiteSpace size="lg" />

    </div>
  )
}
export default LifeList
