import React from "react";
import "./index.css";
import { greyishWhiteColor } from "../../../../globalStyles/globalStyle";

const ChooseUsSection = () => {
  return (
    <div
      className="choose_us_container"
      style={{ backgroundColor: greyishWhiteColor }}
    >
      <div className="left_side"></div>
      <div className="right_side">
        <div className="img_overlay"></div>
        <div className="green_overlay"></div>
      </div>
    </div>
  );
};

export default ChooseUsSection;
