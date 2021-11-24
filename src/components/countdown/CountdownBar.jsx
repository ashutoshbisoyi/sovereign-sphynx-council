import React from 'react';
import FlipCountdown from '@rumess/react-flip-countdown';
import './CountdownBar.scss';
// import moment from 'moment';
// import 'moment-timezone';
const CountdownBar = () => {
  // var tz = moment.tz.guess();
  // const variableTime = moment
  //   .utc('2021-11-23 6:50:00')
  //   .format('YYYY-MM-DD HH:MM:SS');
  return (
    <div className='countdown-bar'>
      <h3>LAUNCHING 24/11 4 P.M. UTC</h3>
      <div className='time-container'>
        <FlipCountdown
          hideYear
          hideMonth
          dayTitle='Days'
          hourTitle='Hours'
          minuteTitle='Minutes'
          secondTitle='Seconds'
          endAt={'2021-11-24 21:30:00'}
          titlePosition='bottom'
          endAtZero
          size='medium'
        />
      </div>
    </div>
  );
};

export default CountdownBar;
