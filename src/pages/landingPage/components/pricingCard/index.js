import React from "react";
import { Col } from "react-bootstrap";
import { Button } from "../../../../globalComponents";
import "./index.css";

export const PricingCard = ({
  planName = "",
  price = "",
  options = ["Manage Animals", "Manage Feed", "Manage Cattle"],
  onClick,
}) => {
  return (
    <Col xs={12} sm={6} md={4}>
      <div className="pricing_card">
        <div className="pricing_heading_container">
          <h3>{planName}</h3>
        </div>
        <div className="price">PKR {price}/month</div>
        <div className="pricing_option_container">
          {options.map((optName) => (
            <div>
              <p>{optName}</p>
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-center align-items-center mt-auto">
          <Button
            text="Get a Quote"
            classNames="green_btn"
            type="button"
            onClick={onClick}
          ></Button>
        </div>
      </div>
    </Col>
  );
};
