import React, { useEffect, useState } from "react";
import { Title, Meta } from "react-head";
import "../css/contact.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    city: "",
    eventDate: "",
    eventType: "",
    budget: "",
  });

  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, offset: 100, easing: "ease-in-out", once: true });
    document.body.classList.add("no-scroll");
    return () => document.body.classList.remove("no-scroll");
  }, []);

  // ✅ Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 🚀 Submit form to Google Sheet (using working URLSearchParams)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
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
    } finally {
      setSending(false);
    }
  };

  return (
    <>
        <Title>Contact Bells N Brides | Top Wedding Planning Company in Bangalore</Title>
      <Meta
        name="description"
        content="Contact Bells N Brides — trusted wedding planners and organizers in Bangalore. Call or message us today to plan your dream wedding with expert professionals."
      />
      <Meta property="og:url" content="https://www.bellsnbrides.com/contact-bells-n-brides" />

    <div className="no-scroll">
      <div className="contact-section">
        <h2 className="title" data-aos="fade-down">
          Contact Us
        </h2>

        <div className="contact-container">
          {/* Left Side */}
          <div className="contact-info" data-aos="fade-right" data-aos-delay="100">
            <div className="info-item">
              <i className="fas fa-map-marker-alt icon pink" data-aos="zoom-in" data-aos-delay="200"></i>
              <div>
                <h4>Location</h4>
                <p>Kattur Sadayappan St, Chennai, Tamil Nadu, 600003</p>
              </div>
            </div>

            <div className="info-item">
              <i className="fas fa-envelope icon pink" data-aos="zoom-in" data-aos-delay="300"></i>
              <div>
                <h4>Email:</h4>
                <p>thebellsandbrides@gmail.com</p>
              </div>
            </div>

            <div className="info-item">
              <i className="fas fa-phone icon pink" data-aos="zoom-in" data-aos-delay="400"></i>
              <div>
                <h4>Call:</h4>
                <p>+91 98409 42784</p>
              </div>
            </div>
          </div>

          {/* Right Side — Wedding Inquiry Form */}
          <form
            onSubmit={handleSubmit}
            className="contact-form"
            data-aos="fade-left"
            data-aos-delay="200"
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
                  color: "#070707",
                  fontWeight: "300",
                  display: "block",
                  marginTop: "20px",
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
                  color: "#000",
                  fontSize: "15px",
                }}
              >
                {["Wedding", "Engagement", "Birthday Party", "Corporate Party", "Others"].map(
                  (type) => (
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
                          accentColor: "#819A91",
                          width: "18px",
                          height: "18px",
                          cursor: "pointer",
                        }}
                      />
                      {type}
                    </label>
                  )
                )}
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

            <button
              type="submit"
              className="submit-btn"
              data-aos="zoom-in"
              data-aos-delay="300"
              disabled={sending}
            >
              {sending ? "Sending..." : "Send Message"}
            </button>

            {status && <p className="result-msg">{status}</p>}
          </form>
        </div>
      </div>
    </div>
    </>
  );
}

export default Contact;
