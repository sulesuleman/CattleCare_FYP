import { useRoleAuth } from "contexts";
import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import PaymentScreen, { SubscriptionModal } from "./paymentScreen";
import { GreenUnderline } from "..";
import { greyishWhiteColor } from "../../globalStyles/globalStyle";
import { PricingCard } from "../../pages/landingPage/components/pricingCard";
import "./index.css";
import { useHistory } from "react-router";

const PricingSection = () => {
  const [selectedPlan, setselectedPlan] = useState();


  const plans = [
    {
      planName: "50 Cattle Package",
      price: "99",
      options: ["15 days free trial", "Within trial period cancel time"],
    },
    {
      planName: "150 Cattle Package",
      price: "199",
      options: ["15 days trial", "Within trail period cancel any time"],
    },
    {
      planName: "300 Cattle Package",
      price: "299",
      options: ["15 days trial", "Within trail period cancel any time"],
    },
  ];

  return (
    <div
      className="pricing_section_container"
    >
      {selectedPlan ? (
        <PaymentScreen
          selectedPlan={selectedPlan}
          goBack={() => setselectedPlan("")}
        />
      ) : (
        <Container className="d-flex flex-column align-items-center">
          <p className="subHeading">Our Special Plan</p>
          <h1 className="heading mt-2 mb-3">Our Pricing</h1>
          <GreenUnderline />
          <Row className="gx-3 gy-3 w-100 mt-1">
            {plans.map((plan) => (
              <PricingCard
                {...{
                  ...plan,
                  onClick: () => {                    
                    setselectedPlan(plan);
                  },
                }}
              />
            ))}
          </Row>
        </Container>
      )}
    </div>
  );
};

export default PricingSection;
