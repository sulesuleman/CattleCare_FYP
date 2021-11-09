import React from "react";
import "./index.css";
import Footer from "../../globalComponents/footer";
import { Header } from "../../globalComponents";

const PageLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default PageLayout;
