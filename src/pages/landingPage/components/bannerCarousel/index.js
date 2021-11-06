import React, { Component } from "react";
import Carousel from "react-multi-carousel";
import BannerCard from "../bannerCard";
import "react-multi-carousel/lib/styles.css";

class BannerCarousel extends Component {
  render() {
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        items: 5,
        breakpoint: { max: 4000, min: 3000 },
        slidesToSlide: 5,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1
      },
    };
    return (
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={false}
        showDots={false}
        // ssr={true} // means to render carousel on server-side.
        // infinite={true}
        autoPlay={false}
        // autoPlay={props.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="transform 300ms ease-in-out"
        transitionDuration={200}
        containerClass="carousel-container"
        renderArrowsWhenDisabled={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={props.deviceType}
        // dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        // className="my-5"
        renderButtonGroupOutside={true}
      >
        <BannerCard step={'Step 1'}
          description="Lorem Ipsum is simply dummy text of the printing and type setting
            industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
        scramble"
        />
        <BannerCard step={'Step 2'}
          description="Lorem Ipsum is simply dummy text of the printing and type setting
            industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
        scramble"/>
        <BannerCard step={'Step 3'}
          description="Lorem Ipsum is simply dummy text of the printing and type setting
            industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
        scramble"/>
        <BannerCard step={'Step 4'}
          description="Lorem Ipsum is simply dummy text of the printing and type setting
            industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
        scramble"/>

      </Carousel>
    )
  }
}

export default BannerCarousel;
