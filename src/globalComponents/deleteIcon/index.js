import React from "react";
import "./index.css";
import DELETE_ICON from "../../assets/images/icon delete.png";

const DeleteIcon = ({ onClick }) => (
  <div className="delete_icon" onClick={onClick}>
    <img src={DELETE_ICON} alt="" width="20" height="20" />
  </div>
);

export default DeleteIcon;
