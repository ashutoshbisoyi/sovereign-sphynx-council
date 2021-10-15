import React from 'react';
import './Story.scss';
import animation from '../../assets/why.gif';
const Story = () => {
  return (
    <section className='container-fluid story' id='story'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-lg-6 d-flex justify-content-center align-items-center'>
            <img
              src={animation}
              alt='why'
              className='img-fluid mb-5 mb-lg-0 mt-4'
            />
          </div>
          <div className='col-12 col-lg-6 d-flex align-items-center'>
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
              <p>Members of the Council get the following perks:</p>
              <ul>
                <li>
                  Commercial and Intellectual Property Rights to Art depicting
                  their Sphynx
                </li>
                <li>
                  Exclusive Access to the Upcoming Sphynx Comic featuring SSC
                  NFTs
                  <ol>
                    <li>All holders will receive physical copies</li>
                  </ol>
                </li>
                <li>
                  Exclusive Access to the SSC Holders Community
                  <ol>
                    <li>Access to Partnerships with other NFT projects</li>
                    <li>Private Chats and AMAs with the Artist and Founders</li>
                    <li>
                      Private Chats and AMAs with experienced Crypto and NFT
                      Investors
                    </li>
                  </ol>
                </li>
                <li>
                  Exclusive Access to the Sphynx Shop to purchase:
                  <ol>
                    <li>Sphynx Merch</li>
                    <li>Physical collectibles of your Sphynx NFT(s)</li>
                  </ol>
                </li>
                <li>Exclusive Access to the Upcoming Sphynx game</li>
                <li>
                  Future SSC NFT Drops
                  <ol>
                    <li>
                      SSC Holders will have Free Mint Access (just cover gas)
                    </li>
                  </ol>
                </li>
                <li>BONUS Access to Rewards from the Sphynx Ecosystem</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
