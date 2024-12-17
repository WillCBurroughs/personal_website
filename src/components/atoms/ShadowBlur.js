import React from "react";
import '../../App.css'

export default function ShadowBlur(props) {
    const { width = 200 } = props; 
  
    return (
      <div
        className="blurredCircle"
        style={{
          width: `${width}px`,
          height: `${width}px`, 
        }}
      ></div>
    );
  }