import React from "react";
import AddressSvg from "../../assets/images/address.svg"; // change to .png/.jpg if needed

const AddressImg = ({ theme }) => {
  return (
    <img
      src={AddressSvg}
      alt="Address / Location Illustration"
      style={{
        width: "100%",
        height: "400px", // Adjust as needed
        maxWidth: "100%",
      }}
    />
  );
};

export default AddressImg;
