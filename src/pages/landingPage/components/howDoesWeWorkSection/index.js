import React from "react";
import { Container } from "react-bootstrap";
import { GreenUnderline } from "../../../../globalComponents";
import "./index.css";

const HowDoesItWorkSection = () => {
  return (
    <div className="htw_section_container">
      <Container className="d-flex flex-column align-items-center">
        <p className="subHeading">Working Process</p>
        <h1 className="heading mt-2 mb-3">How Does We Work</h1>
        <GreenUnderline />
      </Container>
    </div>
  );
};

export default HowDoesItWorkSection;
