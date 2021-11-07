import { motion } from "framer-motion";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
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
        <div style={{ width: "fit-content" }}>
          <h1 className="greeting_msg">{greetingMsg}!</h1>
          <motion.div
            style={{ height: 5, backgroundColor: "#2cb178" }}
            initial={{ width: 0 }}
            animate={{
              width: "70%",
              transition: {
                duration: 1,
                delay: 0.5,
              },
            }}
          ></motion.div>
        </div>
        <p className="stat_msg">
          Here is what's going on with your business today
        </p>
      </div>
      <div className="stats_container">
        <Row className="gx-3 gy-5 mt-5">
          <Col xs={3}>
            <StatCard
              bgColor="#E6F6EF"
              headingName="Total Animals"
              count=""
              txtColor="#456468"
            />
          </Col>
          <Col xs={3}>
            <StatCard
              bgColor="#409872"
              headingName="Total Feed"
              count=""
              txtColor="white"
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default DashboardPage;
