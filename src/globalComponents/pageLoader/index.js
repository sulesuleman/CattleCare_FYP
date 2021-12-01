import React from "react";
import "./index.css";

const Loader = () => {
  return (
    <div className="loading_screen">
      <div class="loading">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
      </div>
    </div>
  );
};

export default Loader;
