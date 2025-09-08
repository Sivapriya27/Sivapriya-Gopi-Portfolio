import React, { Component } from "react";
import DataAnalyticsSvg from "./DataAnalytics.svg";

export default class DataAnalyticsImg extends Component {
  render() {
    return (
      <img
        src={DataAnalyticsSvg}
        alt="Data Analytics Illustration"
        style={{
          width: "100%",
          height: "550px", // Adjust as needed
          maxWidth: "1120px", // Match original dimensions
        }}
      />
    );
  }
}
