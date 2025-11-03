import React, { useEffect, useState } from "react";
import "../css/main.css";
import "../css/contact.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

export default function GoogleLanding() {
 const [formData, setFormData] = useState({
  name: "",
  mobile: "",
  city: "",
  eventDate: "",
  eventType: "",
  budget: "",
});

  const [status, setStatus] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      easing: "ease-in-out",
      once: true,
    });

    document.body.classList.add("no-scroll");
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  // handle input
const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
};

  // 🚀 handle submit - send to Google Sheet
const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus("⏳ Sending...");

  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbxKpDrw9iT52__LVJmzKqAj-IR8gIxR7YeiOJIrkyzwS5hhw1ucgL0T0UNp5DPV5s4Hlw/exec";

  try {
    const body = new URLSearchParams({
      name: formData.name,
      mobile: formData.mobile,
      city: formData.city,
      eventDate: formData.eventDate,
      eventType: formData.eventType,
      budget: formData.budget,
    });

    await fetch(SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: body.toString(),
    });

    setStatus("✅ Message Sent Successfully!");
    setFormData({
      name: "",
      mobile: "",
      city: "",
      eventDate: "",
      eventType: "",
      budget: "",
    });
  } catch (error) {
    console.error("Error submitting form:", error);
    setStatus("❌ Failed to send. Please try again.");
  }
};



  return (
    <div className="google-landing">
      {/* Hero Section */}
      <section className="carousel-slide">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="background-video"
        >
          <source
            src="/wedding.webm"
            type="video/webm"
          />
        </video>

        <div className="carousel-text">
          <h1>Plan Your Dream Wedding with Bells & Brides</h1>
          <p>Luxury • Elegance • Perfection — Chennai’s Trusted Wedding Planners</p>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="why-choose" style={{ backgroundColor: "#faece3" }}>
        <h2>Why Couples Choose Us</h2>
        <div className="why-grid">
          <div className="why-item">
            <i className="fas fa-heart"></i>
            <h3>Tailored Weddings</h3>
            <p>Every detail reflects your unique story.</p>
          </div>
          <div className="why-item">
            <i className="fas fa-gem"></i>
            <h3>Luxury Decor</h3>
            <p>Elegant setups designed to impress your guests.</p>
          </div>
          <div className="why-item">
            <i className="fas fa-music"></i>
            <h3>Entertainment</h3>
            <p>From DJs to classical music — we bring your vibe alive.</p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section
        id="lead-form"
        className="contact-section"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: "60px 20px",
          backgroundColor: "#fff",
        }}
      >
        <h2 className="title" data-aos="fade-down">
          Get Your Free Wedding Consultation 💍
        </h2>

      <form
  className="contact-form"
  onSubmit={handleSubmit}
  data-aos="fade-up"
  data-aos-delay="200"
  style={{ maxWidth: "600px", width: "100%" }}
>
  {/* Name & Mobile */}
  <div className="form-row">
    <input
      type="text"
      name="name"
      value={formData.name}
      onChange={handleChange}
      placeholder="Your Name"
      required
    />
    <input
      type="text"
      name="mobile"
      value={formData.mobile}
      onChange={handleChange}
      placeholder="Mobile Number"
      required
    />
  </div>

  {/* City & Event Date */}
  <div className="form-row">
    <input
      type="text"
      name="city"
      value={formData.city}
      onChange={handleChange}
      placeholder="Your City"
      required
    />

<div className="custom-date-input">
  <input
    type="date"
    name="eventDate"
    value={formData.eventDate}
    onChange={handleChange}
    required
  />
  {!formData.eventDate && (
    <span className="date-placeholder">Event Date</span>
  )}
</div>

  </div>

  {/* Event Type */}
<div style={{ marginBottom: "1.5rem" }}>
  <label
    style={{
      color: "#070707ff",
      fontWeight: "300",
      display: "block",
      marginTop:"20px",
      marginBottom: "16px",
      fontSize: "16px",
    }}
  >
    Select Your Event Type:
  </label>

  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      gap: "20px 40px",
      color: "#000000ff",
      fontSize: "15px",
    }}
  >
    {[
      "Wedding",
      "Engagement",
      "Birthday Party",
      "Corporate Party",
      "Others",
    ].map((type) => (
      <label
        key={type}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          cursor: "pointer",
        }}
      >
        <input
          type="radio"
          name="eventType"
          value={type}
          checked={formData.eventType === type}
          onChange={handleChange}
          required
          style={{
            accentColor: "#819A91", // 🎨 pink theme accent color (modern browsers)
            width: "18px",
            height: "18px",
            cursor: "pointer",
          }}
        />
        {type}
      </label>
    ))}
  </div>
</div>


  {/* Estimated Budget */}
  <div className="form-group">
    <input
      type="text"
      name="budget"
      value={formData.budget}
      onChange={handleChange}
      placeholder="Estimated Budget"
      required
    />
  </div>

  {/* Submit Button */}
  <button
    type="submit"
    className="submit-btn"
    data-aos="zoom-in"
    data-aos-delay="300"
  >
    Send Message
  </button>

  {status && (
    <p style={{ marginTop: "10px", textAlign: "center" }}>{status}</p>
  )}
</form>

      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-left">
            <h2 className="footer-logo">Bells & Brides</h2>
            <p className="footer-tagline">
              Crafting unforgettable wedding moments with love and elegance.
            </p>
          </div>
          <div className="footer-middle">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/services">Our Services</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="footer-right">
            <h3>Connect with Us</h3>
            <div className="footer-icons">
              <div className="top-icons">
                <a href="https://www.instagram.com/thebellsandbrides">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/in/thebells-nbrides-876203377">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
              <div className="bottom-icons">
                <a href="mailto:bellsandbridesofficial@gmail.com">
                  <i className="fas fa-envelope"></i> bellsandbridesofficial@gmail.com
                </a>
                <a href="tel:+919840942784">
                  <i className="fas fa-phone"></i> 9840942784
                </a>
              </div>
            </div>
          </div>
        </div>
        <p className="footer-copy">© 2025 Bells and Brides. All rights reserved.</p>
      </footer>
    </div>
  );
}
