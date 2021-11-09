import React from "react";
import DashboardHeader from "../../globalComponents/dashboardHeader";
import { SideBar } from "../../globalComponents/sidebar";
import "./index.css";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <div className="dashboard_layout" >
        <SideBar />
        <div className={"dashboard_screens"}>
          <DashboardHeader />
          <div>{children}</div>
        </div>
      </div>
    </>
  );
};
export default DashboardLayout;
