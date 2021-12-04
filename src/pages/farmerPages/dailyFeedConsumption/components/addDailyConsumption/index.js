import { ErrorMessage, Field, Formik } from "formik";
import { PageHeading } from "globalComponents";
import React, { useEffect, useState } from "react";
import { Form, Modal, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { getRequest, postRequest } from "service/apiClient";
import { getFeeds, postDailyFeed } from "service/constants";

const AddDailyFeedConsumptionModal = ({ onHide, onSuccess }) => {
  const [feedsDDValues, setFeedsDDValues] = useState([]);
  const [selectedFeedIndex, setselectedFeedIndex] = useState(0);
  useEffect(() => {
    const init = async () => {
      try {
        const {
          data: {
            error,
            message,
            data: { feeds },
          },
        } = await getRequest(getFeeds);
        if (!error) {
          setFeedsDDValues(feeds);
        } else {
          toast.warn(message);
        }
      } catch (err) {
        toast.error("Something went wrong");
      }
    };
    init();
  }, []);

  const handleSubmit = async (values) => {
    try {
      let {
        data: { error, message },
      } = await postRequest(postDailyFeed, { ...values });
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
    let { feedId, quantity, price } = values;
    let errors = {};
    if (!feedId) errors.feedId = "Please Select field";
    if (!quantity) errors.quantity = "Please enter quantity";
    if (quantity > feedsDDValues[selectedFeedIndex]?.quantity)
      errors.quantity = "Quantity should be less than available quantity";
    if (!price) errors.price = "Please enter price";
    if (price > feedsDDValues[selectedFeedIndex]?.price)
      errors.price = "Price should be less than available price";

    return errors;
  };

  return (
    <div>
      {feedsDDValues.length > 0 && (
        <Formik
          enableReinitialize
          initialValues={{
            feedId: feedsDDValues[selectedFeedIndex]?._id,
            quantity: feedsDDValues[selectedFeedIndex]?.quantity,
            price: feedsDDValues[selectedFeedIndex]?.price,
          }}
          onSubmit={handleSubmit}
          validate={validateForm}
        >
          {({ submitForm, touched, errors, handleChange, handleBlur }) => (
            <Modal show={true} onHide={onHide}>
              <Modal.Header>
                <PageHeading fontSize={22} text="Add Daily Feed" />
              </Modal.Header>
              <Modal.Body>
                <label>Feed</label>
                <Form.Select
                  onBlur={handleBlur}
                  onChange={(e) => {
                    console.log(
                      "selected index",
                      e.nativeEvent.target.selectedIndex
                    );
                    setselectedFeedIndex(e.nativeEvent.target.selectedIndex);
                    handleChange(e);
                  }}
                  aria-label="Default select example"
                >
                  {feedsDDValues.map(({ id, feedName }) => (
                    <option value={id}>{feedName}</option>
                  ))}
                </Form.Select>
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
                <ErrorMessage
                  component="div"
                  name="quantity"
                  className="error"
                />
              </Modal.Body>
              <Modal.Footer>
                <Button className="btn_green" onClick={submitForm}>
                  Submit
                </Button>
              </Modal.Footer>
            </Modal>
          )}
        </Formik>
      )}
    </div>
  );
};

export default AddDailyFeedConsumptionModal;
