import { motion } from "framer-motion";
import React from "react";
import { Col } from "react-bootstrap";
import "./index.css";

const ServiceCard = ({ heading, description, imgSrc }) => {
  return (
    <Col xs={12} sm={4}>
      <motion.div
        initial="rest"
        whileHover="hover"
        animate="rest"
        className="service_card"
      >
        <motion.div className="service_img_container">
          <motion.img src={imgSrc} variants={imgVariants} />
        </motion.div>
      </motion.div>
    </Col>
  );
};

//animation

const imgVariants = {
  rest: {
    scale: 1,
  },
  hover: {
    scale: 1.1,
  },
};

export default ServiceCard;
