// Food jsx

import React from 'react';
import '../css/food.css';

const menuList = [
  {
    type: "veg",
    image: "/asset/Menu1.png",
    items: ["Kesari", "Idli", "Medu Vada", "Pongal", "Poori", "Vadakari", "Sambar", "Coconut Chutney", "Spicy Chutney", "Coffee", "Water Bottle", "Banana Leaf", "Paper Roll"]
  },
  {
    type: "veg",
    image: "/asset/Menu2.png",
    items: ['Shallots Mix', 'Boiled Urad Dal Poriyal', 'White Rice', 'Sambar', 'Brinjal Curry', 'Rasam', 'Buttermilk', 'Appalam', 'Curd', 'Vadai', 'Payasam', 'Banana Leaf', 'Water Bottle', 'Paper Roll']
  },
  {
    type: "veg",
    image: "/asset/Menu3.png",
    items: ['Rasgulla', 'Aathirasam', 'Kaju Katli', 'Veg Soup', 'Rumani Roti', 'Paneer Butter Sabji', 'Mini Idli', 'Dosa with Sambar', 'Uthappam', 'Veg Paya', 'Spring Roll', 'Dengaay Chutney', 'Carrot Chutney', 'Pudina Chutney', 'Veg Roll', 'Veg Mini Uthappam', 'Corn Cheese Poriyaal', 'Urad Dal Poriyal', 'Paneer Tikka', 'Multigrain Cake', 'Gobi 65', 'Apple Pie', 'Gongura Pachadi', 'Mysore Pak', 'Brinjal Rice', 'White Rice', 'Baniya Rasam', 'Pakoda', 'Curd Milagai', 'Sweet', 'Badam Milk', 'Carrot Ice Cream', 'Wheat Halwa', 'White Halwa', 'Pineapple Biriyani', 'Onion Raitha', 'Palkova Mousse', 'Water Bottle', 'Beeda', 'Ice Cream Cake']
  },
  {
    type: "veg",
    image: "/asset/Menu4.png",
    items: ['Kaju Katli', 'Dry Jamun', 'Gobi Manchurian', 'Mushroom Biriyani', 'Onion White Raitha', 'Bonda', 'Paneer Butter', 'Veg Uthappam', 'Carrot Chutney', 'Ginger Chutney', 'Chennai Chickpea Sambar', 'Neer Paniyaram', 'Ginger Curd', 'Boiled Rice', 'Curd Milagai', 'White Rice', 'Sambar', 'Pumpkin Seed Rasam', 'Brinjal Curry', 'Thick Buttermilk', 'Belgian Roast', 'Badam Kheer', 'Banana Leaf', 'Paper Roll', 'Water Bottle', 'Strawberry Ice Cream', 'Sweet Beeda']
  },
  {
    type: "veg",
    image: "/asset/Menu5.png",
    items: ['Sweet', 'Milk Payasam', 'Special Vadai', 'Beans Paruppu Usili', 'Chennai Curry', 'Shallot Mix', 'Appalam', 'Curd', 'White Rice', 'Sambar', 'Sesame Powder', 'Brinjal Fry', 'Butter Kuzhambu', 'Cluster Beans Rasam', 'Buttermilk', 'Sweet Pachadi', 'Banana Leaf', 'Water Bottle', 'Paper Roll', 'Ice Cream']
  },
  {
    type: "veg",
    image: "/asset/Menu6.png",
    items: ['Kasi Halwa / Carrot Halwa', 'Malli Idli', 'Medu Vadai', 'Red Pongal', 'Masala Dosa', 'Mini Poori', 'Chennai Masala', 'Dengaay Chutney', 'Carrot Chutney', 'Pudina Chutney', 'Sambar', 'Kavi', 'Uthappam', 'Veg Payasam', 'Banana Leaf', 'Water Bottle', 'Paper Roll']
  },
  {
    type: "non-veg",
    image: "/asset/non-menu5.png",
    items: ["Chicken Biryani", "Chicken 65", "Bread Halwa", "Onion Raitha", "Brinjal Gravy", "Leaf", "Water Bottle", "Table Roll"],
  },
  {
    type: "non-veg",
    image: "/asset/non-menu6.png",
    items: ["Chicken Briyani", "Chicken 65", "Bread halwa", "Onion Raitha", "Brinjal gravy", "Banana Leaf", "Water Bottle", "Table Roll", "Ice cream Appukatta", "Welcome juice fresh", "Welcome Girls", "Sweet Beeda", "Fruit Salad", "Service Boy's", "Popcorn unlimited", "Sugar Candy unlimited"]
  },
  {
    type: "non-veg",
    image: "/asset/non-menu3.png",
    items: ["Chicken Briyani", "Chicken 65", "Bread halwa", "Onion Raitha", "Brinjal gravy", "Leaf", "Water Bottle", "Table Roll", "Ice cream Appukatta", "Sweet Beeda", "Service Boy's"],
  },

  {
    type: "non-veg",
    image: "/asset/non-menu4.png",
    items: ["Mutton Briyani", "Chicken 65", "Bread halwa", "Onion Raitha", "Brinjal gravy", "Leaf", "Water Bottle", "Table Roll", "Ice cream Appukatta", "Welcome juice", "Welcome Girls", "Sweet Beeda", "Fruit Salad", "Service Boy's", "Popcorn unlimited", "Sugar Candy unlimited"]
  },
  {
    type: "non-veg",
    image: "/asset/non-menu5.png",
    items: ["Mutton Briyani", "Chicken 65", "Bread halwa", "Onion Raitha", "Brinjal gravy", "Leaf", "Water Bottle", "Table Roll", "Ice cream Appukatta", "Sweet Beeda", "Service Boy's"]
  },
  {
    type: "non-veg",
    image: "/asset/non-menu6.png",
    items: ["Mutton Briyani", "Chicken 65", "Bread halwa", "Onion Raitha", "Brinjal gravy", "Leaf", "Water Bottle", "Table Roll"]
  }
];




export default function Food() {
  return (
    <>
<div className='menu'>
      <h1>Menu Card</h1>
    </div>
     <h2 className="menu-heading veg-heading">Vegetarian</h2>
      <div className="menu-grid-container">
        {menuList
          .filter(menu => menu.type === "veg")
          .map((menu, i) => (
            <div className="menu-flip-card" key={`veg-${i}`}>
              <h2>Menu {i + 1}</h2>
              <div className="menu-flip-inner">
                <div className="menu-flip-front">
                  <div className="menu-card front">
                     <img src={menu.image} alt="Veg Menu" className="menu-image" loading="eager" />
                  </div>
                </div>
                <div className="menu-flip-back">
  <img src={menu.image} alt="Menu" className="menu-image back-image" />
  <div className="back-overlay">
    <h3>Menu</h3>
    <ul className="menu-items">
      {menu.items.map((item, index) => (
        <li key={index}>
          <span className="menu-number">{index + 1}.</span>
          <span className="menu-name">{item}</span>
        </li>
      ))}
    </ul>
  </div>
</div>
              </div>
            </div>
        ))}
      </div>
     <h2 className="menu-heading nonveg-heading">Non-Vegetarian</h2>
      <div className="menu-grid-container">
        {menuList
          .filter(menu => menu.type === "non-veg")
          .map((menu, i) => (
            <div className="menu-flip-card" key={`nonveg-${i}`}>
              <h2>Menu {i + 1}</h2>
              <div className="menu-flip-inner">
                <div className="menu-flip-front">
                  <div className="menu-card front">        
                     <img src={menu.image} alt="Veg Menu" className="menu-image" loading="eager" />
                  </div>
                </div>
                <div className="menu-flip-back">
                  <img src={menu.image} alt="Menu" className="menu-image back-image" />
  <div className="back-overlay">
                    <h3>Menu</h3>
                    <ul className="menu-items">
                      {menu.items.map((item, index) => (
                        <li key={index}>
                          <span className="menu-number">{index + 1}.</span>
                          <span className="menu-name">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
        ))}
      </div>
    </>
  );
}