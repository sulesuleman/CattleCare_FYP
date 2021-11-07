import React from "react";
import "./index.css";
import LOGO from "../../assets/images/logoHead.png";
import { Link } from "react-router-dom";

export const SideBar = () => {
  return (
    <div className="sidebar_container">
      <div className="d-flex align-items-center">
        <img src={LOGO} alt="" width="40" height="30" />
        <h3 className="logo_heading">Cattle Care</h3>
      </div>
      <div className="dashboard_links">
        <div className="d-flex align-items-center">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#759291"
            class="bi bi-plus-circle"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
          </svg>{" "}
          <div>
            <Link>Add Animals</Link>
            <div className="hovered_green_line"></div>
          </div>
        </div>
        <div className="d-flex align-items-center">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#759291"
            class="bi bi-plus-circle"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
          </svg>{" "}
          <div>
            <Link>Add Bulk Animals</Link>
            <div className="hovered_green_line"></div>
          </div>
        </div>
        <div className="d-flex align-items-center">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#759291"
            class="bi bi-plus-circle"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
          </svg>{" "}
          <div>
            <Link>Add Feeds</Link>
            <div className="hovered_green_line"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
