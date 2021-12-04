import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { Modal, Button, Row, Col } from "react-bootstrap";
import { toast } from "react-toastify";
import { postRequest, putRequest } from "service/apiClient";
import {
  editMedicalHistoryOfAnimal,
  postAnimalHealth,
} from "service/constants";
import { getInputClasses } from "assets/images/helpers";
import { PageHeading } from "globalComponents";
import { addMedicalRecordSchema } from "utils/validationSchema";
import "./index.css";

const AddRecordModal = ({
  show,
  handleClose,
  mode = "add",
  cattleId = "",
  onSuccess,
  selectedRecord,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePostMedicalHistory = async (values, formik) => {
    setIsSubmitting(true);

    try {
      let {
        data: { error, message },
      } = await postRequest(`${postAnimalHealth}`, {
        ...values,
        cattleId,
      });
      setIsSubmitting(false);

      if (!error) {
        toast.success(message);
        onSuccess();
      } else {
        toast.warn(message);
      }
    } catch (err) {
      setIsSubmitting(false);
      toast.error("Something went wrong");
    }
  };

  const handleEditMedicalHistory = async (values) => {
    setIsSubmitting(true);

    try {
      let {
        data: { error, message },
      } = await putRequest(
        `${editMedicalHistoryOfAnimal}/${selectedRecord?._id}`,
        {
          ...values,
          cattleId,
        }
      );
      setIsSubmitting(false);

      if (!error) {
        toast.success(message);
        onSuccess();
      } else {
        toast.warn(message);
      }
    } catch (err) {
      setIsSubmitting(false);
      toast.error("Something went wrong");
    }
  };

  return (
    <Formik
      onSubmit={
        mode === "edit" ? handleEditMedicalHistory : handlePostMedicalHistory
      }
      validationSchema={addMedicalRecordSchema}
      initialValues={
        mode === "edit"
          ? selectedRecord
          : {
              vaccinationType: "",
              vaccinationDate: "",
              vaccinationPeriod: "",
              diseaseType: "",
              diseaseDate: "",
              recoveryStatus: "",
            }
      }
    >
      {(formik) => {
        let { submitForm } = formik;
        return (
          <Modal show={show} onHide={handleClose} size="lg">
            <Modal.Header closeButton>
              <PageHeading
                fontSize={22}
                text={`${mode === "add" ? "Add" : "Edit"} Medical Record`}
              />
            </Modal.Header>
            <Modal.Body className="add_record_body">
              <div>
                <div className="mt-2">
                  <Form>
                    <div className="row gy-2">
                      <div className="col-xs-12 col-md-6">
                        <label className="mb-2">Vaccination Type</label>
                        <Field
                          name="vaccinationType"
                          className={getInputClasses(formik, "vaccinationType")}
                          placeholder="eg Phizer"
                        />
                        <ErrorMessage
                          component="div"
                          name="vaccinationType"
                          className="error"
                        />
                      </div>
                      <div className="col col-xs-12 col-md-6">
                        <label className="mb-2">Vaccination Date</label>
                        <Field
                          name="vaccinationDate"
                          type="date"
                          placeholder="Enter Date"
                          className={getInputClasses(formik, "vaccinationDate")}
                        />
                        <ErrorMessage
                          component="div"
                          name="vaccinationDate"
                          className="error"
                        />
                      </div>
                    </div>
                    <div style={{ marginTop: 20 }}>
                      <Row className="gy-2">
                        <Col xs={12} sm={6}>
                          <label className="mb-2">Disease Type</label>
                          <Field
                            name="diseaseType"
                            type=""
                            placeholder="eg Ankle injury"
                            className={getInputClasses(formik, "diseaseType")}
                          />
                          <ErrorMessage
                            component="div"
                            name="diseaseType"
                            className="error"
                          />
                        </Col>
                        <Col xs={12} sm={6}>
                          <label className="mb-2">Vaccination Period</label>
                          <Field
                            name="vaccinationPeriod"
                            placeholder="Please enter period"
                            type="text"
                            className={getInputClasses(
                              formik,
                              "vaccinationPeriod"
                            )}
                          />
                          <ErrorMessage
                            component="div"
                            name="vaccinationPeriod"
                            className="error"
                          />
                        </Col>
                      </Row>
                    </div>
                    <div style={{ marginTop: 20 }}>
                      <Row className="gy-2">
                        <Col xs={12} sm={6}>
                          <label>Disease Date</label>
                          <Field
                            name="diseaseDate"
                            placeholder="Please Enter Date"
                            type="date"
                            className={getInputClasses(formik, "diseaseDate")}
                          />
                          <ErrorMessage
                            component="div"
                            name="diseaseDate"
                            className="error"
                          />
                        </Col>
                        <Col xs={12} sm={6}>
                          {" "}
                          <label>Recovery Status</label>
                          <Field
                            name="recoveryStatus"
                            placeholder="Please Enter status"
                            type="text"
                            className={getInputClasses(
                              formik,
                              "recoveryStatus"
                            )}
                          />
                          <ErrorMessage
                            component="div"
                            name="recoveryStatus"
                            className="error"
                          />
                        </Col>
                      </Row>
                    </div>
                  </Form>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button
                variant="primary"
                className="btn_green"
                onClick={submitForm}
              >
                Save
              </Button>
            </Modal.Footer>
          </Modal>
        );
      }}
    </Formik>
  );
};

export default AddRecordModal;
