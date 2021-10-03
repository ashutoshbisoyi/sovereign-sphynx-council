import React from 'react';
import './Faqs.scss';

const Faqs = () => {
  const faqs = [
    {
      question: 'What is the total supply?',
      answer: <p>A total of 8888 unique Sphynx NFTs will be created.</p>,
    },
    {
      question: 'When is the launch?',
      answer: <p>We will launch on October 3, 4 PM UTC.</p>,
    },
    {
      question: 'How much does it cost to mint an NFT?',
      answer: <p>0.08 ETH + gas.</p>,
    },
    {
      question: 'Will there be a pre-sale?',
      answer: (
        <p>
          Yes, We will make sure that active community members will be rewarded.
        </p>
      ),
    },
    {
      question: 'Will there be a Presale?',
      answer: (
        <p>
          No. We will have a Public Sale that will take place in 3 phases.{' '}
          <br />
          <br />
          1. Whitelist Registration <br /> 2. General Registration <br /> 3.
          Public Sale <br />
          <br />
          Each Registration phase will allow buyers to opportunity Register
          their Wallet and Reserve the number of Sphynxes they'd like to mint
          <br />
          <br />
          We are taking this approach to prevent gas wars and give the Community
          a chance to compete for a SPOT in the Sale.
        </p>
      ),
    },
  ];
  return (
    <section className='container-fluid faqs' id='faqs'>
      <div className='container'>
        <h2>FAQ</h2>
        <ul className='faq-container'>
          {faqs.map(({ question, answer }, index) => (
            <li key={index}>
              <h5>{question}</h5>
              {answer}
            </li>
          ))}
          <li>
            <p>
              {' '}
              Have more questions? Come through to our{' '}
              <a href='https://discord.gg/ZEuDaFk4qz' target='_null'>
                Discord
              </a>{' '}
              to learn more.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Faqs;
