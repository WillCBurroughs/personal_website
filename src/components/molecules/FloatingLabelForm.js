import React, { useState } from "react";
import FormElement from "../atoms/FormElement"

export default function FloatingLabelForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
        <form
            onSubmit={handleSubmit}
            style={{
            maxWidth: "80vw",
            margin: "auto",
            display: "flex", 
            flexDirection: "column", 
            gap: "20px", 
        }}
        >
        <div
        style={{
            display: "flex", 
            gap: "10px", 
            alignItems: "center", 
        }}
        >
        <FormElement
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
        />
        <FormElement
            label="Email"
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
        />
        <FormElement
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
        />
        </div>
        <button
        type="submit"
        style={{
            marginTop: "20px", // Add spacing from the inputs
            alignSelf: "center", // Center the button
        }}
        >
        Submit
        </button>
        </form>
  );
}