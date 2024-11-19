import React from "react";

function Confirmationta({ steps }) {
    const bookingDetailsta = steps['ticket-ta'] ? steps['ticket-ta'].value : {};
    const { ticketsta = 0, dateta = 'N/A', timeta = 'N/A', museumta = 'N/A' } = bookingDetailsta;
  
    const ticketIdta = `TICKET-${Math.floor(Math.random() * 100000)}`;
  
    return (
      <div style={styles.container}>
        <h3>முன்பதிவு உறுதியாகியது!</h3>
        <p>டிக்கெட்கள்: {ticketsta}</p>
        <p>தேதி: {dateta}</p>
        <p>நேரம்: {timeta}</p>
        <p>டிக்கெட் ID: {ticketIdta}</p>
      </div>
    );
  }

  const styles = {
    container: { padding: '20px', textAlign: 'center' },
  };

export default Confirmationta;
  