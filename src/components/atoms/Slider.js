import React from "react";
import '../../App.css';

export default function Slider({ label, name, min, max, step, value, onChange }) {
  const calculateBackground = () => {
    const percentage = ((value - min) / (max - min)) * 100;
    return `linear-gradient(to right, #FF7843 ${percentage}%, #001336 ${percentage}%)`;
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        alignItems: "flex-start",
      }}
    >
      <label className="slider-label">{label}</label>
      <div className="slider-wrapper">
        <input
          type="range"
          name={name}
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={onChange}
          style={{ background: calculateBackground() }} // Apply dynamic background
          className="slider"
        />
        <div className="slider-value">${Number(value).toLocaleString()}</div>
      </div>
    </div>
  );
}