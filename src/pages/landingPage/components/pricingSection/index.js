import { useRoleAuth } from "contexts";
import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { SubscriptionModal } from "..";
import { GreenUnderline } from "../../../../globalComponents";
import { greyishWhiteColor } from "../../../../globalStyles/globalStyle";
import { PricingCard } from "../pricingCard";
import "./index.css";
import { useHistory } from "react-router";

const PricingSection = () => {
  const [isSubscriptionModalVisible, setIsSubscriptionModalVisible] =
    useState(false);

  const history = useHistory();
  const [selectedPlan, setselectedPlan] = useState({});

  const { authed } = useRoleAuth();

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
      style={{ backgroundColor: greyishWhiteColor }}
      className="pricing_section_container"
    >
      <SubscriptionModal
        selectedPlan={selectedPlan}
        show={isSubscriptionModalVisible}
        handleClose={() => setIsSubscriptionModalVisible(false)}
      />

      <Container className="d-flex flex-column align-items-center">
        <p className="subHeading">Our Special Plan</p>
        <h1 className="heading mt-2 mb-3">Our Pricing</h1>
        <GreenUnderline />
        <Row className="gx-5 gy-5 w-100 mt-5">
          {plans.map((plan) => (
            <PricingCard
              {...{
                ...plan,
                onClick: () => {
                  if (!authed) {
                    history.push("/login-signup");
                    return;
                  }
                  setselectedPlan(plan);
                  setIsSubscriptionModalVisible(true);
                },
              }}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default PricingSection;
