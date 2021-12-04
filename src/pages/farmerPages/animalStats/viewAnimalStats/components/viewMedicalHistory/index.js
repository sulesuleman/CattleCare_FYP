import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { toast } from "react-toastify";
import { getRequest, putRequest } from "service/apiClient";
import {
  deleteMedicalRecord,
  getMedicalHistoryOfAnimal,
} from "service/constants";
import Swal from "sweetalert2";
import { AddRecordModal } from "..";

const MedicalHistoryTable = ({ cattleId, refetch }) => {
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [medicalListing, setMedicalListing] = useState([]);
  const [selectedRecord, setSelectedRecord] = useState();
  const [refetchByEdit, setRefetchByEdit] = useState(false);

  useEffect(() => {
    const init = async () => {
      try {
        let {
          data: {
            error,
            message,
            data: { record },
          },
        } = await getRequest(`${getMedicalHistoryOfAnimal}/${cattleId}`);
        if (!error) {
          setMedicalListing(record);
        } else {
          toast.warn(message);
        }
      } catch (err) {
        toast.error("Something went wrong");
      }
    };
    init();
  }, [refetch, cattleId, refetchByEdit]);

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
        handleRecordDelete(id);
      }
    });
  };

  const removeMedicalRecord = (id) => {
    setMedicalListing((prevVal) => {
      let index = prevVal.findIndex((_id) => _id === id);
      return prevVal.slice(0, index);
    });
  };

  const handleRecordDelete = async (id) => {
    try {
      let {
        data: { error, message },
      } = await putRequest(`${deleteMedicalRecord}/${id}`);
      if (!error) {
        removeMedicalRecord(id);
        toast.success(message);
      } else {
        toast.warn(message);
      }
    } catch (err) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="table-card">
      {selectedRecord && (
        <AddRecordModal
          onSuccess={() => {
            setRefetchByEdit((prevValue) => !prevValue);
            setIsEditModalVisible(false);
          }}
          selectedRecord={selectedRecord}
          mode={"edit"}
          show={isEditModalVisible}
          handleClose={() => setIsEditModalVisible(false)}
        />
      )}
      <Table className="table-borderless table-responsive w-100">
        <thead>
          <tr>
            <th style={{ minWidth: "130px" }}>Vaccination Type</th>
            <th style={{ minWidth: "130px" }}>Vaccination Date</th>
            <th style={{ minWidth: "130px" }}>Vaccination Period </th>
            <th style={{ minWidth: "180px" }}>Disease Date</th>
            <th style={{ minWidth: "130px" }}>Disease Type</th>
            <th style={{ minWidth: "130px" }}>Recover Status</th>
            <th style={{ minWidth: "100px" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {medicalListing.length > 0 &&
            medicalListing.map((record) => (
              <tr>
                <td>{record?.vaccinationType}</td>
                <td>{record?.vaccinationDate}</td>
                <td>{record?.vaccinationPeriod}</td>
                <td>{record?.diseaseDate}</td>
                <td>{record?.diseaseType}</td>
                <td>{record?.recoveryStatus}</td>
                <td>
                  <svg
                    onClick={() => {
                      setSelectedRecord(record);
                      setIsEditModalVisible(true);
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    style={{ marginRight: 20 }}
                    className="bi bi-pencil"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                  </svg>
                  <svg
                    onClick={(e) => getConfirmation(e, record?._id)}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-trash"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                    <path
                      fill-rule="evenodd"
                      d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                    />
                  </svg>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MedicalHistoryTable;
