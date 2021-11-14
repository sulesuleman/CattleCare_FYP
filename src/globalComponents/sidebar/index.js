import React from "react";
import "./index.css";
import LOGO from "../../assets/images/logoHead.png";
import { NavLink, useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import menuItems from "./menu";
import { useRoleAuth } from "../../contexts";

export const SideBar = () => {
  const history = useHistory();
  const { role } = useRoleAuth();

  return (
    <div className="sidebar_container">
      <div className="d-flex align-items-center">
        <img src={LOGO} alt="" width="40" height="30" />
        <h3 className="logo_heading">Cattle Care</h3>
      </div>
      <div className="dashboard_links">
        {menuItems(role).map((item) => (
          <MenuLink {...item} />
        ))}
      </div>
    </div>
  );
};

const MenuLink = ({ svg, to, label }) => (
  <div className="d-flex align-items-center">
    {svg}
    <NavLink to={to} activeClassName="is_active">
      <div>{label}</div>
      <div className="hovered_green_line"></div>
    </NavLink>{" "}
  </div>
);
