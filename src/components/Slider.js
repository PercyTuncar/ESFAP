import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../components/homeSlider.css';
import Zoom from 'react-reveal/Zoom';
import './slider.css'


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 100,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="homeSlider"  >
        <Slider {...settings}>
      
          <div className="sliderContent">
          <Zoom>  <h3>AD MAJOREM PATRIAE GLORIAM</h3>  </Zoom>
          <img src="http://www.esffaa.edu.pe/wp-content/uploads/2021/07/WhatsApp-Image-2021-07-23-at-11.14.24-768x730.jpeg"></img>
          </div>
          <div className="sliderContent">
            <h3>PERFECCIONAMIENTO PROFESIONAL</h3>
          </div>
          <div className="sliderContent">
            <h3>ESPECIALIZACIÓN PROFESIONAL</h3>
          </div>
        </Slider>
      </div>
    );
  }
}