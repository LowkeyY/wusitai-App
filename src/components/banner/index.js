import React from 'react';
import { Carousel, WhiteSpace, WingBlank } from 'antd-mobile';

class Banner extends React.Component {
  state = {
    data: ['', '', ''],
    imgHeight: 150,
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['14585977268', '14590647928', '16191318404'],
      });
    }, 100);
  }
  render() {
    return (

        <Carousel
          autoplay={true}
          infinite
          selectedIndex={1}
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map((i) => (
            <a
              key={i}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >

              <img
                src={require("./img/14585977268.jpg")}
                alt=""
                style={{ width: '100%',height:'100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>



    );
  }
}
export default Banner
