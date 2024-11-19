import React from "react";
import { useState } from "react";

const museumDetails = {
    'National Museum': {
      opening: '10:00',
      closing: '17:00',
    },
    // Add more museums as needed
  };

function TicketDetailska({ stepska, triggerNextStep }) {
    const [ticketska, setTickets] = useState(1);
    const [dateka, setDate] = useState('');
    const [timeka, setTime] = useState('');
  
    const museumka = stepska && stepska['choose-museum-ka'] ? stepska['choose-museum-ka'].value : null;
    const museumDataka = museumDetails[museumka] || {};
  
    const openingTime = museumDataka.opening || '09:00';
    const closingTime = museumDataka.closing || '18:00';
  
    const minTime = openingTime;
    const maxTime = closingTime;
  
    const today = new Date().toISOString().split('T')[0];
    const maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() + 3);
    const maxDateStr = maxDate.toISOString().split('T')[0];
  
    const handleSubmit = () => {
      if (ticketska && dateka && timeka) {
        const bookingDetailska = {
          ticketska,
          dateka,
          timeka,
          museumka,
        };
        triggerNextStep({ value: bookingDetailska });
      } else {
        alert('ದಯವಿಟ್ಟು ಎಲ್ಲಾ ವಿವರಗಳನ್ನು ನಮೂದಿಸಿ.');
      }
    };
  
    return (
      <div style={styles2.container}>
        <h3>ಟಿಕೆಟ್ ವಿವರಗಳನ್ನು ನಮೂದಿಸಿ</h3>
        <label>
          ಟಿಕೆಟ್‌ಗಳ ಸಂಖ್ಯೆ:
          <input
            type="number"
            value={ticketska}
            onChange={(e) => setTickets(e.target.value)}
            min="1"
            style={styles2.input}
          />
        </label>
        <label>
          ದಿನಾಂಕ:
          <input
            type="date"
            value={dateka}
            onChange={(e) => setDate(e.target.value)}
            min={today}
            max={maxDateStr}
            style={styles2.input}
          />
        </label>
        <label>
          ಸಮಯ:
          <input
            type="time"
            value={timeka}
            onChange={(e) => setTime(e.target.value)}
            min={minTime}
            max={maxTime}
            style={styles2.input}
          />
        </label>
        <button style={styles2.button} onClick={handleSubmit} disabled={!dateka || !timeka}>
          ಬುಕಿಂಗ್ ದೃಢೀಕರಿಸಿ
        </button>
      </div>
    );
  }
  const styles2 = {
    container: { padding: '20px' },
    input: { display: 'block', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' },
    button: { padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' },
  };
export default TicketDetailska;  