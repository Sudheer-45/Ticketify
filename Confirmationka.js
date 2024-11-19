import React from "react";

function Confirmationka({ steps }) {
    const bookingDetailska = steps['ticket-ka'] ? steps['ticket-ka'].value : {};
    const { ticketska = 0, dateka = 'N/A', timeka = 'N/A', museumka = 'N/A' } = bookingDetailska;
  
    const ticketIdka = `TICKET-${Math.floor(Math.random() * 100000)}`;
  
    return (
      <div style={styles.container}>
        <h3>ಬುಕಿಂಗ್ ದೃಢಪಡಿಸಲಾಗಿದೆ!</h3>
        <p>ಟಿಕೆಟ್‌ಗಳು: {ticketska}</p>
        <p>ದಿನಾಂಕ: {dateka}</p>
        <p>ಸಮಯ: {timeka}</p>
        <p>ಟಿಕೆಟ್ ID: {ticketIdka}</p>
      </div>
    );
  }
  const styles = {
    container: { padding: '20px', textAlign: 'center' },
  };

export default Confirmationka;