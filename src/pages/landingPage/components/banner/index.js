import React from "react";
import LOGO from "../../../../assets/images/logoHead.png";
import { Button, GreenUnderline } from "../../../../globalComponents";

const Banner = () => (
  <div className="banner_image">
    <div className="banner_overlay">
      <img src={LOGO} width="80" height="auto" alt="" />
      <div className="text-center">
        <h1 className="mt-3">Cattle Care</h1>
        <p>Your cattle is our priority</p>
      </div>
      <Button text="Get a Quote" classNames="green_btn" type="button"></Button>
      <GreenUnderline />
    </div>
  </div>
);

export default Banner;
