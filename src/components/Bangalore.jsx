import React from 'react';
import "../css/state.css";

const bangalore = [
  // Banquets
  { name: "White House", location: "HSR Layout, Bangalore", type: 'Banquets' },
  { name: "Meridian by the Lawns - Chaitrashree Royal Banquet", location: "Bannerghatta, Bangalore", type: 'Banquets' },
  { name: "Diamond Pavilion by Jade", location: "Badamanavarthekaval, Bangalore", type: 'Banquets' },
  { name: "Woodrose", location: "JP Nagar, Bangalore", type: 'Banquets' },
  { name: "Gold Coins Club and Resort", location: "Electronic City, Bangalore", type: 'Banquets' },
  { name: "Srishti Vilasa", location: "Somanahalli, South Bangalore", type: 'Banquets' },
  { name: "LTG Farmhouse", location: "Mysore Road, Kengeri, Bangalore", type: 'Banquets' },
  { name: "Scion Resto Cafe", location: "Mysore Road, Kengeri, Bangalore", type: 'Banquets' },
  { name: "Hotel Ambient Turret", location: "Bangalore", type: 'Banquets' },
  { name: "ANAIKA Banquets by Deebash", location: "Bangalore", type: 'Banquets' },
  { name: "Tamara Weddings and Events", location: "Bangalore", type: 'Banquets' },
  { name: "Hotel Cartier Bixnotel", location: "BSK Vijayanagar, Bangalore", type: 'Banquets' },
  { name: "Kings Club", location: "BSK Vijayanagar, Bangalore", type: 'Banquets' },

  // Mahals
  { name: "MLR Convention Centre", location: "JP Nagar, Bangalore", type: 'Mahals' },
  { name: "Bliss Convention Centre", location: "Bannerghatta Main Road, Bangalore", type: 'Mahals' },
  { name: "MP Convention Hall", location: "Mysore Road, Kengeri, Bangalore", type: 'Mahals' },
  { name: "RR Wedding Bell", location: "Mysore Road, Kengeri, Bangalore", type: 'Mahals' },
  { name: "Balan Farm Convention Center", location: "Bangalore", type: 'Mahals' },
  { name: "Keerthi Convention Hall", location: "Bangalore", type: 'Mahals' },
  { name: "San Palace", location: "Magadi Road, Bangalore", type: 'Mahals' },
  { name: "Sumo Sankalp Party Hall", location: "Banashankari, Siddhana Layout, Bangalore", type: 'Mahals' },
  { name: "Sri Gowri Shankara Mahal", location: "Rajaji Nagar Chord Road, Bangalore", type: 'Mahals' },



];

export default function Bangalore() {
  return (
    <div className="banquets-container">
      <h1 className='state'>Bangalore</h1>
      <h2 className="banquets-title">Banquet Halls</h2>
      <div className="banquets-grid">
        {bangalore
          .filter(item => item.type === 'Banquets')
          .map((item, index) => (
            <div className="banquet-card" key={index}>
              <h3>{item.name}</h3>
              <p>{item.location}</p>
              {item.contact && <p className="contact">{item.contact}</p>}
            </div>
          ))}
      </div>

      <h2 className="banquets-title">Wedding Halls</h2>
      <div className="banquets-grid">
        {bangalore
          .filter(item => item.type === 'Mahals')
          .map((item, index) => (
            <div className="banquet-card" key={index}>
              <h3>{item.name}</h3>
              <p>{item.location}</p>
              {item.contact && <p className="contact">{item.contact}</p>}
            </div>
          ))}
      </div>

      
    </div>
  );
}