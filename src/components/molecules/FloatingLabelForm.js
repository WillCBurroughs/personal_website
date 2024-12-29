import React, { useState } from "react";
import FormElement from "../atoms/FormElement"
import SliderElement from "../atoms/Slider";

export default function FloatingLabelForm() {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    company: "",
    email: "",
    phone: "",
    start: "",
    password: "",
    budget: 10000,
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
            label="Title"
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
        />
        <FormElement
            label="Company"
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
        />
        </div>
        <div
        style={{
            display: "flex", 
            gap: "10px", 
            alignItems: "center", 
            marginTop: "10vh"
        }}
        >
        <FormElement
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
        />
        <FormElement
            label="Phone Number"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
        />
        <FormElement
            label="Desired Start Date"
            type="date"
            name="start"
            value={formData.start}
            onChange={handleChange}
        />
        </div>
        <SliderElement
            label="Budget"
            name="budget"
            min="0"
            max="50000"
            step="1000"
            value={formData.budget}
            onChange={handleChange}
        />
            <button
            type="submit"
            style={{
                marginTop: "20px", 
                alignSelf: "center", 
            }}
            >
            Submit
            </button>
        </form>
  );
}