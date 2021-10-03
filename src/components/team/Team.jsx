import React from 'react';
import './Team.scss';
import member1 from '../../assets/member1.webp';
import member2 from '../../assets/member2.webp';
import member3 from '../../assets/member3.webp';
import member4 from '../../assets/member4.webp';
import member5 from '../../assets/member5.webp';
import StarBg from '../star-bg/StarBg';
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
      name: 'Doc',
    },
    {
      image: member4,
      name: 'Maki',
    },
    {
      image: member5,
      name: 'Visionary(Denko)',
    },
  ];
  return (
    <section className='container-fluid team' id='team'>
      <StarBg />
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
      <StarBg bottom />
    </section>
  );
};

export default Team;
