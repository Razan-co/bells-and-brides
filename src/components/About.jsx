import React from 'react';
import '../css/about.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


export default function About() {
  useEffect(() => {
  AOS.init({
    duration: 1000,
    once: true,
  });
}, []);
  return (
    <div className="about">
      <div className="about-head"  data-aos="fade-down"s>
        <h1 className="title">About Us</h1>
      </div>
      <div className="a1">
        <div className="about-img" data-aos="fade-right">
          <img src='/asset/bb_about.jpg' alt="Event Planning" style={{ width: '600px', borderRadius: '12px' }} />
        </div>
        <div className="a2" data-aos="fade-left">
          <div className="about-content" data-aos="fade-up" data-aos-delay="100">
            <h3>Crafting Unforgettable Moments</h3>
            <p>
              <strong>Bells & Brides</strong> is a full-service wedding and event management company built on passion, creativity, and a commitment to excellence. We transform ordinary occasions into extraordinary experiences through flawless planning and stunning design.
            </p>
          </div>

         
      <div className="about-content" data-aos="fade-up" data-aos-delay="200">
            <h3>Our Mission</h3>
            <p>
              To curate unforgettable celebrations that reflect your unique story, values, and dreams—with precision, elegance, and a personal touch.
            </p>
          </div>

         <div className="about-content" data-aos="fade-up" data-aos-delay="300">
            <h3>Our Vision</h3>
            <p>
              To be recognized as the leading event design and planning brand known for creativity, innovation, and trust across every celebration we bring to life.
            </p>
          </div>

          <div className="about-content" data-aos="fade-up" data-aos-delay="400">
  <h3>What We Specialize In</h3>
  <ul>
    <li><strong>Weddings:</strong> From traditional ceremonies to destination and theme weddings—we plan it all with grace and flair.</li>
    <li><strong>Luxury Events:</strong> Be it a red carpet affair, private yacht party, or exclusive launch—we elevate every detail.</li>
    <li><strong>Social Celebrations:</strong> Birthdays, anniversaries, baby showers—personal milestones become unforgettable memories.</li>
    <li><strong>Corporate Events:</strong> Sophisticated conferences, offsites, and product launches designed with class and impact.</li>
  </ul>
</div>

         <div className="about-content" data-aos="fade-up" data-aos-delay="100">
  <h3>Why Clients Trust Us</h3>
  <ul>
    <li>Seamless coordination and hassle-free planning experience</li>
    <li>Unique concepts tailored to your personality and taste</li>
    <li>Strong vendor partnerships to ensure quality and reliability</li>
    <li>Transparent pricing and professional budgeting practices</li>
    <li>Dedicated event managers for personalized attention</li>
  </ul>
</div>
        </div>
      </div>
      
      {/* <div className="about-team" data-aos="fade-up">
  <h3 className="team-title">Meet Our Founders</h3>
  <div className="team-cards">
    <div className="team-card">
      <img src="/asset/founder1.jpg" alt="Founder" />
      <h4>********</h4>
      <p>Creative Director</p>
    </div>
    <div className="team-card">
      <img src="/asset/founder2.jpg" alt="Co-Founder" />
      <h4>*******</h4>
      <p>Event Strategist</p>
    </div>
  </div>
</div> */}

<div className="about-awards" data-aos="zoom-in">
  <h3 className="awards-title">Recognitions</h3>
  <ul className="awards-list">
    <li>🌍 300+ Events Planned Nationwide</li>
    <li>💍 Featured in Wedding Times India</li>
  </ul>
</div>

<div className="about-values" data-aos="fade-up">
  <h3 className="values-title">Our Core Values</h3>
  <div className="values-grid">
    <div className="value-box">🎯 Excellence</div>
    <div className="value-box">🤝 Trust</div>
    <div className="value-box">🎨 Creativity</div>
    <div className="value-box">💡 Innovation</div>
  </div>
</div>

    </div>
  );
}
