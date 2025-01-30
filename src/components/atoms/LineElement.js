import React from "react";
import '../../App.css'

export default function LineElement(props) {
    const { width = 0.1, height = 60, top = 5, left = 30, color = "#FF7843" } = props; 

    return (
      <div
        className="LineElement"
        style={{
          width: `${width}vw`,
          height: `${height}vh`,
          top: `${top}vh`,
          left: `${left}vw`,
          position: "relative", 
          backgroundColor: color,
        }}
      ></div>
    );
}