import React from 'react';
import styled from 'styled-components';
import { Container } from '../styles';
import Heading from './Heading';

const WhatGPT3 = () => {
  return (
    <WhatWrap>
      <Container>
        <WhatInner>
          <div className="what-top">
            <div className="heading-wrap">
              <Heading text="What is GPT-3" />
            </div>
            <p>
              We so opinion friends me message as delight. Whole front do of
              plate heard oh ought. His defective nor convinced residence own.
              Connection has put impossible own apartments boisterous. At
              jointure ladyship an insisted so humanity he. Friendly bachelor
              entrance to on by.
            </p>
          </div>
        </WhatInner>
      </Container>
    </WhatWrap>
  );
};

export default WhatGPT3;

const WhatWrap = styled.div``;
const WhatInner = styled.div`
  padding: 50px;
  background-color: ${(props) => props.theme.colors.light_blue};
  .what-top {
    display: flex;
    gap: 50px;

    .heading-wrap {
      width: 500px;
    }
  }
`;
