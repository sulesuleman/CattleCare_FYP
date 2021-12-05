import { ErrorMessage, Field, Formik } from "formik";
import { PageHeading } from "globalComponents";
import React from "react";
import { Modal, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { postRequest } from "service/apiClient";
import { addExpenses } from "service/constants";

const AddExpenseModal = ({ show, onClose, onSuccess }) => {
  const handleSubmit = async (values) => {
    try {
      let {
        data: { error, message },
      } = await postRequest(addExpenses, { ...values });
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
    let { date, name, amount } = values;
    let errors = {};
    if (!name) errors.name = "Please enter name";
    if (!amount) errors.amount = "Please enter amount";
    if (!date) errors.date = "Please enter date";

    return errors;
  };

  return (
    <div>
      <Formik
        enableReinitialize
        initialValues={{
          name: "",
          date: "",
          amount: "",
        }}
        onSubmit={handleSubmit}
        validate={validateForm}
      >
        {({ submitForm, touched, errors, handleChange, handleBlur }) => (
          <Modal show={show} onHide={onClose}>
            <Modal.Header>
              <PageHeading fontSize={22} text="Add Daily Yield" />
            </Modal.Header>
            <Modal.Body>
              <label>Name</label>
              <Field
                name="name"
                className={getInputClasses(touched, "name", errors)}
                placeholder=""
              />
              <ErrorMessage component="div" name="name" className="error" />
              <label style={{ marginTop: 20 }}>Date</label>
              <Field
                name="date"
                type="date"
                className={getInputClasses(touched, "date", errors)}
                placeholder="Please Enter Date"
              />
              <ErrorMessage component="div" name="date" className="error" />
              <label style={{ marginTop: 20 }}>Amount</label>
              <Field
                name="amount"
                className={getInputClasses(touched, "amount", errors)}
                placeholder="Please Enter amount"
              />
              <ErrorMessage component="div" name="amount" className="error" />
            </Modal.Body>
            <Modal.Footer>
              <Button className="btn_green" onClick={submitForm}>
                Submit
              </Button>
            </Modal.Footer>
          </Modal>
        )}
      </Formik>
    </div>
  );
};

export default AddExpenseModal;
