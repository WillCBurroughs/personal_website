import React from "react";
import ProjectTitle from "../atoms/ProjectTitle";
import ProjectImage from "../atoms/ProjectImage";
import '../../App.css'

function ProjectCard({title, imageSrc, width}) {
  return (
    <div className="holdProject">
        <ProjectTitle title={title} />
        <ProjectImage imageSrc={imageSrc} width={width} />
    </div>
  );
}

export default ProjectCard;