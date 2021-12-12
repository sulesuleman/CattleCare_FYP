import { Formik } from "formik";
import queryString from "query-string";
import React from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import { toast } from "react-toastify";
import { newPasswordSchema } from "utils/validationSchema";
import LOGO from "../../assets/images/logoHead.png";
import { postRequest } from "../../service/apiClient";
import { resetPassword } from "../../service/constants";
import "./index.css";

const ResetPasswordResponsePage = () => {
  const location = useLocation();
  let token = queryString.parse(location.search)?.token;
  const history = useHistory();

  const handleFormSubmit = async (values, formik) => {
    try {
      let {
        data: { message, error },
      } = await postRequest(
        resetPassword,
        {
          password: values.password,
          token,
        },
        false
      );
      if (!error) {
        toast.success(message);
        history.replace("/login");
      } else {
        toast.warn(message);
      }
    } catch (err) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="reset_response_container">
      <img src={LOGO} alt="" />
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={{
          password: "",
          newPassword: "",
        }}
        validationSchema={newPasswordSchema}
      >
        {({ errors, touched, getFieldProps, submitForm }) => (
          <>
            <Form.Group className="mb-3">
              <Form.Label>New Password</Form.Label>
              <Form.Control
                isInvalid={touched.password && Boolean(errors.password)}
                type="password"
                name="password"
                placeholder="Enter your password"
                {...getFieldProps("password")}
              />
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                isInvalid={touched.newPassword && Boolean(errors.newPassword)}
                type="password"
                name="newPassword"
                placeholder="Enter your new password"
                {...getFieldProps("newPassword")}
              />
              <Form.Control.Feedback type="invalid">
                {errors.newPassword}
              </Form.Control.Feedback>
            </Form.Group>
            <Button
              style={{ marginTop: 20 }}
              className="btn_green"
              onClick={submitForm}
            >
              Reset
            </Button>
          </>
        )}
      </Formik>
    </div>
  );
};

export default ResetPasswordResponsePage;
