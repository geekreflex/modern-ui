import React from 'react';
import { ThemeProvider } from 'styled-components';
import Styles, { Container } from '../styles/styles';
import { COLORS } from '../constants/colors';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Companies from '../components/Companies';
import WhatGPT3 from '../components/WhatGPT3';
import Future from '../components/Future';
import Possibility from '../components/Possibility';
import GetStarted from '../components/GetStarted';
import Blog from '../components/Blog';
import Footer from '../components/Footer';

const index = () => {
  const theme = {
    colors: COLORS,
  };
  return (
    <ThemeProvider theme={theme}>
      <Styles />
      <div className="gpt3">
        <div>
          <div className="radial-page-1" />
          <div className="radial-page-2" />
          <div className="radial-page-3" />
        </div>
        <Container>
          <Header />
          <Hero />
          <Companies />
          <WhatGPT3 />
          <Future />
          <Possibility />
          <GetStarted />
          <Blog />
        </Container>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default index;
