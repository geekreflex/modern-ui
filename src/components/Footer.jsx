import React from 'react';
import styled from 'styled-components';
import { Container } from '../styles';

const Footer = () => {
  return (
    <FooterWrap>
      <Container>
        <FooterInner>
          <div className="big-section">
            <h1 className="heading-gradient">
              Do you want to step in to the future before others
            </h1>
            <button>Get Early Access</button>
          </div>
        </FooterInner>
      </Container>
    </FooterWrap>
  );
};

export default Footer;

const FooterWrap = styled.div`
  background-color: ${(props) => props.theme.colors.dark_blue};
`;
const FooterInner = styled.div`
  padding: 20px;

  .big-section {
    padding: 150px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;

    h1 {
      font-size: 50px;
      width: 700px;
      text-align: center;
      margin-bottom: 40px;
    }

    button {
      border: 1px solid #fff;
      color: #fff;
      outline: none;
      padding: 15px 30px;
      background: transparent;
      font-size: 14px;
      cursor: pointer;
      :hover {
        background-color: #ffffff10;
      }
    }
  }
`;
