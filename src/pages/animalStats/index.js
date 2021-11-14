import React, { useRef } from "react";
import { Table } from "react-bootstrap";
import { useHistory } from "react-router";
import "./index.css";
import CSVReader from "react-csv-reader";
import { PageHeading } from "../../globalComponents";
import { Button } from "react-bootstrap";

const AnimalStats = () => {
  const uploadRef = useRef();
  const history = useHistory();
  return (
    <div className="animal_stats_container">
      <PageHeading text="Animals" />
      <div className="d-flex align-items-end flex-row-reverse mb-5 p-1">
        <Button
          type="primary"
          className="btn_green"
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
            // onFileLoaded={onFileUpload}
          />
        </div>
        <Table className="table-borderless table-responsive">
          <thead>
            <tr>
              <th style={{ minWidth: "130px" }}>Cattle Type</th>
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
            <tr onClick={() => history.push("/animal-stats/1")}>
              <td>Cow</td>
              <td>Afghani</td>
              <td>3200 pkr</td>
              <td>Male</td>
              <td>1000 kg</td>
              <td>10 years</td>
              <td>02-02-2021</td>
              <td>2</td>
              <td style={{ verticalAlign: "middle" }}>
                <div className="table_actions_container">
                  <svg
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    style={{ marginLeft: 10 }}
                    className="bi bi-eye"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
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

export default AnimalStats;
