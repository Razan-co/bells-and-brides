import React from 'react';
import "../css/state.css";
const delhi = [
  { name: "The Leela Ambience Convention Hotel", location: "Shahdara, Delhi", type: 'Banquets' },
  { name: "Seven Seas Hotel", location: "Rohini, Delhi", type: 'Banquets' },
  { name: "Tivoli Grand Resort Hotel", location: "GT Karnal Road, Delhi", type: 'Banquets' },
  { name: "Andaz Delhi", location: "Aerocity, Delhi", type: 'Banquets' },
  { name: "The Ashok", location: "Chanakyapuri, Delhi", type: 'Banquets' },
  { name: "The Imperial", location: "Janpath, Delhi", type: 'Banquets' },
  { name: "The Lalit", location: "Connaught Place, Delhi", type: 'Banquets' },
  { name: "Radisson Blu", location: "Kaushambi, Ghaziabad", type: 'Banquets' },
  { name: "The Umrao", location: "NH‑8, Samalkha, Delhi", type: 'Banquets' },
  { name: "Zorba", location: "MG Road, Delhi", type: 'Banquets' },
  { name: "The Pullman", location: "Aerocity, Delhi", type: 'Banquets' },
  { name: "Hyatt Regency", location: "Bhikaji Cama Place, Delhi", type: 'Banquets' },
  { name: "Taj Mahal Hotel", location: "Man Singh Road, Delhi", type: 'Banquets' },
  { name: "The Claridges", location: "Lutyens Delhi", type: 'Banquets' },
  { name: "Jaypee Vasant Continental", location: "Delhi", type: 'Banquets' },
  { name: "Jaypee Siddharth", location: "Delhi", type: 'Banquets' },
  { name: "The Leela Ambience", location: "Gurugram, Delhi NCR", type: 'Banquets' },
  { name: "Taj Palace", location: "Chanakyapuri, Delhi", type: 'Banquets' },
  { name: "Shangri‑La Eros", location: "Connaught Place, Delhi", type: 'Banquets' },
  { name: "The Roseate", location: "Samalkha, New Delhi", type: 'Banquets' }
]
 

export default function Delhi() {
  return (
    <div className="banquets-container">
       <h1 className='state'>Delhi</h1>
      <h2 className="banquets-title">Banquets</h2>
      <div className="banquets-grid">
        {delhi
          .filter(item => item.type === 'Banquets')
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