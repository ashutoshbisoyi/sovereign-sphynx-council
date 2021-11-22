import React, { useState } from 'react';
import './Mint.scss';
import plus from '../../assets/plus.svg';
import minus from '../../assets/minus.svg';
import StarBg from '../star-bg/StarBg';
import { ToastContainer } from 'react-toastify';

const Mint = () => {
  const [count, setCount] = useState(1);
  const total = count * 0.5;
  const supply = 0;

  return (
    <>
      <section className='container-fluid mint' id='mint'>
        <ToastContainer />
        <StarBg />

        <div className='container'>
          <h2>Mint a Sphynx</h2>
          <div className='counter-container'>
            <div className='counter'>
              <button
                className='visible'
                onClick={() => count >= 1 && setCount(count - 1)}
              >
                <img src={minus} alt='minus' className='img-fluid' />
              </button>
              <span>{count}</span>
              <button
                className='visible'
                onClick={() => count <= 19 && setCount(count + 1)}
              >
                <img src={plus} alt='minus' className='img-fluid' />
              </button>
            </div>

            <button className='total'>Total: {total} BNB </button>
            <div className='gradient-container max'>
              <button>Max 20</button>
            </div>

            <div className='gradient-container cta'>
              <button className='primary' onClick={Mint}>
                Mint
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
            <h5>{supply}/3,333</h5>
            {/* change the width in style to change the progress level */}
            <div
              className='bar gradient-container'
              style={{ width: `${(supply / 3333) * 100}%` }}
            ></div>
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
