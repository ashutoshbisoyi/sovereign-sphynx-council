import React from 'react';
import './Hero.scss';
import discord from '../../assets/discord.png';
import twitter from '../../assets/twitter.png';
import opensea from '../../assets/opensea.png';
import heroAnimation from '../../assets/hero.gif';
const Hero = () => {
  return (
    <section className='container-fluid hero'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-lg-6'>
            <div className='content'>
              <h1>
                What is the <br className='d-none d-md-block' /> Sovereign
                Sphynx Council?
              </h1>
              <p>
                The Sovereign Sphynx Council are 6,805 Generative Sphynxes with
                over 150 hand-drawn features battling for supremacy within the
                Web3 multi-verse. Through unity, ingenuity, and relentless
                resolve, they have set out to restore their realm to glory and
                unite the Great Chains.
              </p>
              <p>
                The Genesis Sovereign Sphynxes are stored as ERC-721 tokens on
                the Ethereum and are hosted on IPFS. Scion Sphynxes are stored
                as BEP-721 tokens on the Binance Smart Chain, and are hosted on
                IPFS. Yes, they’re tamper-proof and last forever.
              </p>
              <div className='btn-container'>
                <a href='https://discord.gg/ZEuDaFk4qz' target='_null'>
                  <button>
                    <img
                      src={discord}
                      alt='discord'
                      className='img-fluid me-2'
                    />{' '}
                    <span className='d-none d-sm-inline me-1'>Join </span>{' '}
                    Discord
                  </button>
                </a>
                <a href='https://twitter.com/sphynxcouncil' target='_null'>
                  <button>
                    <img
                      src={twitter}
                      alt='discord'
                      className='img-fluid me-2'
                    />
                    <span className='d-none d-sm-inline'>Follow us on</span>{' '}
                    Twitter
                  </button>
                </a>
                <a
                  href='https://opensea.io/collection/sovereignsphynxcouncilnft'
                  target='_null'
                >
                  <button>
                    <img
                      src={opensea}
                      alt='discord'
                      className='img-fluid me-2'
                    />
                    OpenSea
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className='col-12 col-lg-6 img-col'>
            <figure>
              <img src={heroAnimation} alt='amigo' className='img-fluid' />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
