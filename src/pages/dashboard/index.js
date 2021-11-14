import { motion } from "framer-motion";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { PageHeading } from "../../globalComponents";
import { StatCard } from "./components";
import "./index.css";

const DashboardPage = () => {
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
        <PageHeading text={greetingMsg}/>
        <p className="stat_msg">
          Here is what's going on with your business today
        </p>
      </div>
      <div className="stats_container">
        <Row className="gx-3 gx-lg-4 gy-3 mt-5">
          <Col xs={12} md={6} lg={4}>
            <StatCard
              bgColor="#409872"
              headingName="Total Expenses"
              count="$15000"
              txtColor="white"
            />
          </Col>
          <Col xs={12} md={6} lg={4} >
            <StatCard
              bgColor="#E6F6EF"
              headingName="Total Animals"
              count="20"
              txtColor="#456468"
            />
          </Col>
          <Col xs={12} md={6} lg={4}>
            <StatCard
              bgColor="#409872"
              headingName="Total Feed"
              count="24"
              txtColor="white"
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default DashboardPage;
