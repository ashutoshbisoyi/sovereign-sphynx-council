import React from 'react';
import FlipCountdown from '@rumess/react-flip-countdown';
import './CountdownBar.scss';
const CountdownBar = () => {
  return (
    <div className='countdown-bar'>
      <h3>LAUNCHING 10/11 3PM UTC</h3>
      <div className='time-container'>
        <FlipCountdown
          hideYear
          hideMonth
          dayTitle='Days'
          hourTitle='Hours'
          minuteTitle='Minutes'
          secondTitle='Seconds'
          endAt={new Date(2021, 9, 11, 8, 30, 0, 0)}
          endAtZero
          titlePosition='bottom'
          size='medium'
        />
      </div>
    </div>
  );
};

export default CountdownBar;
