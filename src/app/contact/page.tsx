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
  const [buttonText, setButtonText] = useState("Send Message"); // Dynamic button text
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setButtonText("Sending..."); // Temporary text while processing

    const functions = getFunctions();
    const sendEmail = httpsCallable<
      { name: string; email: string; message: string },
      { success: boolean; error?: string }
    >(functions, "sendEmail");

    try {
      const result = await sendEmail(formData);
      if (result.data.success) {
        setStatus("Email sent successfully!");
        setButtonText("Message Sent ✅"); // Success message on button
      } else {
        setStatus("Failed to send email.");
        setButtonText("Message Failed ❌"); // Failure message on button
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error sending email:", error);
        setStatus(`Error: ${error.message}`);
      } else {
        console.error("Unknown error:", error);
        setStatus("An unexpected error occurred.");
      }
      setButtonText("Message Failed ❌");
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setButtonText("Send Message"); // Reset button text after 3 seconds
    }, 3000);
  };

  return (
    <div
      style={{ display: "flex", background: "white", justifyContent: "center" }}
    >
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

          <button
            type="submit"
            className="section-title centered"
            style={{
              backgroundColor: isSubmitting ? "#555" : "#000",
              color: "white",
              cursor: isSubmitting ? "not-allowed" : "pointer",
              opacity: isSubmitting ? 0.7 : 1,
              transition: "opacity 0.3s ease",
            }}
            disabled={isSubmitting}
          >
            {buttonText}
          </button>

          <div className="spacer" />
        </form>

        {status && <p>{status}</p>}
      </div>
    </div>
  );
};

export default ContactPage;
