import React from 'react';
import CountdownItem from './CountdownItem';

const Countdown: React.FC = () => {

  return (
    <>
      <div className="  " style={{
        display: "flex"
      }}>
        <CountdownItem  startFrom={10} />
        <CountdownItem  startFrom={20} />
        <CountdownItem  startFrom={30} />
      </div>
    </>
  );
};

export default Countdown;
