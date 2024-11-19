// Profile.js
import React from 'react';
import './Profile.css'; // Create and link a CSS file for styling

const Profile = ({ user, bookings }) => {
  return (
    <div className="profile-container">
      <div className="profile-details">
        <h2>User Profile</h2>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Wallet Balance: ₹{user.walletBalance}</p>
      </div>
      <div className="booking-history">
        <h3>Booking History</h3>
        {bookings.length > 0 ? (
          bookings.map((booking, index) => (
            <div key={index} className="booking-item">
              <p>{booking.museumName} - {booking.date}</p>
            </div>
          ))
        ) : (
          <p>No bookings found.</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
