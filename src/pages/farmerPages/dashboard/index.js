import { PageHeading } from "globalComponents";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { getRequest } from "../../../service/apiClient";
import { ExpenseGraph, FeedGraph, YieldGraph } from "./charts";
import { StatCard } from "./components";
import { toast } from "react-toastify";
import "./index.css";
import { getFarmerDashboardStatistics } from "../../../service/constants";

const DashboardPage = () => {
  const [farmerStatistics, setFarmerStatistics] = useState({});

  useEffect(() => {
    const init = async () => {
      try {
        let {
          data: { error, message, data },
        } = await getRequest(getFarmerDashboardStatistics);
        if (!error) {
          setFarmerStatistics(data);
        } else {
          toast.warn(message);
        }
      } catch (err) {
        toast.error("Something went wrong");
      }
    };
    init();
  }, []);

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
        <PageHeading text={greetingMsg} />
        <p className="stat_msg">
          Here is what's going on with your business today
        </p>
      </div>
      <div className="stats_container">
        <Row className="gx-3 gx-lg-4 gy-3 mt-5">
          <Col xs={12} md={6}>
            <StatCard
              bgColor="#E6F6EF"
              headingName="Total Animals"
              count={farmerStatistics?.totalAnimals}
              txtColor="#456468"
            />
          </Col>
          <Col xs={12} md={6}>
            <StatCard
              bgColor="#409872"
              headingName="Total Feed"
              count={farmerStatistics?.totalFeed}
              txtColor="white"
            />
          </Col>
          <Col xs={12} md={6}>
            <StatCard
              headingName="Yield Growth"
              txtColor="#456468"
              bgColor="#E6F6EF"
            >
              <YieldGraph data={farmerStatistics?.yieldGraph} />
            </StatCard>
          </Col>
          {/* <Col xs={12} md={6}>
            <StatCard
              headingName="Expense Stats"
              txtColor="#456468"
              bgColor="#E6F6EF"
            >
              <ExpenseGraph />
            </StatCard>
          </Col> */}
          <Col xs={12} md={6}>
            <StatCard
              headingName="Feed Stats"
              txtColor="#456468"
              bgColor="#E6F6EF"
            >
              <FeedGraph data={farmerStatistics?.feedGraph} />
            </StatCard>
          </Col>
          {/* <Col xs={12} md={6} lg={4}>
            <StatCard
              bgColor="#409872"
              headingName="Total Expenses"
              count="$15000"
              txtColor="white"
            />
          </Col> */}
        </Row>
      </div>
    </div>
  );
};

export default DashboardPage;
