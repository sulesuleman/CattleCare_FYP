import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { useLocation } from "react-router";
import DashboardHeader from "../../globalComponents/dashboardHeader";
import { SideBar } from "../../globalComponents/sidebar";

import "./index.css";

const DashboardLayout = ({ children }) => {

  const location = useLocation();


  return (
    <>
      <div className="dashboard_layout">
        <SideBar />
        <AnimatePresence exitBeforeEnter>
          <motion.div
            variants={dashboardVariant}
            initial={"initial"}
            animate={"show"}
            exit={"exit"}
            key={location.pathname}
            className={"dashboard_screens"}
          >
            <DashboardHeader />
            <div>{children}</div>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
};

const dashboardVariant = {
  initial: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0 },
};

export default DashboardLayout;
