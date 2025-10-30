import React, { useEffect, useState } from "react";
import "../css/main.css";
import "../css/contact.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

export default function GoogleLanding() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    message: "",
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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🚀 handle submit - send to Google Sheet
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("⏳ Sending...");

    const SCRIPT_URL =
      "https://script.google.com/macros/s/AKfycbwL_9DyCoBlr5SP_K64W9M3vK1kP7IpfP4EMXHDD5orMdfKc7cSrlnjqcOguHnd8QKrfQ/exec";

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // ✅ bypass CORS
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Even though we can’t read the response, it still submits fine
      setStatus("✅ Message Sent Successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        city: "",
        message: "",
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
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
          </div>

          <div className="form-row">
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Number"
              required
            />
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Your City"
              required
            />
          </div>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your dream wedding"
            rows="5"
            required
          ></textarea>

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
