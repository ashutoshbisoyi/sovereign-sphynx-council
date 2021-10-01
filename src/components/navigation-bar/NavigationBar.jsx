import React from 'react';
import './NavigationBar.scss';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';
const NavigationBar = () => {
  return (
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
                to='why'
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className='nav-link'
              >
                Why Mint?
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
              <button>
                <div className='dot'></div>Connect Wallet
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
