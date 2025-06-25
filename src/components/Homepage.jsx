import React, { useEffect, useRef, useState } from 'react';
import '../css/main.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


const pages = [
  {
    title: 'WELCOME TO BELLS AND BRIDES',
    content: 'At BELLS & BRIDES we believe your wedding should reflect your unique love story...',
    video: '/asset/one slide.mp4',
  },
  {
    title: 'CATERING',
    content: 'Our catering services are designed to delight your guests...',
    video: '/asset/Catering.mp4',
  },
  {
    title: 'PHOTOGRAPHY',
    content: 'Ready to start planning your dream wedding?',
    video: '/asset/photo.mp4',
  },
];

const infinitePages = [...pages, ...pages];

export default function Homepage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRefs = useRef([]);
  const carouselRef = useRef(null);

  useEffect(() => {
    const currentVideo = videoRefs.current[currentIndex];
    if (currentVideo) {
      currentVideo.currentTime = 0;
      currentVideo.play().catch(e => e.name !== 'AbortError' && console.error(e));
    }

    const timer = setTimeout(() => {
      let next = (currentIndex + 1) % infinitePages.length;
      setCurrentIndex(next);
      if (carouselRef.current) {
        carouselRef.current.style.transition = 'transform 1s ease-in-out';
        carouselRef.current.style.transform = `translateX(-${next * 100}%)`;
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: 'ease-in-out',
      once: false,
      mirror: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="carousel-wrapper">
      <div className="carousel-container" ref={carouselRef}>
        {infinitePages.map((page, idx) => (
          <div className="carousel-slide" key={idx}>
             <div className="carousel-inner">
            <video
              className="background-video"
              src={page.video}
              ref={(el) => (videoRefs.current[idx] = el)}
              muted
              playsInline
              loop
              preload="auto"
            />
            <div className="carousel-text" data-aos="fade-up">
              <h1>{page.title}</h1>
              <p>{page.content}</p>
            </div>
          </div></div>
        ))}
      </div>

      {/* Scroll-triggered brand name */}
      <div className="animated-section">
        <div className="animated-title" data-aos="fade-left">
          <h1 className="brand-name">Bells & Brides</h1>
        </div>
      </div>

      {/* Event Section */}
      <div className="event-section">
        <div className="event-text" data-aos="fade-right">
          <h2>Creating Magical Events Beyond Weddings</h2>
          <p>
            At <strong>Bells & Brides</strong>, we go beyond weddings. From corporate galas to
            private parties and themed celebrations, our team ensures every detail is
            planned to perfection. Whether it’s a rustic outdoor evening or a luxury
            ballroom affair, we bring your vision to life with style and sophistication.
          </p>
        </div>
        <div className="event-image" data-aos="fade-left">
          <img src="/asset/event management.jpg" alt="Event Management" />
        </div>
      </div>

      {/* Services */}
      <div className="services-section">
        {/* Card 1 */}
        <div className="service-card flip-card" data-aos="zoom-in">
          <div className="flip-inner">
            <div className="flip-front">
              <img src="/asset/elegant decor.jpg" alt="Elegant Decor" />
            </div>
            <div className="flip-back">
              <h3>Elegant Decor</h3>
              <p>We transform venues into dreamy spaces with stunning floral, lighting, and thematic designs.</p>
            </div>
          </div>
          <h2>Elegant Decor</h2>
        </div>

        {/* Card 2 */}
        <div className="service-card flip-card" data-aos="zoom-in" data-aos-delay="200">
          <div className="flip-inner">
            <div className="flip-front">
              <img src="/asset/live entertainment.jpg" alt="Live Entertainment" />
            </div>
            <div className="flip-back">
              <h3>Live Entertainment</h3>
              <p>From live bands to DJs and traditional acts, we curate unforgettable entertainment.</p>
            </div>
          </div>
          <h2>Live Entertainment</h2>
        </div>

        {/* Card 3 */}
        <div className="service-card flip-card" data-aos="zoom-in" data-aos-delay="400">
          <div className="flip-inner">
            <div className="flip-front">
              <img src="/asset/live cordination.jpg" alt="Planning" />
            </div>
            <div className="flip-back">
              <h3>Planning & Coordination</h3>
              <p>Our team handles logistics and timelines, ensuring stress-free and smooth execution.</p>
            </div>
          </div>
          <h2>Planning & Coordination</h2>
        </div>
      </div>

        <div className="why-choose" data-aos="fade-up">
  <h2>Why Choose Bells & Brides</h2>
  <div className="why-grid">
    <div className="why-item">
      <i className="fas fa-heart"></i>
      <h3>Tailored Experiences</h3>
      <p>Every event is personalized to reflect your story and style.</p>
    </div>
    <div className="why-item">
      <i className="fas fa-gem"></i>
      <h3>Luxury & Elegance</h3>
      <p>We bring sophisticated aesthetics to life through every detail.</p>
    </div>
    <div className="why-item">
      <i className="fas fa-calendar-check"></i>
      <h3>End-to-End Planning</h3>
      <p>From concept to execution, we manage everything flawlessly.</p>
    </div>
  </div>
</div>

<div className="testimonial-section" data-aos="fade-up">
  <h2>What Our Clients Say</h2>
  <div className="testimonial-cards">
    <div className="testimonial-card">
      <p>"Our wedding was like a dream. The Bells & Brides team made it magical!"</p>
      <h4>— Aarti & Karthik</h4>
    </div>
    <div className="testimonial-card">
      <p>"Impeccable planning, gorgeous decor, and seamless execution."</p>
      <h4>— Rina Thomas</h4>
    </div>
  </div>
</div>

{/* <div className="gallery-section" data-aos="zoom-in">
  <h2>Moments We Cherish</h2>
  <div className="gallery-grid">
    <img src="/asset/gallery1.jpg" alt="Event 1" />
    <img src="/asset/gallery2.jpg" alt="Event 2" />
    <img src="/asset/gallery3.jpg" alt="Event 3" />
    <img src="/asset/gallery4.jpg" alt="Event 4" />
  </div>
</div> */}

<div className="stats-section" data-aos="fade-up">
  <div className="stats-grid">
    <div><h3>250+</h3><p>Weddings Planned</p></div>
    <div><h3>100+</h3><p>Corporate Events</p></div>
    <div><h3>50+</h3><p>Luxury Destinations</p></div>
  </div>
</div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-left">
            <h2 className="footer-logo">Bells & Brides</h2>
            <p className="footer-tagline">Crafting unforgettable wedding moments with love and elegance.</p>
          </div>
          <div className="footer-middle">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Our Services</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-right">
            <h3>Connect with Us</h3>
            <div className="footer-icons">
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fas fa-envelope"></i></a>
              <a href="#"><i className="fas fa-phone"></i></a>
            </div>
          </div>
        </div>
        <p className="footer-copy">© 2025 Bells and Brides. All rights reserved.</p>
      </footer>
    </div>
  );
}
