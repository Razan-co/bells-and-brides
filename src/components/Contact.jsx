import React, { useEffect, useRef, useState } from 'react';
import '../css/contact.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Contact() {
  const form = useRef();
  const [sending, setSending] = useState(false);
  const [resultMsg, setResultMsg] = useState('');

  // ⚙️ Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 100, easing: 'ease-in-out', once: true });
    document.body.classList.add('no-scroll');
    return () => document.body.classList.remove('no-scroll');
  }, []);

  // 🚀 Replace EmailJS with Google Sheet submission
// 🚀 Send data to Google Sheet (works with Apps Script + no CORS issue)
const sendToGoogleSheet = async (e) => {
  e.preventDefault();
  setSending(true);
  setResultMsg('');

  const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwL_9DyCoBlr5SP_K64W9M3vK1kP7IpfP4EMXHDD5orMdfKc7cSrlnjqcOguHnd8QKrfQ/exec';
 const formData = {
    name: form.current.name.value,
    email: form.current.email.value,
    phone: form.current.phone.value,
    city: form.current.city.value,
    message: form.current.message.value,
  };

  try {
    const response = await fetch(SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors', // ✅ Important: lets browser send to Apps Script
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    // Even though no-cors hides response, data still saves
    setResultMsg('✅ Message sent successfully!');
    form.current.reset();
  } catch (error) {
    console.error('Error:', error);
    setResultMsg('❌ Failed to send message. Please try again.');
  } finally {
    setSending(false);
  }
};



  return (
    <div className="no-scroll">
      <div className="contact-section">
        <h2 className="title" data-aos="fade-down">Contact Us</h2>

        <div className="contact-container">
          {/* Left Side */}
          <div className="contact-info" data-aos="fade-right" data-aos-delay="100">
            <div className="info-item">
              <i className="fas fa-map-marker-alt icon pink" data-aos="zoom-in" data-aos-delay="200"></i>
              <div>
                <h4>Location</h4>
                <p>Kattur Sadayappan St, Chennai, TamilNadu, 600003</p>
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

          {/* Right Side — Form */}
          <form
            ref={form}
            onSubmit={sendToGoogleSheet}
            className="contact-form"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div className="form-row">
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
            </div>
            <div className="form-row">
              <input type="text" name="phone" placeholder="Your Number" />
              <input type="text" name="city" placeholder="Your City" />
            </div>
            <textarea name="message" placeholder="Message" rows="5" required />
            <button
              type="submit"
              className="submit-btn"
              data-aos="zoom-in"
              data-aos-delay="300"
              disabled={sending}
            >
              {sending ? 'Sending...' : 'Send Message'}
            </button>

            {resultMsg && <p className="result-msg">{resultMsg}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
