import React, { Component } from 'react';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import img1 from '../images/1.jpg';
import img2 from '../images/2.jpg';
import img3 from '../images/3.jpg';
import img4 from '../images/4.jpg';
import img5 from '../images/5.jpg';
import img6 from '../images/6.jpg';
import img7 from '../images/7.jpg';
import img8 from '../images/8.jpg';
import img9 from '../images/9.jpg';

export default class MyCarousel extends React.Component {
  constructor() {
    super()
    this.state = {
      value: 0,
      slides: [
        (<img src={img1} style={{ maxWidth:'400px', maxHeight:'400px', height:'auto', width:'auto' }}/>),
        (<img src={img2} style={{ maxWidth:'400px', maxHeight:'400px', height:'auto', width:'auto' }}/>),
        (<img src={img3} style={{ maxWidth:'400px', maxHeight:'400px', height:'auto', width:'auto' }}/>),
        (<img src={img4} style={{ maxWidth:'400px', maxHeight:'400px', height:'auto', width:'auto' }}/>),
        (<img src={img5} style={{ maxWidth:'400px', maxHeight:'400px', height:'auto', width:'auto' }}/>),
        (<img src={img6} style={{ maxWidth:'400px', maxHeight:'400px', height:'auto', width:'auto' }}/>),
        (<img src={img7} style={{ maxWidth:'400px', maxHeight:'400px', height:'auto', width:'auto' }}/>),
        (<img src={img8} style={{ maxWidth:'400px', maxHeight:'400px', height:'auto', width:'auto' }}/>)
      ],
    }
    this.onchange = this.onchange.bind(this);
  }


  onchange(value) {
    this.setState({ value });
  }

  render() {
    return (
    <div>
      <Carousel
        centered
        itemWidth={400}
        infinite
        autoPlay={3500}
        animationSpeed={1000}
        value={this.state.value}
        slides={this.state.slides}
        onChange={this.onchange}
      />
    </div>
    );
  }
}