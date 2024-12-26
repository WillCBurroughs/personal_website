import React from 'react';
import '../../App.css';

function ProjectImage({ imageSrc, width }) {
    return (
      <img
        src={imageSrc}
        alt="Project"
        style={{ width: width || "100%" }}
        className="project-image"
      />
    );
  }

export default ProjectImage;