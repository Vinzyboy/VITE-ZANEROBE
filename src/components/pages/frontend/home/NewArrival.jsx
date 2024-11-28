import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { imgPath } from "@/components/helpers/functions-general";
import CardItem from "./CardItem";

const NewArrival = () => {
  const NewArrivalArray = [
    {
      img1: "na-card-a1.jpg",
      img2: "na-card-a2.jpg",
      title: "lorem ipsum",
      price: "7,700 PHP",
    },
    {
      img1: "na-card-a2.jpg",
      img2: "na-card-a1.jpg",
      title: "lorem ipsum",
      price: "7,700 PHP",
    },
    {
      img1: "na-card-a1.jpg",
      img2: "na-card-a2.jpg",
      title: "lorem ipsum",
      price: "7,700 PHP",
    },
    {
      img1: "na-card-a2.jpg",
      img2: "na-card-a1.jpg",
      title: "lorem ipsum",
      price: "7,700 PHP",
    },
    {
      img1: "na-card-a1.jpg",
      img2: "na-card-a2.jpg",
      title: "lorem ipsum",
      price: "7,700 PHP",
    },
    {
      img1: "na-card-a2.jpg",
      img2: "na-card-a1.jpg",
      title: "lorem ipsum",
      price: "7,700 PHP",
    },
  ];

  var settings = {
    dots: true,
    infinite: true,
    autoplaySpeed: 1500,
    arrows: false,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 4,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="new-arrival py-10">
      <div className="container">
        <Slider {...settings}>
          {NewArrivalArray.map((item, key) => (
            <CardItem item={item} key={key} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default NewArrival;
