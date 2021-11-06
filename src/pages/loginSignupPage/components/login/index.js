import React, { useState } from "react";
import { useHistory } from "react-router";
import { postRequest } from "../../../../service/apiClient";
import { postSigninForm } from "../../../../service/constants";
import { asyncLocalStorage } from "../../../../utils";
import { Button } from "react-bootstrap";
import { ErrorMessage, Field, Form, Formik } from "formik";

const LoginForm = ({ onScreenChange }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const history = useHistory();

  const handleSignupSubmit = async (values) => {
    try {
      setIsSubmitting(true);
      const {
        data: { token, user },
      } = await postRequest(postSigninForm, { ...values });
      setIsSubmitting(false);
      if (user) {
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
    let { email, password } = values;
    if (!email) {
      errors.email = "Email is required";
    }
    if (!password) {
      errors.password = "Password is required";
    }
    return errors;
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
          Register
        </Button>
        <p style={{ marginRight: 10 }} className="greyText">
          Don't have an account?
        </p>
      </div>
      <div style={{ marginTop: 50, marginBottom: 50 }}>
        <h1 style={{ marginBottom: 10, fontFamily: "Poppins-SemiBold" }}>
          Hello ! Welcome Back.
        </h1>
        <p className="greyText" style={{ fontSize: 16, maxWidth: 350 }}>
          Login with your data that you entered during your registration
        </p>
      </div>
      <div className="login_form" >
        <Formik
          onSubmit={handleSignupSubmit}
          validate={handleValidation}
          initialValues={{
            email: "",
            password: "",
          }}
        >
          {({ submitForm }) => (
            <Form>
              <div>
                <label>Email Address</label>
                <Field name="email" placeholder="eg@example.com" />
                <ErrorMessage component="div" name="email" className="error" />
              </div>
              <div style={{ marginTop: 20 }}>
                <label>Password</label>
                <Field
                  name="password"
                  placeholder="Enter Password"
                  type="password"
                />
                <ErrorMessage
                  component="div"
                  name="password"
                  className="error"
                />
              </div>
              <div style={{ marginTop: 30 }}>
                <Button
                  size="large"
                  type="primary"
                  className="full_expanded_btn"
                  loading={isSubmitting}
                  onClick={submitForm}
                >
                  Start Now
                </Button>
                {/* <Divider style={{ color: "black" }}>
                    <span className="greyText">OR</span>
                  </Divider> */}
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
export default LoginForm;
