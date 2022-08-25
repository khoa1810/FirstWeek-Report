import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
        <div>
            <Slider {...settings} className="slide">
<div className='image-1'>
  <img src="schedule.png"/>
</div>
<div  className='image-2'>
  <img src="proof.png"/>
</div>
<div className='image-3'>
  <img src="tracking.png"/>
</div>
            </Slider>
            </div>
             )
  }
}
   