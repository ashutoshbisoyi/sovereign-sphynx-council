import React, { useState } from 'react';
import RarityData from '../../data/RarityData';
import './Rarity.scss';
import uncommonIcon from '../../assets/uncommon.png';
import rareIcon from '../../assets/rare.png';
import legendaryIcon from '../../assets/legendary.png';
const Rarity = () => {
  const [topFilterType, setTopFilterType] = useState('Backgrounds');
  const [bottomFilterType, setBottomFilterType] = useState('common');

  const topFilterCategories = RarityData.map((value) => value.category);
  const topUniqueFilterCategories = [...new Set(topFilterCategories)];
  const bottomFilterCategories = ['common', 'uncommon', 'rare', 'legendary'];
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
          {RarityData.filter(
            (value) =>
              value.category === topFilterType &&
              value.type === bottomFilterType
          ).length > 0 ? (
            RarityData.filter(
              (value) =>
                value.category === topFilterType &&
                value.type === bottomFilterType
            ).map((value, index) => {
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
            })
          ) : (
            <div className='rarity-no-data'>
              <h5>No Data</h5>
            </div>
          )}
        </ul>
        <ul className='bottom-filter'>
          {bottomFilterCategories.map((value, index) => (
            <li key={index}>
              <button
                className={bottomFilterType === value ? 'active' : ''}
                onClick={() => setBottomFilterType(value)}
              >
                {value !== 'common' && (
                  <img
                    src={
                      value === 'uncommon'
                        ? uncommonIcon
                        : value === 'rare'
                        ? rareIcon
                        : value === 'legendary'
                        ? legendaryIcon
                        : ''
                    }
                    alt={value}
                    className='img-fluid'
                  />
                )}
                <span>{value}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Rarity;
