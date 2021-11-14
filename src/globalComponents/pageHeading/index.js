import { motion } from "framer-motion";
import React from "react";
import "./index.css";

const PageHeading = ({ text, fontSize = 32 }) => {
  return (
    <div style={{ width: "fit-content" }}>
      <h1 style={{ fontSize }} className="page_heading">
        {text}
      </h1>
      <motion.div
        style={{ height: 5, backgroundColor: "#2cb178" }}
        initial={{ width: 0 }}
        animate={{
          width: "70%",
          transition: {
            duration: 1,
            delay: 0.5,
          },
        }}
      ></motion.div>
    </div>
  );
};

export default PageHeading;
