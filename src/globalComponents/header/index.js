import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./index.css";
import LOGO from "../../assets/images/logoHead.png";

const Header = () => {
  return (
    <nav className="header_container shadow-sm">
      <Container style={{ height: "100%" }}>
        <div className="d-flex justify-content-between align-items-center h-100">
          <div className="d-flex align-items-center header-logo-desc">
            <img src={LOGO} className="header_logo" alt="" />
            <p className="px-3">Cattle Care</p>
          </div>
          <div className="navbar_links">
            <Link to="/login-signup">Login/Signup</Link>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Header;
