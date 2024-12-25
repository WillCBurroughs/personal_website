import React from "react";
import '../../App.css'

export default function BlurProjects(props) {
    const { width = 100 } = props; 
  
    return (
      <div
        className="blurProjects"
        style={{
          width: `${width}vw`,
          height: `${width}vw`, 
        }}
      ></div>
    );
  }
