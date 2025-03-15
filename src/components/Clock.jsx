import React from 'react';
import useClockLogic from './ClockLive';
import ClockDisplay from './TimeDisplay';

const DigitalClock = () => {
  const clockData = useClockLogic();
  
  return <ClockDisplay clockData={clockData}/>;
};

export default DigitalClock;