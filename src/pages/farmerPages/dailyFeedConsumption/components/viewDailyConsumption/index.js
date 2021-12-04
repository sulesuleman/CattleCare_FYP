import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { toast } from "react-toastify";
import { getRequest } from "service/apiClient";
import { getDailyFeeds } from "service/constants";
import moment from 'moment';
import "./index.css";

const ViewDailyConsumption = ({ refetch }) => {
  const [consumedFeedsListing, setConsumedFeedsListing] = useState([]);
  useEffect(() => {
    const init = async () => {
      try {
        const {
          data: {
            error,
            message,
            data: { dailyFeeds },
          },
        } = await getRequest(getDailyFeeds);
        if (!error) {
          setConsumedFeedsListing(dailyFeeds);
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
              <th style={{ minWidth: "130px" }}>Feed Name</th>
              <th style={{ minWidth: "130px" }}>Quantity</th>
              <th style={{ minWidth: "130px" }}>Price</th>
              <th style={{ minWidth: "180px" }}>Date</th>
            </tr>
          </thead>
          <tbody>
            {consumedFeedsListing.length > 0 &&
              consumedFeedsListing.map((feed) => {
                let {
                  createdAt,
                  price,
                  quantity,
                  feedId: { feedName },
                } = feed;
                return (
                  <tr>
                    <td>{feedName}</td>
                    <td>{quantity}</td>
                    <td>{price}</td>
                    <td>{moment(createdAt).format('DD-mm-yyyy')}</td>
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
