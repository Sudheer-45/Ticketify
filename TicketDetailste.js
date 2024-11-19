import React from "react";
import { useState } from "react";

const museumDetails = {
    'National Museum': {
      opening: '10:00',
      closing: '17:00',
    },
    // Add more museums as needed
  };

function TicketDetailste({ stepste, triggerNextStep }) {
    const [ticketste, setTickets] = useState(1);
    const [datete, setDate] = useState('');
    const [timete, setTime] = useState('');
  
    const museumte = stepste && stepste['choose-museum-te'] ? stepste['choose-museum-te'].value : null;
    const museumDatate = museumDetails[museumte] || {};
  
    const openingTime = museumDatate.opening || '09:00';
    const closingTime = museumDatate.closing || '18:00';
  
    const minTime = openingTime;
    const maxTime = closingTime;
  
    const today = new Date().toISOString().split('T')[0];
    const maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() + 3);
    const maxDateStr = maxDate.toISOString().split('T')[0];
  
    const handleSubmit = () => {
      if (ticketste && datete && timete) {
        const bookingDetailste = {
          ticketste,
          datete,
          timete,
          museumte,
        };
        triggerNextStep({ value: bookingDetailste });
      } else {
        alert('దయచేసి అన్ని వివరాలను నమోదు చేయండి.');
      }
    };
  
    return (
      <div style={styles2.container}>
        <h3>టికెట్ వివరాలు నమోదు చేయండి</h3>
        <label>
          టికెట్ల సంఖ్య:
          <input
            type="number"
            value={ticketste}
            onChange={(e) => setTickets(e.target.value)}
            min="1"
            style={styles2.input}
          />
        </label>
        <label>
          తేది:
          <input
            type="date"
            value={datete}
            onChange={(e) => setDate(e.target.value)}
            min={today}
            max={maxDateStr}
            style={styles2.input}
          />
        </label>
        <label>
          సమయం:
          <input
            type="time"
            value={timete}
            onChange={(e) => setTime(e.target.value)}
            min={minTime}
            max={maxTime}
            style={styles2.input}
          />
        </label>
        <button style={styles2.button} onClick={handleSubmit} disabled={!datete || !timete}>
          బుకింగ్ ధృవీకరించండి
        </button>
      </div>
    );
  }
  const styles2 = {
    container: { padding: '20px' },
    input: { display: 'block', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' },
    button: { padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' },
  };
export default TicketDetailste;  