import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { Modal, Button, Row, Col } from "react-bootstrap";
import { getInputClasses } from "../../../../../assets/images/helpers";
import { PageHeading } from "../../../../../globalComponents";
import { addMedicalRecordSchema } from "../../../../../utils/validationSchema";
import "./index.css";

const AddRecordModal = ({ show, handleClose, mode = "add" }) => {
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
          <Formik
            //   onSubmit={handleSignupSubmit}
            validationSchema={addMedicalRecordSchema}
            initialValues={{
              vaccinationType: "",
              vaccinationDate: "",
              vaccinationPeriod: "",
              diseaseType: "",
              diseaseDate: "",
              recoverStatus: "",
            }}
          >
            {(formik) => {
              // let { submitForm, touched } = formik;
              return (
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
                            placeholder="Please Enter Sex"
                            type="text"
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
                          <label>Recover Status</label>
                          <Field
                            name="recoverStatus"
                            placeholder="Please Enter status"
                            type="text"
                            className={getInputClasses(formik, "recoverStatus")}
                          />
                          <ErrorMessage
                            component="div"
                            name="recoverStatus"
                            className="error"
                          />
                        </Col>
                      </Row>
                    </div>
                  </Form>
                </div>
              );
            }}
          </Formik>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" className="btn_green" onClick={handleClose}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddRecordModal;
