import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../css/venues.css";
import Chennai from "./Chennai"; 
import Bangalore from "./Bangalore";
import Delhi from './Delhi';
import Mumbai from './Mumbai';

const data = [
  { name: "Chennai", image: "/asset/Chennai.jpg" },
  { name: "Bangalore", image: "/asset/Bangalore.webp" },
  { name: "Mumbai", image: "/asset/Mumbai.jpg" },
  { name: "Delhi", image: "/asset/Delhi.webp" },
];

export default function Venues() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null); // 👈 track selected

  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  const handleViewClick = (cityName) => {
    setSelectedCity(cityName); // 👈 set the selected city
  };

  return (
    <div className="venues-wrapper">
      <h2 className="venues-title">Explore Our Venues</h2>

      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        onSwiper={setSwiperInstance}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="venue-swiper"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="venue-card">
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
              <button className="view-btn" onClick={() => handleViewClick(item.name)}>
                View
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="custom-nav-buttons">
        <button ref={prevRef} className="custom-prev">‹</button>
        <button ref={nextRef} className="custom-next">›</button>
      </div>

      {/* Show content based on city selection */}
      <div className="venue-details-section">
        {selectedCity === "Chennai" && <Chennai />}
        {selectedCity === "Bangalore" && <Bangalore />} 
        {selectedCity === "Delhi" && <Delhi />} 
           {selectedCity === "Mumbai" && <Mumbai />} 
      </div>
    </div>
  );
}
