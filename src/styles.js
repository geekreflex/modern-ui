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
}

p {
  line-height: 30px;

}

a {
  text-decoration: none;
}

ul,
li {
  list-style: none;
}

.radial {
  position: absolute;
  width: 500px;
  height: 500px;
  background-color: ${(props) => props.theme.colors.blue};
  filter: blur(100px);
}
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;
