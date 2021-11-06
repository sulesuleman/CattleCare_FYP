import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import "./index.css";
import { LoginForm, RegisterForm } from "./components/index.js";

const LoginSignupPage = () => {
  const [activeScreen, setActiveScreen] = useState("login");

  const handleScreenChange = (screenName) => {
    setActiveScreen(screenName);
  };

  return (
    <div className="login_signup_container">
      <Row>
        <Col style={{ height: "100vh" }} xs={12} sm={12} lg={6} className="d-none d-lg-block">
          <img
            style={{ objectFit: "cover" }}
            alt=""
            height="100%"
            width="100%"
            src={
              "https://i1.wp.com/www.additudemag.com/wp-content/uploads/2019/10/GettyImages-858163552-e1571427251588.jpg"
            }
          />
        </Col>
        <Col xs={12} sm={12}   lg={6}>
          {activeScreen === "login" ? (
            <LoginForm onScreenChange={() => handleScreenChange("register")} />
          ) : (
            <RegisterForm onScreenChange={() => handleScreenChange("login")} />
          )}
        </Col>
      </Row>
    </div>
  );
};

export default LoginSignupPage;
