import { Formik } from "formik";
import { PageHeading } from "globalComponents";
import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import { forgotPasswordSchema } from "utils/validationSchema";
import { postRequest } from "../../../../service/apiClient";
import { forgotPassword } from "../../../../service/constants";
import "./index.css";

const ForgotPasswordModal = ({ isModalVisible, handleOk }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleResetPassword = async (values, formik) => {
    try {
      setIsLoading(true);
      let {
        data: { message, error },
      } = await postRequest(forgotPassword, { ...values }, false);
      setIsLoading(false);
      if (!error) {
        toast.success(message);
        handleOk();
      } else {
        toast.warn(message);
      }
    } catch (err) {
      setIsLoading(false);
      toast.error("Something went wrong");
    }
  };

  return (
    <Formik
      onSubmit={handleResetPassword}
      initialValues={{
        email: "",
      }}
      validationSchema={forgotPasswordSchema}
    >
      {({ errors, touched, getFieldProps, submitForm }) => (
        <Modal
          onHide={handleOk}
          className="forgot_password"
          title="Forgot Password"
          show={isModalVisible}
        >
          <Modal.Header>
            <PageHeading text={"Forgot Password"} fontSize={22} />
          </Modal.Header>
          <Modal.Body>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                isInvalid={touched.email && Boolean(errors.email)}
                type="email"
                name="email"
                placeholder="Enter your Email"
                {...getFieldProps("email")}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button className="btn_green" onClick={submitForm}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </Formik>
  );
};

export default ForgotPasswordModal;
