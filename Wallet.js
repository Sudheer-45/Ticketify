// src/Wallet.js
import React, { useState } from 'react';
import './Wallet.css'; // Include your custom CSS for styling the wallet

function Wallet() {
  const [walletVisible, setWalletVisible] = useState(false);
  const [balance, setBalance] = useState(1000); // Initial wallet balance
  const [amountToAdd, setAmountToAdd] = useState('');

  const toggleWalletDropdown = () => {
    setWalletVisible(!walletVisible);
  };

  const handleAddMoney = () => {
    const amount = parseFloat(amountToAdd);
    if (isNaN(amount) || amount <= 0) {
      alert('Please enter a valid amount.');
      return;
    }
    setBalance(balance + amount);
    setAmountToAdd(''); // Reset input field
  };

  return (
    <div className="wallet-container">
      <img
        src="silver-coin.png" // Replace with your wallet icon image path
        alt="Wallet Icon"
        className="wallet-icon"
        onClick={toggleWalletDropdown}
      />
      {walletVisible && (
        <div className="wallet-dropdown">
          <img src="wallet-image.png" alt="Wallet" className="wallet-img" /> {/* Wallet image */}
          <p>Wallet Balance: ₹{balance}</p>
          <input
            type="number"
            value={amountToAdd}
            onChange={(e) => setAmountToAdd(e.target.value)}
            placeholder="Enter amount"
            className="add-money-input"
          />
          <button onClick={handleAddMoney} className="add-money-btn">
            Add Money
          </button>
        </div>
      )}
    </div>
  );
}

export default Wallet;
