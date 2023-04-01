import React from 'react';
import styled from 'styled-components';
import Head from '../assets/head.png';
import People from '../assets/people.png';

const Hero = () => {
  return (
    <HeroWrap>
      <div className="hero-left">
        <h1>Let's Build Something amazing with GTP-3 OpenAI</h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className="email-form">
          <input type="text" placeholder="Your Email Address" />
          <button>Get Started</button>
        </div>
        <div className="people">
          <img src={People} alt="People" />
          <span>1,600 people requested access to visit in last 24 hours</span>
        </div>
      </div>
      <div className="hero-right">
        <img src={Head} />
      </div>
    </HeroWrap>
  );
};

export default Hero;

const HeroWrap = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  .hero-left {
    width: 55%;
    display: flex;
    flex-direction: column;
    gap: 30px;
    h1 {
      font-size: 50px;
      font-weight: 900;
      background: linear-gradient(89.97deg, #ae67fa 1.84%, #f49867 102.67%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    p {
      color: ${(props) => props.theme.colors.text_color2};
      font-size: 18px;
      width: 450px;
    }
  }

  .email-form {
    display: flex;
    width: 550px;
    max-width: 100%;
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
      font-size: 14px;
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
    width: 35%;
    position: relative;
    height: 600px;
    img {
      position: absolute;
      width: 150%;
      top: 0;
      margin-left: -60px;
    }
  }

  @media (max-width: 900px) {
    flex-direction: column;

    .hero-left,
    .hero-right {
      width: 100%;
    }

    .hero-left {
      order: 1;

      h1 {
        text-align: center;
      }

      p {
        width: 100%;
      }

      .email-form {
        width: 100%;
      }

      .people {
        width: 100%;
      }
    }

    .hero-right {
      height: auto;
      display: flex;
      justify-content: center;
      margin-bottom: 50px;
      img {
        position: static;
        width: 80%;
        margin: 0;
      }
    }
  }

  @media (max-width: 600px) {
    .email-form {
      flex-direction: column;
      input,
      button {
        border-radius: 10px;
      }
      input {
        padding: 20px;
        margin-bottom: 15px;
        ::placeholder {
          font-size: 14px;
        }
      }
      button {
        padding: 17px;
      }
    }
    .hero-right {
      img {
        width: 100%;
      }
    }
    .people {
      flex-direction: column;
    }
  }
`;
