import React from "react";
import image from "../../assets/404 Error-rafiki.png";

const NotFound = () => {
  return (
    <div>
      <h1 className="text-center pt-5">This route not found</h1>
      <img src={image} className="w-50 mx-auto d-block" alt="" />
    </div>
  );
};

export default NotFound;
