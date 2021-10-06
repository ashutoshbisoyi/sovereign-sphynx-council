import React, { useState } from 'react';
import RarityData from '../../data/RarityData';
import './Rarity.scss';

const Rarity = () => {
  const [topFilterType, setTopFilterType] = useState('Backgrounds');
  const [bottomFilterType, setBottomFilterType] = useState('common');

  const topFilterCategories = RarityData.map((value) => value.category);
  const topUniqueFilterCategories = [...new Set(topFilterCategories)];
  const bottomFilterCategories = ['common', 'uncommon', 'rare', 'superRare'];
  return (
    <section className='container-fluid rarity'>
      <div className='container'>
        <h2>Rarity</h2>
        <ul className='top-filter'>
          {topUniqueFilterCategories.map((value, index) => (
            <li key={index}>
              <button
                className={topFilterType === value ? 'active' : ''}
                onClick={() => setTopFilterType(value)}
              >
                {value}
              </button>
            </li>
          ))}
        </ul>
        <ul className='filtered-items'>
          {RarityData.map((value, index) => {
            return (
              value.category === topFilterType &&
              value.type === bottomFilterType && (
                <div className='rarity-card-container' key={index}>
                  <div className='rarity-card'>
                    <img
                      src={value.file}
                      alt={value.name}
                      className='img-fluid'
                    />
                    <h5>Rarity {value.rarity}%</h5>
                    <h4>{value.type}</h4>
                  </div>
                </div>
              )
            );
          })}
        </ul>
        <ul className='bottom-filter'>
          {bottomFilterCategories.map((value, index) => (
            <li key={index}>
              <button
                className={bottomFilterType === value ? 'active' : ''}
                onClick={() => setBottomFilterType(value)}
              >
                {value}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Rarity;
