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
      image: '/asset/wedding.jpg',
      description: 'From intimate ceremonies to grand celebrations, we plan every detail for a flawless wedding day.',
    },
    {
      title: 'Reception Coordination',
      image: '/asset/Reception.jpg',
      description: 'Celebrate your union with a stunning reception tailored to your tastes and traditions.',
    },
    {
      title: 'Catering Services',
      image: '/asset/Catering.jpg',
      description: 'Delight your guests with gourmet catering and bespoke menu options crafted by expert chefs.',
    },
    {
      title: 'Photography & Videography',
      image: '/asset/Photograph.jpg',
      description: 'Capture unforgettable memories with professional photography and cinematic videography.',
    },
    {
      title: 'Decor & Styling',
      image: '/asset/Decorations.jpg',
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
