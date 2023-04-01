import React from 'react';
import styled from 'styled-components';

export const Heading = ({ text, size, gap }) => {
  return (
    <HeadingN size={size} gap={gap}>
      <span></span>
      {text}
    </HeadingN>
  );
};

const HeadingN = styled.h2`
  position: relative;
  font-size: ${(props) => `${props.size || 25}px`};
  font-weight: 900;
  color: ${(props) => props.theme.colors.text_color1};

  span {
    width: 40px;
    height: 3px;
    background-color: red;
    display: block;
    margin-bottom: ${(props) => `${props.gap || 20}px`};
    background: linear-gradient(103.22deg, #ae67fa -13.86%, #f49867 99.55%),
      #ffffff;
  }
`;
