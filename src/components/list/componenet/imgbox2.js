import React from 'react'
import styles from '../index.less'
const Imagebox2 ='Imagebox2'
class Imgbox2 extends React.Component{
  constructor(props){
    super();
  }
  render(){
    return (
      <div>
        <div className={styles[`${Imagebox2}-box-content`]} style={{width:this.props.width,height:this.props.height}}>
          <img src={require('../img/timgL3PXDZ5S.jpg')} alt=""/>
          <span className={styles[`${Imagebox2}-box-content-text`]}>国内游</span>
        </div>
        <p className={styles[`${Imagebox2}-box-content-details`]}>"海南之梦"西沙群岛2晚3天游</p>
      </div>
    )
  }

}
export default Imgbox2
