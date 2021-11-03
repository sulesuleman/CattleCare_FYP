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
          <img src={LOGO} className="header_logo" alt="" />
          <div className="navbar_links">
            <Link>Login/Signup</Link>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Header;
