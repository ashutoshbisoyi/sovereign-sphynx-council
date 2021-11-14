import React, { useState, useCallback } from 'react';
import './Mint.scss';
import plus from '../../assets/plus.svg';
import minus from '../../assets/minus.svg';
import StarBg from '../star-bg/StarBg';
import { ToastContainer, toast } from 'react-toastify';
import { useWeb3React } from '@web3-react/core';
import { useWhitelisted, useTotalSupply, useTrxDone, useWhitelistPhase, useSaleState } from '../../hooks/dataFetcher';
import useMint from '../../hooks/useMint';

const Mint = () => {
  const [pendingTx, setPendingTx] = React.useState(false)
  const { account } = useWeb3React();

  const { mint } = useMint();

  const [count, setCount] = useState(1);
  const total = count * 0.08;

  const whitelisted = useWhitelisted(account);
  const trxDone = useTrxDone(account);
  const supply = useTotalSupply();
  const whitelistPhase = useWhitelistPhase();
  const saleState = useSaleState();




  const Mint = useCallback(async (e) => {
    e.preventDefault();
    if (!account) {
      toast.error('Please Connect Your Wallet');
      return;
    }
    if (!saleState) {
      toast.error('Sale is not Active');
      return;
    }


    if (count > 20) {
      toast.error('Can Only Mint 20 or less in one Transaction');
      return;
    }
    if (whitelistPhase) {
      if (!whitelisted) {
        toast.error('You are not Whitelisted');
        return;
      }
      if (trxDone) {
        toast.error('You have Already Done Your One Transaction');
        return;
      }
    }

    setPendingTx(true)
    try {
      await mint(count)
    } catch (error) {
      console.log(error)
      setPendingTx(false)
    } finally {
      setPendingTx(false)
    }
  }, [mint])

  const MintMax = useCallback(async (e) => {
    e.preventDefault();
    if (!account) {
      toast.error('Please Connect Your Wallet');
      return;
    }

    if (!saleState) {
      toast.error('Sale is not Active');
      return;
    }
    
    if (whitelistPhase) {
      if (!whitelisted) {
        toast.error('You are not Whitelisted');
        return;
      }
      if (trxDone) {
        toast.error('You have Already Done Your One Transaction');
        return;
      }
    }
    setCount(20)
    setPendingTx(true)
    try {
      await mint(20)
    } catch (error) {
      console.log(error)
      setPendingTx(false)
    } finally {
      setPendingTx(false)
    }
  }, [mint])

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

            <button className='total'>Total: {total} Ξ </button>
            <div className='gradient-container max'>
              <button onClick={MintMax}>Max 20</button>
            </div>

            <div className='gradient-container cta'>
              <button className='primary' onClick={Mint}>Mint</button>
            </div>
            {whitelistPhase ?
              < div className='gradient-container max'>
                <button>
                  {whitelisted ? 'You are Whitelisted' : 'Not Whitelisted'}
                </button>
              </div> : null
            }
          </div>
          <div className='progress'>
            <h5>{supply}/8888</h5>
            {/* change the width in style to change the progress level */}
            <div
              className='bar gradient-container'
              style={{ width: `${supply / 8888 * 100}%` }}
            ></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Mint;
