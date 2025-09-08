// src/components/ChatWithAIImg/index.js
import React, { Component } from "react";
import ChatWithAISvg from "./chatwithAI.svg"; // Make sure the file is in the same folder

export default class ChatWithAIImg extends Component {
  render() {
    return (
      <img
        src={ChatWithAISvg}
        alt="Chat with AI illustration"
        style={{
          width: "100%",
          height: "550px", // Adjust as needed
          maxWidth: "1120px", // Match original dimensions
        }}
      />
    );
  }
}
