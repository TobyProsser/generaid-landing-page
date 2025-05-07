"use client";
import { getFunctions, httpsCallable } from "firebase/functions";
import React, { useState } from "react";
import Header from "../components/sections/header";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const functions = getFunctions();
    const sendEmail = httpsCallable<
      { name: string; email: string; message: string },
      { success: boolean; error?: string }
    >(functions, "sendEmail");

    try {
      const result = await sendEmail(formData);
      if (result.data.success) {
        setStatus("Email sent successfully!");
      } else {
        setStatus("Failed to send email.");
      }
    } catch (error) {
      console.error("Error sending email:", error); // Logs the error in the console
      setStatus("Error sending email.");
    }
  };

  return (
    <div style={{ backgroundColor: "white" }}>
      <div className="tab-page">
        <Header showLogo={true} />
        <h2 className="section-title">Contact Us</h2>
        <p
          className="section-subtitle"
          style={{ paddingRight: 20, paddingLeft: 20 }}
        >
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

          <button type="submit" className="section-title centered">
            Send Message
          </button>
          <div className="spacer" />
        </form>

        {status && <p>{status}</p>}
      </div>
    </div>
  );
};

export default ContactPage;
