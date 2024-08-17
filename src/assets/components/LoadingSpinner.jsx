import React from "react";
const LoadingSpinner = () => {
  return (
    <center>
    <div
      className="spinner spinner-border"
      role="status"
      style={{ width: "3rem", height: "3rem" }}
    >
      <span className="visually-hidden">Loading...</span>
    </div>
    </center>
  );
};

export default LoadingSpinner;
