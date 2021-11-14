import React from 'react';
import './Faqs.scss';

const Faqs = () => {
  const faqs = [
    {
      question: 'What is the total supply?',
      answer: (
        <p>
          There are 2,083 Genesis Sphynxes, and 6,805 Scion Sphynxes, making up
          a total of 8,888 unique Sovereign Sphynx Council NFTs.
        </p>
      ),
    },
    {
      question: 'When is the launch?',
      answer: (
        <p>
          The Scion Sphynx SSC Collection will launch on November, 21 at 1:00 AM
          UTC
        </p>
      ),
    },
    {
      question: 'How much will it cost to mint a Scion Sphynx?',
      answer: <p>0.5 BNB + gas</p>,
    },
    {
      question: 'Will there be a Presale?',
      answer: <p> No, there will not be a Presale.</p>,
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
