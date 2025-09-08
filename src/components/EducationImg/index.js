import React, { Component } from "react";
import GradSvg from "./grad.svg"; // put grad.svg next to this file

export default class EducationImg extends Component {
  render() {
    // const { theme } = this.props; // still here if you need it later
    return (
      <img
        src={GradSvg}
        alt="Graduation"
        style={{
          width: "100%",
          maxWidth: 800,
          height: "450px",
          display: "block",
        }}
      />
    );
  }
}
