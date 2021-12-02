import { PricingSection } from "globalComponents";
import React from "react";
import {
  Banner,
  ChooseUsSection,
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
