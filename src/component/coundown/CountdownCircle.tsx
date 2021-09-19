import React, { useState, useEffect } from 'react';

interface CountdownCircleProps {
  startFrom: number;
  state: String;
}

const TIME_DELAY = 1000

const CountdownCircle: React.FC<CountdownCircleProps> = ({ startFrom = 10, state = "Start" }) => {

  const [timeRemaining, setTimeRemaining] = useState(startFrom)

  useEffect(() => {
    let timeTmp = startFrom
    const interval = setInterval(() => {
      timeTmp -= 1
      setTimeRemaining(timeTmp)
      if (timeTmp <= 0) {
        clearInterval(interval)
      }
    }, TIME_DELAY)
    if (state === "Start") {
      clearInterval(interval)
      return
    }
    return () => {
      clearInterval(interval)
      console.log("Countdown Stopped!");
    }
  }, [startFrom, state])

  return (
    <>
      <div style={{
        fontSize: 1.5,
        fontWeight: 600,
        border: "4px solid #61dafb",
        borderRadius: "50%",
        width: 150,
        height: 150,
        lineHeight: "150px",
        marginTop: "10px",
        color: "#282c34",
        fontSize:"40px"
      }}>
        <span> {timeRemaining}</span>
      </div>
      
    </>
  );
};

export default CountdownCircle;
