import React from 'react';
import { useEffect, useState } from 'react';


const Clock = () => {

  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [numeric, setNumeric] = useState(false);
  const [numericDisplay, setNumericDisplay] = useState('');


  const getDate = () => {
    setIsLoading(true);
    const now = new Date();
    setHours(now.getHours());
    setMinutes(now.getMinutes());
    setSeconds(now.getSeconds());
    setIsLoading(false);
    const date2 = new Date(now).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    setNumericDisplay(date2);
  }

  const hoursDegrees = (hours / 12) * 360 + (minutes / 60) * 30 + 90;
  const minutesDegrees = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
  const secondsDegrees = (seconds / 60) * 360 + 90;

  useEffect(() => {
    const interval = setInterval(() => {
      getDate();
    }, 1000);
    return () => clearInterval(interval);
  }, []);


  return (
    <div>
      <div className="container">
        <div className="clock">
          {
            isLoading ? (
              <div className="loading">Loading...</div>
            ) : (
              <div className="clock-face" onClick={() => setNumeric(!numeric)}>
                <div className="hand hour-hand" style={{transform: `rotate(${hoursDegrees}deg)`}}></div>
                <div className="hand minute-hand" style={{transform: `rotate(${minutesDegrees}deg)`}}></div>
                <div className="hand second-hand" style={{transform: `rotate(${secondsDegrees}deg)`}}></div>
              </div>
            )
          }
        </div>
        {
          numeric && (
            <div className="display">{numericDisplay}</div>
          )
        }
      </div>
    </div>
  );
};

export default Clock;