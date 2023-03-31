import React from 'react';
import styled from 'styled-components';

const Heading = ({ text }) => {
  return (
    <HeadingWrap>
      <div className="head-block"></div>
      <h2>{text}</h2>
    </HeadingWrap>
  );
};

export default Heading;

const HeadingWrap = styled.div`
  h2 {
    font-size: 30px;
    font-weight: 900;
    background: linear-gradient(89.97deg, #ae67fa 1.84%, #f49867 102.67%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 30px;
  }
`;
