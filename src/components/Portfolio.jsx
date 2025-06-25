import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../css/portfolio.css';

export default function Portfolio() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true, easing: 'ease-in-out' });
  }, []);

  const items = [
    { src: '/asset/portfolio1.jpg', title: 'Elegant Wedding Setup', desc: 'Stunning floral arrangements at a lakeside venue.' },
    { src: '/asset/portfolio2.jpg', title: 'Corporate Gala Evening', desc: 'Ambient lighting with modern table decor.' },
    { src: '/asset/portfolio3.jpg', title: 'Grand Birthday Celebration', desc: 'Themed setup with vibrant balloon wall backdrop.' },
    { src: '/asset/portfolio4.jpg', title: 'Destination Beach Wedding', desc: 'Sunset ceremony with boho-chic decor.' },
  ];

  return (
    <section className="portfolio">
      <h2 className="portfolio-title" data-aos="fade-down">Our Portfolio</h2>

      {/* Image Grid */}
      <div className="portfolio-grid">
        {items.map((item, i) => (
          <div className="portfolio-card" data-aos="fade-up" data-aos-delay={i * 150} key={i}>
            <img src={item.src} alt={item.title} className="portfolio-img" />
            <div className="portfolio-overlay">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Video Section */}
      <div className="video-section">
        <div className="video-container" data-aos="fade-right">
          <video src="/asset/portfolio-video.mp4" controls autoPlay muted loop />
        </div>
        <div className="video-content" data-aos="fade-left">
          <h2>Immersive Experiences</h2>
          <p>
            At <strong>Bells & Brides</strong>, we capture emotion through visual storytelling. Whether it’s a destination wedding or a corporate gala, we bring the magic alive through curated visuals, music, and lighting.
          </p>
          <ul>
            <li>High-quality cinematography for every event</li>
            <li>On-site editing & quick delivery</li>
            <li>Drone, 4K, and cinematic effects available</li>
          </ul>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="why-choose-section" data-aos="fade-up">
        <h2>Why Choose Bells & Brides?</h2>
        <div className="why-grid">
          <div className="why-box">
            <h3>Creative Excellence</h3>
            <p>Our team blends art with tradition to deliver unforgettable event decor and styling.</p>
          </div>
          <div className="why-box">
            <h3>Reliable Execution</h3>
            <p>From planning to execution, our expert coordinators handle every detail with precision.</p>
          </div>
          <div className="why-box">
            <h3>Client-Centered</h3>
            <p>We customize each event to reflect your unique style, preferences, and cultural values.</p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonial-section" data-aos="fade-up">
        <h2 className="testimonial-title">What Our Clients Say</h2>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <p>"Bells & Brides made our wedding an unforgettable experience. Every detail was handled with perfection!"</p>
            <h4>- Ananya & Rahul</h4>
          </div>
          <div className="testimonial-card">
            <p>"Professional team, beautiful decor, and seamless coordination. Highly recommend for any event!"</p>
            <h4>- Ramesh Kumar</h4>
          </div>
          <div className="testimonial-card">
            <p>"Their creative vision turned my daughter’s birthday into a fairytale. Thank you for the magic!"</p>
            <h4>- Priya Sharma</h4>
          </div>
        </div>
      </div>
    </section>
  );
}