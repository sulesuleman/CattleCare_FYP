import React from "react";
import "./index.css";

const BannerCard = ({ step, description }) => {
  return (
   <div className="p-2">
      <div className="banner_card_container">
      <h2>{step}</h2>
      <p className="mt-3">
        {description}
      </p>
    </div>
   </div>
  );
};

export default BannerCard;
