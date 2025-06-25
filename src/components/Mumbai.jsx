//This is Mumbai 
import React from 'react';

const mumbai = [
  { name: "Golden Leaf Banquet", location: "Malad West, Mumbai", type: 'Banquets' },
  { name: "Breeze Banquet", location: "Powai, Mumbai", type: 'Banquets' },
  { name: "Athena Banquet", location: "Powai, Mumbai", type: 'Banquets' },
  { name: "Park Navi Mumbai", location: "CBD Belapur, Navi Mumbai", type: 'Banquets' },
  { name: "Kino’s Cottage", location: "Andheri, Mumbai", type: 'Banquets' },
  { name: "Gallops", location: "Worli, Mumbai", type: 'Banquets' },
  { name: "Green Village", location: "Malad West, Mumbai", type: 'Banquets' },
  { name: "Pacific Banquets", location: "Navi Mumbai", type: 'Banquets' },
  { name: "Agri-Koli Sanskruti Bhawan", location: "Navi Mumbai, Mumbai", type: 'Banquets' },
  { name: "Grand Utsav Banquet", location: "Navi Mumbai, Mumbai", type: 'Banquets' },
  { name: "Mumbai Metro The Executive Hotel", location: "Sakinaka, Mumbai", type: 'Banquets' },
  { name: "VITS Mumbai Airport", location: "Andheri East, Mumbai", type: 'Banquets' },
  { name: "The Leela Banquet", location: "Sahar, Andheri East, Mumbai", type: 'Banquets' },
  { name: "Novotel Mumbai Juhu Beach", location: "Juhu Beach, Mumbai", type: 'Banquets' },
  { name: "Ramada Plaza Palm Grove", location: "Juhu Beach, Mumbai", type: 'Banquets' },
  { name: "Grand Hyatt Mumbai", location: "Santacruz East, Mumbai", type: 'Banquets' },
  { name: "The Lalit", location: "Andheri East, Mumbai", type: 'Banquets' },
  { name: "Renaissance Mumbai Convention Centre", location: "Powai, Mumbai", type: 'Banquets' },
  { name: "The Leela", location: "Andheri East, Mumbai", type: 'Banquets' },
  { name: "Taj Mahal Palace", location: "Colaba, Mumbai", type: 'Banquets' },
  { name: "Four Seasons Hotel", location: "Worli, Mumbai", type: 'Banquets' },
  { name: "JW Marriott Sahar", location: "Sahar, Mumbai", type: 'Banquets' },
  { name: "Trident", location: "Nariman Point / Sahar, Mumbai", type: 'Banquets' },
  { name: "VITS Hotel", location: "Andheri East, Mumbai", type: 'Banquets' }
]

export default function Mumbai() {
  return (
    <div className="banquets-container">
         <h1 className='state'>Mumbai</h1>
      <h2 className="banquets-title">Banquet Halls</h2>
      <div className="banquets-grid">
        {mumbai.map((item, index) => (
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