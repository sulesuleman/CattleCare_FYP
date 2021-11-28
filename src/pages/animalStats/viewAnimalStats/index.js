import React, { useEffect, useState } from "react";
import { Col, Row, Button } from "react-bootstrap";
import { useLocation } from "react-router";
import { toast } from "react-toastify";
import { getRequest } from "service/apiClient";
import { PageHeading } from "../../../globalComponents";
import { AddRecordModal, MedicalHistoryTable } from "./components";
import "./index.css";

const ViewAnimalStats = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { state: { cattleId } = "" } = useLocation();

  const [animalDetail, setAnimalDetail] = useState();

  useEffect(() => {
    const init = async () => {
      try {
        const {
          data: { message, error },
        } = await getRequest();
      } catch (err) {
        toast.error("Something went wrong");
      }
    };
    init();
  }, []);


  return (
    <div className="animalstats_container">
      <AddRecordModal
        cattleId={cattleId}
        show={isModalVisible}
        handleClose={() => setIsModalVisible(false)}
      />
      <PageHeading text="Animal Detail" />

      <div className="d-flex flex-row-reverse mt-5 mt-md-0">
        <Button
          type="primary"
          className="btn_green"
          onClick={() => {
            setIsModalVisible(true);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-file-earmark-medical"
            viewBox="0 0 16 16"
          >
            <path d="M7.5 5.5a.5.5 0 0 0-1 0v.634l-.549-.317a.5.5 0 1 0-.5.866L6 7l-.549.317a.5.5 0 1 0 .5.866l.549-.317V8.5a.5.5 0 1 0 1 0v-.634l.549.317a.5.5 0 1 0 .5-.866L8 7l.549-.317a.5.5 0 1 0-.5-.866l-.549.317V5.5zm-2 4.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 2a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z" />
            <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
          </svg>
          <span style={{ marginLeft: 5 }}>Add Medical Record</span>
        </Button>
      </div>

      <Row className="mt-5">
        <Col style={{ minHeight: 200 }} xs={12} lg={3}>
          <img
            className="animal_pic"
            alt=""
            src={`https://${animalDetail?.picture}`}
          />
        </Col>
        <Col className="statistics_container" xs={12} lg={9}>
          <Row>
            <Col xs={12} lg={4}>
              <Row>
                <Col className="statistics_label">Weight</Col>
                <Col className="statistics_value">{animalDetail?.weight}</Col>
              </Row>
            </Col>
            <Col xs={12} lg={4}>
              <Row>
                <Col className="statistics_label">Age</Col>
                <Col className="statistics_value">{animalDetail?.age}</Col>
              </Row>
            </Col>
            <Col xs={12} lg={4}>
              <Row>
                <Col className="statistics_label">Sex</Col>
                <Col className="statistics_value">{animalDetail?.sex}</Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col xs={12} lg={4}>
              <Row>
                <Col className="statistics_label">Breed Type</Col>
                <Col className="statistics_value">
                  {animalDetail?.breedType}
                </Col>
              </Row>
            </Col>
            <Col xs={12} lg={4}>
              <Row>
                <Col className="statistics_label">Cattle Type</Col>
                <Col className="statistics_value">
                  {animalDetail?.cattleType}
                </Col>
              </Row>
            </Col>
            <Col xs={12} lg={4}>
              <Row>
                <Col className="statistics_label">Price</Col>
                <Col className="statistics_value">{animalDetail?.price}</Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col xs={12} lg={4}>
              <Row>
                <Col className="statistics_label">Anticipation Date</Col>
                <Col className="statistics_value">
                  {animalDetail?.anticipationDate}
                </Col>
              </Row>
            </Col>
            <Col xs={12} lg={4}>
              <Row>
                <Col className="statistics_label">Child Count</Col>
                <Col className="statistics_value">
                  {animalDetail?.childCount}
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <div>
        <div className="my-5">
          <PageHeading text="Medical History" />
        </div>
        {animalDetail?.medicalHistory && <MedicalHistoryTable />}
      </div>
    </div>
  );
};

export default ViewAnimalStats;
