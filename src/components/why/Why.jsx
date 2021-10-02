import React from 'react';
import './Why.scss';
import whyAnimation from '../../assets/why.gif';
const Why = () => {
  return (
    <section className='container-fluid why' id='why'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-6'>
            <img
              src={whyAnimation}
              alt='why'
              className='img-fluid mb-5 mb-md-0'
            />
          </div>
          <div className='col-12 col-md-6 d-flex align-items-center'>
            <div className='content'>
              <h2>Why Mint a Sovereign Sphynx?</h2>
              <p>
                Each Sovereign Sphynx collectable is a 100% unique
                programmatically and randomly generated from over 200 traits.
                Sphynx focuses on expressions, animation and authenticity. The
                traits include mood, clothing, headwear and fun accessories.
                Some are animated, and some are rarer than others.
              </p>
              <p>
                Holding a Sovereign Sphynx NFT grants you a seat in the
                Sovereign Sphynx Council. Members of the Council are entitled to
                receive a dividends of fees generated from the Sphynx ETH
                Bridge, NFT Marketplace, and secondary market SSC sales.
              </p>
              <p>
                The Sovereign Sphynx are stored as ERC-721 tokens on the
                Ethereum blockchain and hosted on IPFS. Yes, they’re
                tamper-proof and last forever.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
