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
      answer: <p>We will launch on October 11, 3pm UTC</p>,
    },
    {
      question: 'How much does it cost to mint an NFT?',
      answer: <p>0.08 ETH + gas.</p>,
    },
    {
      question: 'Will there be a Presale?',
      answer: (
        <div>
          <p>Our Sale will take place in 3 Phases</p>
          <ol>
            <li>Whitelist Registration - Open until 10/11 at 8:00am UTC</li>
            <li>Whitelisted Sale - 10/11 at 3:00pm UTC</li>
            <li>Public Sale - 10/11 at 4:00pm UTC</li>
          </ol>
          <p>
            We are taking this approach to reward the most active, engaged, and
            supportive members of our Community, and to avoid potential Gas
            wars.
          </p>
        </div>
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
