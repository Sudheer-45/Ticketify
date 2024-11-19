import React from "react";
import { useState } from "react";

const museumDetails = {
    'National Museum': {
      opening: '10:00',
      closing: '17:00',
    },
    // Add more museums as needed
  };


function TicketDetailsta({ stepsta, triggerNextStep }) {
    const [ticketsta, setTickets] = useState(1);
    const [dateta, setDate] = useState('');
    const [timeta, setTime] = useState('');
  
    const museumta = stepsta && stepsta['choose-museum-ta'] ? stepsta['choose-museum-ta'].value : null;
    const museumDatata = museumDetails[museumta] || {};
  
    const openingTime = museumDatata.opening || '09:00';
    const closingTime = museumDatata.closing || '18:00';
  
    const minTime = openingTime;
    const maxTime = closingTime;
  
    const today = new Date().toISOString().split('T')[0];
    const maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() + 3);
    const maxDateStr = maxDate.toISOString().split('T')[0];
  
    const handleSubmit = () => {
      if (ticketsta && dateta && timeta) {
        const bookingDetailsta = {
          ticketsta,
          dateta,
          timeta,
          museumta,
        };
        triggerNextStep({ value: bookingDetailsta });
      } else {
        alert('சில பிரிவு நிரப்பப்பட வேண்டும்.');
      }
    };
  
    return (
      <div style={styles2.container}>
        <h3>டிக்கெட் விவரங்களை உள்ளிடவும்</h3>
        <label>
          டிக்கெட் எண்ணிக்கை:
          <input
            type="number"
            value={ticketsta}
            onChange={(e) => setTickets(e.target.value)}
            min="1"
            style={styles2.input}
          />
        </label>
        <label>
          தேதி:
          <input
            type="date"
            value={dateta}
            onChange={(e) => setDate(e.target.value)}
            min={today}
            max={maxDateStr}
            style={styles2.input}
          />
        </label>
        <label>
          நேரம்:
          <input
            type="time"
            value={timeta}
            onChange={(e) => setTime(e.target.value)}
            min={minTime}
            max={maxTime}
            style={styles2.input}
          />
        </label>
        <button style={styles2.button} onClick={handleSubmit} disabled={!dateta || !timeta}>
          முன்பதிவு உறுதிப்படுத்தவும்
        </button>
      </div>
    );
  }

  const styles2 = {
    container: { padding: '20px' },
    input: { display: 'block', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' },
    button: { padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' },
  };
export default TicketDetailsta;  