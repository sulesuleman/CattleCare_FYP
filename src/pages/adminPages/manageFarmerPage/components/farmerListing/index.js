import React, { useEffect, useState } from "react";
import { Badge, Button, Table } from "react-bootstrap";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import {
  getRequest,
  postRequest,
  putRequest,
} from "../../../../../service/apiClient";
import {
  deleteFarmer,
  getAllFarmers,
  toggleFarmerBlocking,
} from "../../../../../service/constants";

const FarmerListingTable = () => {
  const [farmerListing, setFarmerListing] = useState([]);
  const [triggerRefetch, setTriggerRefetch] = useState(false);

  useEffect(() => {
    const init = async () => {
      try {
        const {
          data: {
            error,
            message,
            data: { farmers },
          },
        } = await getRequest(getAllFarmers);
        if (!error) {
          setFarmerListing(farmers);
        } else {
          toast.warn(message);
        }
      } catch (err) {
        toast.error("Something went wrong");
      }
    };
    init();
  }, [triggerRefetch]);

  const toggleBlockingStatus = async (blockingStatus, id) => {
    try {
      let {
        data: { error, message },
      } = await postRequest(
        toggleFarmerBlocking,
        {
          userId: id,
          isBlocked: blockingStatus,
        },
        false
      );
      if (!error) {
        setTriggerRefetch((prevValue) => !prevValue);
        toast.success(message);
      } else {
        toast.warn(message);
      }
    } catch (err) {
      toast.error("Something went wrong");
    }
  };

  const getConfirmation = (e, id) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "question",
      html: `<p class='text-danger'>You won't be able to revert this!
      </p>`,
      showCancelButton: true,
      confirmButtonText: "Delete",
      buttonsStyling: false,
      customClass: {
        confirmButton: "w-100   btn btn-success",
        cancelButton: "w-100  mt-1  btn btn-danger",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        handleDeleteFarmer(id);
      }
    });
  };

  const handleDeleteFarmer = async (id) => {
    try {
      let {
        data: { error, message },
      } = await putRequest(deleteFarmer, { userId: id });
      if (!error) {
        toast.success(message);
        setTriggerRefetch((prevValue) => !prevValue);
      }
    } catch (err) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="table-card mt-5">
      <Table className="table-borderless table-responsive text-center">
        <thead>
          <tr>
            <th style={{ minWidth: "130px" }}>Farmer Name</th>
            <th style={{ minWidth: "130px" }}>Blocking Status</th>
            <th style={{ minWidth: "130px" }}>Subscribed</th>
            <th style={{ minWidth: "130px" }}>Email</th>
            <th style={{ minWidth: "130px" }}>Phone number</th>
            <th style={{ minWidth: "100px" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {farmerListing.length > 0 &&
            farmerListing.map((farmer) => {
              let { _id, name, phoneNo, email, subscribed, isBlocked } =
                farmer;
              return (
                <tr>
                  <td>{name}</td>
                  <td>
                    <Badge bg={isBlocked ? "danger" : "success"}>
                      {isBlocked ? "Blocked" : "Not Blocked"}
                    </Badge>
                  </td>
                  <td>
                    <Badge bg={subscribed ? "success" : "danger"}>
                      {subscribed ? "Yes" : "No"}
                    </Badge>
                  </td>
                  <td>{email}</td>
                  <td>{phoneNo}</td>

                  <td style={{ verticalAlign: "middle" }}>
                    <div className="table_actions_container">
                      <Button
                        style={{
                          marginLeft: 10,
                          width: 90,
                          height: 30,
                          fontSize: 12,
                        }}
                        variant={isBlocked ? "danger" : "success"}
                        onClick={(e) => toggleBlockingStatus(isBlocked, _id)}
                      >
                        {isBlocked ? "Un-block" : "Block"}
                      </Button>
                      <svg
                        onClick={(e) => getConfirmation(e, _id)}
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
              );
            })}
        </tbody>
      </Table>
    </div>
  );
};

export default FarmerListingTable;
