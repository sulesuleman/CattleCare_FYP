import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import { getInputClasses } from "../../../../assets/images/helpers";
import { PageHeading } from "../../../../globalComponents";
import { addFeedSchema } from "../../../../utils/validationSchema";
import "./index.css";

const AddFeedModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
          <PageHeading fontSize={22} text="Add Feed" />
      </Modal.Header>
      <Modal.Body className="add_record_body">
        <div>
          <Formik
            //   onSubmit={handleSignupSubmit}
            validationSchema={addFeedSchema}
            initialValues={{
              feedName: "",
              feedType: "",
              feedBrand: "",
              quantity: "",
              price: "",
              date: "",
            }}
          >
            {(formik) => {
              // let { submitForm, touched } = formik;
              return (
                <div className="mt-2">
                  <Form>
                    <div className="row gy-2">
                      <div className="col-xs-12 col-md-6">
                        <label className="mb-2">Feed Name</label>
                        <Field
                          name="feedName"
                          className={getInputClasses(formik, "feedName")}
                          placeholder="eg fauji fertilizers"
                        />
                        <ErrorMessage
                          component="div"
                          name="feedName"
                          className="error"
                        />
                      </div>
                      <div className="col col-xs-12 col-md-6">
                        <label className="mb-2">Feed Type</label>
                        <Field
                          name="feedType"
                          type="text"
                          placeholder="Enter Feed Type"
                          className={getInputClasses(formik, "feedType")}
                        />
                        <ErrorMessage
                          component="div"
                          name="feedType"
                          className="error"
                        />
                      </div>
                    </div>
                    <div style={{ marginTop: 20 }}>
                      <Row className="gy-2">
                        <Col xs={12} sm={6}>
                          <label className="mb-2">Feed Brand</label>
                          <Field
                            name="feedBrand"
                            placeholder="eg Fertilizers"
                            className={getInputClasses(formik, "feedBrand")}
                          />
                          <ErrorMessage
                            component="div"
                            name="feedBrand"
                            className="error"
                          />
                        </Col>
                        <Col xs={12} sm={6}>
                          <label className="mb-2">Quantity</label>
                          <Field
                            name="quantity"
                            placeholder="Please enter quantity"
                            type="number"
                            className={getInputClasses(formik, "quantity")}
                          />
                          <ErrorMessage
                            component="div"
                            name="quantity"
                            className="error"
                          />
                        </Col>
                      </Row>
                    </div>
                    <div style={{ marginTop: 20 }}>
                      <Row className="gy-2">
                        <Col xs={12} sm={6}>
                          <label>price</label>
                          <Field
                            name="price"
                            placeholder="Please Enter price"
                            type="number"
                            className={getInputClasses(formik, "price")}
                          />
                          <ErrorMessage
                            component="div"
                            name="price"
                            className="error"
                          />
                        </Col>
                        <Col xs={12} sm={6}>
                          {" "}
                          <label>Date</label>
                          <Field
                            name="date"
                            placeholder="Please Enter status"
                            type="date"
                            className={getInputClasses(formik, "date")}
                          />
                          <ErrorMessage
                            component="div"
                            name="date"
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

export default AddFeedModal;
