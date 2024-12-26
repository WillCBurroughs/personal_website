import React from "react";
import '../../App.css'

export default function BlueBlot(props) {
    const { width = 100, top = 0, left = 0, id = "" } = props; 

    return (
      <div
        id={id} 
        className="blueBlot"
        style={{
          width: `${width}vw`,
          height: `${width}vw`,
          top: `${top}vh`,
          left: `${left}vw`,
          position: "absolute", 
        }}
      ></div>
    );
}