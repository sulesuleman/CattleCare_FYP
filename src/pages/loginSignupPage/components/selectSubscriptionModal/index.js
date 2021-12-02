import { PageHeading, PricingSection } from "globalComponents";
import React from "react";
import { Modal } from "react-bootstrap";
import "./index.css";

const SelectSubscriptionModal = ({ show, handleClose }) => {
  return (
    <div className="subscription_modal">
      <Modal style={{ padding: 0 }} size="xl" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <PageHeading text="Subscription Plan" fontSize={26} />
        </Modal.Header>
        <Modal.Body>
          <PricingSection />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default SelectSubscriptionModal;
