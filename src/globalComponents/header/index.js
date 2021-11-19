import React from "react";
import { Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

import "./index.css";
import LOGO from "../../assets/images/logoHead.png";

const Header = () => {
  return (
    <nav className="header_container shadow-sm">
      <Container style={{ height: "100%" }}>
        <div className="d-flex justify-content-between align-items-center h-100">
          <div className="d-flex align-items-center header-logo-desc">
            <img src={LOGO} className="header_logo" alt="" />
            <p className="px-3 d-none d-sm-block">Cattle Care</p>
          </div>
          <div className="dashboard_links m-0 flex-row align-items-center">
            <div className="d-flex align-items-center px-4 m-0">
              <NavLink exact to="/" activeClassName="is_active">
                <div>Home</div>
                <div className="hovered_green_line"></div>
              </NavLink>
            </div>
            <div className="d-flex align-items-center m-0">
              <div>
                <NavLink to="/login-signup" activeClassName="is_active">
                  <div>Login/Signup</div>
                  <div className="hovered_green_line"></div>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Header;
