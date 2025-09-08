// src/components/ExperienceImg/index.js
import React, { Component } from "react";
import ExperienceSvg from "./experience.svg"; // Ensure experience.svg is in the same folder

export default class ExperienceImg extends Component {
  render() {
    return (
      <img
        src={ExperienceSvg}
        alt="Experience illustration"
        style={{
          width: "100%",
          height: "550px", // Adjust as needed
          maxWidth: "1120px", // Match original dimensions
        }}
      />
    );
  }
}
