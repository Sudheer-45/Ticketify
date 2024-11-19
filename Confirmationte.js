import React from "react";

function Confirmationte({ steps }) {
    const bookingDetailste = steps['ticket-te'] ? steps['ticket-te'].value : {};
    const { ticketste = 0, datete = 'N/A', timete = 'N/A', museumte = 'N/A' } = bookingDetailste;
  
    const ticketIdte = `TICKET-${Math.floor(Math.random() * 100000)}`;
  
    return (
      <div style={styles.container}>
        <h3>బుకింగ్ ధృవీకరించబడింది!</h3>
        <p>టికెట్లు: {ticketste}</p>
        <p>తేది: {datete}</p>
        <p>సమయం: {timete}</p>
        <p>టికెట్ ID: {ticketIdte}</p>
      </div>
    );
  }

  const styles = {
    container: { padding: '20px', textAlign: 'center' },
  };
  
 
  

export default Confirmationte;