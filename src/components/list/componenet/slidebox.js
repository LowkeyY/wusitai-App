import React from 'react'
import { Carousel, WhiteSpace, WingBlank } from 'antd-mobile';
import Imgbox2 from './imgbox2'
function Slidebox() {
  return (
    <div>
      <Carousel
        autoplay={false}
        infinite
        selectedIndex={1}
        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
        afterChange={index => console.log('slide to', index)}
      >
        <Imgbox2  width="100%" height="220px"/>
        <Imgbox2  width="100%" height="220px"/>
        <Imgbox2  width="100%" height="220px"/>
      </Carousel>
    </div>
  )
}
export default Slidebox
