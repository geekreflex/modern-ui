import styled from 'styled-components';
import Header from './components/Header';
import { ThemeProvider } from 'styled-components';
import { COLORS } from './constants/colors';
import Styles from './styles';
import Hero from './components/Hero';
import Companies from './components/Companies';

function App() {
  const theme = {
    colors: COLORS,
  };

  return (
    <ThemeProvider theme={theme}>
      <Styles />
      <AppWrap>
        <Header />
        <Hero />
        <Companies />
      </AppWrap>
    </ThemeProvider>
  );
}

export default App;

const AppWrap = styled.div``;
