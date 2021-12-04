import moment from "moment";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { toast } from "react-toastify";
import { getRequest } from "service/apiClient";
import { getDailyYields } from "service/constants";
import "./index.css";

const ViewDailyConsumption = ({ refetch }) => {
  const [consumedYeildsListing, setConsumedYieldsListing] = useState([]);
  useEffect(() => {
    const init = async () => {
      try {
        const {
          data: {
            error,
            message,
            data: { yields },
          },
        } = await getRequest(getDailyYields);
        if (!error) {
          setConsumedYieldsListing(yields);
        } else {
          toast.warn(message);
        }
      } catch (err) {
        toast.error("Something went wrong");
      }
    };
    init();
  }, [refetch]);

  return (
    <div className="view_daily_consumption_container">
      <div className="table-card mt-5">
        <Table className="table-borderless table-responsive">
          <thead>
            <tr>
              <th style={{ minWidth: "130px" }}>Yield Type</th>
              <th style={{ minWidth: "130px" }}>Quantity</th>
              <th style={{ minWidth: "130px" }}>Price</th>
              <th style={{ minWidth: "180px" }}>Date</th>
            </tr>
          </thead>
          <tbody>
            {consumedYeildsListing.length > 0 &&
              consumedYeildsListing.map((animal) => {
                let { createdAt, price, quantity, yieldType } = animal;
                return (
                  <tr>
                    <td>{yieldType}</td>
                    <td>{quantity} KG</td>
                    <td>{price} PKR</td>
                    <td>{moment(createdAt).format("DD-mm-yyyy")}</td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ViewDailyConsumption;
