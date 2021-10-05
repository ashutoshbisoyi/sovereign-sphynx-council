import React from 'react';
import './Story.scss';
import animation from '../../assets/why.gif';
const Story = () => {
  return (
    <section className='container-fluid story' id='story'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-6 d-flex justify-content-center align-items-center'>
            <img
              src={animation}
              alt='why'
              className='img-fluid mb-5 mb-md-0 mt-4'
            />
          </div>
          <div className='col-12 col-md-6 d-flex align-items-center'>
            <div className='content'>
              <h2>The Story</h2>
              <p>
                The Sphynxes have been in a peaceful slumber for the last 8,888
                millennia. When they entered their slumber, the Chain was at the
                height of it’s peace and prosperity – infinite wealth and
                leisure had permeated society following The Great Pharoah’s
                discovery of Eternal Life within the Book of Life.
              </p>
              <p>
                Now, the Sphynxes have ended their slumber to celebrate the
                awakening of the Bridge – the path between Chains. <br />
                <br />
                Upon awakening, the Sphynxes have found their Chain in shambles
                – ravaged by Rug Doctors, bloodthirsty Bears, and heartless
                Devs.
              </p>
              <p>
                The Sphynxes have set out to restore their Chain to affluence
                and glory, and navigate the Bridge to bring peace and security
                to the other realms within the Web3 Multi-verse.
              </p>
              <h2 className='mt-5'>The Utility</h2>
              <p>
                Holding a Sovereign Sphynx NFT grants you a seat in the
                Sovereign Sphynx Council.{' '}
              </p>
              <p>
                Members of the Council are entitled to the following rewards:
              </p>
              <ul>
                <li>A share of the ETH Bridge Fee Rewards Pool</li>
                <li>A share of the OpenSea Royalties Rewards Pool</li>
                <li>Merch Access</li>
                <li>
                  Future NFT Airdrops that generate Rewards from other utilities
                  in the Sphynx Ecosystem
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
