import React, { useEffect } from 'react';
import '../css/contact.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      easing: 'ease-in-out',
      once: true,
    });

    document.body.classList.add('no-scroll');
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, []);

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

          {/* Right Side */}
          <form className="contact-form" data-aos="fade-left" data-aos-delay="200">
            <div className="form-row">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
            </div>
            <div className="form-row">
              <input type="text" placeholder="Your Number" />
              <input type="text" placeholder="Your City" />
            </div>
            <textarea placeholder="Message" rows="5" />
            <button type="submit" className="submit-btn" data-aos="zoom-in" data-aos-delay="300">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
