import React from 'react';
import './Footer.scss';
import logo from '../../assets/logo.png';
import discord from '../../assets/discord.png';
import twitter from '../../assets/twitter.png';
const Footer = () => {
  return (
    <footer className='container-fluid footer'>
      <div className='container d-flex flex-column flex-md-row justify-content-between align-items-center'>
        <img src={logo} alt='logo' className='img-fluid' />
        <h5 className='my-4 my-md-0'>Verify Smart Contract</h5>
        <div className='btn-container'>
          <button>
            <img src={discord} alt='discord' className='img-fluid' />
          </button>
          <button>
            <img src={twitter} alt='discord' className='img-fluid' />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
