import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="bg-banner text-center text-light">
      <div className="overlay">
        <h1 className="display-2 fw-semibold">Memory In The Snap</h1>
        <p className="lead">
          Get Snappy offers Product and Lifestyle, Portrait, Architecture and
          Interior, E-commerce and Food photography services.
        </p>
      </div>
    </div>
  );
};

export default Banner;
