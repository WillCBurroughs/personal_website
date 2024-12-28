import '../../App.css';
import React from 'react';

export default function FormElement({ label, type = "text", name, value, onChange }) {
  return (
    <div className="form-element">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
        className="form-input"
        placeholder=" " 
        autoComplete="off"
      />
      <label className="form-label">{label}</label>
    </div>
  );
}