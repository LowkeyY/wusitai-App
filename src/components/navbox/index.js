import React from 'react'
import { Grid } from 'antd-mobile';
import styles from './index.less'

const Navbox =(props)=>{
  return(
    <div>
      <Grid data={props.modules} hasLine={false} columnNum={4} />
    </div>
  )
}
export default Navbox
