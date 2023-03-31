import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text_color1};
  line-height: 30px;
}

a {
  text-decoration: none;
}

ul,
li {
  list-style: none;
}
`;

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
`;
