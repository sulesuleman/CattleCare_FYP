import React from "react";
import { Header } from "../../globalComponents";
import {
  Banner,
  ChooseUsSection,
  HowDoesItWorkSection,
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
      <HowDoesItWorkSection />
    </div>
  );
};

export default LandingPage;
