import React from 'react';
import styled from 'styled-components';
import { Container } from '../styles';

const WhatGPT3 = () => {
  return (
    <WhatWrap>
      <Container>
        <WhatInner></WhatInner>
      </Container>
    </WhatWrap>
  );
};

export default WhatGPT3;

const WhatWrap = styled.div``;
const WhatInner = styled.div`
  padding: 50px;
  background-color: ${(props) => props.theme.colors.light_blue};
`;
