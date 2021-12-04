import React from "react";
import { Modal } from "react-bootstrap";
import "./index.css";

import { PageHeading, RegisterForm } from "globalComponents";

const EditProfileModal = ({
  show,
  handleClose,
  initialData = {},
  onSuccess,
}) => {
  return (
    <Modal size="lg" show={show} onHide={handleClose}>
      <Modal.Header>
        <PageHeading text="Edit Profile" />
      </Modal.Header>
      <Modal.Body>
        <RegisterForm
          mode="edit"
          initialData={initialData}
          onSuccess={onSuccess}
        />
      </Modal.Body>
    </Modal>
  );
};

export default EditProfileModal;
