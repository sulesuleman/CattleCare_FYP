import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
import { Col, Row } from "react-bootstrap";
import { addAnimalSchema } from "../../utils/validationSchema";
import { Button, PageHeading } from "globalComponents";
import { UploadPicture } from "./components";
import { toast } from "react-toastify";
import { postFormData, postRequest, putRequest } from "service/apiClient";
import { editAnimal, postAnimalForm } from "service/constants";

const AddAnimalPage = ({ mode = "add", prefilledInfo = undefined }) => {
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

  const handleAddAnimal = async (values, formik) => {
    if (!animalImage) {
      toast.warn("Please select animal picture");
      return;
    }
    setSubmitting(true);
    try {
      let params = {
        ...values,
      };
      console.log("params", params);

      let formData = new FormData();
      formData.append("profilePicture", animalImage);
      Object.keys(params).forEach((key) => {
        formData.append(key, params[key]);
      });
      let {
        data: { error, message },
      } = await postFormData(postAnimalForm, formData);
      setSubmitting(false);

      if (!error) {
        formik.resetForm();
        setAnimalImage();
        toast.success(message);
      } else {
        toast.warn(message);
      }
    } catch (err) {
      setSubmitting(false);
      toast.error("Something went wrong");
    }
  };

  const handleEditAnimal = async (values, formik) => {
    // if (!animalImage) {
    //   toast.warn("Please select animal picture");
    //   return;
    // }
    setSubmitting(true);
    try {
      let params = {
        ...values,
      };

      let {
        data: { error, message },
      } = await putRequest(`${editAnimal}/${prefilledInfo?._id}`, params);
      setSubmitting(false);

      if (!error) {
        formik.resetForm();
        setAnimalImage();
        toast.success(message);
      } else {
        toast.warn(message);
      }
    } catch (err) {
      setSubmitting(false);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="container-fluid">
      {mode === "add" && <PageHeading text="Add Animals" />}
      <Formik
        onSubmit={mode === "edit" ? handleEditAnimal : handleAddAnimal}
        validationSchema={addAnimalSchema}
        initialValues={
          prefilledInfo
            ? { ...prefilledInfo }
            : {
                cattleId: "",
                weight: "",
                age: "",
                breedType: "",
                cattleType: "",
                sex: "",
                price: "",
                anticipationDate: "",
                childCount: "",
              }
        }
      >
        {({ touched, errors }) => (
          <div className="mt-5">
            <Form>
              <UploadPicture
                intialImage={prefilledInfo?.picture}
                onChange={(e) =>
                  setAnimalImage(e?.target?.files ? e?.target.files[0] : "")
                }
              />
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
                {/* <div className="col-xs-12 col-sm-6">
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
                </div> */}
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
                      type="text"
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
