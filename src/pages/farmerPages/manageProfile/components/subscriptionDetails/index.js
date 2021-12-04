import React from "react";
import { Col, Row } from "react-bootstrap";
import "./index.css";

const SubscriptionDetails = ({ subscriptionPlan }) => {
  return (
    <div className="subscription_detail_container">
      <Row className="mt-3">
        <Col xs={2} sm={3}>
          <p className="subscription_label">Plan:</p>
        </Col>
        <Col sm={3} xs={9}>
          <p className="subscription_value">{subscriptionPlan?.planName}</p>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col xs={2} sm={3}>
          <p className="subscription_label">Price:</p>
        </Col>
        <Col sm={3} xs={9}>
          <p className="subscription_value">{subscriptionPlan?.price}</p>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col xs={2} sm={3}>
          <p className="subscription_label">Options:</p>
        </Col>
        <Col sm={3} xs={9}>
          {subscriptionPlan?.options &&
            subscriptionPlan?.options.map((option, index) => (
              <p className="subscription_value" key={index}>
                {option}
              </p>
            ))}
        </Col>
      </Row>
    </div>
  );
};

export default SubscriptionDetails;

// planName: "50 Cattle Package",
//       price: "99",
//       options
