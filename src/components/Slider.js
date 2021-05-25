import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../components/homeSlider.css';

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
      <div className="homeSlider">
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div className="sliderContent">
            <h3>AD MAJOREM PATRIAE GLORIAM</h3>
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