import React from "react";
import { Header } from "../../globalComponents";
import { Banner, ChooseUsSection, PricingSection, ServiceSection } from "./components";
import "./index.css";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <Banner />
      <ServiceSection />
      <PricingSection />
      <ChooseUsSection />
    </div>
  );
};

export default LandingPage;
