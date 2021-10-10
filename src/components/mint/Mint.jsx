import React, { useState } from 'react';
import './Mint.scss';
import plus from '../../assets/plus.svg';
import minus from '../../assets/minus.svg';
import StarBg from '../star-bg/StarBg';
import { ToastContainer, toast } from 'react-toastify';
import metamask from '../../assets/metamask.png';
import trustwallet from '../../assets/trustwallet.png';
import cancel from '../../assets/cancel.png';
const Mint = () => {
  const [count, setCount] = useState(1);
  const [verified, setVerified] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  //verify white list function
  const verifyWhiteList = () => {
    if (!verified) {
      setOpenPopup(true);
    }
  };
  const closePopUp = () => {
    setOpenPopup(false);
  };

  const handleSuccessVerify = () => {
    setOpenPopup(false);
    toast('You are Whitelisted');
    setVerified(true);
    setCount(20);
  };
  const handleFailedVerify = () => {
    setOpenPopup(false);
    toast.error('You are not Whitelisted');
    setVerified(false);
  };

  return (
    <>
      <section className='container-fluid mint' id='mint'>
        <ToastContainer />
        <StarBg />
        {openPopup && (
          <div className='modal-container'>
            <div className='custom-modal gradient-container'>
              <div className='content'>
                <img
                  src={cancel}
                  alt='cancel'
                  className='cancel'
                  onClick={closePopUp}
                />
                <h4>Connect Wallet</h4>
                <button onClick={handleSuccessVerify}>
                  {' '}
                  <img
                    src={metamask}
                    alt='meta mask'
                    className='img-fluid me-3'
                  />{' '}
                  METAMASK
                </button>
                <button onClick={handleFailedVerify}>
                  <img
                    src={trustwallet}
                    alt='meta mask'
                    className='img-fluid me-3'
                  />
                  TRUSTWALLET
                </button>
                <div className='d-flex justify-content-center mt-5'>
                  <a href='https://www.google.co.in/'>Learn how to connect?</a>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className='container'>
          <h2>Mint a Sphynx</h2>
          <div className='counter-container'>
            <div className='counter'>
              <button
                className={verified ? 'invisible' : 'visible'}
                onClick={() => count >= 1 && setCount(count - 1)}
              >
                <img src={minus} alt='minus' className='img-fluid' />
              </button>
              <span>{count}</span>
              <button
                className={verified ? 'invisible' : 'visible'}
                onClick={() => count <= 19 && setCount(count + 1)}
              >
                <img src={plus} alt='minus' className='img-fluid' />
              </button>
            </div>

            <button className='total'>Total: 0.08 Ξ </button>
            <div className='gradient-container max'>
              <button>Max 20</button>
            </div>

            <div className='gradient-container cta'>
              <button className='primary'>Mint</button>
            </div>
            <button className='verify' onClick={verifyWhiteList}>
              {verified ? 'You are verified' : 'Verify Whitelist'}
            </button>
          </div>
          <div className='progress'>
            <h5>0/8888</h5>
            {/* change the width in style to change the progress level */}
            <div
              className='bar gradient-container'
              style={{ width: '20%' }}
            ></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Mint;
