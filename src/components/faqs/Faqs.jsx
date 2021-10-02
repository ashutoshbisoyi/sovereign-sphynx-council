import React from 'react';
import './Faqs.scss';

const Faqs = () => {
  const faqs = [
    {
      question: 'What is the total supply?',
      answer: 'A total of 8888 unique Sphynx NFTs will be created.',
    },
    {
      question: 'When is the launch?',
      answer: 'We will launch on October 3, 4 PM UTC.',
    },
    {
      question: 'How much does it cost to mint an NFT?',
      answer: '0.08 ETH + gas.',
    },
    {
      question: 'Will there be a pre-sale?',
      answer:
        'Yes, We will make sure that active community members will be rewarded.',
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
              <p>{answer}</p>
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
