import React, { useState } from "react";
import "./Contact.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/mrbpozkk", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Oops! Something went wrong.");
      }
    } catch (err) {
      console.error("Form submission error:", err);
      alert("Something broke. Please try again later.");
    }
  };

  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>

      <div className="contact__card">
        <p className="contact__note">
          Thanks for visiting! If you'd like to connect or have any questions,
          ideas, or feedback, please fill out the form and I’ll get back to you
          soon.
        </p>

        <form
          action="https://formspree.io/f/mrbpozkk"
          method="POST"
          className="contact__form"
        >
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
