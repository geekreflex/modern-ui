import React from 'react';
import styled from 'styled-components';
import { Heading } from './Heading';

const items = [
  {
    title: 'Chatbots',
    content:
      'We so opinion friends me message as delight. Whole front do of plate heard oh ought. ',
  },
  {
    title: 'Knowledgebase',
    content:
      'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b',
  },
  {
    title: 'Education',
    content:
      'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b',
  },
];

const WhatGPT3 = () => {
  return (
    <WhatWrap>
      <div className="radial radial-top" />
      <div className="radial radial-bottom" />
      <div className="what-top">
        <Heading text="What is GPT-3" />
        <p>
          We so opinion friends me message as delight. Whole front do of plate
          heard oh ought. His defective nor convinced residence own. Connection
          has put impossible own apartments boisterous. At jointure ladyship an
          insisted so humanity he. Friendly bachelor entrance to on by.
        </p>
      </div>
      <div className="what-middle">
        <h1 className="heading-gradient">
          The possiblities are beyond
          <br /> your imagination
        </h1>
        <a href="#" className="click">
          Explore The Library
        </a>
      </div>
      <div className="what-bottom">
        {items.map((item, index) => (
          <div key={index}>
            <Heading text={item.title} />
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </WhatWrap>
  );
};

export default WhatGPT3;

const WhatWrap = styled.div`
  margin-bottom: 130px;
  overflow: hidden;
  position: relative;
  padding: 60px;
  background-color: ${(props) => props.theme.colors.light_blue};
  color: ${(props) => props.theme.colors.text_color2};
  .what-top {
    display: flex;
    gap: 50px;
    margin-bottom: 80px;

    h2 {
      width: 200px;
    }
    p {
      flex: 1;
      font-size: 16px;
    }
  }

  .what-middle {
    margin-bottom: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .what-bottom {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 40px;
    z-index: 2;
    position: relative;
    h2 {
      margin-bottom: 30px;
    }

    p {
      font-size: 16px;
    }
  }

  .radial-top {
    left: -400px;
    top: -400px;
  }

  .radial-bottom {
    right: -300px;
    bottom: -300px;
  }

  @media (max-width: 800px) {
    padding: 40px;
    .what-top {
      flex-direction: column;
    }
    .what-middle {
      flex-direction: column;
      align-items: flex-start;

      h1 {
        order: 2;
      }

      a {
        margin-bottom: 20px;
      }
    }
    .what-bottom {
      grid-template-columns: 1fr;
    }
  }
`;
