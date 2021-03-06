import { ErrorMessage, Field, Form, Formik } from "formik";
import { Button, PageHeading } from "globalComponents";
import React, { useRef, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import { postFormData, putFormData } from "service/apiClient";
import {
  editAnimal,
  getCattleIdByEarTag,
  postAnimalForm
} from "service/constants";
import { addAnimalSchema } from "utils/validationSchema";
import { UploadPicture } from "./components";

const AddAnimalPage = ({
  mode = "add",
  prefilledInfo = undefined,
  onSuccess = null,
}) => {
  const [isSubmitting, setSubmitting] = useState(false);
  const [animalImage, setAnimalImage] = useState(prefilledInfo?.picture);
  const [refreshImage, setRefreshImage] = useState(false);
  const earTagRef = useRef();

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
      formData.append("picture", animalImage);
      Object.keys(params).forEach((key) => {
        formData.append(key, params[key]);
      });
      let {
        data: { error, message },
      } = await postFormData(postAnimalForm, formData);
      setSubmitting(false);

      if (!error) {
        formik.resetForm();
        setAnimalImage("");
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
    if (!animalImage) {
      toast.warn("Please select animal picture");
      return;
    }
    setSubmitting(true);
    try {
      let params = {
        ...values,
      };

      let formData = new FormData();
      Object.keys(params).map((key) => formData.append(key, params[key]));

      if (typeof animalImage !== "string")
        formData.append("picture", animalImage);

      let {
        data: { error, message },
      } = await putFormData(`${editAnimal}/${prefilledInfo?._id}`, formData);
      setSubmitting(false);

      if (!error) {
        formik.resetForm();
        setAnimalImage("");
        setRefreshImage((prevValue) => !prevValue);
        onSuccess();
        toast.success(message);
      } else {
        toast.warn(message);
      }
    } catch (err) {
      setSubmitting(false);
      toast.error("Something went wrong");
    }
  };

  const handleEartagPicUpload = async (e, setFieldValue) => {
    let file = e.target?.files[0];
    if (!file) return;
    let formData = new FormData();
    formData.append("picture", file);
    try {
      let {
        data: { error, message },
      } = await postFormData(getCattleIdByEarTag, formData);

      if (!error) {
        toast.success(message);
      } else {
        toast.warn(message);
      }
    } catch (err) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="container-fluid">
      {mode === "add" && <PageHeading text="Add Animals" />}
      <UploadPicture
        refreshImage={refreshImage}
        initialImage={prefilledInfo?.picture}
        onChange={(e) =>
          setAnimalImage(e?.target?.files ? e?.target.files[0] : "")
        }
      />

      <Formik
        onSubmit={mode === "edit" ? handleEditAnimal : handleAddAnimal}
        enableReinitialize
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
        {({ touched, errors, setFieldValue }) => (
          <div className="mt-5">
            <Form>
              <div className="mt-2 row gy-3">
                <div className="col-xs-12 col-sm-6 position-relative">
                  <label className="mb-2">Cattle Id</label>
                  <Field
                    disabled={mode === "edit"}
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
                  {/* {getUploadIcon(() => earTagRef.current.click())} */}
                </div>
                {/* <div className="col-xs-12 col-sm-6">
                  <label className="mb-2">EarTag</label>
                  <Field
                    ref={earTagRef}
                    type="file"
                    name="earTag"
                    placeholder="Upload picture of Ear Tag"
                    onChange={(e) => handleEartagPicUpload(e, setFieldValue)}
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

const getUploadIcon = (onClick) => (
  <svg
    onClick={onClick}
    style={{ position: "absolute", right: 20, top: 50, cursor: "pointer" }}
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-upload"
    viewBox="0 0 16 16"
  >
    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
    <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" />
  </svg>
);

export default AddAnimalPage;
