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

.click {
  color: ${(props) => props.theme.colors.text_color4};
  font-size: 14px;
  :hover {
    text-decoration: underline;
  }
}

.radial {
  position: absolute;
  width: 500px;
  height: 500px;
  background-color: ${(props) => props.theme.colors.blue};
  filter: blur(100px);
}

.radial-page-1 {
  position: absolute;
  width: 700px;
  height: 700px;
  background-color: #07325F;
  left: -500px;
  top: -500px;
  filter: blur(282px);
}

.radial-page-2 {
  position: absolute;
  width: 700px;
  height: 700px;
  background-color: #072D56;
  right: -500px;
  top: 400px;
  filter: blur(282px);
}

.radial-page-3 {
  position: absolute;
  width: 700px;
  height: 700px;
  background-color: #07325F;
  left: -600px;
  top: 1500px;
  filter: blur(282px);
}
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;
