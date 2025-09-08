import React from "react";
import SoftwareDevSvg from "./softwareDev.svg";

const SoftwareDevImg = ({ theme }) => {
  return (
    <img
      src={SoftwareDevSvg}
      alt="Software Development Illustration"
      style={{
        width: "100%",
        height: "550px", // Adjust as needed
        maxWidth: "100%",
      }}
    />
  );
};

export default SoftwareDevImg;
