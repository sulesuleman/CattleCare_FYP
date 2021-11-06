import React from "react";
import { Header } from "../../globalComponents";
import {
  Banner,
  ChooseUsSection,
  PricingSection,
  ServiceSection,
} from "./components";

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
