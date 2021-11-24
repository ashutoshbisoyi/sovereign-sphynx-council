import React, { useState } from 'react';
import './Mint.scss';
import StarBg from '../star-bg/StarBg';
import { ToastContainer } from 'react-toastify';

const Mint = () => {
  const [count] = useState(1);
  const total = count * 0.5;
  // const supply = 0;

  return (
    <>
      <section className='container-fluid mint' id='mint'>
        <ToastContainer />
        <StarBg />

        <div className='container'>
          <h2>Purchase a Scion Sphynx</h2>
          <div className='counter-container'>
            <button className='total'>Total: {total} BNB </button>

            <div className='gradient-container cta'>
              <button className='primary' onClick={Mint}>
                Purchase
              </button>
            </div>
            {/* {whitelistPhase ? (
              <div className='gradient-container max'>
                <button>
                  {whitelisted ? 'You are Whitelisted' : 'Not Whitelisted'}
                </button>
              </div>
            ) : null} */}
          </div>
          <div className='progress'>
            <h5 className='text-dark fw-bold mint-message'>
              2083 Genesis Sphynxes Minted
            </h5>
            {/* change the width in style to change the progress level */}
            <div
              className='minted bar'
              style={{
                width: `${(8888 / 8888) * 100}%`,
              }}
            ></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Mint;
