import { motion } from "framer-motion";
import React from "react";
import { Button, GreenUnderline } from "../../../../globalComponents";
import "./index.css";
import BannerCarousel from "../bannerCarousel";

const Banner = () => (
  <div className="banner_image">
    <div className="black_overlay"></div>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 1,
        },
      }}
      className="banner_overlay"
    >
      <h1>Welcome to Cattle Care</h1>
      <GreenUnderline />

      <p className="mt-3">
        Cattle Care is platform where you can increase your production by
        monitoring data of your animals. It helps you to see economic data and
        it provide profit and loss report. You can see health report of your
        animals. Monitor your form on just a single click.
      </p>

      <Button
        text="Get Started"
        classNames="green_btn mt-3"
        type="button"
      ></Button>
    </motion.div>

    <div className="banner_carousel">
      <BannerCarousel />
    </div>
  </div>
);

export default Banner;
