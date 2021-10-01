import React from 'react';
import './Team.scss';
import member1 from '../../assets/member1.png';
import member2 from '../../assets/member2.png';
import member3 from '../../assets/member3.png';
import member4 from '../../assets/member4.png';
import member5 from '../../assets/member5.png';
const Team = () => {
  const teamMembers = [
    {
      image: member1,
      name: 'Lonzo',
    },
    {
      image: member2,
      name: 'Manny',
    },
    {
      image: member3,
      name: 'Makiss',
    },
    {
      image: member4,
      name: 'Dey',
    },
    {
      image: member5,
      name: 'Denko',
    },
  ];
  return (
    <section className='container-fluid team' id='team'>
      <div className='container'>
        <h2 className='mt-5 mt-md-0'>Team</h2>
        <div className='team-container'>
          {teamMembers.map(({ name, image }, index) => (
            <div className='team-card' key={index}>
              <img src={image} alt={name} className='img-fluid' />
              <p>{name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
