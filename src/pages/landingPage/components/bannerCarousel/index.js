import React, { Component } from "react";
import Slider from "react-slick";
import BannerCard from "../bannerCard";
import "./index.css";

class BannerCarousel extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: false,
      nextArrow: <CustomRightArrow />,
      prevArrow: <CustomLeftArrow />,
      responsive: [
        {
          breakpoint: 680,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div>
        <Slider {...settings}>
          <BannerCard
            step={"Step 4"}
            description="Lorem Ipsum is simply dummy text of the printing and type setting
            industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
        scramble"
          />

          <BannerCard
            step={"Step 4"}
            description="Lorem Ipsum is simply dummy text of the printing and type setting
            industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
        scramble"
          />
          <BannerCard
            step={"Step 4"}
            description="Lorem Ipsum is simply dummy text of the printing and type setting
            industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
        scramble"
          />

          <BannerCard
            step={"Step 4"}
            description="Lorem Ipsum is simply dummy text of the printing and type setting
            industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
        scramble"
          />
        </Slider>
      </div>
    );
  }
}
const CustomLeftArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      onClick={onClick}
      className={`${className} client_arrow`}
      style={{ ...style }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="15">
        <path d="M501.333 245.333H36.417l141.792-141.792c4.167-4.167 4.167-10.917 0-15.083-4.167-4.167-10.917-4.167-15.083 0l-160 160c-4.167 4.167-4.167 10.917 0 15.083l160 160a10.634 10.634 0 007.542 3.125c2.729 0 5.458-1.042 7.542-3.125 4.167-4.167 4.167-10.917 0-15.083L36.417 266.667h464.917c5.896 0 10.667-4.771 10.667-10.667s-4.772-10.667-10.668-10.667z" />
      </svg>
    </div>
  );
};

const CustomRightArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      onClick={onClick}
      className={`${className} client_arrow`}
      style={{ ...style }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="15">
        <path d="M508.875 248.458l-160-160c-4.167-4.167-10.917-4.167-15.083 0-4.167 4.167-4.167 10.917 0 15.083l141.792 141.792H10.667C4.771 245.333 0 250.104 0 256s4.771 10.667 10.667 10.667h464.917L333.792 408.458c-4.167 4.167-4.167 10.917 0 15.083a10.634 10.634 0 007.542 3.125c2.729 0 5.458-1.042 7.542-3.125l160-160c4.166-4.166 4.166-10.916-.001-15.083z" />
      </svg>
    </div>
  );
};

export default BannerCarousel;
