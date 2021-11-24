import React from "react";
import { Modal } from "react-bootstrap";
import { PageHeading } from "globalComponents";
import AddAnimalPage from "../../addAnimalPage";

import "./index.css";

const EditAnimalModal = ({ handleClose, show }) => {
  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <PageHeading fontSize={22} text="Edit Animal Record" />
      </Modal.Header>
      <Modal.Body>
        <div className="edit_animal_body">
          <AddAnimalPage mode={"edit"} />
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default EditAnimalModal;
