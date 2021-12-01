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

const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

const SubscriptionModal = ({ show, handleClose, selectedPlan }) => {
  return (
    <Elements stripe={stripePromise}>
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <PageHeading text="Subscription" />
        </Modal.Header>
        <Modal.Body>
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
                <StripeFormWrapper selectedPlan={selectedPlan} />
              </Col>
            </Row>
          </div>
        </Modal.Body>
      </Modal>
    </Elements>
  );
};

const StripeForm = ({ stripe, elements, selectedPlan }) => {
  const [processing, setProcessing] = useState(false);
  const { user } = useRoleAuth();

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
        data: { error, message },
      } = await postRequest(chargeAmount, {
        amount: selectedPlan?.price,
        source: response?.token?.id,
        receipt_email: user?.email,
      });
      setProcessing(false);

      if (!error) {
        toast.success(message);
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
      <Button
        className="btn_green mt-3"
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
    </>
  );
};

const StripeFormWrapper = ({ selectedPlan }) => (
  <ElementsConsumer>
    {({ stripe, elements }) => (
      <StripeForm
        stripe={stripe}
        elements={elements}
        selectedPlan={selectedPlan}
      />
    )}
  </ElementsConsumer>
);

export default SubscriptionModal;
