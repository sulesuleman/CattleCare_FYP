import React from "react";
import { PageHeading } from "../../../globalComponents";
import { FarmerListingTable } from "./components";

const ManageFarmer = () => {
  return (
    <div className="manage_farmer_container">
      <PageHeading text="Manage Farmers" />
      <FarmerListingTable />
    </div>
  );
};

export default ManageFarmer;
