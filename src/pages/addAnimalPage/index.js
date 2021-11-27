import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
import { Button, Col, Row } from "react-bootstrap";
import { addAnimalSchema } from "../../utils/validationSchema";
import { PageHeading } from "globalComponents";
import { UploadPicture } from "./components";

const AddAnimalPage = ({ mode = "add" }) => {
  const [isSubmitting, setSubmitting] = useState(false);
  const [animalImage, setAnimalImage] = useState();

  const getInputClasses = (touched, fieldname, errors) => {
    if (touched[fieldname] && errors[fieldname]) {
      return "is-invalid";
    }

    if (touched[fieldname] && !errors[fieldname]) {
      return "is-valid";
    }

    return "";
  };

  return (
    <div className="container-fluid">
      {mode === "add" && <PageHeading text="Add Animals" />}
      <Formik
        //   onSubmit={handleSignupSubmit}
        validationSchema={addAnimalSchema}
        initialValues={{
          weight: "",
          age: "",
          breedType: "",
          cattleType: "",
          sex: "",
          price: "",
          anticipationDate: "",
          childCount: "",
        }}
      >
        {({ submitForm, touched, errors }) => (
          <div className="mt-5">
            <Form>
              <UploadPicture onChange={(img) => setAnimalImage(img)} />
              <div className="mt-2 row gy-3">
                <div className="col-xs-12 col-sm-6">
                  <label className="mb-2">Cattle Id</label>
                  <Field
                    name="cattleId"
                    type="text"
                    className={getInputClasses(touched, "cattleId", errors)}
                    placeholder="Animal Id"
                  />
                  <ErrorMessage
                    component="div"
                    name="cattleId"
                    className="error"
                  />
                </div>
                <div className="col-xs-12 col-sm-6">
                  <label className="mb-2">EarTag</label>
                  <Field
                    type="file"
                    name="earTag"
                    placeholder="Upload picture of Ear Tag"
                    className={`${getInputClasses(
                      touched,
                      "earTag",
                      errors
                    )} d-flex justify-items-center`}
                  />
                  <ErrorMessage
                    component="div"
                    name="earTag"
                    className="error"
                  />
                </div>
              </div>
              <div className="row gy-3">
                <div className="col-xs-12 col-sm-6">
                  <label className="mb-2">Weight</label>
                  <Field
                    name="weight"
                    className={getInputClasses(touched, "weight", errors)}
                    placeholder="eg 94kg"
                  />
                  <ErrorMessage
                    component="div"
                    name="weight"
                    className="error"
                  />
                </div>
                <div className="col-xs-12 col-sm-6">
                  <label className="mb-2">Age</label>
                  <Field
                    name="age"
                    placeholder="Enter Age"
                    className={getInputClasses(touched, "age", errors)}
                  />
                  <ErrorMessage component="div" name="age" className="error" />
                </div>
              </div>

              <div className="mt-2">
                <Row className="gy-3">
                  <Col xs={12} sm={6}>
                    <label className="mb-2">Breed Type</label>
                    <Field
                      name="breedType"
                      placeholder="eg Bafallo, Cow"
                      type="password"
                      className={getInputClasses(touched, "breedType", errors)}
                    />
                    <ErrorMessage
                      component="div"
                      name="breedType"
                      className="error"
                    />
                  </Col>
                  <Col xs={12} sm={6}>
                    <label className="mb-2">Cattle Type</label>
                    <Field
                      name="cattleType"
                      placeholder="Please Enter Cattle Type"
                      type="text"
                      className={getInputClasses(touched, "cattleType", errors)}
                    />
                    <ErrorMessage
                      component="div"
                      name="cattleType"
                      className="error"
                    />
                  </Col>
                </Row>
              </div>
              <div className="mt-2">
                <Row className="gy-3">
                  <Col xs={12} sm={6}>
                    <label>Sex</label>
                    <Field
                      name="sex"
                      placeholder="Please Enter Sex"
                      type="text"
                      className={getInputClasses(touched, "sex", errors)}
                    />
                    <ErrorMessage
                      component="div"
                      name="sex"
                      className="error"
                    />
                  </Col>
                  <Col xs={12} sm={6}>
                    {" "}
                    <label>Price</label>
                    <Field
                      name="price"
                      placeholder="Please Enter price"
                      type="text"
                      className={getInputClasses(touched, "price", errors)}
                    />
                    <ErrorMessage
                      component="div"
                      name="price"
                      className="error"
                    />
                  </Col>
                </Row>
              </div>
              <div className="mt-2">
                <Row className="gy-3">
                  <Col xs={12} sm={6}>
                    <label className="mb-2">Anticipation Date</label>
                    <Field
                      name="anticipationDate"
                      placeholder="Please Enter anticipation date"
                      type="date"
                      className={getInputClasses(
                        touched,
                        "anticipationDate",
                        errors
                      )}
                    />
                    <ErrorMessage
                      component="div"
                      name="anticipationDate"
                      className="error"
                    />
                  </Col>
                  <Col xs={12} sm={6}>
                    <label className="mb-2">Child Count</label>
                    <Field
                      name="childCount"
                      placeholder="Please Enter Child count"
                      type="text"
                      className={getInputClasses(touched, "childCount", errors)}
                    />
                    <ErrorMessage
                      component="div"
                      name="childCount"
                      className="error"
                    />
                  </Col>
                </Row>
              </div>
              <div style={{ marginTop: 30 }}>
                <Button
                  size="large"
                  type="primary"
                  className="full_expanded_btn_green"
                  onClick={submitForm}
                  loading={isSubmitting}
                >
                  {mode === "edit" ? "Edit" : "Add"} Animal
                </Button>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default AddAnimalPage;
