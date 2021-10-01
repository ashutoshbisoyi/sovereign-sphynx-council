import React from 'react';
import './Hero.scss';
import discord from '../../assets/discord.png';
import twitter from '../../assets/twitter.png';
import heroAnimation from '../../assets/hero.png';
const Hero = () => {
  return (
    <section className='container-fluid hero'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-lg-6'>
            <div className='content'>
              <h1>
                Welcome to <br className='d-none d-md-block' /> Sovereign Sphynx
                Council
              </h1>
              <p>
                Sovereign Sphynx Council is a collection of 8,888 NFTs. Like a
                snowflake, each collectable is a one-of-a-kind hand-drawn
                original. We wanna become the coolest project you love! The
                sphynx were born organically in an NFT community with over a
                thousand NFT fans and artists. By purchasing a sphynx, you’re
                also getting access to our exclusive community and some exciting
                bonus benefits.
              </p>
              <div className='btn-container'>
                <button>
                  <img src={discord} alt='discord' className='img-fluid me-2' />{' '}
                  <span className='d-none d-sm-inline'>Join</span> Discord
                </button>
                <button>
                  <img src={twitter} alt='discord' className='img-fluid me-2' />
                  <span className='d-none d-sm-inline'>Follow us on</span>{' '}
                  Twitter
                </button>
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
