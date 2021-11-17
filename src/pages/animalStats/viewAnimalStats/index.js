import React, { useState } from "react";
import { Col, Row, Button } from "react-bootstrap";
import { PageHeading } from "../../../globalComponents";
import { AddRecordModal, MedicalHistoryTable } from "./components";
import "./index.css";

const ViewAnimalStats = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <div className="animalstats_container">
      <AddRecordModal
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
            src={
              "https://www.pngall.com/wp-content/uploads/4/Cow-PNG-Free-Download.png"
            }
          />
        </Col>
        <Col className="statistics_container" xs={12} lg={9}>
          <Row>
            <Col xs={12} lg={4}>
              <Row>
                <Col className="statistics_label">Weight</Col>
                <Col className="statistics_value">94kg</Col>
              </Row>
            </Col>
            <Col xs={12} lg={4}>
              <Row>
                <Col className="statistics_label">Age</Col>
                <Col className="statistics_value">12 years</Col>
              </Row>
            </Col>
            <Col xs={12} lg={4}>
              <Row>
                <Col className="statistics_label">Sex</Col>
                <Col className="statistics_value">Male</Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col xs={12} lg={4}>
              <Row>
                <Col className="statistics_label">Breed Type</Col>
                <Col className="statistics_value">N/a</Col>
              </Row>
            </Col>
            <Col xs={12} lg={4}>
              <Row>
                <Col className="statistics_label">Cattle Type</Col>
                <Col className="statistics_value">Cow</Col>
              </Row>
            </Col>
            <Col xs={12} lg={4}>
              <Row>
                <Col className="statistics_label">Price</Col>
                <Col className="statistics_value">42000 pkr</Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col xs={12} lg={4}>
              <Row>
                <Col className="statistics_label">Anticipation Date</Col>
                <Col className="statistics_value">22/12/21</Col>
              </Row>
            </Col>
            <Col xs={12} lg={4}>
              <Row>
                <Col className="statistics_label">Child Count</Col>
                <Col className="statistics_value">2</Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <div>
        <div className="mt-5 mb-5">
          <PageHeading text="Medical History" />
        </div>
          <MedicalHistoryTable />
      </div>
    </div>
  );
};

export default ViewAnimalStats;
