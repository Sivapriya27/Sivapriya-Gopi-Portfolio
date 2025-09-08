import React from "react";
import projects_imageSvg from "../../assets/images/projects_image.svg"; // change to .png/.jpg if needed

const ProjectsImg = ({ theme }) => {
  return (
    <img
      src={projects_imageSvg}
      alt="Projects Illustration"
      style={{
        width: "70%",
        height: "400px", // Adjust as needed
        maxWidth: "100%",
      }}
    />
  );
};

export default ProjectsImg;
