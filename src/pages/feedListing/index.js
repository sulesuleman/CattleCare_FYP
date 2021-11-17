import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import { PageHeading } from "../../globalComponents";
import { AddFeedModal } from "./components";
import "./index.css";

const FeedListing = () => {
  const [isAddFeedModal, setIsAddFeedModal] = useState(false);

  return (
    <div className="feed_listing_container">
      <AddFeedModal
        show={isAddFeedModal}
        handleClose={() => setIsAddFeedModal(false)}
      />
      <PageHeading text="Manage Feed" />{" "}
      <div className="d-flex flex-row-reverse">
        {" "}
        <Button
          className="btn_green mt-5"
          onClick={() => setIsAddFeedModal(true)}
        >
          Add Feed
        </Button>
      </div>
      <div className="table-card mt-5">
        <Table className="table-borderless table-responsive">
          <thead>
            <tr>
              <th style={{ minWidth: "130px", paddingLeft: 20 }}>Id</th>
              <th style={{ minWidth: "130px" }}>Feed Name</th>
              <th style={{ minWidth: "130px" }}>Feed Brand</th>
              <th style={{ minWidth: "130px" }}>Quantity</th>
              <th style={{ minWidth: "130px" }}>Price</th>
              <th style={{ minWidth: "130px" }}>Feed Type</th>
              <th style={{ minWidth: "180px" }}>Date</th>
              <th style={{ minWidth: "180px" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ paddingLeft: 20 }}>2</td>
              <td>Fauji Fertilizer</td>
              <td>Fauji</td>
              <td>1000 kg</td>
              <td>10000 pkr</td>
              <td>desi</td>
              <td>2-2-21</td>
              <td style={{ verticalAlign: "middle" }}>
                <div className="table_actions_container">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-pencil"
                    viewBox="0 0 16 16"
                    >
                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    style={{ marginLeft: 20 }}
                    className="bi bi-trash"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                    <path
                      fill-rule="evenodd"
                      d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                    />
                  </svg>
                </div>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default FeedListing;
