import React from "react";
import "./index.css";
import { greyishWhiteColor } from "../../../../globalStyles/globalStyle";
import { Row, Col } from "react-bootstrap";
import FIRE_IMG from "../../../../assets/images/fire.png";

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
        <div className="right_desc">
          <p>What we do</p>
          <h2>Why Choose Us</h2>
          <Row className="mt-5 mb-2">
            <Col xs={3} className="chooseus_desc_logo">
              <img src={FIRE_IMG} alt="" width="50" height="auto" />
            </Col>
            <Col xs={9} className="chooseus_desc">
              <h4>Exclusive Deals</h4>
              <p className="mt-2">
                We offer lifetime exclusive deals and discounts for limited time
                only.
              </p>
            </Col>
          </Row>
          <Row className="mt-5 mb-2">
            <Col xs={3} className="chooseus_desc_logo">
              <img src={FIRE_IMG} alt="" width="50" height="auto" />
            </Col>
            <Col xs={9} className="chooseus_desc">
              <h4>30 Days Gaurantee</h4>
              <p className="mt-2">
                Money back guarantee for 30 days on our platform.
              </p>
            </Col>
          </Row>
          <Row className="mt-5 mb-2">
            <Col xs={3} className="chooseus_desc_logo">
              <img src={FIRE_IMG} alt="" width="50" height="auto" />
            </Col>
            <Col xs={9} className="chooseus_desc">
              <h4>Secure Payments</h4>
              <p className="mt-2">
                All payments are securely processed through Easypaisa, JazzCash and Mastercard.

              </p>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default ChooseUsSection;
