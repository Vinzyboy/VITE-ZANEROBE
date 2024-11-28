import React from "react";
import SliderItem from "./SliderItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BannerSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    autoplaySpeed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };
  return (
    <section className="banner-slider">
      <Slider {...settings}>
        <SliderItem
          img="slider1.jpg"
          header="STITCHED FOOTBALL TRACKPANT"
          subheader="LIMITED EDITION ONLINE EXCLUSIVE"
        />
        <SliderItem
          img="slider2.jpg"
          header="GRAPHIC TEES CAPSULE"
          subheader="NEW DROP"
        />
        <SliderItem
          img="slider3.jpg"
          header="THE RIPSTOP FULLOVER"
          subheader="RE-STOCK ALERT"
        />
      </Slider>
    </section>
  );
};

export default BannerSlider;
