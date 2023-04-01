import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/logo.svg';
import { IoMenu } from 'react-icons/io5';

const links = ['Home', 'What is GPT?', 'Open AI', 'Case Studies', 'Library'];

const Header = () => {
  return (
    <HeaderWrap>
      <a className="logo" href="#">
        <img src={Logo} />
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
      <Menu>
        <IoMenu />
      </Menu>
    </HeaderWrap>
  );
};

export default Header;

const HeaderWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  gap: 50px;

  a {
    color: #fff;
  }

  .logo {
    font-weight: 800;
    font-size: 20px;
    img {
      width: 70px;
    }
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

  @media (max-width: 800px) {
    display: none;
  }
`;

const Menu = styled.div`
  font-size: 30px;
  display: none;
  cursor: pointer;

  @media (max-width: 800px) {
    display: flex;
  }
`;
