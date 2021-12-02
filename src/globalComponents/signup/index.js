import { useRoleAuth } from "contexts";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { toast } from "react-toastify";
import { SelectSubscriptionModal } from "../../pages/loginSignupPage/components";
import { postRequest } from "../../service/apiClient";
import { postSignupForm, updateProfile } from "../../service/constants";
import {
  SignupSchema,
  UpdateProfileSchema,
} from "../../utils/validationSchema";

const RegisterForm = ({
  onScreenChange,
  mode = "signup",
  initialData,
  onSuccess = () => {},
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { loginWithoutSession } = useRoleAuth();
  const [isPricingModalVisible, setIsPricingModalVisible] = useState(false);

  const handleSubmit = async (values) => {
    try {
      setIsSubmitting(true);
      const {
        data: { data, error, message },
      } = await postRequest(mode === "edit" ? updateProfile : postSignupForm, {
        ...values,
      });
      setIsSubmitting(false);
      if (!error) {
        await loginWithoutSession(data, data.isAdmin ? "admin" : "farmer");
        toast.success(message);
        onSuccess();
        setIsPricingModalVisible(true);
      } else {
        toast.warn(message);
      }
    } catch (error) {
      setIsSubmitting(false);
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

  return (
    <div className={mode === "signup" ? "login_signup_form_container" : ""}>
      <SelectSubscriptionModal
        show={isPricingModalVisible}
        handleClose={() => setIsPricingModalVisible(false)}
      />
      {mode === "signup" && (
        <>
          {" "}
          <div
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              alignItems: "center",
            }}
          >
            <Button
              className="btn_green"
              size="large"
              type="primary"
              onClick={onScreenChange}
            >
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
          </div>{" "}
        </>
      )}
      <div
        className="login_form"
        style={{ maxWidth: mode === "edit" ? "100%" : 400 }}
      >
        <Formik
          enableReinitialize
          onSubmit={isSubmitting ? null : handleSubmit}
          validationSchema={
            mode === "edit" ? UpdateProfileSchema : SignupSchema
          }
          initialValues={
            mode === "edit"
              ? initialData
              : {
                  name: "",
                  email: "",
                  password: "",
                  confirmPassword: "",
                  address: "",
                  phoneNo: "",
                }
          }
        >
          {({ submitForm, touched, errors, getFieldProps }) => (
            <Form>
              <div style={{ marginTop: 20 }}>
                <label>Name</label>
                <Field
                  name="name"
                  className={getInputClasses(touched, "name", errors)}
                  placeholder="Full name"
                />
                <ErrorMessage component="div" name="name" className="error" />
              </div>
              <div style={{ marginTop: 20 }}>
                <label>Email Address</label>
                <Field
                  name="email"
                  className={getInputClasses(touched, "email", errors)}
                  placeholder="eg@example.com"
                />
                <ErrorMessage component="div" name="email" className="error" />
              </div>
              {mode === "signup" && (
                <>
                  {" "}
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
                  </div>{" "}
                </>
              )}
              <div style={{ marginTop: 20 }}>
                <label>Phone Number</label>
                <Field
                  name="phoneNo"
                  placeholder="Please Enter Phone Number"
                  type="text"
                  className={getInputClasses(touched, "phoneNo", errors)}
                />
                <ErrorMessage
                  component="div"
                  name="phoneNo"
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
                  type="submit"
                  variant="primary"
                  className="full_expanded_btn_green"
                  disabled={isSubmitting}
                >
                  {mode === "edit" ? "Edit" : "Signup"}
                  {isSubmitting && (
                    <Spinner
                      variant="success"
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                  )}
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
