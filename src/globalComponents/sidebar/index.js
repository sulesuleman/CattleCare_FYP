import React, { Fragment, useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import LOGO from "../../assets/images/logoHead.png";
import { useRoleAuth } from "../../contexts";
import { useOnClickOutside, useWindowSize } from "../../customHooks";
import "./index.css";
import menuItems from "./menu";
import { AnimatePresence, motion } from "framer-motion";

export const SideBar = () => {
  const { role, logout } = useRoleAuth();
  let { width } = useWindowSize();
  const mobileSidebarRef = useRef();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsSidebarOpen(false);
  }, [location.pathname]);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevValue) => !prevValue);
  };

  useOnClickOutside(mobileSidebarRef, () => setIsSidebarOpen(false));

  const handleLogout = async () => {
    await logout();
  };

  const getSidebarView = () => (
    <div className="sidebar_container">
      <div
        className="d-flex align-items-center"
        style={{ marginLeft: width > 991 ? 0 : 20 }}
      >
        <img src={LOGO} alt="" width="40" height="30" />
        <h3 className="logo_heading">Cattle Care</h3>
      </div>
      <div className="dashboard_links">
        {menuItems(role).map((item) => (
          <MenuLink {...item} />
        ))}
      </div>
      <Button onClick={handleLogout} className="btn_green">
        Logout
      </Button>
    </div>
  );

  return width > 991 ? (
    getSidebarView()
  ) : (
    <Fragment>
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            className="dull_black_overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          ></motion.div>
        )}
      </AnimatePresence>
      <motion.div
        ref={mobileSidebarRef}
        className="mobile_sidebar_container"
        animate={{
          width: isSidebarOpen ? 250 : 0,
          transition: {
            duration: 0.5,
            easings: "anticipate",
          },
        }}
      >
        <div className="hamburger_container" onClick={toggleSidebar}>
          {isSidebarOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-x-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          )}
        </div>
        {getSidebarView()}
      </motion.div>
    </Fragment>
  );
};

const MenuLink = ({ svg, to, label }) => (
  <div className="d-flex align-items-center">
    {svg}
    <NavLink to={to} activeClassName="is_active">
      <div>{label}</div>
      <div className="hovered_green_line"></div>
    </NavLink>
  </div>
);
