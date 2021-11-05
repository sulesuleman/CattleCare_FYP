import React, { Component } from "react";
import Slider from "react-slick";
import BannerCard from "../bannerCard";

class BannerCarousel extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: false,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <div>
        <Slider {...settings}>
          <BannerCard />
          <BannerCard />

          <BannerCard />
          <BannerCard />
        </Slider>
      </div>
    );
  }
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  console.log("className", className);
  return (
    // <div
    //   className={className}
    //   style={{ ...style, display: "block", background: "red" }}
    //   onClick={onClick}
    // />
    <img
      width="40"
      height="40"
      alt=""
      className={className}
      src={
        "https://cdn3.iconfinder.com/data/icons/arrows-part-2-3/64/_Round_Arrow_Right-512.png"
      }
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

export default BannerCarousel;
