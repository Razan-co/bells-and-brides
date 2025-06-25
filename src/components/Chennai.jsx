import React from 'react';


const chennai = [

    // Banquets

  { name: "Sathyam Grand Resort", location: "Chennai",type:'Banquets'},
  { name: "Ramada Plaza Hotel", location: "Guindy, Chennai",type:'Banquets' },
  { name: "Taj Club House", location: "Royapettah, Chennai",type:'Banquets' },
  { name: "V Five Hotel and Banquet Hall", location: "Chengalpattu, Chennai",type:'Banquets' },
  { name: "Turyaa Hotels", location: "Kottivakkam, Chennai",type:'Banquets' },
  { name: "Taj Coromandel, Chennai", location: "Nungambakkam, Chennai",type:'Banquets' },
  { name: "Crowne Plaza, Adyar Park", location: "Alwarpet, Chennai",type:'Banquets'  },
  { name: "Grande Bay Resort and Spa", location: "Mahabalipuram, Chennai",type:'Banquets'  },
  { name: "Taj Fisherman's Cove Resort & Spa, Chennai", location: "Kanchipuram District, Chennai",type:'Banquets'  },
  { name: "Chariot Beach Resorts", location: "Mahabalipuram, Chennai" ,type:'Banquets' },
  { name: "The Leela Palace Chennai", location: "Adyar, Chennai",type:'Banquets'  },
  { name: "ITC Grand Chola", location: "Guindy, Chennai",type:'Banquets'  },
  { name: "Ambassador Pallava, Chennai", location: "Egmore, Chennai",type:'Banquets'  },
  { name: "Vivanta Chennai, IT Expressway", location: "Sholinganallur, Chennai",type:'Banquets'  },
  { name: "Eldoris Hotel & Resort, Chennai", location: "Saidapet, Chennai",type:'Banquets'  },
  { name: "WelcomHotel Chennai", location: "Teynampet, Chennai",type:'Banquets'  },
  { name: "The Accord Metropolitan", location: "T Nagar, Chennai" ,type:'Banquets' },
  { name: "Samco Party Hall", location: "Chennai" ,type:'Banquets' },
  { name: "The Residency Towers", location: "T Nagar, Chennai" ,type:'Banquets' },
  { name: "The Park Hotel", location: "Nungambakkam, Chennai",type:'Banquets'  },
  { name: "GRT Hotel", location: "T. Nagar, Chennai",type:'Banquets'  },
  { name: "The Raintree, Anna Salai", location: "Teynampet, Chennai",type:'Banquets'  },
  { name: "Radisson Blu Hotel Chennai City Centre", location: "Saidapet, Chennai",type:'Banquets'  },
  { name: "The Westin, Chennai", location: "Velachery, Chennai",type:'Banquets'  },
  { name: "Hilton Chennai", location: "Guindy, Chennai",type:'Banquets'  },
  { name: "Novotel Chennai Chamiers Road Hotel", location: "Nandanam, Chennai",type:'Banquets'  },
  { name: "Hotel Reech", location: "Porur,Chennai",type:'Banquets'  },
  { name: "v7 Hotel", location: "Porur,Chennai" ,type:'Banquets' },
  { name: "Leela Palace", location: "RA Puram, Chennai", type: 'Banquets' },
  { name: "The Residency Towers", location: "T Nagar, Chennai", type: 'Banquets' },
  { name: "Cinemascope Hotel", location: "Pallavakkam, Chennai", type: 'Banquets' },
  { name: "Madharas Banquet Hall", location: "T Nagar, Chennai", type: 'Banquets' },
  { name: "Royal Radiance Luxury Banquet Hall", location: "T Nagar, Chennai", type: 'Banquets' },
  { name: "Chennai Convention Hall", location: "ECR, Chennai", type: 'Banquets' },
  // Mahals

  { name: "Sree Ganesh Mahal Kalyana Mandapam", location: "Chennai",type:'Mahals'  },
  { name: "St. Lourdu Mahal & A.D.S. Party Hall", location: "Chennai",contact:"9791310333",type:'Mahals'  },
  { name: "Meena Hall", location: "Adyar, Chennai",type:'Mahals'  },
  { name: "Ram Seetha Hall", location: "Chromepet, Chennai",type:'Mahals'  },
  { name: "KVN Kalyana Mandapam", location: "Abhiramapuram, Chennai" ,type:'Mahals' },
  { name: "Lotus Banquet Hall", location: "Virugambakkam, Chennai",type:'Mahals'  },
  { name: "Hyath Mahal", location: "George Town, Chennai",type:'Mahals'  },
  { name: "CK Mahal", location: "Medavakkam, Chennai",type:'Mahals'  },
  { name: "Arularasan Palace", location: "Virugambakkam, Chennai",type:'Mahals'  },
  { name: "Om Sathyam Function Hall", location: "Egmore, Chennai" ,type:'Mahals' },
  { name: "EVP Rajeswari Marriage Palace", location: "T. Nagar, Chennai" ,type:'Mahals' },
  { name: "San Event Hall", location: "ECR, Kottivakkam, Chennai", type: 'Mahals' },
  { name: "VGP Pandian Hall", location: "ECR, Chennai", type: 'Mahals' },
  { name: "Chennai Convention Hall", location: "ECR, Chennai", type: 'Mahals' },
  // Beach Venues

  { name: "Blue Bay Beach Resort", location: "East Coast Road Ecr, Chennai",type:'Beach Venues'  },
  { name: "Intercontinental", location: "Mahabalipuram" ,type:'Beach Venues' },
  { name: "Resort", location: "Mahabalipuram" ,type:'Beach Venues' },
  { name: "Palace House", location: "Injambakkam, ECR, Chennai", type: 'Beach Venues' },
  { name: "Rajan Garden", location: "ECR, Chennai", type: 'Beach Venues' },
  { name: "Heritage Beach Lawn", location: "ECR, Chennai", type: 'Beach Venues' },
  { name: "Blue Bay Resort", location: "ECR, Chennai", type: 'Beach Venues' },
  { name: "Green Coconut Resort", location: "ECR, Chennai", type: 'Beach Venues' },
  { name: "MGM Beach Resort", location: "ECR, Chennai", type: 'Beach Venues' },
  { name: "Blue Lagoon Beach Resort", location: "ECR, Chennai", type: 'Beach Venues' },
];

export default function Chennai() {
  return (
    <div className="banquets-container">
       <h1 className='state'>Chennai</h1>
      <h2 className="banquets-title">Banquet Halls</h2>
      <div className="banquets-grid">
        {chennai 
        .filter( item=> item .type === 'Banquets') 
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
        {chennai
        .filter( item=> item .type === 'Mahals') 
        .map((item, index) => (
          <div className="banquet-card" key={index}>
            <h3>{item.name}</h3>
            <p>{item.location}</p>
            {item.contact && <p className="contact">{item.contact}</p>}
          </div>
        ))}
      </div>
      <h2 className="banquets-title">Beach Resorts</h2>
      <div className="banquets-grid">
        {chennai
        .filter( item=> item .type === 'Beach Venues') 
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