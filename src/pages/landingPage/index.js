import React from "react";
import { Header } from "../../globalComponents";
import { Banner, ServiceSection } from "./components";
import "./index.css";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <Banner />
      <ServiceSection />
    </div>
  );
};

export default LandingPage;
