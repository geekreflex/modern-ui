import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const GoIntro = () => {
  return (
    <GoWrap>
      <Link to="/">Go</Link>
    </GoWrap>
  );
};

export default GoIntro;

const GoWrap = styled.div`
  width: 50px;
  height: 50px;
  position: fixed;
  bottom: 40px;
  left: 20px;
  z-index: 998;
  background-color: #fff;
  border-radius: 10px;
  font-weight: 900;
  overflow: hidden;
  box-shadow: 0 2px 3px #999;
  transition: all 100ms;
  border: 1px solid #fff;

  :hover {
    transform: scale(1.1);
  }

  a {
    color: #444;
    text-decoration: none;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
