import React from "react";
import { Container, Row } from "react-bootstrap";
import { GreenUnderline } from "../../../../globalComponents";
import { greyishWhiteColor } from "../../../../globalStyles/globalStyle";
import { PricingCard } from "../pricingCard";
import "./index.css";

const PricingSection = () => {
  return (
    <div
      style={{ backgroundColor: greyishWhiteColor }}
      className="pricing_section_container"
    >
      <Container className="d-flex flex-column align-items-center">
        <p className="subHeading">Our Special Plan</p>
        <h1 className="heading mt-2 mb-3">Our Pricing</h1>
        <GreenUnderline />
        <Row className="gx-5 gy-5 w-100 mt-5">
          <PricingCard />
          <PricingCard />
          <PricingCard />
        </Row>
      </Container>
    </div>
  );
};

export default PricingSection;
