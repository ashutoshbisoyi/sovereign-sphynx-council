import React from 'react';
import GradientAnimation from './components/gradient-animation/GradientAnimation';
import Hero from './components/hero/Hero';
import Mint from './components/mint/Mint';
import NavigationBar from './components/navigation-bar/NavigationBar';
import Roadmap from './components/roadmap/Roadmap';
import Why from './components/why/Why';
import './styles/main.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Faqs from './components/faqs/Faqs';
import Team from './components/team/Team';
import Footer from './components/footer/Footer';
import Lunch from './components/lunch/Lunch';
const App = () => {
  return (
    <div>
      <NavigationBar />
      <GradientAnimation />
      <Hero />
      <Why />
      <Lunch />
      <Mint />
      <Roadmap />
      <Faqs />
      <Team />
      <Footer />
    </div>
  );
};

export default App;
