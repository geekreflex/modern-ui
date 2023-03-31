import React from 'react';
import styled from 'styled-components';
import { Container } from '../styles';
import Head from '../assets/head.png';
import People from '../assets/people.png';

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
            <div className="email-form">
              <input type="text" placeholder="Your Email Address" />
              <button>Get Started</button>
            </div>
            <div className="people">
              <img src={People} alt="People" />
              <span>
                1,600 people requested access to visit in last 24 hours
              </span>
            </div>
          </div>
          <div className="hero-right">
            <div className="img-wrap">
              <img src={Head} />
            </div>
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
    width: 45%;
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
      font-size: 18px;
      width: 450px;
      margin-bottom: 30px;
    }
  }

  .email-form {
    display: flex;
    width: 500px;
    margin-bottom: 30px;
    input {
      border: none;
      outline: none;
      height: 55px;
      padding: 0 20px;
      flex: 1;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
      background-color: ${(props) => props.theme.colors.light_blue};
      color: ${(props) => props.theme.colors.text_color1};
      font-size: 15px;
      ::placeholder {
        color: ${(props) => props.theme.colors.text_color3};
      }
    }

    button {
      background-color: ${(props) => props.theme.colors.orange};
      border: none;
      outline: none;
      padding: 0 30px;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      color: ${(props) => props.theme.colors.text_color1};
      font-size: 16px;
    }
  }

  .people {
    display: flex;
    align-items: center;
    gap: 10px;

    img {
      width: 170px;
    }
    span {
      font-size: 12px;
      display: inline;
      color: ${(props) => props.theme.colors.text_color1};
    }
  }

  .hero-right {
    flex: 1;
    position: relative;
    .img-wrap {
      position: relative;
      img {
        width: 100%;
      }
    }
  }
`;
