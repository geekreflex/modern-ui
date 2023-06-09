import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
body {
  font-family: 'Manrope', sans-serif;
  overflow-x: hidden;
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

.gpt3 {
  overflow-x: hidden;
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

.heading-gradient {
  font-weight: 900;
  background: linear-gradient(89.97deg, #ae67fa 1.84%, #f49867 102.67%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
`;

export const Container = styled.div`
  width: 1200px;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 20px;
`;
