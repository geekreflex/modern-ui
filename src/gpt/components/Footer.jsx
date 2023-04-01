import React from 'react';
import styled from 'styled-components';
import { Container } from '../styles/styles';
import Logo from '../assets/logo.svg';

const links = ['Overons', 'Social Media', 'Counters', 'Contact'];
const company = ['Terms & Conditions', 'Privacy Policy', 'Contact'];
const getInTouch = [
  'Crechterwoord K12 182 DK Alknjkcb',
  '085-132567',
  'info@payme.net',
];

const Footer = () => {
  return (
    <FooterWrap>
      <Container>
        <FooterInner>
          <div className="big-section">
            <h1 className="heading-gradient">
              Do you want to step in to the future before others
            </h1>
            <button>Request Early Access</button>
          </div>
          <div className="footer-content">
            <div className="footer-logo">
              <a href="#">
                <img src={Logo} alt="GPT-3 Logo" />
              </a>
              <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
            </div>
            <div className="footer-links">
              <div className="links">
                <h3>Links</h3>
                <ul>
                  {links.map((item) => (
                    <li key={item}>
                      <a href="#">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="links">
                <h3>Company</h3>
                <ul>
                  {company.map((item) => (
                    <li key={item}>
                      <a href="#">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="links">
                <h3>Links</h3>
                <ul>
                  {getInTouch.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <p className="copy">© 2021 GPT-3. All rights reserved.</p>
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
  .copy {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
  }

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
      margin-bottom: 60px;
    }

    button {
      border: 1px solid #fff;
      color: #fff;
      outline: none;
      padding: 20px 30px;
      background: transparent;
      font-size: 14px;
      cursor: pointer;
      :hover {
        background-color: #ffffff10;
      }
    }
  }

  .footer-content {
    display: flex;
    justify-content: space-between;
    gap: 180px;
    margin-bottom: 100px;

    .footer-logo {
      width: 250px;
      a {
        margin-bottom: 20px;
        display: block;
      }
      p {
        line-height: 1.4;
      }
    }

    .footer-links {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 100px;
      flex: 1;

      .links {
        h3 {
          margin-bottom: 40px;
          font-size: 16px;
        }

        ul {
          display: flex;
          flex-direction: column;
          gap: 30px;
          li,
          a {
            color: #fff;
            font-size: 14px;
          }
          a:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
`;
