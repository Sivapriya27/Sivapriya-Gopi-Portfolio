// src/components/GirlSitting/index.js
import React from "react";
import GirlSittingSvg from "./girl-sitting.svg"; // Make sure this file exists

export default function GirlSittingComponent({ theme }) {
  // Changed name to avoid conflict
  return (
    <img
      src={GirlSittingSvg}
      alt="Girl sitting"
      style={{
        width: "100%",
        maxWidth: "800px",
        height: "auto",
      }}
    />
  );
}
