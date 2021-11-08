import React from "react";
import { useLocation } from "react-router";
import DashboardHeader from "../globalComponents/dashboardHeader";
import Footer from "../globalComponents/footer";
import { SideBar } from "../globalComponents/sidebar";
import "./index.css";

export const DashboardLayout = ({ children }) => {
  const location = useLocation();

  let hiddenFooterRoutes = ["/dashboard","/add-animal"];
  let hiddenSidebarRoutes = ["/", "/login-signup"];

  const isFooterRequired = () =>
    !hiddenFooterRoutes.includes(location.pathname);

  const isSideBarRequired = () =>
    !hiddenSidebarRoutes.includes(location.pathname);

  return (
    <>
      <div
        className="dashboard_layout"
        style={{ flexDirection: isSideBarRequired() ? "row" : "column" }}
      >
        {isSideBarRequired() && <SideBar />}
        <div
          className={
            isSideBarRequired()
              ? "dashboard_screens"
              : "dashboard_screens no_padding"
          }
        >
          {isSideBarRequired() && <DashboardHeader />}
          <div>{children}</div>
        </div>
        {isFooterRequired() && <Footer />}
      </div>
    </>
  );
};
