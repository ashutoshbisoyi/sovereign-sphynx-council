import React from 'react';
import './Roadmap.scss';
import Slider from 'react-slick';
import rightMark from '../../assets/right.png';
const Roadmap = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const roadMapData = [
    {
      amount: 0,
      completed: true,
      text: 'The Great Mintening – After slumbering for 5 Milennia, the Genesis Sovereign Sphynxes awaken to celebrate the construction of the ETH Bridge by Re-convening the Sovereign Sphynx Council.',
    },
    {
      amount: 10,
      completed: true,
      text: 'The Scions Awakening – After the Great Mintening, the 2,083 Genesis Sovereign Sphynxes declare war on the Rug Doctors and disgraced Pharoahs. Reinforcements are needed, and the Scions are awakened.',
    },
    {
      amount: 25,
      completed: false,
      text: 'First Dividend Payouts The First Dividends From Sphynx Bridge Are Paid Out Live On Discord The First Dividends From Sphynx Secondary Market Are Paid Out Live On Discord',
    },
    {
      amount: 50,
      completed: false,
      text: 'The Sphynxes Receive The Book Of Life During Their Commemoration Of The Stream And NFT Marketplace First Dividends From The Marketplace Are Paid Out Live On Discord',
    },
    {
      amount: 75,
      completed: false,
      text: 'Sphynxes Receive The Book Of The Dead As The Wallet Opens',
    },
    {
      amount: 95,
      completed: false,
      text: 'The Sphynxes Reclaim Their Sarcophagi Sphynxes Are Eternal: Gen 2 Teaser',
    },
    {
      amount: 100,
      completed: false,
      text: 'Introduction Of The Council’s Retreat - Sphynxes Find A Home To Congregate Within The Metaverse',
    },
  ];
  return (
    <section className='container-fluid roadmap' id='roadmap'>
      <div className='container'>
        <h2>RoadMap</h2>
        <Slider {...settings}>
          {roadMapData.map(({ amount, completed, text }, index) => (
            <div className='px-3 h-100' key={index}>
              <div className={`roadmap-card ${completed ? 'completed' : ''}`}>
                <div className='content'>
                  <div className='top'>
                    <h3>{amount}%</h3>
                    <img
                      src={rightMark}
                      alt='completed'
                      className='img-fluid'
                    />
                  </div>
                  <p>{text}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Roadmap;
