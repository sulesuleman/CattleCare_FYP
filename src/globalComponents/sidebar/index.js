import React from "react";
import "./index.css";
import LOGO from "../../assets/images/logoHead.png";
import { NavLink } from "react-router-dom";

export const SideBar = () => {
  return (
    <div className="sidebar_container">
      <div className="d-flex align-items-center">
        <img src={LOGO} alt="" width="40" height="30" />
        <h3 className="logo_heading">Cattle Care</h3>
      </div>
      <div className="dashboard_links">
        <div className="d-flex align-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#759291"
            class="bi bi-house"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
            />
            <path
              fill-rule="evenodd"
              d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
            />
          </svg>
          <NavLink to="/dashboard" activeClassName="is_active">
            <div>Dashboard</div>
            <div className="hovered_green_line"></div>
          </NavLink>{" "}
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
            <NavLink to="/add-animal" activeClassName="is_active">
              <div>Add Animals</div>
              <div className="hovered_green_line"></div>
            </NavLink>
          </div>
        </div>
        <div className="d-flex align-items-center logout">
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
            <NavLink to="/add-bulk-animal" activeClassName="is_active">
              <div> Add Bulk Animals</div>{" "}
              <div className="hovered_green_line"></div>
            </NavLink>
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
            <NavLink to="add-feed" activeClassName="is_active">
              <div> Add Feeds</div> <div className="hovered_green_line"></div>
            </NavLink>
          </div>
        </div>
        <div className="d-flex align-items-center">
          {" "}
          <div>
            <NavLink to="/" activeClassName="is_active">
              <div>Logout</div>{" "}
              <div className="hovered_green_line"></div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
