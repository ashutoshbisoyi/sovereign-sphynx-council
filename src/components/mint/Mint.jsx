import React, { useState, useCallback } from 'react';
import './Mint.scss';
import StarBg from '../star-bg/StarBg';
import { ToastContainer, toast } from 'react-toastify';
import plus from '../../assets/plus.svg';
import minus from '../../assets/minus.svg';
import { useTotalSupply, useWhitelisted, useSaleState, useWhitelistPhase } from '../../hooks/dataFetcher';
import useMint from '../../hooks/useMint';
import { useWeb3React } from '@web3-react/core';


const Mint = () => {

  const { account } = useWeb3React();
  const [count, setCount] = useState(1);
  const total = count * 0.5;
  const supply = useTotalSupply()
  const { mint } = useMint();
  const price = 0.5;


  const Mint = useCallback(async (e) => {
    e.preventDefault();
    if (!account) {
      toast.error('Please Connect Your Wallet');
      return;
    }


    try {
      await mint(count, price)
    } catch (error) {
      console.log(error)
    }
  }, [mint])


  return (
    <>
      <section className='container-fluid mint' id='mint'>
        <ToastContainer />
        <StarBg />

        <div className='container'>
          <h2>Purchase a Scion Sphynx</h2>
          <div className='counter-container'>
            <div className='counter'>
              <button
                className='visible'
                onClick={() => count > 1 && setCount(count - 1)}
              >
                <img src={minus} alt='minus' className='img-fluid' />
              </button>
              <span>{count}</span>
              <button
                className='visible'
                onClick={() => count < 20 && setCount(count + 1)}
              >
                <img src={plus} alt='minus' className='img-fluid' />
              </button>
            </div>
            <button className='total'>Total: {total} BNB </button>
            <div className='gradient-container cta'>
                <button className='primary' onClick={Mint}>Mint</button>
            </div>
          </div>
          <div className='progress'>
            <h5>{supply}/6805</h5>
            <div
              className='bar gradient-container'
              style={{ width: `${(supply / 1000) * 100}%` }}
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
