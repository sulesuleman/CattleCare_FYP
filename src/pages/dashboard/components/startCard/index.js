import React from "react";
import "./index.css";

const StatCard = ({
  bgColor = "",
  headingName = "",
  count = "",
  txtColor,
  children,
}) => {
  return (
    <div style={{ backgroundColor: bgColor }} className="stat_card">
      <>
        <div className="d-flex align-items-center">
          <h3 style={{ color: txtColor }} className="stat_card_heading">
            {headingName}
          </h3>
        </div>
        {children ? (
          <div className="mt-3">{children} </div>
        ) : (
          <p style={{ color: txtColor }} className="stat_card_count">
            {count}
          </p>
        )}
      </>
    </div>
  );
};

export default StatCard;
