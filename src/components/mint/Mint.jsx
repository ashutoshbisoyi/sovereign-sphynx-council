import React, { useState } from 'react';
import './Mint.scss';
import plus from '../../assets/plus.svg';
import minus from '../../assets/minus.svg';
import StarBg from '../star-bg/StarBg';
import { ToastContainer, toast } from 'react-toastify';

const Mint = () => {
  const [count, setCount] = useState(1);
  const [verified, setVerified] = useState(false);
  //verify white list function
  const verifyWhiteList = () => {
    if (!verified) {
      handleSuccessVerify();
    }
  };

  const handleSuccessVerify = () => {
    toast.success('You are Whitelisted');
    setVerified(true);
    setCount(20);
  };

  //to use if varification failed
  // const handleFailedVerify = () => {
  //   toast.error('You are not Whitelisted');
  //   setVerified(false);
  // };

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
            <div className='gradient-container max'>
              <button onClick={verifyWhiteList}>
                {verified ? 'You are Verified' : 'Verify Whitelist'}
              </button>
            </div>
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
