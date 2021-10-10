import React from 'react';
import GradientAnimation from './components/gradient-animation/GradientAnimation';
import Hero from './components/hero/Hero';
import Mint from './components/mint/Mint';
import NavigationBar from './components/navigation-bar/NavigationBar';
import Roadmap from './components/roadmap/Roadmap';
import './styles/main.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-toastify/dist/ReactToastify.css';
import Faqs from './components/faqs/Faqs';
import Team from './components/team/Team';
import Footer from './components/footer/Footer';
import Lunch from './components/lunch/Lunch';
import Story from './components/story/Story';
import Rarity from './components/rarity/Rarity';
import CountdownBar from './components/countdown/CountdownBar';

import useEagerConnect from './hooks/useEagerConnect';

const App = () => {
  useEagerConnect();

  return (
    <div>
      <CountdownBar />
      <NavigationBar />
      <GradientAnimation />
      <Hero />
      <Story />
      <Lunch />
      <Mint />
      <Roadmap />
      <Rarity />
      <Faqs />
      <Team />
      <Footer />
    </div>
  );
};

export default App;
