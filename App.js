// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Profile from './Profile';  // Import Profile component
import Home from './Home';        // Import Home component
import Tours from './Tours';      // Import Tours component
import Museums from './Museums';  // Import Museums component
import Wallet from './Wallet';
import TicketBookingChatbot from './ChatbotComponent';  // Import Chatbot component
import './App.css';  // Import global CSS

function App() {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    walletBalance: 1000
  });

  const [bookings, setBookings] = useState([
    { museumName: 'National Museum', date: '2024-09-10' },
    { museumName: 'Art Gallery', date: '2024-08-25' },
  ]);

  const [walletVisible, setWalletVisible] = useState(false);

  const toggleWalletDropdown = () => {
    setWalletVisible(!walletVisible);
  };

  return (
    <Router>
      <div className="App">
        {/* Navbar */}
        <nav className="navbar">
          <div className="navbar-left">
            <img src="https://cdn-icons-png.freepik.com/256/2942/2942934.png?uid=R129831452&ga=GA1.1.1538933721.1701537523&semt=ais_hybrid" alt="Tickets4you Logo" className="navbar-logo" />
            <h1>Tickets4you</h1>
          </div>
          <ul className="navbar-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/tours">Tours</Link></li>
            <li><Link to="/museums">Museums</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to ="wallet"></Link></li>
          </ul>
          <div className="navbar-wallet">
            <img
              src="https://cdn-icons-png.freepik.com/256/584/584026.png?uid=R129831452&ga=GA1.1.1538933721.1701537523&semt=ais_hybrid"
              alt="Wallet Icon"
              className="wallet-icon"
              onClick={toggleWalletDropdown}
            />
            {walletVisible && (
              <div className="wallet-dropdown">
                <img src="wallet-image.png" alt="Wallet" className="wallet-img" />
                <p>Wallet Balance: ₹{user.walletBalance}</p>
                <button>Add Money</button>
              </div>
            )}
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/museums" element={<Museums />} />
          <Route path="/profile" element={<Profile user={user} bookings={bookings} />} />
          <Route path='/wallet' element={<Wallet />}/>
        </Routes>

        {/* Chatbot Component */}
        <TicketBookingChatbot />
      </div>
    </Router>
  );
}

export default App;
