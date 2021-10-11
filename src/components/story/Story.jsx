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
                Sovereign Sphynx Council.
              </p>
              <p>
                Members of the Council have access to the following rewards:
              </p>
              <ul>
                <li>$SPHYNX Emissions from the Sphynx Bridge</li>
                <li>
                  Access to the SPHYNX shop where owners will be able to buy
                  Sphynx merch, and on top of that, the launch of the SPHYNX
                  SHOP will bring added utility and perks for both $SPHYNX and
                  the Genesis Sovereign Sphynxes.
                </li>
                <li>
                  The ability for your Sphynx to “Ascend” or “Descend” by
                  reading from a page of the Book of Life, or Book of Death.
                  This ancient ritual requires massive amounts of energy, so 600
                  $SPHYNX are required to complete the ritual.
                </li>
                <li>
                  $SPHYNX is the utility token that fuels the Sphynx ecosystem.
                </li>
                <li>1 $SPHYNX = 1 $SPHYNX.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
