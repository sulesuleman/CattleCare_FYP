import { ErrorMessage, Field, Formik } from "formik";
import { PageHeading } from "globalComponents";
import React, { useEffect, useState } from "react";
import { Form, Modal, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { getRequest, postRequest } from "service/apiClient";
import { getAnimals, postDailyYield } from "service/constants";

const AddDailyYieldConsumptionModal = ({ onHide, onSuccess }) => {
  // const [yieldsDDValues, setYieldsDDValues] = useState([]);
  // const [selectedYieldIndex, setselectedYieldIndex] = useState(0);
  // useEffect(() => {
  //   const init = async () => {
  //     try {
  //       const {
  //         data: {
  //           error,
  //           message,
  //           data: { animals },
  //         },
  //       } = await getRequest(getAnimals);
  //       if (!error) {
  //         setYieldsDDValues(animals);
  //       } else {
  //         toast.warn(message);
  //       }
  //     } catch (err) {
  //       toast.error("Something went wrong");
  //     }
  //   };
  //   init();
  // }, []);

  const handleSubmit = async (values) => {
    try {
      let {
        data: { error, message },
      } = await postRequest(postDailyYield, { ...values });
      if (!error) {
        toast.success(message);
        onSuccess();
      } else {
        toast.warn(message);
      }
    } catch (err) {
      toast.error("Something went wrong");
    }
  };

  const getInputClasses = (touched, fieldname, errors) => {
    if (touched[fieldname] && errors[fieldname]) {
      return "is-invalid";
    }

    if (touched[fieldname] && !errors[fieldname]) {
      return "is-valid";
    }

    return "";
  };

  const validateForm = (values) => {
    let { yieldType, quantity, price } = values;
    let errors = {};
    // if (!animalId) errors.animalId = "Please Select field";
    if (!quantity) errors.quantity = "Please enter quantity";
    if (!price) errors.price = "Please enter price";
    if (!yieldType) errors.yieldType = "Please enter yieldType";

    return errors;
  };

  return (
    <div>
      {/* {yieldsDDValues.length > 0 && ( */}
      <Formik
        enableReinitialize
        initialValues={{
          // animalId: yieldsDDValues[selectedYieldIndex]?._id,
          quantity: "",
          price: "",
        }}
        onSubmit={handleSubmit}
        validate={validateForm}
      >
        {({ submitForm, touched, errors, handleChange, handleBlur }) => (
          <Modal show={true} onHide={onHide}>
            <Modal.Header>
              <PageHeading fontSize={22} text="Add Daily Yield" />
            </Modal.Header>
            <Modal.Body>
              {/* <label>Animal</label>
              <Form.Select
                  onBlur={handleBlur}
                  onChange={(e) => {
                    console.log(
                      "selected index",
                      e.nativeEvent.target.selectedIndex
                    );
                    setselectedYieldIndex(e.nativeEvent.target.selectedIndex);
                    handleChange(e);
                  }}
                  aria-label="Default select example"
                >
                  {yieldsDDValues.map(({ _id, breedType, cattleId }) => (
                    <option value={_id}>{breedType + " " + cattleId}</option>
                  ))}
                </Form.Select> */}
              <label>Yield Type</label>
              <Field
                name="yieldType"
                className={getInputClasses(touched, "yieldType", errors)}
                placeholder="eg Milk, Butter"
              />
              <ErrorMessage
                component="div"
                name="yieldType"
                className="error"
              />
              <label style={{ marginTop: 20 }}>Price</label>
              <Field
                name="price"
                className={getInputClasses(touched, "price", errors)}
                placeholder="Please Enter Price"
              />
              <ErrorMessage component="div" name="price" className="error" />
              <label style={{ marginTop: 20 }}>Quantity</label>
              <Field
                name="quantity"
                className={getInputClasses(touched, "quantity", errors)}
                placeholder="Please Enter Quantity"
              />
              <ErrorMessage component="div" name="quantity" className="error" />
            </Modal.Body>
            <Modal.Footer>
              <Button className="btn_green" onClick={submitForm}>
                Submit
              </Button>
            </Modal.Footer>
          </Modal>
        )}
      </Formik>
      {/* )} */}
    </div>
  );
};

export default AddDailyYieldConsumptionModal;
