import { PageHeading } from "globalComponents";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import { getRequest } from "../../../service/apiClient";
import { getAdminDashboardStatistics } from "../../../service/constants";
import { StatCard } from "../../farmerPages/dashboard/components";
import { NewUserGraph, SubscribedUnsubscribedFarmersChart } from "./charts";
import "./index.css";

// var data = [30, 40, 35, 50, 49, 60, 70, 91, 125];

const AdminStatiticsPage = () => {
  const [adminStatistics, setAdminStatistics] = useState({});

  useEffect(() => {
    const init = async () => {
      try {
        let {
          data: { error, message, data },
        } = await getRequest(getAdminDashboardStatistics);
        if (error) {
          toast.warn(message);
        } else {
          setAdminStatistics(data);
        }
      } catch (err) {
        toast.error("Somehing went wrong");
      }
    };
    init();
  }, []);

  return (
    <div className="dashboard_page_container">
      <div>
        <PageHeading text="Admin Dashboards" />
      </div>
      <div className="">
        <Row className="gx-3 gx-lg-4 gy-3 mt-5">
          <Col xs={12} md={6}>
            <StatCard
              headingName="New Farmers"
              txtColor="#456468"
              bgColor="#E6F6EF"
            >
              <NewUserGraph data={adminStatistics?.farmerChart} />
            </StatCard>
          </Col>
          <Col xs={12} md={6}>
            <StatCard
              headingName="Subscribed/Un-Subscribed Farmers"
              txtColor="#456468"
              bgColor="#E6F6EF"
            >
              <SubscribedUnsubscribedFarmersChart
                data={adminStatistics?.farmerPieChart}
              />
            </StatCard>
          </Col>
          <Col xs={12} md={6}>
            <StatCard
              bgColor="#409872"
              headingName="Total Farmers"
              count={adminStatistics?.totalFarmers}
              txtColor="white"
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AdminStatiticsPage;
