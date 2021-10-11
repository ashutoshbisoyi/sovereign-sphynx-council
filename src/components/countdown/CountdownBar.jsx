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
          endAt={'2021-10-11 20:30:00'}
          titlePosition='bottom'
          endAtZero
          size='medium'
        />
      </div>
    </div>
  );
};

export default CountdownBar;
