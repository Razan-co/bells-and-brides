import React, { useEffect, useState } from 'react';
import '../css/services.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const sectionClass = isVisible ? 'services-container show' : 'services-container';

  const services = [
    {
      title: 'Engagement Planning',
      image: '/asset/Engagement.jpg',
      description: 'We design elegant, personalized engagement events that reflect your love story and style.',
    },
    {
      title: 'Wedding Planning',
      image: '/asset/traditional-indian-wedding-ceremony-groom-bride-hand.jpg',
      description: 'From intimate ceremonies to grand celebrations, we plan every detail for a flawless wedding day.',
    },
    {
      title: 'Reception Coordination',
      image: '/asset/joyful-indian-couple-dancing-together-in-festive-h-2025-07-06-06-50-54-utc (1).jpeg',
      description: 'Celebrate your union with a stunning reception tailored to your tastes and traditions.',
    },
    {
      title: 'Catering Services',
      image: '/asset/people-savoring-indian-spicy-food-served-on-banana-2025-03-07-23-51-13-utc.jpg',
      description: 'Delight your guests with gourmet catering and bespoke menu options crafted by expert chefs.',
    },
    {
      title: 'Photography & Videography',
      image: '/asset/Photograph.jpg',
      description: 'Capture unforgettable memories with professional photography and cinematic videography.',
    },
    {
      title: 'Decor & Styling',
      image: '/asset/outdoor-wedding-stage-adorned-with-chairs-flowers-2025-02-11-19-43-08-utc.jpg',
      description: 'Create enchanting event spaces with our custom decor, lighting, and floral styling.',
    },
  ];

  return (
    <section className={sectionClass}>
      <h2 className="services-title">Our Services</h2>
      <p className="services-subtext">
        At <strong>Bells & Brides</strong>, we specialize in crafting unforgettable moments.
        Our end-to-end services ensure that every element of your celebration is executed with precision and passion.
      </p>

      <div className="services-grid">
        {services.map((service, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div
              className={`services-row ${isEven ? 'row-normal' : 'row-reverse'}`}
              key={idx}
              data-aos={isEven ? 'fade-right' : 'fade-left'}
            >
              <div className="services-image">
                <img className="main-image" src={service.image} alt={service.title} />
              </div>
              <div className="services-content">
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
