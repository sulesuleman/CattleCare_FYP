import React from "react";
import "./index.css";
import Avatar from "react-avatar";

const DashboardHeader = () => {
  return (
    <div className="dashboard_header_container">
      <div className="d-flex align-items-center">
        <p className="user_name">Usman Malik</p>

        <Avatar
          name="Usman"
          color="#2cb178"
          round
          size="50"
          textSizeRatio={3}
        />
      </div>
    </div>
  );
};

export default DashboardHeader;