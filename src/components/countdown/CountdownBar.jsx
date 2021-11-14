import React from 'react';
import FlipCountdown from '@rumess/react-flip-countdown';
import './CountdownBar.scss';
import moment from 'moment';
import 'moment-timezone';
const CountdownBar = () => {
  var tz = moment.tz.guess();
  const variableTime = moment
    .utc('2021-10-11 15:00')
    .tz(tz)
    .format('YYYY-MM-DD HH:MM:SS');
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
          endAt={variableTime}
          titlePosition='bottom'
          endAtZero
          size='medium'
        />
      </div>
    </div>
  );
};

export default CountdownBar;
