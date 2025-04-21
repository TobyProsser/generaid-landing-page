"use client";
import React, { useState } from "react";
import Header from "../components/items/items/sections/header";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `Message Sent!\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
    );
  };

  return (
    <div style={{ backgroundColor: "white" }}>
      <div className="tab-page">
        <Header showLogo={true} />
        <h2 className="section-title">Contact Us</h2>
        <p className="section-subtitle">
          Have a question or feedback? Fill out the form below.
        </p>

        <div className="spacer" />
        <form className="contact-form" onSubmit={handleSubmit}>
          <label className="section-title">Name:</label>
          <input
            type="text"
            name="name"
            className="search-bar"
            style={{ height: 40, alignSelf: "center" }}
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label className="section-title">Email:</label>
          <input
            type="email"
            name="email"
            className="search-bar"
            style={{ height: 40, alignSelf: "center" }}
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label className="section-title">Message:</label>
          <textarea
            name="message"
            className="search-bar"
            style={{ height: 200, alignSelf: "center" }}
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit" className="section-title">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
