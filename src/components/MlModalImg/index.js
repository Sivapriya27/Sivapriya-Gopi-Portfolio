import React from "react";
import MlModalSvg from "./MlModal.svg";

const MlModalImg = ({ theme }) => {
  return (
    <img
      src={MlModalSvg}
      alt="Machine Learning Modal"
      style={{
        width: "85%",
        height: "600px", // Adjust as needed
        maxWidth: "100%", // Adjust as needed
      }}
    />
  );
};

export default MlModalImg;
