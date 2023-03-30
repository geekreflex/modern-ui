import React from 'react';
import styled from 'styled-components';
import { Container } from '../styles';

const links = ['Home', 'What is GPT?', 'Open AI', 'Case Studies', 'Library'];

const Header = () => {
  return (
    <HeaderWrap>
      <Container>
        <HeaderInner>
          <a className="logo" href="#">
            GPT-3
          </a>
          <Nav>
            <ul>
              {links.map((link, index) => (
                <li key={index}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
            <div className="auth-btns">
              <a href="#" id="signin">
                Sign in
              </a>
              <a href="#" id="signup">
                Sign up
              </a>
            </div>
          </Nav>
        </HeaderInner>
      </Container>
    </HeaderWrap>
  );
};

export default Header;

const HeaderWrap = styled.div``;
const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  height: 70px;
  gap: 50px;

  a {
    color: #fff;
  }

  .logo {
    font-weight: 800;
    font-size: 20px;
  }
`;

const Nav = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ul {
    display: flex;
    gap: 30px;
    a {
      font-size: 14px;
      :hover {
        text-decoration: underline;
      }
    }
  }

  .auth-btns {
    display: flex;
    gap: 20px;
    align-items: center;

    a {
      font-size: 14px;
    }

    #signin {
      :hover {
        text-decoration: underline;
      }
    }

    #signup {
      background-color: ${(props) => props.theme.colors.orange};
      padding: 10px 25px;
      border-radius: 4px;
    }
  }
`;
