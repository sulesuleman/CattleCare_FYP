import React, { useEffect, useRef, useState } from "react";
import { Form, Table } from "react-bootstrap";
import { useHistory } from "react-router";
import "./index.css";
import CSVReader from "react-csv-reader";
import { PageHeading } from "globalComponents";
import { Button } from "react-bootstrap";
import { motion } from "framer-motion";
import EditAnimalModal from "./editAnimalModal";
import Swal from "sweetalert2";
import { getRequest, postFormData, putRequest } from "service/apiClient";
import { toast } from "react-toastify";
import { deleteAnimal, getAnimals, uploadBulkAnimal } from "service/constants";
import { useDebounce } from "customHooks";

const AnimalStats = () => {
  const uploadRef = useRef();
  const history = useHistory();
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [animalsListing, setAnimalsListing] = useState([]);
  const [selectedCattleInfo, setSelectedCattleInfo] = useState();
  const [refetch, setRefetch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    const init = async () => {
      try {
        let {
          data: {
            error,
            message,
            data: { animals },
          },
        } = await getRequest(`${getAnimals}?search=${debouncedSearchTerm}`);
        setAnimalsListing(animals);
        if (error) {
          toast.warn(message);
        }
      } catch (err) {
        toast.error("Something went wrong");
      }
    };

    init();
  }, [refetch, debouncedSearchTerm]);

  const removeAnimal = (id) => {
    setAnimalsListing((prevVal) => {
      let index = prevVal.findIndex((_id) => _id === id);
      return prevVal.slice(0, index);
    });
  };

  const handleAnimalDelete = async (id) => {
    try {
      let {
        data: { error, message },
      } = await putRequest(`${deleteAnimal}/${id}`);
      if (!error) {
        removeAnimal(id);
        toast.success(message);
      } else {
        toast.warn(message);
      }
    } catch (err) {
      toast.error("Something went wrong");
    }
  };

  const handleEdit = (e, animalDetail) => {
    e.stopPropagation();
    setSelectedCattleInfo(animalDetail);
    setIsEditModalVisible(true);
  };

  const getConfirmation = (e, _id) => {
    e.stopPropagation();
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
        handleAnimalDelete(_id);
      }
    });
  };

  const onFileUpload = async (data, fileInfo, originalFile) => {
    try {
      let formData = new FormData();
      formData.append("csvFile", originalFile);
      let {
        data: { error, message },
      } = await postFormData(uploadBulkAnimal, formData, { type: "text/csv" });
      if (!error) {
        toast.success(message);
        setTimeout(() => {
          setRefetch((prevVal) => !prevVal);
        }, 1000);
      } else {
        toast.error(message);
      }
    } catch (err) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="animal_stats_container">
      <PageHeading text="Animals" />
      <EditAnimalModal
        show={isEditModalVisible}
        handleClose={() => setIsEditModalVisible(false)}
        prefilledInfo={selectedCattleInfo}
        onSuccess={() => {
          setRefetch((prevValue) => !prevValue);
          setIsEditModalVisible(false);
        }}
      />
      <div className="d-flex justify-content-between mb-5 mt-5 p-1 align-items-center">
        <Form.Control
          type="text"
          style={{ maxWidth: 300 }}
          placeholder="Search here"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button
          type="primary"
          className="btn_green"
          style={{ height: 40 }}
          onClick={() => {
            document.getElementById("csvId").click();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-cloud-arrow-up"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M7.646 5.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2z"
            />
            <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
          </svg>
          <span style={{ marginLeft: 5 }}>Upload Csv</span>
        </Button>
      </div>
      <div className="table-card">
        <div style={{ display: "none" }} className="mb-3 text-end">
          <CSVReader
            inputId="csvId"
            cssClass="btn font-weight-bolder font-size-sm"
            cssLabelClass="d-flex w-100 py-2"
            label="Bulk Upload Animals"
            accept=".csv"
            onFileLoaded={onFileUpload}
          />
        </div>
        <Table className="table-borderless table-responsive">
          <thead>
            <tr>
              <th style={{ minWidth: "130px" }}>Cattle Type</th>
              <th style={{ minWidth: "130px" }}>Cattle Id</th>
              <th style={{ minWidth: "130px" }}>Breed Type</th>
              <th style={{ minWidth: "130px" }}>Price</th>
              <th style={{ minWidth: "130px" }}>Sex</th>
              <th style={{ minWidth: "130px" }}>Weight</th>
              <th style={{ minWidth: "130px" }}>Age</th>
              <th style={{ minWidth: "180px" }}>Anticipation Date</th>
              <th style={{ minWidth: "130px" }}>Child Count</th>
              <th style={{ minWidth: "130px" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {animalsListing.map((animalDetail) => {
              let {
                age,
                anticipationDate,
                childCount,
                weight,
                breedType,
                price,
                sex,
                cattleType,
                cattleId,
                _id,
              } = animalDetail;

              return (
                <tr
                  onClick={() =>
                    history.push("/animal-stats/1", { animalDetail })
                  }
                >
                  <motion.td whileHover={{ textDecoration: "underline" }}>
                    {cattleType}
                  </motion.td>
                  <td>{cattleId}</td>
                  <td>{breedType}</td>
                  <td>{price}</td>
                  <td>{sex}</td>
                  <td>{weight} kg</td>
                  <td>{age} years</td>
                  <td>{anticipationDate}</td>
                  <td>{childCount}</td>
                  <td style={{ verticalAlign: "middle" }}>
                    <div className="table_actions_container">
                      <svg
                        onClick={(e) => handleEdit(e, animalDetail)}
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
                        onClick={(e) => getConfirmation(e, _id)}
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        style={{ marginLeft: 20 }}
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
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default AnimalStats;
