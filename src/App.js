import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Contact from './components/Contact.js';

// 1. populate the following array with the correct data
const contactInfo = [
  {
    name: 'Michaelangelo',
    email: 'michelangelo@ninjaturtles.com',
    phone: '☎️ 7873892392',
  },
  {
    name: 'Donatello',
    email: 'donatello@ninjaturtles.com',
    phone: '☎️ 7873892392',
  },
  {
    name: 'Raphael',
    email: 'raphael@ninjaturtles.com',
    phone: '☎️ 7873892392',
  },
  {
    name: 'Leonardo',
    email: 'leonardo@ninjaturtles.com',
    phone: '☎️ 7873892392',
  },
  {
    name: 'Master Splinter',
    email: 'mastersplinter@ninjaturtles.com',
    phone: '☎️ 7873892392',
  },
];

export default function App() {
  return (
    <div>
      <h1 className="text-center">My contacts list 📱</h1>

      <div>
        <div id="container">
          {contactInfo.map((contactInfo, index) => (
            <Contact
              key={index}
              name={contactInfo.name}
              email={contactInfo.email}
              phone={contactInfo.phone}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
// write your HTML code here

ReactDOM.render(App, document.getElementById('root'));
