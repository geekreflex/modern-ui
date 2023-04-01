import styled from 'styled-components';
import Header from './components/Header';
import { ThemeProvider } from 'styled-components';
import { COLORS } from './constants/colors';
import Styles, { Container } from './styles';
import Hero from './components/Hero';
import Companies from './components/Companies';
import WhatGPT3 from './components/WhatGPT3';
import Future from './components/Future';
import Possibility from './components/Possibility';
import GetStarted from './components/GetStarted';
import Blog from './components/Blog';

function App() {
  const theme = {
    colors: COLORS,
  };

  return (
    <ThemeProvider theme={theme}>
      <Styles />
      <AppWrap>
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
      </AppWrap>
    </ThemeProvider>
  );
}

export default App;

const AppWrap = styled.div``;
