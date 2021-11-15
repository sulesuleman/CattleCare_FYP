import { motion } from "framer-motion";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { PageHeading } from "../../globalComponents";
import {
  BarChart,
  DoughnutChart,
  LineChart,
  Performance,
  PieChart,
  StatCard,
  Traffic,
} from "./components";
import "./index.css";

// var data = [30, 40, 35, 50, 49, 60, 70, 91, 125];

const FarmerPage = () => {
  const data = {
    labels: ["1", "2", "3", "4", "5", "6"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        backgroundColor: '#2cb178',
        borderColor: '#2cb178'
      }
    ]
  }


  const stateofPie = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Rainfall",
        backgroundColor: [
          '#2cb178',
          '#C9DE00',
          '#2FDE00',
          '#00A6B4',
          '#6800B4'
        ],
        hoverBackgroundColor: [
          '#2cb178',
          '#4B5000',
          '#175000',
          '#003350',
          '#35014F'
        ],
        data: [65, 59, 80, 81, 56],
      },
    ],
  };
  const [greetingMsg, setGreetingMsg] = useState(() => {
    let today = new Date();
    let curHr = today.getHours();
    if (curHr < 12) {
      return "good morning";
    } else if (curHr < 18) {
      return "good afternoon";
    } else {
      return "good evening";
    }
  });

  return (
    <div className="dashboard_page_container">
      <div>
        <PageHeading text="Farmer Statistics" />
      </div>
      <div className="">
        <Row className="gx-3 gy-3 mt-3 mb-5">
          <Col lg="6" xl="3">
            <StatCard
              title={"Traffic"}
              progress={"350,897"}
              increase={"3.48%"}
              time={"Since last month"}
              arrow={"up"}
            />
          </Col>
          <Col lg="6" xl="3">
            <StatCard
              title={"New users"}
              progress={"2,356"}
              increase={"3.48%"}
              time={"Since last month"}
              arrow={"down"}
            />
          </Col>
          <Col lg="6" xl="3">
            <StatCard
              title={"Sales"}
              progress={"350,897"}
              increase={"3.48%"}
              time={"Since last month"}
              arrow={"up"}
            />
          </Col>
          <Col lg="6" xl="3">
            <StatCard
              title={"Performance"}
              progress={"350,897"}
              increase={"3.48%"}
              time={"Since last month"}
              arrow={"up"}
            />
          </Col>
        </Row>
        <Row>
          <Col className="mb-5 mb-xl-0" xl="6">
            <div style={{ height: "200px", width: "400px" }}>
              <LineChart data={data} />
            </div>
          </Col>
          <Col className="mb-5 mb-xl-0" xl="6">
            <div style={{ height: "200px", width: "400px" }}>
              <BarChart data={data} />
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="mb-5 mb-xl-0" xl="6">
            <div style={{ height: "400px", width: "400px" }}>
              <PieChart stateofPie={stateofPie} />
            </div>
          </Col>
          <Col className="mb-5 mb-xl-0" xl="6">
            <div style={{ height: "400px", width: "400px" }}>
              <DoughnutChart stateofPie={stateofPie} />
            </div>
          </Col>
        </Row>
        <Row className="mt-5 ">
          <Col className="mb-5 mb-xl-0" xl="12">
            <Performance />
          </Col>
          <Col xl="12">
            <Traffic />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default FarmerPage;
