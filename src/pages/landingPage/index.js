import React from "react";
import {
  Banner,
  ChooseUsSection,
  PricingSection,
  ServiceSection,
} from "./components";

const LandingPage = () => {
  return (
    <div>
      <Banner />
      <ServiceSection />
      <PricingSection />
      <ChooseUsSection />
    </div>
  );
};

export default LandingPage;
