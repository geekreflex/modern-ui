import React from 'react';
import styled from 'styled-components';

export const Heading = ({ text }) => {
  return (
    <HeadingN>
      <span></span>
      {text}
    </HeadingN>
  );
};

const HeadingN = styled.h2`
  position: relative;
  font-size: 25px;
  font-weight: 900;

  span {
    width: 40px;
    height: 3px;
    background-color: red;
    display: block;
    margin-bottom: 20px;
    background: linear-gradient(103.22deg, #ae67fa -13.86%, #f49867 99.55%),
      #ffffff;
  }
`;
