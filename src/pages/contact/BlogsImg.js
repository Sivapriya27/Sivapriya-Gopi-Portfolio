import React from "react";
import BlogsiteSvg from "../../assets/images/blogsite.svg"; // change to .png/.jpg if needed

const BlogsImg = ({ theme }) => {
  return (
    <img
      src={BlogsiteSvg}
      alt="Blogsite Illustration"
      style={{
        width: "70%",
        height: "400px", // Adjust as needed
        maxWidth: "100%",
      }}
    />
  );
};

export default BlogsImg;
