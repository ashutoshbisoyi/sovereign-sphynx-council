import React, { useState } from 'react';
import './NavigationBar.scss';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';
import metamask from '../../assets/metamask.png';
import walletconnect from '../../assets/walletconnect.png';
import cancel from '../../assets/cancel.png';

const NavigationBar = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const [account] = useState(false);
  const handleOpenPopUp = () => {
    setOpenPopup(true);
  };
  const handleClosePopUp = () => {
    setOpenPopup(false);
  };

  return (
    <>
      {openPopup && (
        <div className='modal-container'>
          <div className='custom-modal gradient-container'>
            <div className='content'>
              <img
                src={cancel}
                alt='cancel'
                className='cancel'
                onClick={handleClosePopUp}
              />
              <h4>Connect Wallet</h4>
              <button>
                {' '}
                <img
                  src={metamask}
                  alt='meta mask'
                  className='img-fluid me-3'
                />{' '}
                METAMASK
              </button>
              <button>
                <img
                  src={walletconnect}
                  alt='meta mask'
                  className='img-fluid me-3'
                />
                WalletConnect
              </button>
              {/* <div className='d-flex justify-content-center mt-5'>
                <a href='https://www.google.co.in/'>Learn how to connect?</a>
              </div> */}
            </div>
          </div>
        </div>
      )}
      <nav className='navbar navbar-expand-lg navbar-dark'>
        <div className='container'>
          <h1 className='navbar-brand'>
            <img src={logo} alt='amigo logo' />
          </h1>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav ms-auto'>
              <li className='nav-item ms-md-5'>
                <Link
                  to='story'
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className='nav-link'
                >
                  The Story
                </Link>
              </li>
              <li className='nav-item ms-md-5'>
                <Link
                  to='roadmap'
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  className='nav-link'
                >
                  Roadmap
                </Link>
              </li>
              <li className='nav-item ms-md-5'>
                <Link
                  to='team'
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  className='nav-link'
                >
                  Team
                </Link>
              </li>
              <li className='nav-item ms-md-5'>
                <Link
                  to='faqs'
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  className='nav-link'
                >
                  FAQ's
                </Link>
              </li>
              <li className='nav-item ms-md-5'>
                {!account ? (
                  <button onClick={handleOpenPopUp}>
                    <div className='dot'></div>Connect Wallet
                  </button>
                ) : (
                  <button>
                    <div className='dot'></div>Disconnect
                  </button>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
