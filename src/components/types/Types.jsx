import React from 'react';
import './Types.scss';
import genesis from '../../assets/genesis.jpeg';
import scion from '../../assets/scion.jpeg';
const Types = () => {
  const data = [
    {
      title: 'Genesis Sphynxes',
      image: genesis,
      content:
        'The OG Sphynxes, these were the first 2,083 to drop, __ of which are Pharoahs, and ___ are Legendary. They are also the only Sovereign Sphynxes to yield rewards from the Ether Bridge. Each Sovereign Sphynx will generate yield from the Ether Bridge transaction fees.',
    },
    {
      title: 'Scion Sphynxes',
      image: scion,
      content:
        'In order to expand the Sovereign Sphynx Universe, the Great Pharoah Akhenaten used the Sphynx Pad hail for reinforcements from the Binance Smart Chain. The SSC must raise their numbers to 8,888 Sphynxes before they cross the great Ether Bridge, and have called for 6,805 Scion Sphynxes to awaken. Their awakening requires a great deal of energy – so, 0.5 BNB are required to raise each Scion Sphynx from their slumber.',
    },
  ];
  return (
    <section className='container-fluid types'>
      <div className='container'>
        <h2>Types of Sphynxes</h2>
        <div className='row g-5'>
          {data.map(({ title, image, content }, index) => (
            <div className='col-12 col-lg-6' key={index}>
              <div className='type-card'>
                <div className='content'>
                  <div className='head'>
                    <h4>{title}</h4>
                  </div>
                  <img src={image} alt={title} className='img-fluid' />
                  <p>{content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Types;
