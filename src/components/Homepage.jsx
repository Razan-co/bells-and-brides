import React, { useEffect, useRef, useState } from "react";
import { Title, Meta } from "react-head";
import "../css/main.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const pages = [
  {
    title: "WELCOME TO BELLS AND BRIDES",
    content: "At BELLS & BRIDES we believe your wedding should reflect your unique love story...",
    video: "/wedding.webm",

  },
  {
    title: "CATERING",
    content: "Our catering services are designed to delight your guests...",
    video: "/hall.webm",
  
  },
  {
    title: "PHOTOGRAPHY",
    content: "Ready to start planning your dream wedding?",
    video: "/marriage.webm",
    
  },
]


const infinitePages = [...pages, ...pages];

export default function Homepage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef(null);
  const carouselRef = useRef(null);

  // Carousel + Video effect
  useEffect(() => {
    AOS.init({ duration: 500, easing: "ease-in-out", once: false, mirror: true, offset: 100 });

    const video = videoRef.current;
    if (video) {
      video.load(); // reload new video

      const handleCanPlay = () => video.play().catch(() => {});
      video.addEventListener("canplay", handleCanPlay);

      return () => video.removeEventListener("canplay", handleCanPlay);
    }
  }, [currentIndex]);

  // Carousel slide timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % pages.length);
    }, 5000);

    if (carouselRef.current) {
      carouselRef.current.style.transition = "transform 1s ease-in-out";
      carouselRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <>
    <Title>Wedding Organizers in Bangalore | Bells N Brides – Luxury Wedding Planners</Title>
      <Meta
        name="description"
        content="Bells N Brides is one of the best wedding organizers in Bangalore offering full-service wedding planning, decoration, and catering for luxury celebrations."
      />
      <Meta property="og:url" content="https://www.bellsnbrides.com/" />

    <div className="carousel-wrapper">
   <div className="carousel-container" ref={carouselRef}>
        {pages.map((page, idx) => (
          <div className="carousel-slide" key={idx}>
            <div className="carousel-inner">
              {idx === currentIndex && (
                <video
                  ref={videoRef}
                  muted
                  loop
                  playsInline
                  preload="auto"
                
                  className="background-video"
                >
                 <source src={page.video} type="video/webm" />
                  Sorry, your browser doesn’t support embedded videos.
                </video>
              )}
              <div className="carousel-text" data-aos="fade-up">
                <h1>{page.title}</h1>
                <p>{page.content}</p>
              </div>
            </div>
          </div>
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
            At <strong>Bells & Brides</strong>, we go beyond weddings. From
            corporate galas to private parties and themed celebrations, our team
            ensures every detail is planned to perfection.
          </p>
        </div>
        <div className="event-image" data-aos="fade-left">
          <img src="https://res.cloudinary.com/dwj7qkkvp/image/upload/f_auto,q_auto/v1758614478/south-indian-wedding-featuring-happy-bride-groom_dm7box.jpg" alt="Event Management" />
        </div>
      </div>

      {/* Services Section */}
      <div className="services-section">
        <div className="service-card flip-card" data-aos="zoom-in">
          <div className="flip-inner">
            <div className="flip-front">
              <img src="https://res.cloudinary.com/dwj7qkkvp/image/upload/f_auto,q_auto/v1758619264/selective-focus-on-the-colorful-stage-decoration-w-2024-09-12-09-29-53-utc_biwwvo.jpg" alt="Elegant Decor" />
            </div>
            <div className="flip-back">
              <h3>Elegant Decor</h3>
              <p>We transform venues into dreamy spaces with stunning floral, lighting, and thematic designs.</p>
            </div>
          </div>
          <h2>Elegant Decor</h2>
        </div>

        <div className="service-card flip-card" data-aos="zoom-in" data-aos-delay="200">
          <div className="flip-inner">
            <div className="flip-front">
              <img src="https://res.cloudinary.com/dwj7qkkvp/image/upload/f_auto,q_auto/v1758614369/live_entertainment_bwyxwd.jpg" alt="Live Entertainment" />
            </div>
            <div className="flip-back">
              <h3>Live Entertainment</h3>
              <p>From live bands to DJs and traditional acts, we curate unforgettable entertainment.</p>
            </div>
          </div>
          <h2>Live Entertainment</h2>
        </div>

        <div className="service-card flip-card" data-aos="zoom-in" data-aos-delay="400">
          <div className="flip-inner">
            <div className="flip-front">
              <img src="https://res.cloudinary.com/dwj7qkkvp/image/upload/f_auto,q_auto/v1758614370/live_cordination_fj3x9h.jpg" alt="Planning" />
            </div>
            <div className="flip-back">
              <h3>Planning & Coordination</h3>
              <p>Our team handles logistics and timelines, ensuring stress-free and smooth execution.</p>
            </div>
          </div>
          <h2>Planning & Coordination</h2>
        </div>
      </div>

      {/* Why Choose Section */}
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

      {/* Testimonials Section */}
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

      {/* Stats Section */}
      <div className="stats-section" data-aos="fade-up">
        <div className="stats-grid">
          <div>
            <h3>50+</h3>
            <p>Weddings Planned</p>
          </div>
          <div>
            <h3>25+</h3>
            <p>Corporate Events</p>
          </div>
          <div>
            <h3>50+</h3>
            <p>Luxury Destinations</p>
          </div>
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
              <li><Link to="/about-bells-n-brides">About Us</Link></li>
              <li><Link to="/wedding-planning-services-bangalore">Our Services</Link></li>
              <li><Link to="/contact-bells-n-brides">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-right">
            <h3>Connect with Us</h3>
            <div className="footer-icons">
              <div className="top-icons">
                <a href="https://www.instagram.com/thebellsandbrides"><i className="fab fa-instagram"></i></a>
                <a href="https://www.linkedin.com/in/thebells-nbrides-876203377"><i className="fab fa-linkedin"></i></a>
              </div>
              <div className="bottom-icons">
                <a href="#"><i className="fas fa-envelope"></i> bellsandbridesofficial@gmail.com</a>
                <a href="#"><i className="fas fa-phone"></i> 9840942784</a>
              </div>
            </div>
          </div>
        </div>
       <p className="footer-copy">
  © {new Date().getFullYear()} Bells and Brides. All rights reserved.
</p>
      </footer>
    </div>
    </>
  );
}
