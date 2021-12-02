import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import "./index.css";
import { LoginForm } from "./components";
import { useRoleAuth } from "../../contexts";
import { Redirect } from "react-router-dom";
import { RegisterForm } from "globalComponents";
  
const LoginSignupPage = () => {
  const [activeScreen, setActiveScreen] = useState("login");
  const { authed, role } = useRoleAuth();

  const handleScreenChange = (screenName) => {
    setActiveScreen(screenName);
  };

  return authed ? (
    <Redirect
      push
      to={role === "farmer" ? "/dashboard" : "/farmer-satistics"}
    />
  ) : (
    <div className="login_signup_container">
      <Row className="g-0">
        <Col
          style={{ height: "100vh" }}
          xs={12}
          sm={12}
          lg={6}
          className="d-none d-lg-block"
        >
          <img
            style={{ objectFit: "cover" }}
            alt=""
            height="100%"
            width="100%"
            src={
              "https://images.unsplash.com/photo-1560493676-04071c5f467b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YWdyaWN1bHR1cmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
            }
          />
        </Col>
        <Col xs={12} sm={12} lg={6}>
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
