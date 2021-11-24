import { motion } from "framer-motion";
import React from "react";
import { Col } from "react-bootstrap";
import { textGreyColor } from "../../../../globalStyles/globalStyle";
import "./index.css";

const ServiceCard = ({ heading, description, imgSrc }) => {
  return (
    <Col xs={12} sm={6} md={4}>
      <motion.div
        initial="rest"
        whileHover="hover"
        animate="rest"
        className="service_card"
      >
        <motion.div className="service_img_container">
          <motion.img src={imgSrc} variants={imgVariants} />
        </motion.div>
        <div className="service_description_container">
          <h4>{heading}</h4>
          <p style={{ color: textGreyColor }}>{description}</p>
        </div>
      </motion.div>
    </Col>
  );
};

//animation

const imgVariants = {
  rest: {
    scale: 1,
    transition: {
      duration: 1,
      easing: "easeInOut",
    }
  },
  hover: {
    scale: 1.1,
    transition: {
      duration: 1,
      easing: "easeInOut",
    },
  },
};

export default ServiceCard;
