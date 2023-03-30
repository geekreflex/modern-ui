import React from 'react';
import styled from 'styled-components';
import { Container } from '../styles';
import Head from '../assets/head.png';

const Hero = () => {
  return (
    <HeroWrap>
      <Container>
        <HeroInner>
          <div className="hero-left">
            <h1>
              Let's Build Something
              <br /> amazing with GTP-3 <br />
              OpenAI
            </h1>
            <p>
              Yet bed any for travelling assistance indulgence unpleasing. Not
              thoughts all exercise blessing. Indulgence way everything joy
              alteration boisterous the attachment. Party we years to order
              allow asked of.
            </p>
          </div>
          <div className="hero-right">
            <img src={Head} />
          </div>
        </HeroInner>
      </Container>
    </HeroWrap>
  );
};

export default Hero;

const HeroWrap = styled.div``;
const HeroInner = styled.div`
  display: flex;
  align-items: center;

  .hero-left {
    width: 50%;
    h1 {
      font-size: 50px;
      font-weight: 900;
      background: linear-gradient(89.97deg, #ae67fa 1.84%, #f49867 102.67%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 30px;
    }

    p {
      color: ${(props) => props.theme.colors.text_color2};
      font-size: 16px;
    }
  }

  .hero-right {
    width: 50%;
    img {
      width: 100%;
    }
  }
`;
