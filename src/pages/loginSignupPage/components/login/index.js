import React, { useState } from "react";
import { useHistory } from "react-router";
import { postRequest } from "../../../../service/apiClient";
import { postSigninForm } from "../../../../service/constants";
import { asyncLocalStorage } from "../../../../utils";
import { Button } from "react-bootstrap";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { LoginSchema } from "../../../../utils/validationSchema";
import { useRoleAuth } from "../../../../contexts";

const LoginForm = ({ onScreenChange }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const history = useHistory();
  const { login } = useRoleAuth();

  const handleLoginSubmit = async (values) => {
    // try {
    setIsSubmitting(true);
    const { email, password } = values;
    if (email === "farmer@gmail.com" && password === "1234567890") {
      let user = {
        name: "lorem empsum",
      };
      let role = "farmer";
      login(user, role).then(() => history.replace("/dashboard"));
    }
    else if (email === "admin@gmail.com" && password === "1234567890") {
      let user = {
        name: "lorem empsum",
      };
      let role = "admin";
      login(user, role).then(() => history.replace("/farmer-statistics"));
    }
    //   const {
    //     data: { token, user },
    //   } = await postRequest(postSigninForm, { ...values });
    //   setIsSubmitting(false);
    //   if (user) {
    //     asyncLocalStorage
    //       .setItem("token", JSON.stringify(token))
    //       .then((value) => history.push("/"));
    //   }
    // } catch (error) {
    //   setIsSubmitting(false);
    //   console.error(error);
    // }
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
        <Button
          size="large"
          type="primary"
          className="btn_green"
          onClick={onScreenChange}
        >
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
      <div className="login_form">
        <Formik
          onSubmit={handleLoginSubmit}
          validationSchema={LoginSchema}
          initialValues={{
            email: "",
            password: "",
          }}
        >
          {({ submitForm, errors, touched }) => (
            <Form>
              <div>
                <label>Email Address</label>
                <Field
                  name="email"
                  placeholder="eg@example.com"
                  className={getInputClasses(touched, "email", errors)}
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
              <div style={{ marginTop: 30 }}>
                <Button
                  size="large"
                  type="primary"
                  className="full_expanded_btn_green"
                  loading={isSubmitting}
                  onClick={() => {
                    submitForm();
                  }}
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
