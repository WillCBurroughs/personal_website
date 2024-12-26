import React from "react";
import ProjectTitle from "../atoms/ProjectTitle";
import ProjectImage from "../atoms/ProjectImage";
import '../../App.css'

function ProjectCard(props) {
  return (
    <div className="holdProject">
        <ProjectTitle/>
        <ProjectImage/> 
    </div>
  );
}

export default ProjectCard;