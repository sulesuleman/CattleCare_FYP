import { PageHeading } from "globalComponents";
import React, { useState } from "react";
import { Modal, Button, Row, Col, Spinner } from "react-bootstrap";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  ElementsConsumer,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import "./index.css";
import { postRequest } from "service/apiClient";
import { chargeAmount } from "service/constants";
import { toast } from "react-toastify";
import { useRoleAuth } from "contexts";
import axios from "axios";
import { local } from "service/axiosInstance";

const stripePromise = loadStripe(
  "pk_test_51K1ySoJ1prFpsgEslaTH4ioqIgttABEHcwbtIWbTb7XZXxw0yVChZMFULdWuSWnKjYEYIBC568uaY5hWRe5XpjrG00OI52iFp7"
);

const PaymentScreen = ({ selectedPlan, goBack }) => {
  return (
    <Elements stripe={stripePromise}>
      <div className="subscription_modal_container">
        <Row>
          <Col xs={12} sm={6}>
            <Row className="gy-4">
              <Col xs={12}>
                <h4 className="item_label">Plan Name</h4>
                <p className="item_value">{selectedPlan?.planName}</p>
              </Col>
              <Col xs={12}>
                {" "}
                <h4 className="item_label">Price</h4>
                <p className="item_value">{selectedPlan?.price}</p>
              </Col>
              <Col xs={12}>
                {" "}
                <h4 className="item_label">Options</h4>
                {selectedPlan?.options &&
                  selectedPlan.options.map((option) => (
                    <p className="item_value">{option}</p>
                  ))}
              </Col>
            </Row>
          </Col>
          <Col xs={12} sm={6}>
            <StripeFormWrapper selectedPlan={selectedPlan} goBack={goBack} />
          </Col>
        </Row>
      </div>
    </Elements>
  );
};

const StripeForm = ({ stripe, elements, selectedPlan, goBack }) => {
  const [processing, setProcessing] = useState(false);
  const { user, createSession } = useRoleAuth();

  const handleSubmit = async () => {
    try {
      if (!stripe || !elements) {
        return;
      }
      setProcessing(true);
      const cardNumberElement = elements.getElement(CardNumberElement);
      const response = await stripe.createToken(cardNumberElement);
      if (response.error) {
        setProcessing(false);
        toast.warn(response?.error?.message);
        return;
      }
      const {
        data: { error, message, data },
      } = await postRequest(
        chargeAmount,
        {
          amount: selectedPlan?.price,
          source: response?.token?.id,
          receipt_email: user?.email,
          subscriptionPlan: selectedPlan,
        },
        true,
        user?.token
      );
      setProcessing(false);

      if (!error) {
        toast.success(message);
        createSession();
      } else {
        toast.warn(message);
      }
    } catch (err) {
      setProcessing(false);
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <div>
        <label>Enter Card Number</label>
        <CardNumberElement className="card_input" />
      </div>
      <div>
        <label>Enter Card Expiry</label>

        <CardExpiryElement className="card_input" />
      </div>
      <div>
        <label>Enter Card Cvc</label>
        <CardCvcElement className="card_input" />
      </div>
      <div className="d-flex align-items-center  mt-3">
        <Button
          className="btn_green"
          variant="primary"
          onClick={() => handleSubmit()}
          disabled={processing}
        >
          Subscribe{" "}
          {processing && (
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />
          )}
        </Button>
        <Button
          onClick={goBack}
          style={{ marginLeft: 10 }}
          variant={"secondary"}
        >
          Go Back
        </Button>
      </div>
    </>
  );
};

const StripeFormWrapper = ({ selectedPlan, goBack }) => (
  <ElementsConsumer>
    {({ stripe, elements }) => (
      <StripeForm
        goBack={goBack}
        stripe={stripe}
        elements={elements}
        selectedPlan={selectedPlan}
      />
    )}
  </ElementsConsumer>
);

export default PaymentScreen;
