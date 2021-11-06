import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router";
import { postRequest } from "../../../../service/apiClient";
import { postSignupForm } from "../../../../service/constants";
import { asyncLocalStorage } from "../../../../utils";

const RegisterForm = ({ onScreenChange }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const history = useHistory();

  const handleSignupSubmit = async (values) => {
    try {
      setIsSubmitting(true);
      const {
        data: { success, token },
      } = await postRequest(postSignupForm, { ...values });
      setIsSubmitting(false);
      if (success) {
        asyncLocalStorage
          .setItem("token", JSON.stringify(token))
          .then((value) => history.push("/"));
      }
    } catch (error) {
      setIsSubmitting(false);
      console.error(error);
    }
  };
  const handleValidation = (values) => {
    let errors = {};
    let { email, password, confirmPassword, address, phoneNumber } = values;
    if (!email) {
      errors.email = "Email is required";
    }
    if (!password) {
      errors.password = "Password is required";
    }
    if (!confirmPassword) {
      errors.confirmPassword = "Please retype password";
    }
    if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords don't match";
    }
    if (!address) {
      errors.address = "Address is Required";
    }
    if (!phoneNumber) {
      errors.phoneNumber = "Phone number is required";
    }
    return errors;
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

  return (
    <div className="login_signup_form_container">
      <div
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          alignItems: "center",
        }}
      >
        <Button size="large" type="primary" onClick={onScreenChange}>
          Login
        </Button>
        <p style={{ marginRight: 10 }} className="greyText">
          Already have an account?
        </p>
      </div>
      <div style={{ marginTop: 10, marginBottom: 10 }}>
        <h1
          style={{
            marginBottom: 14,
            fontSize: 24,
            fontFamily: "Poppins-SemiBold",
          }}
        >
          Welcome.
        </h1>
        <p className="greyText" style={{ fontSize: 12, maxWidth: 350 }}>
          Please Complete the form and start using sleep tracker
        </p>
      </div>
      <div className="login_form">
        <Formik
          onSubmit={handleSignupSubmit}
          validate={handleValidation}
          initialValues={{
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            address: "",
            phoneNumber: "",
          }}
        >
          {({ submitForm, touched, errors, getFieldProps }) => (
            <Form>
              <div style={{ marginTop: 20 }}>
                <label>Email Address</label>
                <Field
                  name="email"
                  className={getInputClasses(touched, "email", errors)}
                  placeholder="eg@example.com"
                />
                <ErrorMessage component="div" name="email" className="error" />
              </div>
              <div style={{ marginTop: 20 }}>
                <label>Password</label>
                <Field
                  name="password"
                  placeholder="Enter Password"
                  type="password"
                  className={getInputClasses(touched, "password", errors)}
                />
                <ErrorMessage
                  component="div"
                  name="password"
                  className="error"
                />
              </div>
              <div style={{ marginTop: 20 }}>
                <label>Confirm Password</label>
                <Field
                  name="confirmPassword"
                  placeholder="Retype Password"
                  type="password"
                  className={getInputClasses(
                    touched,
                    "confirmPassword",
                    errors
                  )}
                />
                <ErrorMessage
                  component="div"
                  name="confirmPassword"
                  className="error"
                />
              </div>
              <div style={{ marginTop: 20 }}>
                <label>Phone Number</label>
                <Field
                  name="phoneNumber"
                  placeholder="Please Enter Phone Number"
                  type="text"
                  className={getInputClasses(touched, "phoneNumber", errors)}
                />
                <ErrorMessage
                  component="div"
                  name="phoneNumber"
                  className="error"
                />
              </div>
              <div style={{ marginTop: 20 }}>
                <label>Address</label>
                <Field
                  name="address"
                  placeholder="Please Enter Address"
                  type="text"
                  className={getInputClasses(touched, "address", errors)}
                />
                <ErrorMessage
                  component="div"
                  name="address"
                  className="error"
                />
              </div>
              <div style={{ marginTop: 30 }}>
                <Button
                  size="large"
                  type="primary"
                  className="full_expanded_btn"
                  onClick={submitForm}
                  loading={isSubmitting}
                >
                  Signup
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default RegisterForm;
