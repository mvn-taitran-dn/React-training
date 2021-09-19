import React, { useState } from 'react';
import Button from '../Button';
import CountdownCircle from './CountdownCircle';

interface CountdownItemProps {
  startFrom: number;
  size: number;
}

const CountdownItem: React.FC<CountdownItemProps> = ({ size, startFrom = 10 }) => {

  const [state, setState] = useState("Start");

  const handleClick = (e: any) => {
    if (state === "Stop") {
      setState("Start")
    } else {
      setState("Stop")
    }
  }

  return (
    <>
      <div style={{
        padding: "20px"
      }}>
        <Button text={state} onClick={handleClick} />
        <div style={{
          marginTop: `${size / 10}px`,
          display: "flex",
          justifyContent: "center"
        }}>
          <CountdownCircle startFrom={startFrom} state={state} />
        </div>
      </div>
    </>
  );
};

export default CountdownItem;
