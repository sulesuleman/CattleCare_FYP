import React from "react";
import "./index.css";

const StatCard = ({ bgColor = "", headingName = "", count = "", txtColor }) => {
  return (
    <div style={{ backgroundColor: bgColor }} className="stat_card">
      <div className="d-flex align-items-center">
        <h3 style={{ color: txtColor }} className="stat_card_heading">
          {headingName}
        </h3>
      </div>
    </div>
  );
};

export default StatCard;
