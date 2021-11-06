import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Footer = () => {
  return (
    <Fragment>
      <div
        id="footer"
        className="fluid-container text-white "
        style={{ backgroundColor: "#141414" }}
      >
        <div className="row py-5 m-0 " id="footer-row">
          <div className="col-lg-4 col-sm-12 d-flex flex-column justify-content-center pl-5">
            <h1
              className="p-2 "
              style={{
                fontSize: "36px",
                fontFamily: "sans-serif",
                fontWeight: "bolder",
              }}
            >
              Cattle Care
            </h1>
            <p className="p-2 text-left">
              Your Cattle is our<br></br> priority. Join us and<br></br> be BOLD
            </p>
          </div>
          <div className="col-lg-2 col-sm-12 link-div">
            <h6>Explore</h6>
            <Link to="/" className="d-block text-white">
              Home
            </Link>
            <Link to="/about" className="d-block text-white">
              About
            </Link>
            <Link to="/subscriptions" className="d-block text-white">
              Subscriptions
            </Link>
          </div>
          <div className="col-lg-2 col-sm-12 link-div">
            <h6>Visit</h6>
            <a
              href="https://goo.gl/maps/VrcwHcR7Z8mXvX1m6"
              className="d-block text-white"
            >
              Comsats University Attock kamra road Attock Punjab 43600, Pakistan
            </a>
          </div>
          <div className="col-lg-2 col-sm-12 link-div">
            <h6>Follow</h6>
            <a
              href="https://web.facebook.com/CUIAttockofficial"
              className="d-block text-white"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/cuiattockofficial"
              className="d-block text-white"
            >
              Instagram
            </a>
            <a
              href="https://twitter.com/comsats_attock"
              className="d-block text-white"
            >
              Twitter
            </a>
          </div>
          <div className="col-lg-2 col-sm-12 link-div">
            <h6>Legal</h6>
            <Link to="/" className="d-block text-white">
              Terms and conditions
            </Link>
            <Link to="/about" className="d-block text-white">
              Privacy Policy
            </Link>
          </div>
        </div>
        <div
          className="row m-0 p-0"
          id="footer-row"
          style={{ backgroundColor: "#000000" }}
        >
          <div className="col text-center ">
            <p className="p-1 m-0">© 2021 Cattle Care. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
