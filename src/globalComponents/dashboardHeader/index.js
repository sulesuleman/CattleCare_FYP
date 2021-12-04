import React from "react";
import "./index.css";
import Avatar from "react-avatar";
import { useHistory } from "react-router";
import { useRoleAuth } from "contexts";

const DashboardHeader = () => {
  const history = useHistory();
  const { user } = useRoleAuth();

  return (
    <div className="dashboard_header_container">
      <div className="d-flex align-items-center">
        <p className="user_name">{user?.name}</p>

        <Avatar
          style={{ cursor: "pointer" }}
          name={user?.name}
          color="#2cb178"
          round
          size="50"
          textSizeRatio={3}
          onClick={() => history.push("/manage-profile")}
        />
      </div>
    </div>
  );
};

export default DashboardHeader;
